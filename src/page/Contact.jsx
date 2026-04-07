import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import styles from '../style';
import ContactUs from '../components/ContactUs';
import OutsourcingForm from '../components/OutsourcingForm';
import JobApplicationForm from '../components/JobApplicationForm';

// ─── Tab config ──────────────────────────────────────────────────────────────

const TABS = [
  {
    id: 'outsourcing',
    icon: '🚀',
    label: 'Hire Developers',
    sub: 'Staff augmentation & teams',
    color: 'cyan',
    stat: '8 days',
    statLabel: 'Avg. first CVs',
    description: 'Get pre-vetted engineers matched to your stack within days, not months.',
  },
  {
    id: 'general',
    icon: '💬',
    label: 'General Inquiry',
    sub: 'Projects & partnerships',
    color: 'blue',
    stat: '24 hrs',
    statLabel: 'Response time',
    description: 'Questions about services, pricing, or custom software projects.',
  },
  {
    id: 'job',
    icon: '🎯',
    label: 'Apply for a Job',
    sub: 'Join our talent pool',
    color: 'purple',
    stat: '3–5 days',
    statLabel: 'HR follow-up',
    description: 'Join our network of 500+ pre-vetted engineers placed with global clients.',
  },
];

const TAB_COLORS = {
  cyan:   { active: 'rgba(0,212,255,0.10)',   border: 'rgba(0,212,255,0.4)',   text: '#67e8f9',  iconBg: 'rgba(0,212,255,0.12)',  glow: 'rgba(0,212,255,0.15)',  accent: '#00d4ff' },
  blue:   { active: 'rgba(39,110,241,0.10)',  border: 'rgba(39,110,241,0.4)',  text: '#93c5fd',  iconBg: 'rgba(39,110,241,0.12)', glow: 'rgba(39,110,241,0.15)', accent: '#276ef1' },
  purple: { active: 'rgba(139,92,246,0.10)',  border: 'rgba(139,92,246,0.4)',  text: '#c4b5fd',  iconBg: 'rgba(139,92,246,0.12)', glow: 'rgba(139,92,246,0.15)', accent: '#8b5cf6' },
};

// ─── Process steps ────────────────────────────────────────────────────────────

const PROCESS_STEPS = {
  outsourcing: [
    { step: '01', label: 'Submit requirements', desc: 'Share your tech stack and team size' },
    { step: '02', label: 'We match candidates', desc: 'AI-assisted vetting from our 500+ pool' },
    { step: '03', label: 'Receive CVs in 8 days', desc: 'Interview-ready, pre-screened profiles' },
    { step: '04', label: 'Onboard & start', desc: 'Seamless handoff, we manage contracts' },
  ],
  general: [
    { step: '01', label: 'Send your message', desc: 'Describe your project or question' },
    { step: '02', label: 'We review', desc: 'Dedicated account manager assigned' },
    { step: '03', label: 'Response within 24 hrs', desc: 'Detailed reply on business days' },
    { step: '04', label: 'Discovery call', desc: 'Free 30-min consultation if needed' },
  ],
  job: [
    { step: '01', label: 'Submit application', desc: 'Basic info + email your CV' },
    { step: '02', label: 'HR screening', desc: 'Technical profile assessment' },
    { step: '03', label: 'HR reaches out', desc: 'Within 3–5 business days' },
    { step: '04', label: 'Placement & onboarding', desc: 'Matched to a global client' },
  ],
};

// ─── Main component ──────────────────────────────────────────────────────────

