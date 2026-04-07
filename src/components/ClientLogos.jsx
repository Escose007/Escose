import { useEffect, useState, useRef } from 'react';
import styles from '../style';
import { prepare, layout } from '@chenglou/pretext';

import { react, python, node, aws, azure, gcp, mongodb, postgresql, go } from '../assets';

const TECH_LOGOS = [
  { name: 'React',      img: react      },
  { name: 'Python',     img: python     },
  { name: 'Node.js',    img: node       },
  { name: 'AWS',        img: aws        },
  { name: 'Azure',      img: azure      },
  { name: 'GCP',        img: gcp        },
  { name: 'MongoDB',    img: mongodb    },
  { name: 'PostgreSQL', img: postgresql },
  { name: 'Go',         img: go         },
];

const CLIENTS = [
  {
    name: 'Emorphis Technologies',
    role: 'Engineering Lead',
    logo: 'https://www.emorphis.com/images/emorphis-technologies-logo-Black.png',
    logoBg: 'bg-white',
    feedback: 'Escose onboarded strong engineers fast and aligned perfectly with our sprint cadence. Zero ramp-up friction.',
    staffing: '8 engineers placed',
    initial: 'ET',
    stars: 5,
    accent: 'cyan',
  },
  {
    name: 'Greyloops',
    role: 'CTO',
    logo: 'https://greyloops.com/wp-content/uploads/2020/09/GreyLoop_Logo-01-1.png',
    logoBg: 'bg-slate-900',
    feedback: 'Clear communication, dependable delivery, and consistent engineering quality throughout the engagement.',
    staffing: '12 engineers placed',
    initial: 'GL',
    stars: 5,
    accent: 'blue',
  },
  {
    name: '5Exceptions',
    role: 'VP Engineering',
    logo: 'https://5exceptions.com/images/new_home_page/logoone.svg',
    logoBg: 'bg-white',
    feedback: 'Quick ramp-up and proactive collaboration made scaling the team easy. Would hire through Escose again.',
    staffing: '5 engineers placed',
    initial: '5E',
    stars: 5,
    accent: 'purple',
  },
  {
    name: 'Bespoke Technology',
    role: 'Head of Product',
    logo: '/logos/bespoke.png',
    logoBg: 'bg-white',
    feedback: 'Reliable support, strong ownership sense, and smooth delivery throughout the project lifecycle.',
    staffing: '5 engineers placed',
    initial: 'BT',
    stars: 5,
    accent: 'cyan',
  },
];

const ACCENT_COLORS = {
  cyan:   { bg: 'rgba(0,212,255,0.07)',  border: 'rgba(0,212,255,0.2)',  text: '#67e8f9',  glow: 'rgba(0,212,255,0.12)'  },
  blue:   { bg: 'rgba(39,110,241,0.07)', border: 'rgba(39,110,241,0.2)', text: '#93c5fd',  glow: 'rgba(39,110,241,0.12)' },
  purple: { bg: 'rgba(139,92,246,0.07)', border: 'rgba(139,92,246,0.2)', text: '#c4b5fd',  glow: 'rgba(139,92,246,0.12)' },
};

const QUOTE_FONT  = '15px Poppins, sans-serif';
const QUOTE_LH    = 24;
const QUOTE_WIDTH = 300;

function measureQuote(text) {
  try {
    return layout(prepare(`"${text}"`, QUOTE_FONT), QUOTE_WIDTH, QUOTE_LH).height;
  } catch { return QUOTE_LH * 4; }
}

const repeat = (arr, n = 4) => Array.from({ length: n }, () => arr).flat();

