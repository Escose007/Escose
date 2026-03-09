/**
 * Post-build SEO pre-renderer.
 * Reads blogs.json + job data, generates static HTML for each route
 * inside dist/ so crawlers see real content without JS.
 * The React app still hydrates on top for interactive users.
 *
 * Run after `vite build`: node scripts/prerender-seo.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

// Read the built index.html as our template
const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

// Read blog data
const blogs = JSON.parse(fs.readFileSync(path.join(rootDir, 'src/data/blogs.json'), 'utf-8'));

// ── Helpers ──

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function injectSeo(html, { title, description, canonical, extraHead, bodyContent }) {
  // Replace <title>
  let out = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtml(title)}</title>`
  );

  // Replace meta description
  out = out.replace(
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeHtml(description)}" />`
  );

  // Add canonical
  out = out.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${escapeHtml(canonical)}" />`
  );

  // Inject extra head content (OG tags, schema) before </head>
  if (extraHead) {
    out = out.replace('</head>', `${extraHead}\n</head>`);
  }

  // Inject visible content for crawlers inside <div id="root">
  // The React app will replace this on hydration
  if (bodyContent) {
    out = out.replace(
      '<div id="root"></div>',
      `<div id="root"><div id="seo-content" style="position:absolute;left:-9999px;overflow:hidden">${bodyContent}</div></div>`
    );
  }

  return out;
}

function blogPostingSchema(post) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.dateFull || post.date,
    "dateModified": post.dateFull || post.date,
    "author": { "@type": "Organization", "name": "Escose Technologies", "url": "https://escose.com" },
    "publisher": {
      "@type": "Organization",
      "name": "Escose Technologies",
      "logo": { "@type": "ImageObject", "url": "https://escose.com/escose-logo.webp" }
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": `https://escose.com/blogs/${post.slug}` },
    ...(post.image?.startsWith('http') ? { "image": post.image } : {}),
    "articleSection": post.category
  });
}

function blogContentToHtml(post) {
  let html = `<article><h1>${escapeHtml(post.title)}</h1>`;
  html += `<p><em>${escapeHtml(post.excerpt)}</em></p>`;
  html += `<p>By Escose Technologies | ${escapeHtml(post.date)} | ${escapeHtml(post.category)}</p>`;

  if (post.sections) {
    for (const section of post.sections) {
      if (section.heading) html += `<h2>${escapeHtml(section.heading)}</h2>`;
      if (section.paragraphs) {
        for (const p of section.paragraphs) html += `<p>${escapeHtml(p)}</p>`;
      }
      if (section.bullets) {
        html += '<ul>';
        for (const b of section.bullets) html += `<li>${escapeHtml(b)}</li>`;
        html += '</ul>';
      }
      if (section.tailParagraphs) {
        for (const p of section.tailParagraphs) html += `<p>${escapeHtml(p)}</p>`;
      }
    }
  } else if (post.content) {
    for (const p of post.content) html += `<p>${escapeHtml(p)}</p>`;
  }

  html += `<p><a href="/services">Explore Our Services</a> | <a href="/outsourcing">IT Staffing</a> | <a href="/contact">Contact Us</a></p>`;
  html += '</article>';
  return html;
}

// ── Generate Blog Pages ──

function generateBlogPages() {
  let count = 0;

  for (const post of blogs) {
    const dir = path.join(distDir, 'blogs', post.slug);
    fs.mkdirSync(dir, { recursive: true });

    const title = `${post.title} | Escose Technologies Blog`;
    const canonical = `https://escose.com/blogs/${post.slug}`;

    const extraHead = [
      `<meta property="og:title" content="${escapeHtml(post.title)}" />`,
      `<meta property="og:description" content="${escapeHtml(post.excerpt)}" />`,
      `<meta property="og:url" content="${canonical}" />`,
      `<meta property="og:type" content="article" />`,
      post.image?.startsWith('http') ? `<meta property="og:image" content="${escapeHtml(post.image)}" />` : '',
      `<meta property="article:published_time" content="${post.dateFull || post.date}" />`,
      `<meta property="article:section" content="${escapeHtml(post.category)}" />`,
      `<meta name="twitter:card" content="summary_large_image" />`,
      `<meta name="twitter:title" content="${escapeHtml(post.title)}" />`,
      `<meta name="twitter:description" content="${escapeHtml(post.excerpt)}" />`,
      `<script type="application/ld+json">${blogPostingSchema(post)}</script>`,
    ].filter(Boolean).join('\n');

    const html = injectSeo(indexHtml, {
      title,
      description: post.excerpt,
      canonical,
      extraHead,
      bodyContent: blogContentToHtml(post),
    });

    fs.writeFileSync(path.join(dir, 'index.html'), html);
    count++;
  }

  // Blog listing page
  const blogListDir = path.join(distDir, 'blogs');
  const listContent = `<div><h1>Tech Insights &amp; IT Staffing Blog | Escose Technologies</h1><p>Expert insights on IT staffing, software development, GenAI, and technology trends.</p><ul>${blogs.map(p => `<li><a href="/blogs/${p.slug}">${escapeHtml(p.title)}</a> - ${escapeHtml(p.excerpt)}</li>`).join('')}</ul></div>`;

  const listHtml = injectSeo(indexHtml, {
    title: 'Tech Insights & IT Staffing Blog | Escose Technologies',
    description: 'Read expert insights on IT staffing, software development, GenAI, and technology trends from Escose Technologies.',
    canonical: 'https://escose.com/blogs',
    bodyContent: listContent,
  });

  fs.writeFileSync(path.join(blogListDir, 'index.html'), listHtml);
  count++;

  return count;
}

// ── Job Data (hardcoded from constants/index.js) ──

const jobs = [
  { jobId: 'ESC2524', title: 'Software Development Intern', department: 'Engineering', location: 'Work From Home (100% Remote)', type: 'Internship', experience: 'Fresher (Batch 2025 & 2026)', openings: 30, postedDate: '26 Jan 2026', skills: ['React', 'Python', 'JavaScript', 'Web Development'], summary: 'Join our engineering team as a Software Development Intern. Gain deep, hands-on exposure to end-to-end product development. 100% Remote, 6-month duration, for 2025 & 2026 pass-outs.', active: true },
  { jobId: 'ESC2514', title: 'Business Analyst (BA)', department: 'Product & AI', location: 'HSR Layout, Bengaluru', type: 'Full-time', experience: '1-3 years', openings: 5, postedDate: '18 Nov 2025', skills: ['Business Analysis', 'BRD/FRD', 'Agile/Scrum', 'JIRA', 'Confluence', 'Figma', 'AI/ML'], summary: 'Translate ideas into execution. We are expanding our product & AI teams and looking for talented Business Analysts who can shape product requirements and solve complex problems.', active: true },
  { jobId: 'ESC2515', title: 'Prompt Engineer (LLM / GenAI)', department: 'AI & Data', location: 'HSR Layout, Bengaluru', type: 'Full-time', experience: '1-4 years', openings: 10, postedDate: '18 Nov 2025', skills: ['Prompt Engineering', 'LLMs', 'GenAI', 'GPT', 'Claude', 'Gemini', 'NLP'], summary: 'Join our AI team and build next-gen prompt systems for real-world applications.', active: true },
  { jobId: 'ESC2516', title: 'Quality Assurance (QA) Engineer for AI product', department: 'AI & Data', location: 'HSR Layout, Bengaluru', type: 'Full-time', experience: '1-5 years', openings: 6, postedDate: '18 Nov 2025', skills: ['QA Testing', 'AI Agents', 'GenAI', 'LLM Testing', 'DeepEval'], summary: 'Help us test, break, and improve advanced agentic AI systems.', active: true },
  { jobId: 'ESC2517', title: 'DevOps Engineer', department: 'Engineering', location: 'UB City & Bellandur, Bengaluru', type: 'Full-time', experience: '2-5 years', openings: 7, postedDate: '18 Nov 2025', skills: ['DevOps', 'CI/CD', 'Terraform', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP'], summary: 'Design, implement, and maintain CI/CD pipelines and infrastructure as code to support scalable PaaS solutions.', active: true },
  { jobId: 'ESC2519', title: 'Full-Stack Engineer (Python + React)', department: 'Engineering', location: 'Bangalore Onsite', type: 'Full-time', experience: '2-4 years', openings: 5, postedDate: '20 Dec 2025', skills: ['Python', 'FastAPI', 'React.js', 'JavaScript', 'REST APIs', 'SQL', 'NoSQL'], summary: 'We are looking for a skilled Full-Stack Engineer with strong hands-on experience in Python and React.', active: true },
  { jobId: 'ESC2521', title: 'Lead Linux & Systems Engineer - AI Infrastructure', department: 'Engineering', location: 'Bangalore', type: 'Full-time', experience: '6+ years', openings: 3, postedDate: '23 Dec 2025', skills: ['Linux', 'Kernel Engineering', 'PCIe', 'Ansible', 'Python', 'Docker', 'NVIDIA CUDA'], summary: 'Design, build, and operate bare-metal AI/HPC GPU clusters.', active: true },
  { jobId: 'ESC2522', title: 'Lead AI Runtime Engineer', department: 'Engineering', location: 'Bangalore', type: 'Full-time', experience: '5+ years', openings: 2, postedDate: '25 Dec 2025', skills: ['PyTorch', 'TensorFlow', 'JAX', 'Python', 'C++', 'Distributed Training', 'Kubernetes'], summary: 'Architect, build, and optimize the core runtime infrastructure for distributed training and deployment of large-scale AI models.', active: true },
  { jobId: 'ESC2523', title: 'Golang Backend Engineer', department: 'Engineering', location: 'Bangalore', type: 'Full-time', experience: '3-5 years', openings: 4, postedDate: '5 Jan 2026', skills: ['Golang', 'RESTful APIs', 'gRPC', 'PostgreSQL', 'MongoDB', 'Redis', 'Microservices', 'Docker', 'Kubernetes'], summary: 'We are looking for a strong Backend Engineer who loves building scalable, production-grade systems with Golang.', active: true },
];

function parsePostedDate(dateStr) {
  if (!dateStr) return '';
  const months = { 'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04', 'May': '05', 'Jun': '06', 'Jul': '07', 'Aug': '08', 'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dec': '12' };
  const parts = dateStr.trim().split(' ');
  if (parts.length === 3) return `${parts[2]}-${months[parts[1]] || '01'}-${parts[0].padStart(2, '0')}`;
  return '';
}

function jobPostingSchema(job) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.summary,
    "identifier": { "@type": "PropertyValue", "name": "Escose Technologies", "value": job.jobId },
    "datePosted": parsePostedDate(job.postedDate),
    "employmentType": job.type === 'Internship' ? 'INTERN' : 'FULL_TIME',
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Escose Technologies",
      "sameAs": "https://escose.com",
      "logo": "https://escose.com/escose-logo.webp"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": job.location.includes('Remote') ? 'Bangalore' : job.location.split(',')[0].trim(),
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      }
    },
    ...(job.location.toLowerCase().includes('remote') ? { "jobLocationType": "TELECOMMUTE" } : {}),
    "skills": job.skills.join(', '),
    "experienceRequirements": job.experience
  });
}

function generateCareersPage() {
  const dir = path.join(distDir, 'careers');
  fs.mkdirSync(dir, { recursive: true });

  const activeJobs = jobs.filter(j => j.active !== false);

  let bodyContent = `<div><h1>Careers at Escose Technologies | Join Our Global Engineering Team</h1>`;
  bodyContent += `<p>Explore career opportunities at Escose Technologies. Join our team of 500+ engineers working on cutting-edge projects in IT staffing, software development, and GenAI.</p>`;
  bodyContent += `<p>${activeJobs.length} open positions</p>`;

  for (const job of activeJobs) {
    bodyContent += `<div>`;
    bodyContent += `<h2>${escapeHtml(job.title)}</h2>`;
    bodyContent += `<p><strong>Department:</strong> ${escapeHtml(job.department)} | <strong>Location:</strong> ${escapeHtml(job.location)} | <strong>Type:</strong> ${escapeHtml(job.type)} | <strong>Experience:</strong> ${escapeHtml(job.experience)}</p>`;
    bodyContent += `<p>${escapeHtml(job.summary)}</p>`;
    bodyContent += `<p><strong>Skills:</strong> ${escapeHtml(job.skills.join(', '))}</p>`;
    if (job.openings) bodyContent += `<p><strong>Openings:</strong> ${job.openings}</p>`;
    bodyContent += `</div>`;
  }

  bodyContent += `<p><a href="/contact">Contact Us</a> | <a href="/about">About Escose</a></p>`;
  bodyContent += `</div>`;

  const schemasHead = activeJobs.map(job =>
    `<script type="application/ld+json">${jobPostingSchema(job)}</script>`
  ).join('\n');

  const html = injectSeo(indexHtml, {
    title: 'Careers at Escose Technologies | Join Our Global Engineering Team',
    description: `Explore ${activeJobs.length}+ career opportunities at Escose Technologies. Remote-first culture, competitive pay, and exciting challenges in IT staffing, software development, and GenAI.`,
    canonical: 'https://escose.com/careers',
    extraHead: schemasHead,
    bodyContent,
  });

  fs.writeFileSync(path.join(dir, 'index.html'), html);
  return 1;
}

// ── Main ──

console.log('Pre-rendering SEO pages...\n');

const blogCount = generateBlogPages();
console.log(`  Blogs: ${blogCount} pages generated`);

const careerCount = generateCareersPage();
console.log(`  Careers: ${careerCount} page generated`);

console.log(`\nTotal: ${blogCount + careerCount} pre-rendered pages in dist/`);