const Contact = () => {
  const [activeTab, setActiveTab] = useState('outsourcing');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const tab    = searchParams.get('tab');
    const action = searchParams.get('action');
    if (tab === 'general')                                              setActiveTab('general');
    else if (tab === 'outsourcing')                                     setActiveTab('outsourcing');
    else if (tab === 'job' || tab === 'career' || tab === 'application') setActiveTab('job');
    else if (action === 'hire' || action === 'hiring' || action === 'developers') setActiveTab('outsourcing');
    else if (action === 'apply' || action === 'job' || action === 'career')        setActiveTab('job');
  }, [searchParams]);

  const activeColor = TAB_COLORS[TABS.find(t => t.id === activeTab)?.color || 'cyan'];
  const activeTabData = TABS.find(t => t.id === activeTab);
  const processSteps = PROCESS_STEPS[activeTab];

  return (
    <>
      <Helmet>
        <title>Contact Escose Technologies | Get Free Consultation | Hire Developers</title>
        <meta name="description" content="Contact Escose Technologies for IT staffing, software development, and GenAI solutions. Get free consultation, hire pre-vetted developers, or discuss your project requirements. Response within 24 hours." />
        <meta name="keywords" content="contact escose, hire developers India, IT staffing inquiry, software development consultation, get free quote, free consultation IT company, hire remote developers, staff augmentation request, IT outsourcing inquiry, contact Bangalore IT company, apply for developer job, software development quote, GenAI project consultation" />
        <link rel="canonical" href="https://escose.com/contact" />
        <meta property="og:title" content="Contact Escose Technologies | Get Free Consultation" />
        <meta property="og:description" content="Get in touch for IT staffing, software development, or GenAI solutions. Free consultation available." />
        <meta property="og:url" content="https://escose.com/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact Escose Technologies" />
        <meta name="twitter:description" content="Get free consultation for IT staffing and software development needs." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Escose Technologies",
            "description": "Contact Escose Technologies for IT staffing, software development, and GenAI solutions.",
            "mainEntity": {
              "@type": "Organization",
              "name": "Escose Technologies",
              "url": "https://escose.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "190C, SAI-KRUPA, 6TH MAIN 16TH CROSS, BTM 2ND STAGE, N S PALYA",
                "addressLocality": "Bangalore",
                "addressRegion": "Karnataka",
                "postalCode": "560076",
                "addressCountry": "IN"
              },
              "contactPoint": [{
                "@type": "ContactPoint",
                "telephone": "+91-7416857052",
                "email": "info@escose.com",
                "contactType": "Sales",
                "areaServed": "Global",
                "availableLanguage": ["English"]
              }]
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home",    "item": "https://escose.com/" },
              { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://escose.com/contact" }
            ]
          })}
        </script>
      </Helmet>

      <div style={{ background: 'linear-gradient(180deg, #080e1a 0%, #0f172a 40%, #080e1a 100%)', minHeight: '100vh' }}>

        {/* ── Hero ── */}
        <div className="w-full relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #080e1a 0%, #0f172a 60%, #080e1a 100%)' }}>

          {/* Grid + beams */}
          <div className="absolute inset-0 hero-grid-lines opacity-60 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.09) 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)' }} />
          <div className="absolute top-0 right-[20%] w-[1px] h-full pointer-events-none"
            style={{ background: 'linear-gradient(180deg, transparent, rgba(0,212,255,0.12), transparent)', transform: 'rotate(-20deg) scaleY(1.5)', filter: 'blur(1px)', opacity: 0.6 }} />
          <div className="absolute top-0 left-[30%] w-[1px] h-full pointer-events-none"
            style={{ background: 'linear-gradient(180deg, transparent, rgba(139,92,246,0.1), transparent)', transform: 'rotate(15deg) scaleY(1.5)', filter: 'blur(1px)', opacity: 0.5 }} />

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 pt-36 pb-14">
            {/* Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
                style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.25)', color: '#67e8f9' }}>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                </span>
                We respond within 24 hours on business days
              </div>
            </div>

            {/* Headline */}
            <div className="text-center mb-8">
              <h1 className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl mb-5 leading-tight">
                <span className="text-slate-100">Let's Build</span>{' '}
                <span className="animated-gradient-text">Something Great</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Whether you need elite engineers, a GenAI product, or a custom software solution —
                we're one message away.
              </p>
            </div>

            {/* Floating badges */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {[
                { icon: '📍', label: 'Bangalore, India',  sub: 'BTM 2nd Stage',   delay: '0s',   color: 'cyan'   },
                { icon: '📞', label: '+91 7416 857052',   sub: 'Mon–Sat 9am–7pm', delay: '0.3s', color: 'blue'   },
                { icon: '✉️', label: 'info@escose.com',   sub: '< 24 hr reply',   delay: '0.6s', color: 'purple' },
                { icon: '⚡', label: '2-Week Onboard',     sub: 'IT Staffing',     delay: '0.9s', color: 'cyan'   },
              ].map(({ icon, label, sub, delay, color }) => {
                const c = TAB_COLORS[color];
                return (
                  <div key={label}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-2xl contact-badge"
                    style={{ background: c.active, border: `1px solid ${c.border}`, animationDelay: delay, backdropFilter: 'blur(12px)' }}>
                    <span className="text-lg">{icon}</span>
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
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(8,14,26,0.6))' }} />
        </div>

        {/* ── Tab Switcher ── */}
        <div className={`${styles.paddingX} ${styles.flexCenter} pt-10 pb-0`}>
          <div className={`${styles.boxWidth}`}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {TABS.map(tab => {
                const c = TAB_COLORS[tab.color];
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className="relative flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-300"
                    style={isActive ? {
                      background: c.active,
                      border: `1px solid ${c.border}`,
                      boxShadow: `0 8px 32px ${c.glow}`,
                    } : {
                      background: 'rgba(15,23,42,0.6)',
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
                    {/* Active top line */}
                    {isActive && (
                      <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                        style={{ background: `linear-gradient(90deg, ${c.accent}, rgba(39,110,241,0.8))` }} />
                    )}

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 transition-all duration-300"
                      style={{ background: isActive ? c.iconBg : 'rgba(255,255,255,0.04)', border: `1px solid ${isActive ? c.border : 'rgba(255,255,255,0.07)'}` }}>
                      {tab.icon}
                    </div>

                    {/* Labels */}
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm transition-colors duration-300"
                        style={{ color: isActive ? c.text : '#cbd5e1' }}>
                        {tab.label}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 truncate">{tab.sub}</div>
                    </div>

                    {/* Stat */}
                    {isActive && (
                      <div className="shrink-0 text-right">
                        <div className="text-sm font-bold" style={{ color: c.text }}>{tab.stat}</div>
                        <div className="text-[10px] text-slate-600 whitespace-nowrap">{tab.statLabel}</div>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Active description strip */}
            <div className="mt-3 px-4 py-3 rounded-xl flex items-center gap-3"
              style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${activeColor.border}20` }}>
              <div className="w-1 h-8 rounded-full shrink-0" style={{ background: `linear-gradient(180deg, ${activeColor.accent}, #276ef1)` }} />
              <p className="text-sm text-slate-400">{activeTabData?.description}</p>
            </div>
          </div>
        </div>

        {/* ── Process steps strip ── */}
        <div className={`${styles.paddingX} ${styles.flexCenter} pt-8 pb-6`}>
          <div className={`${styles.boxWidth}`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {processSteps.map(({ step, label, desc }, i) => (
                <div key={step} className="relative flex items-start gap-3 p-4 rounded-xl"
                  style={{ background: 'rgba(15,23,42,0.7)', border: '1px solid rgba(255,255,255,0.06)', animation: `item-slide-in 0.4s ease both`, animationDelay: `${i * 0.08}s` }}>
                  {/* Connector line (not on last) */}
                  {i < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px z-10"
                      style={{ background: `linear-gradient(90deg, ${activeColor.accent}60, transparent)` }} />
                  )}
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0"
                    style={{ background: activeColor.active, border: `1px solid ${activeColor.border}`, color: activeColor.text }}
                  >
                    {step}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-200">{label}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Active divider line ── */}
        <div className={`${styles.paddingX} ${styles.flexCenter} pb-8`}>
          <div className={`${styles.boxWidth}`}>
            <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${activeColor.border}, transparent)`, opacity: 0.5 }} />
          </div>
        </div>

        {/* ── Form Area ── */}
        <div className={`${styles.paddingX} ${styles.flexCenter} pb-16`}>
          <div className={`${styles.boxWidth}`}>
            {activeTab === 'general'     && <ContactUs />}
            {activeTab === 'outsourcing' && <OutsourcingForm />}
            {activeTab === 'job'         && <JobApplicationForm />}
          </div>
        </div>

        {/* ── Trust / Bottom strip ── */}
        <div className={`${styles.paddingX} ${styles.flexCenter} pb-24`}>
          <div className={`${styles.boxWidth}`}>

            {/* Divider */}
            <div className="h-px w-full mb-10" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)' }} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Quick contact */}
              <div className="p-6 rounded-2xl"
                style={{ background: 'linear-gradient(145deg, rgba(15,23,42,0.9), rgba(30,41,59,0.7))', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Direct Contact</div>
                <div className="space-y-4">
                  {[
                    { icon: '✉️', val: 'info@escose.com',   href: 'mailto:info@escose.com',  color: '#c4b5fd' },
                    { icon: '📞', val: '+91 7416 857052',   href: 'tel:+917416857052',        color: '#93c5fd' },
                    { icon: '📍', val: 'BTM 2nd Stage, Bangalore 560076', href: null, color: '#67e8f9' },
                  ].map(({ icon, val, href, color }) => (
                    <div key={val} className="flex items-center gap-3">
                      <span className="text-lg">{icon}</span>
                      {href
                        ? <a href={href} className="text-sm transition-colors" style={{ color }} onMouseEnter={e => e.target.style.opacity = '0.8'} onMouseLeave={e => e.target.style.opacity = '1'}>{val}</a>
                        : <span className="text-sm text-slate-400">{val}</span>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Response SLA */}
              <div className="p-6 rounded-2xl"
                style={{ background: 'linear-gradient(145deg, rgba(15,23,42,0.9), rgba(30,41,59,0.7))', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Response Times</div>
                <div className="space-y-3">
                  {[
                    { label: 'General inquiries',   time: '< 24 hours',   color: '#67e8f9' },
                    { label: 'Hiring requests',     time: '8 business days', color: '#86efac' },
                    { label: 'Job applications',    time: '3–5 business days', color: '#c4b5fd' },
                    { label: 'Urgent escalations',  time: 'Same day',        color: '#fbbf24' },
                  ].map(({ label, time, color }) => (
                    <div key={label} className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">{label}</span>
                      <span className="text-xs font-semibold" style={{ color }}>{time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust stats */}
              <div className="p-6 rounded-2xl"
                style={{ background: 'linear-gradient(145deg, rgba(15,23,42,0.9), rgba(30,41,59,0.7))', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Why Escose</div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { val: '500+', lbl: 'Engineers', color: '#67e8f9' },
                    { val: '98%',  lbl: 'Success rate', color: '#86efac' },
                    { val: '60%',  lbl: 'Cost savings', color: '#c4b5fd' },
                    { val: '2 wk', lbl: 'Onboarding', color: '#fbbf24' },
                  ].map(({ val, lbl, color }) => (
                    <div key={lbl} className="p-3 rounded-xl text-center"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <div className="text-base font-bold" style={{ color }}>{val}</div>
                      <div className="text-[10px] text-slate-600 mt-0.5">{lbl}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Contact;
