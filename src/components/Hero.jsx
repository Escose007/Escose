import styles from '../style';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import useTilt3D from './hooks/useTilt3D';

const Hero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const handleMove = (e) => {
      const rect = sectionEl.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      sectionEl.style.setProperty('--spotlight-x', `${x}px`);
      sectionEl.style.setProperty('--spotlight-y', `${y}px`);
    };

    const handleLeave = () => {
      sectionEl.style.setProperty('--spotlight-x', `-9999px`);
      sectionEl.style.setProperty('--spotlight-y', `-9999px`);
    };

    sectionEl.addEventListener('mousemove', handleMove);
    sectionEl.addEventListener('mouseleave', handleLeave);
    handleLeave();
    return () => {
      sectionEl.removeEventListener('mousemove', handleMove);
      sectionEl.removeEventListener('mouseleave', handleLeave);
    };
  }, []);
  return (
    <section
      id="home"
      data-scrollspy
      ref={sectionRef}
      className={`flex md:flex-row flex-col ${styles.paddingY} pt-32 md:pt-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-slate-100 relative overflow-hidden`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-400/5 rounded-full blur-2xl"></div>
      </div>

      {/* Spotlight overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(2000px 2000px at var(--spotlight-x, -9999px) var(--spotlight-y, -9999px), rgba(59,130,246,0.15), transparent 60%)',
          mixBlendMode: 'screen',
        }}
      />

      <div
        className={`flex-1 ${styles.flexStart} flex-col px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 relative z-10`}
      >
        <div className="flex flex-row justify-between items-center w-full mb-8" data-animate>
          <h1 className="text-slate-100 flex-1 font-poppins font-bold ss:text-[64px] text-[46px] ss:leading-[84px] leading-[56px]">
            Hire Elite Developers in <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">2 Weeks</span>
          </h1>
        </div>
        <h2 className="text-xl text-gray-300 mb-4" data-animate="left">
          IT Staffing & Engineering Talent Solutions - Scale Your Team Fast
        </h2>
        
        {/* Tech Stack Badges - All 9 Roles */}
        <div className="mb-6 flex flex-wrap gap-2" data-animate>
          {['Backend', 'Frontend', 'Full Stack', 'DevOps', 'QA', 'Data Engineer', 'GenAI', 'Android', 'iOS'].map((role, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 rounded-full text-sm font-medium text-cyan-300 hover:border-cyan-400/60 hover:bg-cyan-500/30 transition-all"
            >
              {role}
            </span>
          ))}
        </div>
        
        {/* Value Proposition Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full border border-cyan-400/30" data-animate>
          <span className="text-cyan-400 font-semibold">⚡ Save up to 60%</span>
          <span className="text-gray-400">|</span>
          <span className="text-cyan-400 font-semibold">🎯 98% Success Rate</span>
          <span className="text-gray-400">|</span>
          <span className="text-cyan-400 font-semibold">✅ Replacement Guarantee</span>
        </div>
        
        {/* New Value Proposition */}
        <div className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10" data-animate>
          <p className="text-2xl font-semibold text-cyan-300 mb-2">
            Pre-Vetted Talent + Fast Onboarding + Cost Savings = Success
          </p>
          <p className="text-lg text-gray-300">
            Staff augmentation, dedicated teams, custom development & GenAI solutions - all in one place
          </p>
        </div>
        
        <p className={`${styles.paragraph} max-w-[600px] mb-8 text-gray-300 text-lg leading-relaxed`} data-animate="right">
          Access 500+ pre-vetted engineers across Backend, Frontend, Full Stack, DevOps, QA, Data Engineering, GenAI, Android, and iOS roles. 
          We deliver the right talent in 2 weeks with flexible engagement models and 60% cost savings. 
          We also offer custom software development as a secondary service.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10" data-animate>
          <Link
            to="/outsourcing"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 text-center"
          >
            Hire Developers Now
          </Link>
          <Link
            to="/#services"
            className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-center backdrop-blur-sm"
          >
            View All Services
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8">
          <div className="text-center transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:drop-shadow-[0_4px_20px_rgba(34,211,238,0.25)]">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">500+</div>
            <div className="text-gray-400">Expert Developers</div>
          </div>
          <div className="text-center transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:drop-shadow-[0_4px_20px_rgba(34,211,238,0.25)]">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">2 Weeks</div>
            <div className="text-gray-400">Avg. Time-to-Hire</div>
          </div>
          <div className="text-center transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:drop-shadow-[0_4px_20px_rgba(34,211,238,0.25)]">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">98%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
          <div className="text-center transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:drop-shadow-[0_4px_20px_rgba(34,211,238,0.25)]">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">24/7</div>
            <div className="text-gray-400">Global Support</div>
          </div>
        </div>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative z-10 px-6 sm:px-8 md:px-12`}
      >
        <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
          {/* Main Visual Element */}
          <div className="relative">
            <div className="w-[min(384px,85vw)] h-[min(384px,85vw)] bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-cyan-400/30" style={{ transform: 'translateZ(40px)' }}>
              <div className="w-[90%] h-[90%] bg-gradient-to-br from-blue-600/30 to-cyan-500/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-400/30" style={{ transform: 'translateZ(60px)' }}>
                <div className="text-center" style={{ transform: 'translateZ(80px)' }}>
                  <div className="text-6xl mb-4">👥</div>
                  <div className="text-2xl font-bold text-cyan-300">Elite Developers</div>
                  <div className="text-gray-300">Pre-vetted talent ready in 2 weeks</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-4 -left-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-400/30 animate-pulse transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/30 cursor-default" style={{ transform: 'translateZ(30px)' }}>
            <div className="text-2xl">⚡</div>
            <div className="text-sm font-semibold text-cyan-300">2 Weeks Hire</div>
          </div>
          
          <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-400/30 animate-pulse transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/30 cursor-default" style={{ transform: 'translateZ(20px)' }}>
            <div className="text-2xl">💰</div>
            <div className="text-sm font-semibold text-blue-300">Save 60%</div>
          </div>
          
          <div className="absolute top-1/2 -right-8 bg-gradient-to-r from-cyan-600/20 to-blue-500/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-400/30 animate-pulse transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/30 cursor-default" style={{ transform: 'translateZ(25px)' }}>
            <div className="text-2xl">✅</div>
            <div className="text-sm font-semibold text-cyan-300">Pre-Vetted</div>
          </div>

          <div className="absolute top-1/4 -left-8 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-400/30 animate-pulse transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/30 cursor-default" style={{ transform: 'translateZ(15px)' }}>
            <div className="text-2xl">🌍</div>
            <div className="text-sm font-semibold text-blue-300">Global Reach</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
