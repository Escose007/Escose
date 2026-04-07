import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import styles from '../style';
import { prepare, layout } from '@chenglou/pretext';

const ROLES = ['Backend', 'Frontend', 'Full Stack', 'DevOps', 'GenAI', 'Data Eng.', 'QA', 'Android', 'iOS'];

const BENTO_STATS = [
  {
    accent: 'cyan',
    icon: '⚡',
    value: 'avg. 8 days',
    label: 'First CV in your inbox',
    sub: 'vs 60+ days with traditional recruiting',
    detail: '7× faster',
  },
  {
    accent: 'blue',
    icon: '💰',
    value: '60%',
    label: 'Cost savings',
    sub: 'vs equivalent local hire — same quality, lower overhead',
    detail: 'Zero compromise',
  },
  {
    accent: 'purple',
    icon: '🔒',
    value: '30 days',
    label: 'Replacement guarantee',
    sub: 'Risk-free staffing — we replace at no extra cost',
    detail: 'Risk-free',
  },
];

const ACCENT = {
  cyan:   { border: 'rgba(0,212,255,0.25)',   bg: 'rgba(0,212,255,0.07)',   text: '#67e8f9',  glow: 'rgba(0,212,255,0.15)',   detail: 'rgba(0,212,255,0.2)'   },
  blue:   { border: 'rgba(39,110,241,0.25)',  bg: 'rgba(39,110,241,0.07)',  text: '#93c5fd',  glow: 'rgba(39,110,241,0.15)',  detail: 'rgba(39,110,241,0.2)'  },
  purple: { border: 'rgba(139,92,246,0.25)',  bg: 'rgba(139,92,246,0.07)',  text: '#c4b5fd',  glow: 'rgba(139,92,246,0.15)',  detail: 'rgba(139,92,246,0.2)'  },
};

/* Pretext — measure sub-text */
const SUB_FONT  = '13px Poppins, sans-serif';
const SUB_LH    = 20;
const SUB_WIDTH = 220;
function measureSub(text) {
  try { return layout(prepare(text, SUB_FONT), SUB_WIDTH, SUB_LH).height; }
  catch { return SUB_LH * 3; }
}

export default function OutsourcingPreview() {
  const [statsVisible, setStatsVisible] = useState(false);
  const [subHeight, setSubHeight]       = useState(SUB_LH * 3);
  const statsRef = useRef(null);

  useEffect(() => {
    const heights = BENTO_STATS.map(s => measureSub(s.sub));
    setSubHeight(Math.max(...heights) + 4);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsVisible(true); }, { threshold: 0.2 });
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className={`${styles.flexCenter} flex-col flex-wrap sm:mb-20 mb-6 mt-16`}>

      {/* ── Section Label ── */}
      <div className="text-center mb-12 w-full" data-animate>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-400/30 text-purple-300 text-sm font-semibold mb-4"
          style={{ background: 'rgba(139,92,246,0.06)' }}>
          ✦ IT Staffing
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-100 headline-balanced">
          Scale your team{' '}
          <span className="animated-gradient-text">without the friction</span>
        </h2>
      </div>

      {/* ══ HERO BENTO CARD ══ */}
      <div className="w-full grid grid-cols-1 gap-5 mb-5">
        <div
          className="bento-card bento-card-cyan p-8 lg:p-10 card-beam"
          style={{ background: 'linear-gradient(145deg, rgba(0,212,255,0.07), rgba(39,110,241,0.05))' }}
          data-animate="left"
        >
          {/* Ambient top-right glow */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)' }} />

          <div className="relative z-10 flex flex-col h-full">
            {/* Top line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-[20px]"
              style={{ background: 'linear-gradient(90deg, #00d4ff, #276ef1, #8b5cf6)', opacity: 0.8 }} />

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 w-fit mt-2"
              style={{ background: 'rgba(0,212,255,0.12)', border: '1px solid rgba(0,212,255,0.3)', color: '#67e8f9' }}>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              PRIMARY SERVICE — Active Placements Open
            </div>

            {/* Headline */}
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-100 mb-4 headline-balanced leading-tight">
              500+ pre-vetted engineers,<br />
              <span className="animated-gradient-text">ready to join in 2 weeks</span>
            </h3>

            <p className="text-slate-400 text-base leading-relaxed mb-7 max-w-lg">
              Staff augmentation, dedicated teams, and contract-to-hire across 9 engineering roles.
              Full ownership from sourcing to onboarding.
            </p>

            {/* Role pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {ROLES.map(r => (
                <span key={r}
                  className="px-3 py-1 rounded-full text-xs font-medium text-cyan-300 transition-all duration-200 hover:scale-105 cursor-default"
                  style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)' }}>
                  {r}
                </span>
              ))}
            </div>

            {/* Inline mini-stats */}
            <div className="flex flex-wrap gap-6 mb-8">
              {[['2 weeks', 'Avg. hire time'], ['60%', 'Cost reduction'], ['500+', 'Engineers ready']].map(([v, l]) => (
                <div key={l}>
                  <div className="text-xl font-bold text-cyan-300">{v}</div>
                  <div className="text-xs text-slate-500">{l}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-auto flex flex-wrap gap-3">
              <Link to="/outsourcing"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
                style={{ background: 'linear-gradient(135deg, #00d4ff, #276ef1)', boxShadow: '0 4px 20px rgba(0,212,255,0.25)' }}>
                Start Hiring Now →
              </Link>
              <Link to="/careers"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-300 border border-white/15 hover:border-cyan-400/40 hover:text-cyan-300 transition-all duration-300">
                Join as a Developer
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── STAT CARDS ROW ── */}
      <div ref={statsRef} className="w-full grid grid-cols-1 sm:grid-cols-3 gap-5">
        {BENTO_STATS.map(({ accent, icon, value, label, sub, detail }, i) => {
          const a = ACCENT[accent];
          return (
            <div
              key={label}
              className={`bento-card bento-card-${accent} p-7 card-beam`}
              style={{
                background: a.bg,
                ...(statsVisible ? { animation: `stat-flash 0.65s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.15}s both` } : { opacity: 0 }),
              }}
            >
              {/* Radial ambient */}
              <div className="absolute inset-0 rounded-[20px] pointer-events-none"
                style={{ background: `radial-gradient(circle at 80% 20%, ${a.glow}, transparent 60%)` }} />

              {/* Top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-[20px]"
                style={{ background: `linear-gradient(90deg, ${a.text}, rgba(39,110,241,0.5))`, opacity: 0.6 }} />

              <div className="relative z-10">
                <div className="text-2xl mb-4">{icon}</div>
                <div className="text-4xl font-black mb-1" style={{ color: a.text }}>{value}</div>
                <div className="text-base font-semibold text-slate-200 mb-2">{label}</div>
                <p className="text-slate-500 text-xs leading-relaxed" style={{ minHeight: subHeight }}>{sub}</p>

                {/* Detail badge */}
                <div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
                  style={{ background: a.detail, border: `1px solid ${a.border}`, color: a.text }}>
                  ✓ {detail}
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
