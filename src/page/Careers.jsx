import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from '../style';
import { openPositions } from '../constants';
import { Link } from 'react-router-dom';

// ─── Static data ────────────────────────────────────────────────────────────

const departments = ['All', ...Array.from(new Set(openPositions.map(p => p.department)))];

const DEPT_COLORS = {
  'Engineering':  { accent: '#00d4ff', bg: 'rgba(0,212,255,0.08)',   border: 'rgba(0,212,255,0.25)',  text: '#67e8f9',  dot: '#00d4ff' },
  'AI & Data':    { accent: '#8b5cf6', bg: 'rgba(139,92,246,0.08)',  border: 'rgba(139,92,246,0.25)', text: '#c4b5fd',  dot: '#8b5cf6' },
  'Product & AI': { accent: '#276ef1', bg: 'rgba(39,110,241,0.08)',  border: 'rgba(39,110,241,0.25)', text: '#93c5fd',  dot: '#276ef1' },
};

const defaultColor = { accent: '#00d4ff', bg: 'rgba(0,212,255,0.08)', border: 'rgba(0,212,255,0.25)', text: '#67e8f9', dot: '#00d4ff' };

const PERKS = [
  { icon: '🌍', title: 'Global Clients', desc: 'Work with top companies worldwide' },
  { icon: '💻', title: 'Remote-First', desc: 'Flexible work from anywhere' },
  { icon: '💰', title: 'Competitive Pay', desc: 'Market-leading compensation' },
  { icon: '🚀', title: 'Cutting-Edge Tech', desc: 'GenAI, Cloud & modern stacks' },
  { icon: '📈', title: 'Fast Growth', desc: 'Clear career progression paths' },
  { icon: '🤝', title: 'Great Culture', desc: 'Collaborative, high-trust team' },
];

// ─── Utilities ───────────────────────────────────────────────────────────────

const regexCache = new Map();

const highlightText = (text, query) => {
  if (!query || !text) return text;
  let regex = regexCache.get(query);
  if (!regex) {
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    regex = new RegExp(`(${escaped})`, 'gi');
    if (regexCache.size < 50) regexCache.set(query, regex);
  }
  return text.split(regex).map((part, i) =>
    i % 2 === 1
      ? <mark key={i} className="bg-cyan-400/30 text-cyan-300 font-semibold px-0.5 rounded">{part}</mark>
      : part
  );
};

const highlightSkills = (skills, query) => {
  if (!query || !skills) return skills;
  const lq = query.toLowerCase();
  return skills.map((skill, i) => ({
    skill,
    match: skill.toLowerCase().includes(lq),
    key: i,
  }));
};

const parsePostedDate = (dateStr) => {
  if (!dateStr) return new Date(0);
  const months = { Jan:0, Feb:1, Mar:2, Apr:3, May:4, Jun:5, Jul:6, Aug:7, Sep:8, Oct:9, Nov:10, Dec:11 };
  const [d, m, y] = dateStr.trim().split(' ');
  if (d && m && y && months[m] !== undefined) return new Date(+y, months[m], +d);
  return new Date(0);
};

// ─── Sub-components ──────────────────────────────────────────────────────────

