import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styles from '../../style';

const TECH_STACK = [
  { name: 'OpenAI GPT-4o', category: 'LLMs' },
  { name: 'Anthropic Claude', category: 'LLMs' },
  { name: 'Google Gemini', category: 'LLMs' },
  { name: 'Mistral / LLaMA', category: 'Open Source' },
  { name: 'LangChain', category: 'Orchestration' },
  { name: 'LlamaIndex', category: 'Orchestration' },
  { name: 'Pinecone', category: 'Vector DB' },
  { name: 'pgvector', category: 'Vector DB' },
  { name: 'Weaviate', category: 'Vector DB' },
  { name: 'FastAPI', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'LLMOps / MLflow', category: 'Infra' },
];

const PROJECT_TYPES = [
  {
    icon: '📚',
    title: 'RAG Knowledge Systems',
    desc: 'Private AI assistants that answer questions over your internal docs, PDFs, databases, and knowledge bases — with source citations and zero hallucinations.',
    bullets: ['Document ingestion & chunking pipelines', 'Hybrid search (vector + keyword)', 'Multi-source RAG with context ranking', 'Chat history & conversation memory'],
    accent: 'cyan',
  },
  {
    icon: '💬',
    title: 'LLM-Powered Chatbots',
    desc: 'Context-aware, domain-specific chatbots for customer support, internal help desks, sales assistants, and onboarding — not generic chatbots, purpose-built ones.',
    bullets: ['Intent classification & routing', 'Tool-augmented responses (APIs, DBs)', 'Escalation to human agents', 'Analytics & conversation logging'],
    accent: 'blue',
  },
  {
    icon: '🔍',
    title: 'Semantic Search Engines',
    desc: 'Replace brittle keyword search with meaning-based search. Users find what they need even when they don\'t know the exact words.',
    bullets: ['Embedding pipelines for large catalogs', 'Faceted semantic filtering', 'Re-ranking with cross-encoders', 'Real-time index updates'],
    accent: 'purple',
  },
  {
    icon: '⚙️',
    title: 'AI Content Pipelines',
    desc: 'Automated content generation workflows — product descriptions, marketing copy, localization, SEO content — at scale, in your brand voice.',
    bullets: ['Template-based generation with guardrails', 'Brand voice fine-tuning', 'Bulk processing pipelines', 'Human-in-the-loop review flows'],
    accent: 'cyan',
  },
  {
    icon: '📊',
    title: 'Structured Data Extraction',
    desc: 'Extract structured JSON from unstructured sources — invoices, contracts, emails, medical reports — with high accuracy and schema validation.',
    bullets: ['LLM + regex hybrid extraction', 'Schema enforcement with Pydantic', 'Confidence scoring & flagging', 'Batch and real-time processing'],
    accent: 'blue',
  },
  {
    icon: '🧠',
    title: 'Custom Model Fine-Tuning',
    desc: 'Fine-tune open-source LLMs on your proprietary data for domain-specific performance that generic models can\'t match.',
    bullets: ['Dataset preparation & curation', 'LoRA / QLoRA fine-tuning', 'RLHF alignment', 'Evaluation & regression testing'],
    accent: 'purple',
  },
];

const ENGAGEMENT_MODELS = [
  {
    icon: '📋',
    title: 'Fixed-Price Project',
    desc: 'Defined scope, timeline, and deliverables. Perfect for standalone GenAI products with clear requirements.',
    points: ['Discovery & scoping workshop', 'Milestone-based delivery', 'Fixed cost & timeline', 'Full source code handoff'],
    accent: 'rgba(0,212,255,0.15)',
    border: 'rgba(0,212,255,0.3)',
    textColor: '#67e8f9',
  },
  {
    icon: '🏗️',
    title: 'Long-Term Engagement',
    desc: 'Dedicated GenAI team embedded in your product for ongoing development, iteration, and scaling.',
    points: ['Dedicated senior GenAI engineers', 'Agile sprints, weekly demos', 'Evolving scope as you grow', 'LLMOps & monitoring included'],
    accent: 'rgba(168,85,247,0.15)',
    border: 'rgba(168,85,247,0.35)',
    textColor: '#c4b5fd',
    featured: true,
  },
  {
    icon: '👥',
    title: 'Staff Augmentation',
    desc: 'Senior GenAI engineers join your existing team on your stack, your standups, your tools.',
    points: ['2-week onboarding', 'Works in your JIRA/Linear', 'Hourly or monthly billing', 'Scale up/down quarterly'],
    accent: 'rgba(39,110,241,0.15)',
    border: 'rgba(39,110,241,0.3)',
    textColor: '#93c5fd',
  },
];