/* Star rating component */
function StarRating({ count = 5, filled = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className={`w-3.5 h-3.5 ${i < filled ? 'star-filled' : 'star-empty'}`}
          fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ClientLogos() {
  const [quoteHeight, setQuoteHeight] = useState(QUOTE_LH * 4);
  const [logoErrors, setLogoErrors]   = useState({});
  const sectionRef  = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heights = CLIENTS.map(c => measureQuote(c.feedback));
    setQuoteHeight(Math.max(...heights) + 8);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const TECH_MARQUEE   = repeat(TECH_LOGOS, 4);
  const CLIENT_MARQUEE = repeat(CLIENTS.map(c => ({ name: c.name, initial: c.initial, accent: c.accent })), 5);

  return (
    <section
      ref={sectionRef}
      className={`${styles.paddingY} ${styles.paddingX} ${styles.flexCenter} relative overflow-hidden`}
      style={{ background: 'linear-gradient(180deg, #080e1a 0%, #0f172a 50%, #080e1a 100%)' }}
    >
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(39,110,241,0.05) 0%, transparent 70%)' }} />

      <div className={`${styles.boxWidth} relative z-10`}>

        {/* ── Section header ── */}
        <div className="text-center mb-14" data-animate>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/25 text-cyan-400 text-sm font-semibold mb-5"
            style={{ background: 'rgba(0,212,255,0.06)' }}>
            ✦ Trusted Worldwide
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4 headline-balanced">
            Companies that{' '}
            <span className="animated-gradient-text">trust Escose</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Powering engineering teams across industries — from fast-growing startups to established enterprises.
          </p>

          {/* Trust stats strip */}
          <div className="stat-counter-strip mt-8 py-4 px-6 rounded-2xl flex flex-wrap justify-center gap-8">
            {[
              { val: '30+', lbl: 'Happy Clients', col: '#67e8f9' },
              { val: '98%', lbl: 'Satisfaction',  col: '#86efac' },
              { val: '200+', lbl: 'Engineers Placed', col: '#c4b5fd' },
              { val: '3 yrs', lbl: 'Avg. Partnership', col: '#93c5fd' },
            ].map(({ val, lbl, col }) => (
              <div key={lbl} className="flex flex-col items-center">
                <span className="text-2xl font-bold" style={{ color: col }}>{val}</span>
                <span className="text-xs text-slate-500 mt-0.5">{lbl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Marquee Row 1 — client names ── */}
        <div className="marquee-container mb-4" data-animate="fade">
          <div className="marquee-track gap-3">
            {CLIENT_MARQUEE.map((c, i) => {
              const a = ACCENT_COLORS[c.accent] || ACCENT_COLORS.cyan;
              return (
                <div key={i}
                  className="flex items-center gap-2.5 px-5 py-2.5 rounded-full flex-shrink-0 mx-2"
                  style={{ background: a.bg, border: `1px solid ${a.border}` }}>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${a.text}, rgba(39,110,241,0.8))` }}>
                    {c.initial}
                  </div>
                  <span className="text-sm font-medium text-slate-300 whitespace-nowrap">{c.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Marquee Row 2 — tech logos (reversed) ── */}
        <div className="marquee-container mb-16" data-animate="fade">
          <div className="marquee-track-reverse gap-6">
            {TECH_MARQUEE.map((t, i) => (
              <div key={i}
                className="flex items-center gap-2.5 px-4 py-2 rounded-xl flex-shrink-0 mx-2"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <img src={t.img} alt={t.name} className="w-5 h-5 object-contain filter brightness-125" loading="lazy" />
                <span className="text-xs font-medium text-slate-400 whitespace-nowrap">{t.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Testimonial Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {CLIENTS.map((client, idx) => {
            const a = ACCENT_COLORS[client.accent] || ACCENT_COLORS.cyan;
            return (
              <div
                key={client.name}
                className="testimonial-card-v2 p-7"
                data-animate={idx % 2 === 0 ? 'left' : 'right'}
                style={visible ? { animation: `stat-flash 0.65s cubic-bezier(0.34,1.56,0.64,1) ${idx * 0.14}s both` } : { opacity: 0 }}
              >
                {/* Top gradient line */}
                <div className="h-[2px] w-full rounded-t-xl mb-5"
                  style={{ background: `linear-gradient(90deg, ${a.text}, rgba(39,110,241,0.8), ${a.text})`, opacity: 0.7 }} />

                {/* Stars + verified */}
                <div className="flex items-center justify-between mb-4">
                  <StarRating filled={client.stars} />
                  <span className="verified-badge">✓ Verified Client</span>
                </div>

                {/* Quote — Pretext-locked height */}
                <div className="relative mb-5">
                  <span className="absolute -top-3 -left-1 text-5xl font-serif leading-none select-none"
                    style={{ color: a.text, opacity: 0.15 }}>"</span>
                  <p className="text-slate-300 text-sm leading-relaxed pl-3"
                    style={{ minHeight: quoteHeight }}>
                    "{client.feedback}"
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px mb-4" style={{ background: 'rgba(255,255,255,0.06)' }} />

                {/* Attribution */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden ${client.logoBg}`}>
                    {logoErrors[client.name] ? (
                      <span className="text-xs font-bold"
                        style={{ color: a.text, background: a.bg, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {client.initial}
                      </span>
                    ) : (
                      <img src={client.logo} alt={client.name}
                        className="w-10 h-10 object-contain" loading="lazy"
                        onError={() => setLogoErrors(p => ({ ...p, [client.name]: true }))} />
                    )}
                  </div>

                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-slate-100 truncate">{client.name}</div>
                    <div className="text-xs text-slate-500">{client.role}</div>
                  </div>

                  <div className="ml-auto flex-shrink-0">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ background: a.bg, border: `1px solid ${a.border}`, color: a.text }}>
                      {client.staffing}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
