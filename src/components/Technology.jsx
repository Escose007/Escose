import { useState } from 'react';
import { technologies } from '../constants';
import styles from '../style';

const FLOAT_CLASSES = ['animate-float-slow', 'animate-float-medium', 'animate-float-reverse'];

const TAB_COLORS = [
  { active: 'rgba(0,212,255,0.2)',   glow: 'rgba(0,212,255,0.4)',   text: '#67e8f9' },
  { active: 'rgba(39,110,241,0.2)',  glow: 'rgba(39,110,241,0.4)',  text: '#93c5fd' },
  { active: 'rgba(139,92,246,0.2)',  glow: 'rgba(139,92,246,0.4)',  text: '#c4b5fd' },
  { active: 'rgba(20,184,166,0.2)',  glow: 'rgba(20,184,166,0.4)',  text: '#5eead4' },
  { active: 'rgba(245,158,11,0.2)',  glow: 'rgba(245,158,11,0.4)',  text: '#fcd34d' },
];

const Technology = () => {
  const [active, setActive] = useState(technologies[0]);

  return (
    <div id="technology" data-scrollspy className={`${styles.flexCenter} flex-col flex-wrap sm:mb-20 mb-6 text-white`}>

      {/* ── Header ── */}
      <div className="text-center mb-4" data-animate>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-400/30 text-blue-300 text-sm font-semibold mb-4"
          style={{ background: 'rgba(39,110,241,0.08)' }}>
          ✦ Our Stack
        </div>
        <h2 className="text-4xl font-bold animated-gradient-text">
          Technologies We Work With
        </h2>
      </div>

      <div className={`${styles.flexCenter} text-center text-base text-gray-400 xl:w-[52%] mb-14`} data-animate="fade">
        We partner with leading technology platforms to deliver world-class software performance
        across every layer of your stack.
      </div>

      {/* ── DESKTOP ── */}
      <div className="w-full hidden md:block" data-animate>

        {/* Tab pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {technologies.map((techType, i) => {
            const col = TAB_COLORS[i % TAB_COLORS.length];
            const isActive = active.title === techType.title;
            return (
              <button
                key={techType.title}
                onClick={() => setActive(techType)}
                className="px-5 py-2.5 rounded-full text-sm font-semibold capitalize transition-all duration-300 relative overflow-hidden"
                style={{
                  background: isActive ? col.active : 'rgba(255,255,255,0.05)',
                  color: isActive ? col.text : '#94a3b8',
                  border: isActive ? `1px solid ${col.glow}` : '1px solid rgba(255,255,255,0.1)',
                  boxShadow: isActive ? `0 0 20px ${col.active}, 0 0 40px rgba(0,0,0,0)` : 'none',
                  transform: isActive ? 'scale(1.05)' : 'scale(1)',
                }}
              >
                {/* Beam effect on active */}
                {isActive && (
                  <span className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                    <span className="absolute inset-0 rounded-full"
                      style={{ background: `radial-gradient(ellipse at 50% 0%, ${col.active}, transparent 70%)` }} />
                  </span>
                )}
                <span className="relative z-10">{techType.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tech grid panel */}
        <div
          className="relative w-full rounded-3xl overflow-hidden p-12"
          style={{
            background: 'linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
            border: '1px solid rgba(255,255,255,0.08)',
            backdropFilter: 'blur(20px)',
            minHeight: 300,
          }}
        >
          {/* Ambient glow in panel */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(39,110,241,0.06) 0%, transparent 70%)' }} />

          {/* Category label */}
          <div className="absolute top-5 left-6">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              {active.title} · {active.tech.length} technologies
            </span>
          </div>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-8 pt-4">
            {active.tech.map((tech, i) => (
              <div
                key={tech.title}
                className={`flex flex-col items-center gap-3 cursor-default ${FLOAT_CLASSES[i % 3]}`}
                style={{ animationDelay: `${(i * 0.35) % 3}s` }}
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300 tech-icon-glow relative overflow-hidden"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = '0 4px 30px rgba(0,212,255,0.35), 0 0 0 1px rgba(0,212,255,0.3)';
                    e.currentTarget.style.transform = 'translateY(-4px) scale(1.08)';
                    e.currentTarget.style.background = 'rgba(0,212,255,0.08)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.3)';
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                  }}
                >
                  {/* Hover inner glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'radial-gradient(circle at 50% 0%, rgba(0,212,255,0.08), transparent 60%)' }} />
                  <img
                    src={tech.img}
                    alt={`${tech.title} logo`}
                    loading="lazy"
                    className="w-12 h-12 object-contain filter brightness-150 transition-transform duration-200 relative z-10"
                  />
                </div>
                <span className="text-xs font-medium text-gray-300 text-center">{tech.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="md:hidden w-full" data-animate>
        <div className="grid grid-cols-3 gap-2 mb-5">
          {technologies.map((techType, i) => {
            const col = TAB_COLORS[i % TAB_COLORS.length];
            const isActive = active.title === techType.title;
            return (
              <button
                key={techType.title}
                onClick={() => setActive(techType)}
                className="p-2.5 rounded-xl text-xs font-semibold capitalize transition-all duration-300"
                style={{
                  background: isActive ? col.active : 'rgba(255,255,255,0.05)',
                  color: isActive ? col.text : '#94a3b8',
                  border: isActive ? `1px solid ${col.glow}` : '1px solid rgba(255,255,255,0.1)',
                }}
              >
                {techType.title}
              </button>
            );
          })}
        </div>

        <div
          className="rounded-2xl p-6"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <h3 className="text-sm font-bold text-slate-400 mb-5 text-center uppercase tracking-wider">
            {active.title} · {active.tech.length} technologies
          </h3>
          <div className="grid grid-cols-3 gap-5">
            {active.tech.map((tech, i) => (
              <div key={tech.title}
                className={`flex flex-col items-center gap-2 ${FLOAT_CLASSES[i % 3]}`}
                style={{ animationDelay: `${(i * 0.3) % 2}s` }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <img src={tech.img} alt={tech.title} loading="lazy"
                    className="w-9 h-9 object-contain filter brightness-150" />
                </div>
                <span className="text-[10px] font-medium text-gray-300 text-center leading-tight">{tech.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