const HOW_IT_WORKS = [
  { step: '01', title: 'Discovery Call', desc: 'We map your use case, data sources, expected load, and success criteria in a 1-hour deep-dive.' },
  { step: '02', title: 'Architecture Design', desc: 'Our GenAI architects propose the right stack — RAG vs fine-tuning, model selection, infra design.' },
  { step: '03', title: 'Proof of Concept', desc: 'Working PoC in 1–2 weeks to validate accuracy and performance before full build.' },
  { step: '04', title: 'Production Build', desc: 'Full implementation with evaluation pipelines, LLMOps, monitoring, and CI/CD deployment.' },
  { step: '05', title: 'Handoff & Support', desc: 'Complete documentation, knowledge transfer, and optional ongoing support contract.' },
];

const USE_CASES = [
  { industry: 'SaaS', example: 'AI co-pilot inside your product that answers user questions from your docs' },
  { industry: 'Legal', example: 'Contract analysis that extracts clauses, flags risks, and compares versions' },
  { industry: 'Healthcare', example: 'Clinical note summarization and patient history Q&A for physicians' },
  { industry: 'E-commerce', example: 'Semantic product search and AI-generated product descriptions at scale' },
  { industry: 'Finance', example: 'Earnings report Q&A and financial document extraction for analysts' },
  { industry: 'HR / Internal Tools', example: 'Employee handbook chatbot and automated onboarding assistant' },
];

const ACCENT_MAP = {
  cyan:   { bg: 'rgba(0,212,255,0.07)',  border: 'rgba(0,212,255,0.25)',  glow: 'rgba(0,212,255,0.15)',  text: '#67e8f9'  },
  blue:   { bg: 'rgba(39,110,241,0.07)', border: 'rgba(39,110,241,0.25)', glow: 'rgba(39,110,241,0.15)', text: '#93c5fd'  },
  purple: { bg: 'rgba(168,85,247,0.07)', border: 'rgba(168,85,247,0.25)', glow: 'rgba(168,85,247,0.15)', text: '#c4b5fd' },
};

