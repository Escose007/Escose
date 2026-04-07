import styles from '../style';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const ROLES = ['Backend', 'Frontend', 'Full Stack', 'DevOps', 'GenAI', 'Data', 'QA'];

const STATS = [
  { value: '500+', label: 'Expert Developers' },
  { value: '2 Wks', label: 'Avg. Time-to-Hire' },
  { value: '98%',  label: 'Client Satisfaction' },
  { value: '24/7', label: 'Global Support' },
];

const PLACEMENTS = [
  { role: 'Senior React Developer',   company: 'Fintech Startup',      time: '2h ago',  color: 'cyan'   },
  { role: 'ML Engineer (GenAI)',       company: 'E-commerce Platform',  time: '5h ago',  color: 'purple' },
  { role: 'DevOps / AWS Expert',       company: 'SaaS Company',         time: '1d ago',  color: 'blue'   },
  { role: 'Full Stack Node + React',   company: 'Healthcare Tech',      time: '1d ago',  color: 'cyan'   },
  { role: 'Python Data Engineer',      company: 'Analytics Firm',       time: '2d ago',  color: 'blue'   },
];

const TICKER_ITEMS = [
  '⚡ 2-Week Hire',
  '💰 Save 60%',
  '✅ Pre-Vetted Pool',
  '🔒 30-Day Guarantee',
  '🌍 Global Talent',
  '🤖 GenAI Specialists',
  '📈 98% Success Rate',
  '🚀 Dedicated Teams',
];

const COLOR = {
  cyan:   { bg: 'rgba(0,212,255,0.1)',   border: 'rgba(0,212,255,0.3)',   dot: '#00d4ff', text: '#67e8f9' },
  blue:   { bg: 'rgba(39,110,241,0.1)',  border: 'rgba(39,110,241,0.3)',  dot: '#276ef1', text: '#93c5fd' },
  purple: { bg: 'rgba(139,92,246,0.1)',  border: 'rgba(139,92,246,0.3)',  dot: '#8b5cf6', text: '#c4b5fd' },
};

