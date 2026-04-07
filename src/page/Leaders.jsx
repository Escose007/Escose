import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styles from '../style';
import { pooja_jangir, ankita_sharma } from '../assets';

/* ── Data ─────────────────────────────────── */
const FOUNDERS = [
  {
    name: 'Pooja Jangir',
    role: 'Co-Founder & COO',
    tagline: 'Bridging Science & Business',
    bio: 'With over ten years of professional experience, Pooja has mastered the art of bridging the gap between technical precision and organizational excellence. Her decade-long journey has been defined by a transition from the laboratory to the boardroom, bringing a disciplined, data-driven approach to every stage of business development.',
    image: pooja_jangir,
    linkedin: 'https://www.linkedin.com/in/escose-pooja-jangir',
    expertise: ['Operations', 'Talent Strategy', 'Business Development', 'Process Design'],
    stats: [
      { val: '10+', lbl: 'Years Experience' },
      { val: '200+', lbl: 'Engineers Placed' },
      { val: '30+', lbl: 'Client Partnerships' },
    ],
    accent: 'cyan',
    gradFrom: '#00d4ff',
    gradTo: '#276ef1',
  },
  {
    name: 'Ankita Sharma',
    role: 'Co-Founder & CEO',
    tagline: 'Scaling Teams, Shaping Futures',
    bio: 'With over a decade of experience transforming the education landscape, Ankita is a seasoned entrepreneur who has successfully founded and scaled multiple businesses within the sector. Her deep understanding of talent development and organizational growth has been the cornerstone of her 10-year career.',
    image: ankita_sharma,
    linkedin: 'https://www.linkedin.com/in/ankita-sharma-escose/',
    expertise: ['Product Vision', 'Talent Development', 'EdTech', 'Org Scaling'],
    stats: [
      { val: '10+', lbl: 'Years Experience' },
      { val: '3+',  lbl: 'Ventures Founded' },
      { val: '500+', lbl: 'Talent Network' },
    ],
    accent: 'purple',
    gradFrom: '#8b5cf6',
    gradTo: '#276ef1',
  },
];

const VALUES = [
  { icon: '🎯', title: 'Precision Hiring',    desc: 'Every engineer in our pool passes rigorous multi-stage screening — technical, cultural, and communication.',       accent: 'cyan'   },
  { icon: '🤝', title: 'Long-Term Partnerships', desc: 'We don\'t fill roles; we build relationships. Our clients stay with us for years, not months.',                  accent: 'blue'   },
  { icon: '🚀', title: 'Speed Without Compromise', desc: 'Moving fast doesn\'t mean cutting corners. We deliver the right talent in 2 weeks, every time.',             accent: 'purple' },
  { icon: '🌍', title: 'Global Perspective',  desc: 'Our network spans continents. We bring world-class talent to any company, regardless of location.',                  accent: 'cyan'   },
  { icon: '💡', title: 'Innovation-First',    desc: 'From GenAI to agentic systems, we stay ahead of the curve so our clients always have access to cutting-edge skills.',accent: 'blue'   },
  { icon: '📈', title: 'Measurable Impact',   desc: '98% client satisfaction and 60% cost savings aren\'t just numbers — they\'re the foundation of everything we build.', accent: 'purple' },
];

const MILESTONES = [
  { year: '2018', event: 'Founded in Bangalore with a vision to modernize IT staffing' },
  { year: '2020', event: 'Expanded to 100+ engineers across React, Python, DevOps' },
  { year: '2022', event: 'Crossed 30 client partnerships; launched dedicated teams model' },
  { year: '2023', event: 'Launched GenAI & Agentic Projects practice' },
  { year: '2024', event: '500+ engineers network; 98% client satisfaction achieved' },
  { year: '2025', event: 'Global expansion — serving clients across 4 continents' },
];

const ACCENT_MAP = {
  cyan:   { bg: 'rgba(0,212,255,0.08)',  border: 'rgba(0,212,255,0.25)',  text: '#67e8f9',  glow: 'rgba(0,212,255,0.15)'   },
  blue:   { bg: 'rgba(39,110,241,0.08)', border: 'rgba(39,110,241,0.25)', text: '#93c5fd',  glow: 'rgba(39,110,241,0.15)'  },
  purple: { bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.25)', text: '#c4b5fd',  glow: 'rgba(139,92,246,0.15)'  },
};

/* ── Animated counter ─────────────────────── */
function useCountUp(target, trigger, duration = 1400) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const num = parseInt(target.replace(/\D/g, ''), 10);
    if (!num) return;
    let start = 0;
    const step = Math.ceil(num / (duration / 30));
    const id = setInterval(() => {
      start = Math.min(start + step, num);
      setVal(start);
      if (start >= num) clearInterval(id);
    }, 30);
    return () => clearInterval(id);
  }, [trigger, target, duration]);
  return val;
}

