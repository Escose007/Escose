import { services } from '../constants';
import styles from '../style';
import { Link } from 'react-router-dom';

const CARD_ACCENT = [
  { glow: 'rgba(0,212,255,0.22)',   border: 'rgba(0,212,255,0.35)',   iconBg: 'rgba(0,212,255,0.12)',   iconBorder: 'rgba(0,212,255,0.3)'   },
  { glow: 'rgba(99,102,241,0.22)',  border: 'rgba(99,102,241,0.35)',  iconBg: 'rgba(99,102,241,0.12)',  iconBorder: 'rgba(99,102,241,0.3)'  },
  { glow: 'rgba(168,85,247,0.22)',  border: 'rgba(168,85,247,0.35)',  iconBg: 'rgba(168,85,247,0.12)',  iconBorder: 'rgba(168,85,247,0.3)'  },
  { glow: 'rgba(20,184,166,0.22)',  border: 'rgba(20,184,166,0.35)',  iconBg: 'rgba(20,184,166,0.12)',  iconBorder: 'rgba(20,184,166,0.3)'  },
];

const TAG_STYLES = {
  purple: { bg: 'rgba(168,85,247,0.15)', border: 'rgba(168,85,247,0.4)', text: '#c4b5fd' },
  cyan:   { bg: 'rgba(0,212,255,0.12)',  border: 'rgba(0,212,255,0.4)',  text: '#67e8f9' },
};

const Service = () => (
  <div id="services" data-scrollspy className={`${styles.flexCenter} flex-col flex-wrap sm:mb-20 mb-6 mt-10 text-white`}>

    {/* ── Section header ── */}
    <div className="text-center mb-4" data-animate>
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 text-cyan-400 text-sm font-semibold mb-4"
        style={{ background: 'rgba(0,212,255,0.06)' }}>
        ✦ What We Do
      </div>
      <h2 className="text-4xl font-bold animated-gradient-text">
        OUR SERVICES
      </h2>
    </div>

    <div className={`${styles.flexCenter} text-center text-lg text-gray-400 xl:w-2/3 mb-14`} data-animate="fade">
      One brand. Every dimension of software. From hiring elite engineers to shipping GenAI products
      and autonomous agentic systems — on the same cutting-edge tech stack, at any scale.
    </div>

    <ul className={`${styles.flexCenter} flex-row flex-wrap justify-center gap-6 mb-6`}>
      {services.map((service, idx) => {
        const accent   = CARD_ACCENT[idx % CARD_ACCENT.length];
        const isPrimary = service.isPrimary;

        return (
          <li
            key={service.title}
            data-animate={idx % 2 === 0 ? 'left' : 'right'}
            className="relative group w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] xl:w-[28%]"
            style={{ minHeight: 370 }}
          >
            {/* Glow halo on hover */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `radial-gradient(circle at 50% 0%, ${accent.glow}, transparent 65%)`,
                filter: 'blur(1px)',
              }}
            />

            {/* Spinning conic border on hover */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: isPrimary
                  ? 'conic-gradient(from var(--border-angle,0deg), #00d4ff, #276ef1, #9b59b6, #276ef1, #00d4ff)'
                  : `conic-gradient(from var(--border-angle,0deg), ${accent.border}, transparent 55%, ${accent.border})`,
                padding: '1.5px',
                borderRadius: '16px',
                animation: 'border-spin 3s linear infinite',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            />

            {/* Card body */}
            <div
              className={`relative flex flex-col justify-between h-full rounded-2xl p-7 overflow-hidden transition-all duration-300 group-hover:-translate-y-2 blog-card-shine service-card-top`}
              style={{
                background: isPrimary
                  ? 'linear-gradient(145deg, rgba(0,212,255,0.09), rgba(39,110,241,0.11))'
                  : 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                backdropFilter: 'blur(20px)',
                border: isPrimary
                  ? '1px solid rgba(0,212,255,0.3)'
                  : `1px solid rgba(255,255,255,0.08)`,
                minHeight: 370,
                boxShadow: isPrimary ? '0 8px 32px rgba(0,212,255,0.08)' : 'none',
              }}
              onMouseEnter={e => {
                if (!isPrimary) {
                  e.currentTarget.style.borderColor = accent.border;
                  e.currentTarget.style.boxShadow = `0 20px 60px ${accent.glow}`;
                }
              }}
              onMouseLeave={e => {
                if (!isPrimary) {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
            >
              {/* Tag badge */}
              {service.isNew && service.tag && (
                <div className="absolute top-4 right-4">
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold tracking-wide"
                    style={TAG_STYLES[service.tagColor] ? {
                      background: TAG_STYLES[service.tagColor].bg,
                      border: `1px solid ${TAG_STYLES[service.tagColor].border}`,
                      color: TAG_STYLES[service.tagColor].text,
                    } : {}}>
                    ✦ {service.tag}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div
                className="w-[72px] h-[72px] mx-auto mb-5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0"
                style={{
                  background: isPrimary ? 'rgba(0,212,255,0.15)' : accent.iconBg,
                  border: `1px solid ${isPrimary ? 'rgba(0,212,255,0.35)' : accent.iconBorder}`,
                  boxShadow: `0 4px 24px ${accent.glow}`,
                }}
              >
                {service.emoji ? (
                  <span className="text-3xl group-hover:animate-bounce">{service.emoji}</span>
                ) : service.img ? (
                  <img src={service.img} alt={service.title} loading="lazy"
                    className="object-contain w-10 h-10 filter brightness-150" />
                ) : (
                  <span className="material-icons text-cyan-400 text-3xl">{service.icon}</span>
                )}
              </div>

              <div className="text-center text-xl text-white mb-3 font-semibold">{service.title}</div>

              <div className="text-center text-gray-400 text-sm leading-relaxed flex-1 px-1 mb-5">
                {service.description}
              </div>

              {/* CTA button */}
              {isPrimary ? (
                <Link to="/outsourcing"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-5 py-3 rounded-xl font-medium transition-all duration-300 text-sm text-center block hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30">
                  Hire Engineers Now
                </Link>
              ) : service.tag === 'Cutting Edge' ? (
                <Link to="/services/genai-projects"
                  className="w-full text-white px-5 py-3 rounded-xl font-medium transition-all duration-300 text-sm text-center block border border-purple-400/30 hover:border-purple-400/60 hover:bg-purple-500/10">
                  Explore GenAI Projects
                </Link>
              ) : service.tag === 'Next-Gen AI' ? (
                <Link to="/services/agentic-projects"
                  className="w-full text-white px-5 py-3 rounded-xl font-medium transition-all duration-300 text-sm text-center block border border-cyan-400/30 hover:border-cyan-400/60 hover:bg-cyan-500/10">
                  Explore Agentic Projects
                </Link>
              ) : (
                <Link to="/services"
                  className="w-full text-white px-5 py-3 rounded-xl font-medium transition-all duration-300 text-sm text-center block border border-white/12 hover:border-cyan-400/40 hover:bg-white/5">
                  Learn More →
                </Link>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  </div>
);

export default Service;
