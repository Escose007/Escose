import { useEffect, useRef, useState } from 'react';
import styles from '../style';

const STEPS = [
  {
    number: '01',
    icon: '📋',
    title: 'Brief Us',
    time: '5 minutes',
    desc: 'Tell us the role, skills, and timeline. We take it from there — no lengthy forms.',
    accent: '#00d4ff',
    bg: 'rgba(0,212,255,0.08)',
    border: 'rgba(0,212,255,0.3)',
    glow: 'rgba(0,212,255,0.2)',
  },
  {
    number: '02',
    icon: '🔍',
    title: 'We Source & Vet',
    time: '3–5 days',
    desc: 'Our team screens from 500+ engineers — technical tests, culture-fit, communication check.',
    accent: '#276ef1',
    bg: 'rgba(39,110,241,0.08)',
    border: 'rgba(39,110,241,0.3)',
    glow: 'rgba(39,110,241,0.2)',
  },
  {
    number: '03',
    icon: '🤝',
    title: 'You Interview',
    time: '2–3 days',
    desc: 'Meet your shortlisted candidates. Only the top 2–3 make it to you — no resume spam.',
    accent: '#8b5cf6',
    bg: 'rgba(139,92,246,0.08)',
    border: 'rgba(139,92,246,0.3)',
    glow: 'rgba(139,92,246,0.2)',
  },
  {
    number: '04',
    icon: '🚀',
    title: 'Onboard & Build',
    time: 'Day 1',
    desc: 'Developer joins your team ready to code. We handle contracts, compliance, and payments.',
    accent: '#00d4ff',
    bg: 'rgba(0,212,255,0.08)',
    border: 'rgba(0,212,255,0.3)',
    glow: 'rgba(0,212,255,0.2)',
  },
];

export default function HowItWorks() {
  const [filled,  setFilled]  = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          setTimeout(() => setFilled(true), 300);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className={`${styles.flexCenter} flex-col flex-wrap sm:mb-20 mb-6 mt-16`} id="how-it-works">

      {/* ── Header ── */}
      <div className="text-center mb-16 w-full" data-animate>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-400/30 text-blue-300 text-sm font-semibold mb-5"
          style={{ background: 'rgba(39,110,241,0.07)' }}>
          ✦ The Process
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4 headline-balanced">
          From brief to building{' '}
          <span className="animated-gradient-text">in 2 weeks</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-xl mx-auto">
          A proven 4-step process designed to get the right engineer on your team — fast.
        </p>
      </div>

      {/* ── Steps grid ── */}
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 relative">

        {/* Connecting line (desktop) */}
        <div className="absolute top-[40px] left-0 right-0 hidden md:block pointer-events-none px-10">
          <div className="relative h-[2px] bg-white/5 rounded-full mx-6 overflow-hidden">
            <div
              className="absolute inset-0 origin-left rounded-full"
              style={{
                background: 'linear-gradient(90deg, #00d4ff, #276ef1, #8b5cf6, #00d4ff)',
                transform: filled ? 'scaleX(1)' : 'scaleX(0)',
                transition: 'transform 1.4s cubic-bezier(0.22, 1, 0.36, 1)',
                boxShadow: '0 0 12px rgba(0,212,255,0.4)',
              }}
            />
          </div>
        </div>

        {STEPS.map((step, i) => (
          <div
            key={step.number}
            className="flex flex-col items-center text-center relative step-card-v2"
            data-num={step.number}
            style={
              visible
                ? { animation: `stat-flash 0.65s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.18}s both` }
                : { opacity: 0 }
            }
          >
            {/* Step number badge with glow ring */}
            <div className="relative z-10 mb-6 flex items-center justify-center">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full"
                style={{
                  boxShadow: `0 0 0 8px ${step.bg}, 0 0 0 9px ${step.border}`,
                  borderRadius: '50%',
                  width: '56px',
                  height: '56px',
                  transition: 'box-shadow 0.3s ease',
                }} />
              {/* Badge */}
              <div
                className="step-badge"
                style={{
                  background: step.bg,
                  border: `2px solid ${step.border}`,
                  color: step.accent,
                  boxShadow: `0 0 20px ${step.glow}`,
                  fontSize: '1rem',
                  fontWeight: 900,
                  width: '56px',
                  height: '56px',
                }}
              >
                {step.number}
              </div>
            </div>

            {/* Card */}
            <div
              className="rounded-2xl p-6 w-full transition-all duration-300 card-beam"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(14px)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = step.border;
                e.currentTarget.style.boxShadow = `0 16px 48px ${step.glow}`;
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Icon */}
              <div className="text-3xl mb-4">{step.icon}</div>

              {/* Title */}
              <div className="text-base font-bold text-slate-100 mb-2">{step.title}</div>

              {/* Time badge */}
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold mb-3 px-2.5 py-1 rounded-full"
                style={{ background: step.bg, color: step.accent, border: `1px solid ${step.border}` }}>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {step.time}
              </div>

              <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
            </div>

            {/* Mobile arrow */}
            {i < STEPS.length - 1 && (
              <div className="md:hidden flex justify-center w-full my-4">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-px h-6" style={{ background: `linear-gradient(180deg, ${step.accent}, transparent)` }} />
                  <svg className="w-4 h-4" style={{ color: step.accent }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ── Bottom CTA ── */}
      <div className="mt-14 text-center" data-animate="fade">
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-5 rounded-2xl"
          style={{ background: 'linear-gradient(145deg, rgba(0,212,255,0.07), rgba(39,110,241,0.05))', border: '1px solid rgba(0,212,255,0.15)' }}>
          <div className="text-left">
            <p className="text-slate-200 font-semibold text-base">Ready to hire in 2 weeks?</p>
            <p className="text-slate-500 text-sm">No commitment required — start with a free brief.</p>
          </div>
          <a href="/outsourcing"
            className="flex-shrink-0 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
            style={{ background: 'linear-gradient(135deg, #00d4ff, #276ef1)' }}>
            Start Hiring →
          </a>
        </div>
      </div>
    </div>
  );
}
