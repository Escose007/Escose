const ContactUsHero = () => (
  <div className="w-full relative overflow-hidden"
    style={{ background: 'linear-gradient(135deg, #080e1a 0%, #0f172a 60%, #080e1a 100%)' }}>

    {/* Geometric grid */}
    <div className="absolute inset-0 hero-grid-lines opacity-60 pointer-events-none" />

    {/* Blobs */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
      style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.09) 0%, transparent 70%)' }} />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
      style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)' }} />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[80px] pointer-events-none"
      style={{ background: 'radial-gradient(ellipse, rgba(39,110,241,0.05) 0%, transparent 70%)' }} />

    {/* Diagonal beams */}
    <div className="absolute top-0 right-[20%] w-[1px] h-full pointer-events-none"
      style={{ background: 'linear-gradient(180deg, transparent, rgba(0,212,255,0.12), transparent)', transform: 'rotate(-20deg) scaleY(1.5)', filter: 'blur(1px)', opacity: 0.6 }} />
    <div className="absolute top-0 left-[30%] w-[1px] h-full pointer-events-none"
      style={{ background: 'linear-gradient(180deg, transparent, rgba(139,92,246,0.1), transparent)', transform: 'rotate(15deg) scaleY(1.5)', filter: 'blur(1px)', opacity: 0.5 }} />

    <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 pt-36 pb-16">

      {/* Section eyebrow */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
          style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.25)', color: '#67e8f9' }}>
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          We respond within 24 hours
        </div>
      </div>

      {/* Headline */}
      <div className="text-center mb-6">
        <h1 className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl mb-5 leading-tight">
          <span className="text-slate-100">Let's Build</span>{' '}
          <span className="animated-gradient-text">Something Great</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Whether you need elite engineers, a GenAI product, or a custom software solution —
          we're one message away.
        </p>
      </div>

      {/* Floating contact badges */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {[
          { icon: '📍', label: 'Bangalore, India', sub: 'BTM 2nd Stage', delay: '0s',   color: 'cyan'   },
          { icon: '📞', label: '+91 7416 857052',  sub: 'Mon–Sat, 9am–7pm', delay: '0.4s', color: 'blue'   },
          { icon: '✉️', label: 'info@escose.com',  sub: '< 24 hr reply',  delay: '0.8s', color: 'purple' },
          { icon: '⚡', label: '2-Week Hire',       sub: 'IT Staffing',    delay: '1.2s', color: 'cyan'   },
        ].map(({ icon, label, sub, delay, color }) => {
          const c = color === 'cyan'
            ? { bg: 'rgba(0,212,255,0.08)',   border: 'rgba(0,212,255,0.2)',   text: '#67e8f9' }
            : color === 'blue'
            ? { bg: 'rgba(39,110,241,0.08)',  border: 'rgba(39,110,241,0.2)',  text: '#93c5fd' }
            : { bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.2)', text: '#c4b5fd' };
          return (
            <div key={label}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl contact-badge"
              style={{ background: c.bg, border: `1px solid ${c.border}`, animationDelay: delay, backdropFilter: 'blur(12px)' }}>
              <span className="text-xl">{icon}</span>
              <div>
                <div className="text-sm font-semibold" style={{ color: c.text }}>{label}</div>
                <div className="text-xs text-slate-500">{sub}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
      style={{ background: 'linear-gradient(to bottom, transparent, rgba(8,14,26,0.4))' }} />
  </div>
);

export default ContactUsHero;