/* ── Hiring Dashboard Card ─────────────────── */
function DashboardCard() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible >= PLACEMENTS.length) return;
    const id = setTimeout(() => setVisible(v => v + 1), 700);
    return () => clearTimeout(id);
  }, [visible]);

  return (
    <div className="w-full max-w-[400px] relative" style={{ perspective: '1200px' }}>

      {/* Ambient glow */}
      <div className="absolute -inset-10 blob-1 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)' }} />
      <div className="absolute -inset-6 blob-2 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(39,110,241,0.1) 0%, transparent 65%)' }} />

      {/* Card */}
      <div
        className="relative rounded-2xl overflow-hidden dashboard-card card-beam"
        style={{
          background: 'linear-gradient(145deg, rgba(11,18,32,0.97), rgba(30,41,59,0.92))',
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(255,255,255,0.09)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)',
        }}
      >
        {/* Top gradient line */}
        <div className="h-[2px]" style={{ background: 'linear-gradient(90deg, #00d4ff, #276ef1, #8b5cf6, #276ef1, #00d4ff)', backgroundSize: '200% auto', animation: 'shimmer 4s linear infinite' }} />

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex items-center gap-2.5">
            {/* Live ping */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
            </span>
            <span className="text-sm font-semibold text-slate-200">Live Hiring Activity</span>
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full"
            style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.25)', color: '#67e8f9' }}>
            23 this month
          </span>
        </div>

        {/* Activity feed */}
        <div className="px-4 py-3 space-y-2">
          {PLACEMENTS.slice(0, visible).map((item, i) => {
            const c = COLOR[item.color];
            return (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-xl"
                style={{
                  background: c.bg,
                  border: `1px solid ${c.border}`,
                  animation: `item-slide-in 0.4s cubic-bezier(0.34,1.56,0.64,1) both`,
                }}
              >
                <div className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: c.dot, boxShadow: `0 0 8px ${c.dot}` }} />
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-slate-200 truncate">{item.role}</div>
                  <div className="text-[11px] text-slate-500">{item.company}</div>
                </div>
                <div className="text-[10px] text-slate-600 flex-shrink-0">{item.time}</div>
              </div>
            );
          })}
        </div>

        {/* Bottom stats row */}
        <div className="grid grid-cols-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          {[
            { val: '500+', lbl: 'Engineers', col: '#67e8f9' },
            { val: '98%',  lbl: 'Success',   col: '#86efac' },
            { val: '60%',  lbl: 'Cost Save', col: '#c4b5fd' },
          ].map(({ val, lbl, col }, i) => (
            <div key={lbl} className="flex flex-col items-center py-4"
              style={{ borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
              <div className="text-base font-bold" style={{ color: col }}>{val}</div>
              <div className="text-[10px] text-slate-500 mt-0.5">{lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating skill chips – desktop only */}
      {[
        { label: 'React.js',  side: 'right', top: '10%',  color: 'cyan',   anim: 'ff1 9s ease-in-out infinite' },
        { label: 'Python',    side: 'right', top: '36%',  color: 'blue',   anim: 'ff3 11s ease-in-out infinite' },
        { label: 'AWS',       side: 'right', top: '62%',  color: 'cyan',   anim: 'ff5 8s ease-in-out infinite' },
        { label: 'LangChain', side: 'left',  top: '20%',  color: 'purple', anim: 'ff2 10s ease-in-out infinite' },
        { label: 'DevOps',    side: 'left',  top: '55%',  color: 'blue',   anim: 'ff4 12s ease-in-out infinite' },
        { label: 'GenAI',     side: 'left',  top: '78%',  color: 'purple', anim: 'ff6 9s ease-in-out infinite' },
      ].map(({ label, side, top, color, anim }) => {
        const c = COLOR[color];
        return (
          <div
            key={label}
            className="hidden lg:block absolute px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap"
            style={{
              [side]: side === 'right' ? '-80px' : '-74px',
              top,
              background: c.bg,
              border: `1px solid ${c.border}`,
              color: c.text,
              backdropFilter: 'blur(10px)',
              animation: anim,
              boxShadow: `0 0 16px ${c.bg}`,
            }}
          >
            {label}
          </div>
        );
      })}
    </div>
  );
}

/* ── Hero ─────────────────────────────────── */
const Hero = () => {
  const sectionRef  = useRef(null);
  const statsRef    = useRef(null);
  const [roleIndex,    setRoleIndex]    = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);

  /* Spotlight follow */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const move  = (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--sx', `${e.clientX - r.left}px`);
      el.style.setProperty('--sy', `${e.clientY - r.top}px`);
    };
    const leave = () => { el.style.setProperty('--sx', '-9999px'); el.style.setProperty('--sy', '-9999px'); };
    el.addEventListener('mousemove', move);
    el.addEventListener('mouseleave', leave);
    leave();
    return () => { el.removeEventListener('mousemove', move); el.removeEventListener('mouseleave', leave); };
  }, []);

  /* Role word rotation */
  useEffect(() => {
    const id = setInterval(() => setRoleIndex(i => (i + 1) % ROLES.length), 2600);
    return () => clearInterval(id);
  }, []);

  /* Stats observer */
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsVisible(true); }, { threshold: 0.3 });
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="home"
      data-scrollspy
      ref={sectionRef}
      className={`flex md:flex-row flex-col ${styles.paddingY} pt-32 md:pt-28 relative overflow-hidden`}
      style={{ background: 'linear-gradient(135deg, #080e1a 0%, #0f172a 50%, #080e1a 100%)' }}
    >
      {/* ── Background layers ─────────────────── */}
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      {/* Geometric grid lines */}
      <div className="absolute inset-0 hero-grid-lines opacity-100 pointer-events-none" />

      {/* Gradient blobs */}
      <div className="absolute top-[-100px] right-[-100px] w-[700px] h-[700px] rounded-full pointer-events-none blob-1"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)' }} />
      <div className="absolute bottom-[-80px] left-[-80px] w-[600px] h-[600px] rounded-full pointer-events-none blob-2"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)' }} />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(39,110,241,0.05) 0%, transparent 70%)', animation: 'blob-drift-2 18s ease-in-out infinite' }} />

      {/* Diagonal light beam */}
      <div className="absolute top-0 right-[15%] w-[1px] h-full opacity-20 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent 0%, #00d4ff 30%, #276ef1 60%, transparent 100%)', transform: 'rotate(-20deg) scaleY(1.5)', filter: 'blur(2px)' }} />
      <div className="absolute top-0 right-[35%] w-[1px] h-full opacity-10 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent 0%, #8b5cf6 40%, transparent 100%)', transform: 'rotate(-15deg) scaleY(1.5)', filter: 'blur(1px)' }} />

      {/* Spotlight */}
      <div className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(1800px 1800px at var(--sx,-9999px) var(--sy,-9999px), rgba(59,130,246,0.10), transparent 55%)', mixBlendMode: 'screen' }} />

      {/* ── LEFT COLUMN ─────────────────────── */}
      <div className={`flex-1 ${styles.flexStart} flex-col px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 relative z-10`}>

        {/* Live badge */}
        <div className="mb-5 flex items-center gap-3" data-animate="down">
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-semibold"
            style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.25)', color: '#4ade80' }}>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            23 developers placed this month
          </div>
        </div>

        {/* Headline */}
        <div className="mb-5" data-animate>
          <h1 className="text-slate-100 font-poppins font-bold ss:text-[60px] text-[40px] ss:leading-[78px] leading-[54px]">
            Hire Elite{' '}
            <span className="inline-block relative overflow-hidden" style={{ height: '1.15em', verticalAlign: 'top' }}>
              <span key={roleIndex} className="shimmer-text inline-block" style={{ animation: 'word-flip 2.6s ease both' }}>
                {ROLES[roleIndex]}
              </span>
            </span>
            <br />Developers in{' '}
            <span className="animated-gradient-text">2 Weeks</span>
          </h1>
        </div>

        <h2 className="text-lg text-gray-300 mb-5" data-animate="left">
          IT Staffing &amp; Engineering Talent Solutions — Scale Your Team Fast
        </h2>

        {/* Role badges */}
        <div className="mb-5 flex flex-wrap gap-2" data-animate>
          {['Backend', 'Frontend', 'Full Stack', 'DevOps', 'QA', 'Data Engineer', 'GenAI', 'Android', 'iOS'].map((role, idx) => (
            <span key={idx}
              className="px-3 py-1 rounded-full text-sm font-medium text-cyan-300 hover:border-cyan-400/60 hover:bg-cyan-500/20 transition-all cursor-default glass-pill"
              style={{ background: 'rgba(0,212,255,0.07)', border: '1px solid rgba(0,212,255,0.2)' }}>
              {role}
            </span>
          ))}
        </div>

        {/* KPI strip */}
        <div className="mb-6 flex flex-wrap gap-x-5 gap-y-2 items-center px-5 py-3 rounded-2xl"
          style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.08)' }}
          data-animate>
          {[['⚡', 'Save up to 60%'], ['🎯', '98% Success Rate'], ['✅', 'Replacement Guarantee']].map(([e, t]) => (
            <span key={t} className="flex items-center gap-2 text-cyan-300 font-semibold text-sm">
              <span>{e}</span>{t}
            </span>
          ))}
        </div>

        <p className={`${styles.paragraph} max-w-[580px] mb-8 text-gray-400 text-base leading-relaxed`} data-animate="right">
          Access 500+ pre-vetted engineers across 9 roles. Right talent in 2&nbsp;weeks,
          flexible engagement models, 60% cost savings. Custom software development also available.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10" data-animate>
          <Link to="/outsourcing"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/30 text-center glow-pulse">
            Hire Developers Now
          </Link>
          <Link to="/#services"
            className="border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/80 px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-center">
            View All Services
          </Link>
        </div>

        {/* Animated stats */}
        <div ref={statsRef} className="flex flex-wrap gap-6 md:gap-10">
          {STATS.map(({ value, label }, i) => (
            <div key={label} className="text-center"
              style={statsVisible ? { animation: `stat-pop 0.6s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.12}s both` } : { opacity: 0 }}>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{value}</div>
              <div className="text-gray-400 text-sm mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT COLUMN ────────────────────── */}
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-12 relative z-10 px-6 sm:px-8 md:px-12`}>
        <DashboardCard />
      </div>

      {/* ── Ticker tape strip at bottom ──────── */}
      <div className="absolute bottom-0 left-0 right-0 ticker-container py-2.5"
        style={{ background: 'rgba(0,0,0,0.3)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="ticker-track gap-0">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="text-xs font-medium text-slate-400 px-6 py-0.5 flex items-center gap-2 whitespace-nowrap">
              <span className="w-1 h-1 rounded-full bg-cyan-400/40 inline-block" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