function StatBadge({ val, lbl, trigger, color }) {
  const num   = useCountUp(val, trigger);
  const suffix = val.replace(/[\d,]/g, '');
  return (
    <div className="flex flex-col items-center">
      <span className="text-2xl font-bold" style={{ color }}>
        {trigger ? `${num}${suffix}` : val}
      </span>
      <span className="text-xs text-slate-500 mt-0.5 text-center">{lbl}</span>
    </div>
  );
}

/* ── Founder card ─────────────────────────── */
function FounderCard({ founder, reverse, index }) {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const a = ACCENT_MAP[founder.accent];

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (cardRef.current) obs.observe(cardRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative rounded-3xl overflow-hidden"
      style={{
        background: 'linear-gradient(145deg, rgba(15,23,42,0.95), rgba(30,41,59,0.85))',
        border: `1px solid ${a.border}`,
        backdropFilter: 'blur(20px)',
        boxShadow: `0 24px 80px ${a.glow}`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : `translateY(40px)`,
        transition: `opacity 0.7s ease ${index * 0.15}s, transform 0.7s cubic-bezier(0.34,1.56,0.64,1) ${index * 0.15}s`,
      }}
    >
      {/* Top gradient line */}
      <div className="h-[3px]"
        style={{ background: `linear-gradient(90deg, ${founder.gradFrom}, ${founder.gradTo})` }} />

      <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>

        {/* ── Photo side ── */}
        <div className="lg:w-[42%] relative overflow-hidden min-h-[340px] lg:min-h-[480px]">
          {/* Photo */}
          <img
            src={founder.image}
            alt={founder.name}
            className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
            style={{ minHeight: '340px' }}
          />

          {/* Gradient overlay (left or right depending on reverse) */}
          <div className="absolute inset-0"
            style={{
              background: reverse
                ? 'linear-gradient(to right, transparent 50%, rgba(15,23,42,0.9) 100%)'
                : 'linear-gradient(to left, transparent 50%, rgba(15,23,42,0.9) 100%)',
            }} />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.7) 0%, transparent 40%)' }} />

          {/* Floating role badge */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm"
              style={{ background: `${a.bg}`, border: `1px solid ${a.border}`, color: a.text }}>
              {founder.role}
            </div>
          </div>
        </div>

        {/* ── Content side ── */}
        <div className="lg:w-[58%] p-8 lg:p-10 flex flex-col justify-between">

          {/* Header */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
              style={{ background: a.bg, border: `1px solid ${a.border}`, color: a.text }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: a.text }} />
              {founder.tagline}
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-slate-100 mb-2 font-poppins">
              {founder.name}
            </h2>

            <p className="text-slate-400 text-base leading-relaxed mb-6">
              {founder.bio}
            </p>

            {/* Expertise chips */}
            <div className="flex flex-wrap gap-2 mb-7">
              {founder.expertise.map(tag => (
                <span key={tag}
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ background: a.bg, border: `1px solid ${a.border}`, color: a.text }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stats row */}
          <div>
            <div className="h-px mb-5" style={{ background: `linear-gradient(90deg, ${a.border}, transparent)` }} />
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex gap-6">
                {founder.stats.map(({ val, lbl }) => (
                  <StatBadge key={lbl} val={val} lbl={lbl} trigger={visible} color={a.text} />
                ))}
              </div>

              {/* LinkedIn */}
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${founder.gradFrom}, ${founder.gradTo})`,
                  boxShadow: `0 4px 20px ${a.glow}`,
                  color: '#fff',
                }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main page ────────────────────────────── */
export default function Leaders() {
  const valuesRef     = useRef(null);
  const milestonesRef = useRef(null);
  const [valuesVisible,     setValuesVisible]     = useState(false);
  const [milestonesVisible, setMilestonesVisible] = useState(false);

  useEffect(() => {
    const obs1 = new IntersectionObserver(([e]) => { if (e.isIntersecting) setValuesVisible(true); }, { threshold: 0.1 });
    const obs2 = new IntersectionObserver(([e]) => { if (e.isIntersecting) setMilestonesVisible(true); }, { threshold: 0.1 });
    if (valuesRef.current)     obs1.observe(valuesRef.current);
    if (milestonesRef.current) obs2.observe(milestonesRef.current);
    return () => { obs1.disconnect(); obs2.disconnect(); };
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Leaders | Escose Technologies — Meet the Founders</title>
        <meta name="description" content="Meet Pooja Jangir and Ankita Sharma, the visionary co-founders of Escose Technologies. Learn about their expertise in IT staffing, talent development, and software engineering." />
        <meta name="keywords" content="escose founders, Pooja Jangir, Ankita Sharma, Escose Technologies leadership, leadership team, IT staffing leaders, software development founders, women founders IT company India, Bangalore startup founders, IT company leadership team India, engineering company founders, tech startup leadership" />
        <link rel="canonical" href="https://escose.com/leaders" />
        <meta property="og:title" content="Our Leaders | Escose Technologies" />
        <meta property="og:description" content="Meet the visionary founders driving Escose Technologies forward." />
        <meta property="og:url" content="https://escose.com/leaders" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Leaders | Escose Technologies" />
        <meta name="twitter:description" content="Meet the visionary leaders behind Escose Technologies." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home",    "item": "https://escose.com/" },
              { "@type": "ListItem", "position": 2, "name": "Leaders", "item": "https://escose.com/leaders" }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Escose Technologies Leadership",
            "itemListElement": FOUNDERS.map((f, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "item": {
                "@type": "Person",
                "name": f.name,
                "jobTitle": f.role,
                "worksFor": { "@type": "Organization", "name": "Escose Technologies" },
                "sameAs": f.linkedin,
              }
            }))
          })}
        </script>
      </Helmet>

      <div className="text-slate-100 min-h-screen"
        style={{ background: 'linear-gradient(180deg, #080e1a 0%, #0f172a 40%, #080e1a 100%)' }}>

        {/* ══ HERO ══════════════════════════════ */}
        <section className="relative overflow-hidden pt-36 pb-20">
          {/* Grid lines */}
          <div className="absolute inset-0 hero-grid-lines opacity-60 pointer-events-none" />

          {/* Blobs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)' }} />

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 text-center">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6"
              style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.25)', color: '#67e8f9' }}>
              ✦ The People Behind Escose
            </div>

            <h1 className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              <span className="text-slate-100">Meet Our</span>{' '}
              <span className="animated-gradient-text">Founders</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
              Visionary leaders who turned a passion for talent into a thriving global IT staffing and engineering company.
            </p>

            {/* Top-level stats */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {[
                { val: '10+', lbl: 'Years Combined Experience', col: '#67e8f9' },
                { val: '500+', lbl: 'Engineers in Network',      col: '#c4b5fd' },
                { val: '30+',  lbl: 'Client Partnerships',       col: '#86efac' },
                { val: '98%',  lbl: 'Client Satisfaction',       col: '#93c5fd' },
              ].map(({ val, lbl, col }) => (
                <div key={lbl} className="flex flex-col items-center">
                  <span className="text-3xl font-bold" style={{ color: col }}>{val}</span>
                  <span className="text-xs text-slate-500 mt-0.5">{lbl}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FOUNDER CARDS ═════════════════════ */}
        <section className={`${styles.paddingX} ${styles.flexCenter} py-10`}>
          <div className={`${styles.boxWidth} flex flex-col gap-10`}>
            {FOUNDERS.map((founder, i) => (
              <FounderCard key={founder.name} founder={founder} reverse={i % 2 !== 0} index={i} />
            ))}
          </div>
        </section>

        {/* ══ COMPANY MILESTONES ════════════════ */}
        <section ref={milestonesRef} className={`${styles.paddingX} ${styles.flexCenter} py-16`}>
          <div className={`${styles.boxWidth}`}>

            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-400/30 text-blue-300 text-sm font-semibold mb-4"
                style={{ background: 'rgba(39,110,241,0.07)' }}>
                ✦ Our Journey
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100 headline-balanced">
                From idea to{' '}
                <span className="animated-gradient-text">global platform</span>
              </h2>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
                style={{ background: 'linear-gradient(180deg, transparent, rgba(0,212,255,0.3), rgba(139,92,246,0.3), transparent)' }} />

              <div className="flex flex-col gap-8">
                {MILESTONES.map(({ year, event }, i) => {
                  const isLeft = i % 2 === 0;
                  const colors = [
                    { dot: '#00d4ff', bg: 'rgba(0,212,255,0.08)',  border: 'rgba(0,212,255,0.25)',  text: '#67e8f9'  },
                    { dot: '#276ef1', bg: 'rgba(39,110,241,0.08)', border: 'rgba(39,110,241,0.25)', text: '#93c5fd'  },
                    { dot: '#8b5cf6', bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.25)', text: '#c4b5fd'  },
                  ];
                  const c = colors[i % colors.length];
                  return (
                    <div
                      key={year}
                      className={`relative flex flex-col md:flex-row items-center gap-4 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                      style={
                        milestonesVisible
                          ? { animation: `stat-flash 0.6s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.1}s both` }
                          : { opacity: 0 }
                      }
                    >
                      {/* Content card */}
                      <div className={`w-full md:w-[45%] p-5 rounded-2xl card-beam ${isLeft ? 'md:text-right' : 'md:text-left'}`}
                        style={{ background: c.bg, border: `1px solid ${c.border}`, backdropFilter: 'blur(12px)' }}>
                        <div className="text-xs font-bold mb-1.5 uppercase tracking-wider" style={{ color: c.text }}>{year}</div>
                        <p className="text-slate-300 text-sm leading-relaxed">{event}</p>
                      </div>

                      {/* Centre dot */}
                      <div className="hidden md:flex w-[10%] justify-center flex-shrink-0">
                        <div className="w-4 h-4 rounded-full border-2 relative"
                          style={{ background: c.dot, borderColor: c.text, boxShadow: `0 0 16px ${c.dot}` }}>
                          <div className="absolute inset-0 rounded-full animate-ping opacity-40"
                            style={{ background: c.dot }} />
                        </div>
                      </div>

                      {/* Spacer */}
                      <div className="hidden md:block w-[45%]" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ══ VALUES ════════════════════════════ */}
        <section ref={valuesRef}
          className={`${styles.paddingX} ${styles.flexCenter} py-16`}
          style={{ background: 'rgba(255,255,255,0.015)' }}>
          <div className={`${styles.boxWidth}`}>

            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-400/30 text-purple-300 text-sm font-semibold mb-4"
                style={{ background: 'rgba(139,92,246,0.07)' }}>
                ✦ What Drives Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100 headline-balanced">
                Our core{' '}
                <span className="animated-gradient-text">values</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {VALUES.map(({ icon, title, desc, accent }, i) => {
                const a = ACCENT_MAP[accent];
                return (
                  <div
                    key={title}
                    className="relative p-6 rounded-2xl group service-card-top card-beam overflow-hidden"
                    style={{
                      background: 'linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
                      border: '1px solid rgba(255,255,255,0.08)',
                      backdropFilter: 'blur(14px)',
                      opacity: valuesVisible ? 1 : 0,
                      transform: valuesVisible ? 'translateY(0)' : 'translateY(24px)',
                      transition: `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`,
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = a.border;
                      e.currentTarget.style.boxShadow = `0 16px 48px ${a.glow}`;
                      e.currentTarget.style.transform = 'translateY(-4px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {/* Radial glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `radial-gradient(circle, ${a.glow}, transparent 70%)` }} />

                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
                      style={{ background: a.bg, border: `1px solid ${a.border}` }}>
                      {icon}
                    </div>

                    <h3 className="text-base font-bold text-slate-100 mb-2">{title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══ VISION QUOTE ══════════════════════ */}
        <section className={`${styles.paddingX} ${styles.flexCenter} py-16`}>
          <div className={`${styles.boxWidth}`}>
            <div
              className="relative rounded-3xl p-10 md:p-14 text-center overflow-hidden card-beam"
              style={{
                background: 'linear-gradient(145deg, rgba(0,212,255,0.07), rgba(39,110,241,0.05))',
                border: '1px solid rgba(0,212,255,0.15)',
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Ambient */}
              <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)' }} />
              <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full blur-3xl pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)' }} />

              {/* Top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl"
                style={{ background: 'linear-gradient(90deg, #00d4ff, #276ef1, #8b5cf6)' }} />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
                  style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.25)', color: '#67e8f9' }}>
                  ✦ Our Vision
                </div>

                <blockquote className="text-2xl md:text-3xl font-semibold text-slate-100 max-w-4xl mx-auto leading-relaxed mb-8">
                  "To become the most trusted partner for IT staffing and engineering talent —
                  connecting exceptional engineers with the companies that are shaping tomorrow."
                </blockquote>

                <p className="text-slate-400 text-base max-w-2xl mx-auto leading-relaxed mb-10">
                  At Escose, we don't just fill roles. We build the long-term relationships that
                  help companies scale faster, smarter, and with confidence — powered by
                  world-class talent at every level of the stack.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/outsourcing"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                    style={{ background: 'linear-gradient(135deg, #00d4ff, #276ef1)', boxShadow: '0 4px 20px rgba(0,212,255,0.2)' }}
                  >
                    Work with Us →
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-300 border border-white/15 hover:border-cyan-400/40 hover:text-cyan-300 transition-all duration-300"
                  >
                    About Escose
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