export default function GenAIProjects() {
  return (
    <>
      <Helmet>
        <title>GenAI Projects | RAG, LLM Apps & AI Products | Escose Technologies</title>
        <meta name="description" content="Build production-ready GenAI products with Escose — RAG pipelines, LLM-powered apps, AI chatbots, semantic search, and custom model fine-tuning. Fixed-price or long-term. OpenAI, Anthropic, Gemini." />
        <meta name="keywords" content="GenAI application development India, RAG pipeline development company, LLM application development, AI chatbot development, semantic search implementation, LangChain development services, GenAI consulting India, production AI deployment, custom model fine-tuning, GenAI outsourcing India, knowledge base AI, document AI solutions, OpenAI GPT integration, Claude API integration, Gemini integration" />
        <link rel="canonical" href="https://escose.com/services/genai-projects" />
        <meta property="og:title" content="GenAI Projects | Escose Technologies" />
        <meta property="og:description" content="Production-ready GenAI products — RAG, LLM apps, chatbots, semantic search. Fixed-price or long-term. OpenAI, Anthropic, Gemini." />
        <meta property="og:url" content="https://escose.com/services/genai-projects" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GenAI Projects | Escose Technologies" />
        <meta name="twitter:description" content="Ship production GenAI products. RAG, LLMs, chatbots, semantic search. Fixed-price or long-term." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "GenAI Project Development",
            "description": "Build production-ready GenAI products — RAG pipelines, LLM-powered applications, AI chatbots, semantic search, and custom model fine-tuning.",
            "provider": { "@type": "Organization", "name": "Escose Technologies", "url": "https://escose.com" },
            "serviceType": "GenAI Software Development",
            "areaServed": { "@type": "Place", "name": "Global" },
          })}
        </script>
      </Helmet>

      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-slate-100 min-h-screen">

        {/* ── HERO ── */}
        <section
          className={`${styles.paddingX} ${styles.flexCenter} pt-32 md:pt-36 pb-20 relative overflow-hidden`}
          style={{ background: 'linear-gradient(135deg, #0b1220 0%, #1a0f2e 50%, #0b1220 100%)' }}
        >
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

          <div className={`${styles.boxWidth} relative z-10`}>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-400/40 text-purple-300 text-sm font-semibold mb-6"
                style={{ background: 'rgba(168,85,247,0.1)' }} data-animate>
                ✦ Cutting Edge · GenAI Projects
              </div>

              <h1 className="font-poppins font-bold ss:text-[58px] text-[38px] ss:leading-[72px] leading-[50px] mb-6" data-animate>
                Ship{' '}
                <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Production-Ready
                </span>
                <br />GenAI Products
              </h1>

              <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed" data-animate="fade">
                Not demos. Not prototypes. Real GenAI systems that your users depend on every day — built on OpenAI, Anthropic, Gemini, and open-source LLMs by engineers who have shipped AI at scale.
              </p>

              <div className="flex flex-wrap justify-center gap-3 mb-10" data-animate>
                {['RAG Pipelines', 'LLM Apps', 'AI Chatbots', 'Semantic Search', 'Fine-Tuning', 'LLMOps'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full text-sm font-medium text-purple-300 border border-purple-400/25"
                    style={{ background: 'rgba(168,85,247,0.1)' }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center" data-animate>
                <Link to="/contact"
                  className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/30">
                  Start a GenAI Project
                </Link>
                <Link to="/outsourcing"
                  className="border-2 border-purple-400/50 text-purple-300 hover:bg-purple-500/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-center">
                  Hire GenAI Engineers Instead
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── STAT BAR ── */}
        <div className={`${styles.paddingX} ${styles.flexCenter} py-8 border-y border-white/8`}
          style={{ background: 'rgba(168,85,247,0.05)' }}>
          <div className={`${styles.boxWidth}`}>
            <div className="flex flex-wrap justify-center gap-10 md:gap-16">
              {[
                ['1–2 Weeks', 'PoC Delivery'],
                ['100%', 'Production-Grade Code'],
                ['OpenAI · Anthropic · Gemini', 'Model Coverage'],
                ['Fixed-Price or Long-Term', 'Engagement Models'],
              ].map(([val, label]) => (
                <div key={label} className="text-center" data-animate>
                  <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{val}</div>
                  <div className="text-gray-400 text-sm mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── WHAT WE BUILD ── */}
        <section className={`${styles.paddingX} ${styles.flexCenter} py-20`}>
          <div className={`${styles.boxWidth}`}>
            <div className="text-center mb-14" data-animate>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-400/30 text-purple-300 text-sm font-semibold mb-4"
                style={{ background: 'rgba(168,85,247,0.07)' }}>
                ✦ Project Types
              </div>
              <h2 className="text-4xl font-bold text-slate-100">What We Build</h2>
              <p className="text-gray-400 mt-3 max-w-2xl mx-auto">Six categories of GenAI products — all delivered with production-quality code, evaluation pipelines, and full handoff.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECT_TYPES.map((pt, i) => {
                const a = ACCENT_MAP[pt.accent];
                return (
                  <div key={pt.title}
                    className="bento-card p-7 group transition-all duration-300"
                    style={{ background: a.bg, border: `1px solid ${a.border}` }}
                    data-animate={i % 2 === 0 ? 'left' : 'right'}
                  >
                    <div className="text-3xl mb-4">{pt.icon}</div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: a.text }}>{pt.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{pt.desc}</p>
                    <ul className="space-y-1.5">
                      {pt.bullets.map(b => (
                        <li key={b} className="flex items-start gap-2 text-xs text-gray-400">
                          <span className="mt-1 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: a.text }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className={`${styles.paddingX} ${styles.flexCenter} py-20`}
          style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.05) 0%, rgba(39,110,241,0.05) 100%)' }}>
          <div className={`${styles.boxWidth}`}>
            <div className="text-center mb-14" data-animate>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 text-cyan-400 text-sm font-semibold mb-4"
                style={{ background: 'rgba(0,212,255,0.06)' }}>
                ✦ Our Process
              </div>
              <h2 className="text-4xl font-bold text-slate-100">From Idea to Production</h2>
              <p className="text-gray-400 mt-3 max-w-2xl mx-auto">A proven 5-step delivery process. No surprises, no scope creep.</p>
            </div>

            <div className="grid md:grid-cols-5 gap-4">
              {HOW_IT_WORKS.map((step, i) => (
                <div key={step.step} className="relative" data-animate>
                  <div className="bento-card p-6 text-center h-full"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div className="text-2xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                      {step.step}
                    </div>
                    <h3 className="text-sm font-bold text-slate-100 mb-2">{step.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                  {i < HOW_IT_WORKS.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-purple-400/40 to-cyan-400/40 z-10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TECH STACK ── */}
        <section className={`${styles.paddingX} ${styles.flexCenter} py-20`}>
          <div className={`${styles.boxWidth}`}>
            <div className="text-center mb-12" data-animate>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-400/30 text-blue-300 text-sm font-semibold mb-4"
                style={{ background: 'rgba(39,110,241,0.07)' }}>
                ✦ Technology Stack
              </div>
              <h2 className="text-4xl font-bold text-slate-100">Built on the Best Tools</h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3" data-animate>
              {TECH_STACK.map(({ name, category }) => (
                <div key={name}
                  className="flex flex-col items-center px-4 py-3 rounded-xl border border-white/10 hover:border-purple-400/40 transition-all duration-200 cursor-default"
                  style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <span className="text-xs font-medium text-purple-400 mb-1">{category}</span>
                  <span className="text-sm font-semibold text-slate-200">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── USE CASES ── */}
        <section className={`${styles.paddingX} ${styles.flexCenter} py-20`}
          style={{ background: 'rgba(168,85,247,0.04)' }}>
          <div className={`${styles.boxWidth}`}>
            <div className="text-center mb-14" data-animate>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-400/30 text-purple-300 text-sm font-semibold mb-4"
                style={{ background: 'rgba(168,85,247,0.07)' }}>
                ✦ Industries
              </div>
              <h2 className="text-4xl font-bold text-slate-100">Who We Build For</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {USE_CASES.map(({ industry, example }, i) => (
                <div key={industry}
                  className="bento-card p-6 group"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                  data-animate={i % 2 === 0 ? 'left' : 'right'}>
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold text-purple-300 border border-purple-400/30 mb-3"
                    style={{ background: 'rgba(168,85,247,0.1)' }}>
                    {industry}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{example}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ENGAGEMENT MODELS ── */}
        <section className={`${styles.paddingX} ${styles.flexCenter} py-20`}>
          <div className={`${styles.boxWidth}`}>
            <div className="text-center mb-14" data-animate>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 text-cyan-400 text-sm font-semibold mb-4"
                style={{ background: 'rgba(0,212,255,0.06)' }}>
                ✦ How to Engage
              </div>
              <h2 className="text-4xl font-bold text-slate-100">Pick Your Model</h2>
              <p className="text-gray-400 mt-3 max-w-xl mx-auto">Same elite engineers, same quality. Different commercial structures to fit your stage and needs.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {ENGAGEMENT_MODELS.map((model, i) => (
                <div key={model.title}
                  className={`bento-card p-7 relative ${model.featured ? 'ring-1 ring-purple-400/50' : ''}`}
                  style={{ background: model.accent, border: `1px solid ${model.border}` }}
                  data-animate={i % 2 === 0 ? 'left' : 'right'}>
                  {model.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold text-black"
                      style={{ background: 'linear-gradient(90deg, #a855f7, #276ef1)' }}>
                      Most Popular
                    </div>
                  )}
                  <div className="text-2xl mb-4">{model.icon}</div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: model.textColor }}>{model.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{model.desc}</p>
                  <ul className="space-y-2">
                    {model.points.map(p => (
                      <li key={p} className="flex items-start gap-2 text-sm text-gray-300">
                        <svg className="w-4 h-4 shrink-0 mt-0.5" style={{ color: model.textColor }} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className={`${styles.paddingX} ${styles.flexCenter} py-20`}
          style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.1), rgba(39,110,241,0.1))' }}>
          <div className={`${styles.boxWidth}`}>
            <div className="max-w-3xl mx-auto text-center" data-animate>
              <h2 className="text-4xl font-bold text-slate-100 mb-4">
                Ready to Ship Your{' '}
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  GenAI Product?
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Tell us what you want to build. We'll scope it, price it, and ship a working PoC in 1–2 weeks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact"
                  className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/30">
                  Book a Discovery Call
                </Link>
                <Link to="/services/agentic-projects"
                  className="border-2 border-white/20 text-gray-300 hover:border-cyan-400/50 hover:text-cyan-300 px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-center">
                  Explore Agentic Projects →
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