function SkillChip({ skill, isMatch }) {
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium"
      style={isMatch
        ? { background: 'rgba(34,211,238,0.2)', border: '1px solid rgba(34,211,238,0.5)', color: '#67e8f9' }
        : { background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8' }}
    >
      {isMatch && <span className="mr-1 text-cyan-300">✓</span>}
      {skill}
    </span>
  );
}

function JobCard({ job, query, onViewJD, index }) {
  const col = DEPT_COLORS[job.department] || defaultColor;
  const skillData = query ? highlightSkills(job.skills, query) : job.skills.map((s, i) => ({ skill: s, match: false, key: i }));

  return (
    <div
      className="relative rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: 'linear-gradient(145deg, rgba(15,23,42,0.95), rgba(30,41,59,0.85))',
        border: '1px solid rgba(255,255,255,0.07)',
        backdropFilter: 'blur(16px)',
        animation: `item-slide-in 0.5s ease both`,
        animationDelay: `${index * 0.07}s`,
      }}
    >
      {/* Top accent border */}
      <div className="h-[2px]" style={{ background: `linear-gradient(90deg, ${col.accent}, rgba(39,110,241,0.6), transparent)` }} />

      {/* Card beam shimmer */}
      <div className="card-beam" />

      <div className="p-5 flex flex-col flex-1">
        {/* Header row */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold"
              style={{ background: col.bg, border: `1px solid ${col.border}`, color: col.text }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: col.dot }} />
              {query ? highlightText(job.department, query) : job.department}
            </span>
            <span
              className="px-2 py-0.5 rounded-full text-[10px] font-medium"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#64748b' }}
            >
              {job.type}
            </span>
          </div>
          <span className="text-[10px] font-mono text-slate-500 shrink-0 ml-2">{job.jobId}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-100 leading-snug mb-2">
          {query ? highlightText(job.title, query) : job.title}
        </h3>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 mb-3">
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {query ? highlightText(job.location, query) : job.location}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {query ? highlightText(job.experience, query) : job.experience}
          </span>
          {job.openings && (
            <span className="flex items-center gap-1" style={{ color: col.text }}>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {job.openings} openings
            </span>
          )}
        </div>

        {/* Summary */}
        <p className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-3">
          {query ? highlightText(job.summary, query) : job.summary}
        </p>

        {/* Skill chips */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {skillData.slice(0, 6).map(({ skill, match, key }) => (
            <SkillChip key={key} skill={skill} isMatch={match} />
          ))}
          {skillData.length > 6 && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px]"
              style={{ background: 'rgba(255,255,255,0.04)', color: '#64748b', border: '1px solid rgba(255,255,255,0.08)' }}>
              +{skillData.length - 6} more
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center gap-3">
          {job.applyUrl ? (
            <a
              href={job.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              style={{ background: `linear-gradient(135deg, ${col.accent}, #276ef1)`, boxShadow: `0 4px 15px ${col.bg}` }}
            >
              Apply Now →
            </a>
          ) : (
            <Link
              to="/contact?tab=job&action=apply"
              className="flex-1 text-center py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
              style={{ background: `linear-gradient(135deg, ${col.accent}, #276ef1)` }}
            >
              Apply Now →
            </Link>
          )}
          <button
            onClick={() => onViewJD(job)}
            className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 transition-all duration-300 hover:text-white hover:scale-[1.02]"
            style={{ border: `1px solid rgba(255,255,255,0.12)`, background: 'rgba(255,255,255,0.04)' }}
          >
            View JD
          </button>
        </div>
      </div>
    </div>
  );
}

function JDDrawer({ job, query, onClose }) {
  const col = DEPT_COLORS[job?.department] || defaultColor;
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!job) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40"
        style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="fixed top-0 right-0 h-full z-50 overflow-y-auto careers-drawer"
        style={{ width: 'min(560px, 95vw)', background: 'linear-gradient(180deg, #0a1220 0%, #0f172a 100%)', borderLeft: '1px solid rgba(255,255,255,0.08)' }}
      >
        {/* Top accent */}
        <div className="h-[3px]" style={{ background: `linear-gradient(90deg, ${col.accent}, #276ef1, #8b5cf6)` }} />

        <div className="p-6">
          {/* Close + header */}
          <div className="flex items-start justify-between mb-5">
            <div className="flex-1 pr-4">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold"
                  style={{ background: col.bg, border: `1px solid ${col.border}`, color: col.text }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: col.dot }} />
                  {job.department}
                </span>
                <span className="text-[11px] font-mono text-slate-500">{job.jobId}</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-100 leading-tight">{job.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-colors shrink-0"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              aria-label="Close"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Meta badges */}
          <div className="grid grid-cols-2 gap-2 mb-6">
            {[
              { icon: '📍', label: 'Location', val: job.location },
              { icon: '💼', label: 'Type', val: job.type },
              { icon: '⏳', label: 'Experience', val: job.experience },
              { icon: '👥', label: 'Openings', val: `${job.openings} positions` },
            ].map(({ icon, label, val }) => (
              <div key={label} className="p-3 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-0.5">{icon} {label}</div>
                <div className="text-xs text-slate-300 font-medium">{val}</div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="p-4 rounded-xl mb-6"
            style={{ background: col.bg, border: `1px solid ${col.border}` }}>
            <p className="text-sm text-slate-300 leading-relaxed">{job.summary}</p>
          </div>

          {/* Skills */}
          <div className="mb-6">
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Required Skills</h4>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((s, i) => {
                const isMatch = query ? s.toLowerCase().includes(query.toLowerCase()) : false;
                return <SkillChip key={i} skill={s} isMatch={isMatch} />;
              })}
            </div>
          </div>

          {/* JD sections */}
          {[
            { title: 'Responsibilities', items: job.jd?.responsibilities, color: '#67e8f9' },
            { title: 'Requirements', items: job.jd?.requirements, color: '#86efac' },
            { title: 'Nice to Have', items: job.jd?.niceToHave, color: '#c4b5fd' },
          ].filter(s => s.items?.length).map(({ title, items, color }) => (
            <div key={title} className="mb-6">
              <h3 className="text-sm font-semibold mb-3 flex items-center gap-2" style={{ color }}>
                <span className="w-1 h-4 rounded-full" style={{ background: color }} />
                {title}
              </h3>
              <ul className="space-y-2">
                {items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: color, opacity: 0.6 }} />
                    <span>{query ? highlightText(item, query) : item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA */}
          <div className="sticky bottom-0 pt-4 pb-2"
            style={{ background: 'linear-gradient(0deg, #0f172a 60%, transparent)' }}>
            {job.applyUrl ? (
              <a
                href={job.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg text-base"
                style={{ background: `linear-gradient(135deg, ${col.accent}, #276ef1)`, boxShadow: `0 4px 20px ${col.bg}` }}
              >
                Apply for this Role →
              </a>
            ) : (
              <Link
                to="/contact?tab=job&action=apply"
                className="block w-full text-center py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-[1.02] text-base"
                style={{ background: `linear-gradient(135deg, ${col.accent}, #276ef1)` }}
              >
                Apply for this Role →
              </Link>
            )}
            {job.postedDate && (
              <p className="text-center text-[11px] text-slate-600 mt-2">Posted {job.postedDate}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// ─── Main page ───────────────────────────────────────────────────────────────

export default function Careers() {
  const [selectedDept, setSelectedDept] = useState('All');
  const [activeJob, setActiveJob] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');

  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearchQuery(searchQuery), 300);
    return () => clearTimeout(t);
  }, [searchQuery]);

  const searchJobs = useCallback((jobs, query) => {
    if (!query.trim()) return jobs;
    const lq = query.toLowerCase();
    return jobs.filter(job =>
      job.title?.toLowerCase().includes(lq) ||
      job.department?.toLowerCase().includes(lq) ||
      job.location?.toLowerCase().includes(lq) ||
      job.jobId?.toLowerCase().includes(lq) ||
      job.experience?.toLowerCase().includes(lq) ||
      job.skills?.some(s => s.toLowerCase().includes(lq)) ||
      job.summary?.toLowerCase().includes(lq) ||
      job.jd?.responsibilities?.some(r => r.toLowerCase().includes(lq)) ||
      job.jd?.requirements?.some(r => r.toLowerCase().includes(lq)) ||
      job.jd?.niceToHave?.some(r => r.toLowerCase().includes(lq))
    );
  }, []);

  const filtered = useMemo(() => {
    let result = openPositions.filter(p => p.active !== false);
    result = selectedDept === 'All' ? result : result.filter(p => p.department === selectedDept);
    result = searchJobs(result, debouncedSearchQuery);
    result.sort((a, b) => parsePostedDate(b.postedDate) - parsePostedDate(a.postedDate));
    return result;
  }, [selectedDept, debouncedSearchQuery, searchJobs]);

  // Count per dept for filter tabs
  const deptCounts = useMemo(() => {
    const active = openPositions.filter(p => p.active !== false);
    const counts = { All: active.length };
    active.forEach(p => { counts[p.department] = (counts[p.department] || 0) + 1; });
    return counts;
  }, []);

  const totalOpenings = useMemo(() =>
    openPositions.filter(p => p.active !== false).reduce((sum, j) => sum + (j.openings || 1), 0),
  []);

  return (
    <>
      <Helmet>
        <title>Careers at Escose Technologies | Join Our Global Engineering Team</title>
        <meta name="description" content="Explore career opportunities at Escose Technologies. Join our team of 500+ engineers working on cutting-edge projects. Remote-first culture, competitive pay, and exciting challenges in IT staffing, software development, and GenAI." />
        <meta name="keywords" content="escose careers, software engineer jobs India, IT jobs Bangalore, remote developer jobs India, React developer jobs, Python developer jobs, full stack developer jobs, DevOps engineer jobs, AI ML jobs India, GenAI engineer jobs, data engineer jobs, software jobs remote, tech careers India, work from home IT jobs, engineering jobs Bangalore, prompt engineer jobs, QA engineer jobs AI" />
        <link rel="canonical" href="https://escose.com/careers" />
        <meta property="og:title" content="Careers at Escose Technologies | We're Hiring" />
        <meta property="og:description" content="Join our global engineering team. Work on innovative projects with modern tech stacks. Remote-first culture and competitive benefits." />
        <meta property="og:url" content="https://escose.com/careers" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers at Escose Technologies" />
        <meta name="twitter:description" content="Join our team of 500+ engineers. Exciting opportunities in software development and GenAI." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://escose.com/" },
              { "@type": "ListItem", "position": 2, "name": "Careers", "item": "https://escose.com/careers" }
            ]
          })}
        </script>
        {openPositions.filter(p => p.active !== false).map((job, idx) => (
          <script key={idx} type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "JobPosting",
              "title": job.title,
              "description": `<p>${job.summary || ''}</p>${job.jd?.responsibilities ? '<h3>Responsibilities</h3><ul>' + job.jd.responsibilities.map(r => `<li>${r}</li>`).join('') + '</ul>' : ''}${job.jd?.requirements ? '<h3>Requirements</h3><ul>' + job.jd.requirements.map(r => `<li>${r}</li>`).join('') + '</ul>' : ''}`,
              "identifier": { "@type": "PropertyValue", "name": "Escose Technologies", "value": job.jobId },
              "datePosted": (() => {
                if (!job.postedDate) return undefined;
                const months = { Jan:'01',Feb:'02',Mar:'03',Apr:'04',May:'05',Jun:'06',Jul:'07',Aug:'08',Sep:'09',Oct:'10',Nov:'11',Dec:'12' };
                const [d,m,y] = job.postedDate.trim().split(' ');
                return (d && m && y) ? `${y}-${months[m]||'01'}-${d.padStart(2,'0')}` : undefined;
              })(),
              "employmentType": job.type === 'Full-time' ? 'FULL_TIME' : job.type === 'Internship' ? 'INTERN' : 'FULL_TIME',
              "hiringOrganization": { "@type": "Organization", "name": "Escose Technologies", "sameAs": "https://escose.com", "logo": "https://escose.com/escose-logo.webp" },
              "jobLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": job.location?.includes('Remote') ? 'Bangalore' : job.location?.split(',')[0]?.trim() || 'Bangalore',
                  "addressRegion": "Karnataka",
                  "addressCountry": "IN"
                }
              },
              ...(job.location?.toLowerCase().includes('remote') ? { "jobLocationType": "TELECOMMUTE" } : {}),
              "skills": job.skills?.join(', '),
              "experienceRequirements": job.experience
            })}
          </script>
        ))}
      </Helmet>

      <div style={{ background: 'linear-gradient(180deg, #080e1a 0%, #0f172a 50%, #080e1a 100%)', minHeight: '100vh' }}>

        {/* ── Hero ── */}
        <section className={`${styles.paddingX} ${styles.flexCenter} relative overflow-hidden`} style={{ paddingTop: '7rem', paddingBottom: '4rem' }}>
          {/* Grid background */}
          <div className="hero-grid-lines absolute inset-0 pointer-events-none" />

          {/* Diagonal beams */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-px h-full opacity-5" style={{ background: 'linear-gradient(180deg, transparent, #00d4ff, transparent)' }} />
            <div className="absolute top-0 right-1/3 w-px h-full opacity-5" style={{ background: 'linear-gradient(180deg, transparent, #8b5cf6, transparent)' }} />
          </div>

          <div className={`${styles.boxWidth} relative z-10 text-center`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.25)', color: '#67e8f9' }}>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              We're Actively Hiring
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              Build Your Career at{' '}
              <span className="animated-gradient-text">Escose</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Join our global engineering team. Work on real products, ship features that matter, and grow fast with mentorship from industry leaders.
            </p>

            {/* Stats strip */}
            <div className="inline-grid grid-cols-3 gap-px rounded-2xl overflow-hidden mb-10"
              style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.05)' }}>
              {[
                { val: `${totalOpenings}+`, lbl: 'Open Positions', color: '#67e8f9' },
                { val: `${departments.length - 1}`, lbl: 'Departments', color: '#c4b5fd' },
                { val: '500+', lbl: 'Engineers Network', color: '#86efac' },
              ].map(({ val, lbl, color }) => (
                <div key={lbl} className="px-8 py-4" style={{ background: 'rgba(15,23,42,0.8)' }}>
                  <div className="text-2xl font-bold" style={{ color }}>{val}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5 whitespace-nowrap">{lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Perks strip ── */}
        <section className={`${styles.paddingX} ${styles.flexCenter} pb-12`}>
          <div className={`${styles.boxWidth}`}>
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-slate-100">Why engineers love working here</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {PERKS.map(({ icon, title, desc }, i) => (
                <div
                  key={title}
                  className="p-4 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'linear-gradient(145deg, rgba(15,23,42,0.9), rgba(30,41,59,0.7))',
                    border: '1px solid rgba(255,255,255,0.07)',
                    animation: `item-slide-in 0.5s ease both`,
                    animationDelay: `${i * 0.08}s`,
                  }}
                >
                  <div className="text-2xl mb-2">{icon}</div>
                  <div className="text-xs font-semibold text-slate-200 mb-0.5">{title}</div>
                  <div className="text-[11px] text-slate-500 leading-snug">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Search ── */}
        <section className={`${styles.paddingX} ${styles.flexCenter} pb-6`}>
          <div className={`${styles.boxWidth} max-w-2xl`}>
            <div className="relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search by title, skill, location, or keyword…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3.5 pl-11 pr-12 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none transition-all"
                style={{
                  background: 'rgba(15,23,42,0.8)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
                }}
                onFocus={e => { e.target.style.border = '1px solid rgba(0,212,255,0.4)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,212,255,0.08)'; }}
                onBlur={e => { e.target.style.border = '1px solid rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.04)'; }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-200 transition-colors"
                  aria-label="Clear search"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            {debouncedSearchQuery && (
              <p className="mt-2.5 text-xs text-slate-500 text-center">
                <span className="text-cyan-400 font-medium">{filtered.length}</span> {filtered.length === 1 ? 'job' : 'jobs'} matching "{debouncedSearchQuery}"
              </p>
            )}
          </div>
        </section>

        {/* ── Dept filters ── */}
        <section className={`${styles.paddingX} ${styles.flexCenter} pb-8`}>
          <div className={`${styles.boxWidth}`}>
            <div className="flex flex-wrap gap-2 justify-center">
              {departments.map((dept) => {
                const col = DEPT_COLORS[dept] || defaultColor;
                const isActive = selectedDept === dept;
                const count = deptCounts[dept] || 0;
                return (
                  <button
                    key={dept}
                    onClick={() => setSelectedDept(dept)}
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                    style={isActive ? {
                      background: dept === 'All' ? 'rgba(255,255,255,0.1)' : col.bg,
                      border: `1px solid ${dept === 'All' ? 'rgba(255,255,255,0.3)' : col.border}`,
                      color: dept === 'All' ? '#e2e8f0' : col.text,
                    } : {
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#64748b',
                    }}
                  >
                    {dept !== 'All' && (
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: isActive ? col.dot : '#64748b' }} />
                    )}
                    {dept}
                    <span
                      className="px-1.5 py-0.5 rounded-full text-[10px] font-semibold"
                      style={isActive
                        ? { background: dept === 'All' ? 'rgba(255,255,255,0.15)' : col.bg, color: dept === 'All' ? '#e2e8f0' : col.text }
                        : { background: 'rgba(255,255,255,0.06)', color: '#475569' }}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Job grid ── */}
        <section className={`${styles.paddingX} ${styles.flexCenter} pb-28`}>
          <div className={`${styles.boxWidth}`}>
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-slate-300 mb-2">No matching positions</h3>
                <p className="text-slate-500 text-sm mb-6">
                  {debouncedSearchQuery
                    ? `No jobs found for "${debouncedSearchQuery}". Try different keywords.`
                    : 'No positions available in this department right now.'}
                </p>
                <div className="flex items-center justify-center gap-3">
                  {debouncedSearchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="px-5 py-2.5 rounded-xl text-sm font-medium text-slate-300 transition-all hover:text-white"
                      style={{ border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)' }}
                    >
                      Clear search
                    </button>
                  )}
                  {selectedDept !== 'All' && (
                    <button
                      onClick={() => setSelectedDept('All')}
                      className="px-5 py-2.5 rounded-xl text-sm font-medium text-cyan-300 transition-all hover:text-cyan-200"
                      style={{ border: '1px solid rgba(0,212,255,0.25)', background: 'rgba(0,212,255,0.06)' }}
                    >
                      View all departments
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-sm text-slate-500">
                    Showing <span className="text-slate-300 font-medium">{filtered.length}</span> open {filtered.length === 1 ? 'position' : 'positions'}
                    {selectedDept !== 'All' && <span> in <span className="text-slate-300">{selectedDept}</span></span>}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                  {filtered.map((job, idx) => (
                    <JobCard key={job.jobId || idx} job={job} query={debouncedSearchQuery} onViewJD={setActiveJob} index={idx} />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* ── JD Drawer ── */}
        {activeJob && (
          <JDDrawer job={activeJob} query={debouncedSearchQuery} onClose={() => setActiveJob(null)} />
        )}

      </div>
    </>
  );
}
