import { useId } from 'react';

/**
 * EscoseLogo — 100% CSS/SVG animated logo.
 *
 *  ┌────────────┐
 *  │  Circuit E │  E S C O S E
 *  │  (SVG mark)│  Technologies
 *  └────────────┘
 *
 * • Circuit-E mark: three animated pulsing nodes at line endpoints,
 *   spinning conic-gradient border, idle float drift, hover glow.
 * • "ESCOSE" wordmark: each letter drops in with spring-bounce on
 *   load, waves up individually on hover, shimmer sweeps on idle.
 * • "Technologies" sub-text: typewriter reveal on load.
 *
 * Props:
 *   size  — 'sm' | 'default' | 'lg'  (default: 'default')
 */
const LETTERS = ['E', 'S', 'C', 'O', 'S', 'E'];

const SIZE = {
  sm:      { mark: 36, letterClass: 'text-xl',  sub: '0.45rem' },
  default: { mark: 44, letterClass: 'text-2xl', sub: '0.5rem'  },
  lg:      { mark: 54, letterClass: 'text-3xl', sub: '0.58rem' },
};

export default function EscoseLogo({ size = 'default', className = '' }) {
  // Unique gradient ID per instance — avoids SVG defs conflicts when
  // the logo appears in both Navbar and Footer simultaneously.
  const uid = useId().replace(/:/g, 'x');
  const gradId  = `elogoGrad_${uid}`;
  const grad2Id = `elogoGrad2_${uid}`;
  const filterId = `elogoGlow_${uid}`;

  const { mark, letterClass } = SIZE[size] || SIZE.default;

  return (
    <div className={`logo-group inline-flex items-center gap-3 cursor-pointer select-none ${className}`}>

      {/* ── SVG Circuit-E Mark ── */}
      <div className="relative flex-shrink-0" style={{ width: mark, height: mark }}>
        {/* Spinning conic border */}
        <div className="logo-mark-border" />

        <svg
          className="logo-mark-svg relative z-10"
          viewBox="0 0 44 44"
          width={mark}
          height={mark}
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%"   stopColor="#00d4ff" />
              <stop offset="100%" stopColor="#276ef1" />
            </linearGradient>
            <linearGradient id={grad2Id} x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#276ef1" />
              <stop offset="100%" stopColor="#9b59b6" />
            </linearGradient>
            <filter id={filterId} x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background rounded square */}
          <rect
            x="1" y="1" width="42" height="42" rx="10"
            fill="rgba(0,212,255,0.06)"
            stroke="rgba(0,212,255,0.18)"
            strokeWidth="1"
          />

          {/* ── Circuit E traces ── */}

          {/* Vertical spine */}
          <line
            x1="12" y1="10" x2="12" y2="34"
            stroke={`url(#${gradId})`}
            strokeWidth="2.6"
            strokeLinecap="round"
            filter={`url(#${filterId})`}
          />

          {/* Top bar */}
          <line
            x1="12" y1="11" x2="29" y2="11"
            stroke={`url(#${gradId})`}
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Middle bar (shorter — classic E) */}
          <line
            x1="12" y1="22" x2="24" y2="22"
            stroke={`url(#${grad2Id})`}
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Bottom bar */}
          <line
            x1="12" y1="33" x2="29" y2="33"
            stroke={`url(#${gradId})`}
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* ── Pulsing circuit nodes at bar tips ── */}

          {/* Top node */}
          <circle cx="29" cy="11" r="3" fill="#00d4ff" opacity="0.9">
            <animate attributeName="r"       values="2.5;4;2.5" dur="2.2s" begin="0s"    repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2.2s" begin="0s"  repeatCount="indefinite" />
          </circle>
          {/* Top node outer ring */}
          <circle cx="29" cy="11" r="5.5" fill="none" stroke="#00d4ff" strokeWidth="0.8" opacity="0">
            <animate attributeName="r"       values="3;7;3"     dur="2.2s" begin="0s"    repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0;0.6" dur="2.2s" begin="0s"    repeatCount="indefinite" />
          </circle>

          {/* Middle node */}
          <circle cx="24" cy="22" r="3" fill="#276ef1" opacity="0.9">
            <animate attributeName="r"       values="2.5;4;2.5"   dur="2.2s" begin="0.73s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2.2s" begin="0.73s" repeatCount="indefinite" />
          </circle>
          <circle cx="24" cy="22" r="5.5" fill="none" stroke="#276ef1" strokeWidth="0.8" opacity="0">
            <animate attributeName="r"       values="3;7;3"     dur="2.2s" begin="0.73s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0;0.5" dur="2.2s" begin="0.73s" repeatCount="indefinite" />
          </circle>

          {/* Bottom node */}
          <circle cx="29" cy="33" r="3" fill="#00d4ff" opacity="0.9">
            <animate attributeName="r"       values="2.5;4;2.5"   dur="2.2s" begin="1.46s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2.2s" begin="1.46s" repeatCount="indefinite" />
          </circle>
          <circle cx="29" cy="33" r="5.5" fill="none" stroke="#00d4ff" strokeWidth="0.8" opacity="0">
            <animate attributeName="r"       values="3;7;3"     dur="2.2s" begin="1.46s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0;0.6" dur="2.2s" begin="1.46s" repeatCount="indefinite" />
          </circle>

          {/* Small connecting dots on spine for extra circuit feel */}
          <circle cx="12" cy="11" r="1.5" fill="rgba(0,212,255,0.5)" />
          <circle cx="12" cy="22" r="1.5" fill="rgba(39,110,241,0.5)" />
          <circle cx="12" cy="33" r="1.5" fill="rgba(0,212,255,0.5)" />
        </svg>
      </div>

      {/* ── Wordmark ── */}
      <div className="flex flex-col leading-none">
        {/* Letters */}
        <div className="flex items-end" aria-label="Escose">
          {LETTERS.map((letter, i) => (
            <span
              key={i}
              className={`logo-letter ${letterClass}`}
              style={{ '--i': i }}
              aria-hidden="true"
            >
              {letter}
            </span>
          ))}
        </div>

        {/* "Technologies" typewriter sub-text */}
        <span className="logo-technologies" aria-hidden="true">
          Technologies
        </span>
      </div>
    </div>
  );
}
