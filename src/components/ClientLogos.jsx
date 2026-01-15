import { useEffect, useState } from 'react';
import styles from '../style';

const ClientLogos = () => {
  const clients = [
    {
      name: 'Emorphis',
      url: 'https://www.emorphis.com/',
      logo: 'https://www.emorphis.com/images/emorphis-technologies-logo-Black.png',
      feedback: 'Escose onboarded strong engineers fast and aligned with our sprint cadence.',
      staffingRange: '8 IT staffing',
      logoBgClass: 'bg-white'
    },
    {
      name: 'Greyloops',
      url: 'https://greyloops.com/',
      logo: 'https://greyloops.com/wp-content/uploads/2020/09/GreyLoop_Logo-01-1.png',
      feedback: 'Clear communication, dependable delivery, and consistent engineering quality.',
      staffingRange: '12 IT staffing',
      logoBgClass: 'bg-slate-900'
    },
    {
      name: '5Exceptions',
      url: 'https://5exceptions.com/',
      logo: 'https://5exceptions.com/images/new_home_page/logoone.svg',
      feedback: 'Quick ramp-up and proactive collaboration made scaling the team easy.',
      staffingRange: '5 IT staffing',
      logoBgClass: 'bg-white'
    },
    {
      name: 'Bespoke Technology',
      url: 'https://www.bespoketechnology.co/',
      logo: '/logos/bespoke.png',
      feedback: 'Reliable support, strong ownership, and smooth delivery throughout.',
      staffingRange: '5 IT staffing',
      logoBgClass: 'bg-white'
    }
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [logoErrors, setLogoErrors] = useState({});

  useEffect(() => {
    if (clients.length <= 1 || isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % clients.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [clients.length, isPaused]);

  const handleLogoError = (clientName) => {
    setLogoErrors((prev) => ({ ...prev, [clientName]: true }));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + clients.length) % clients.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % clients.length);
  };

  return (
    <section className={`${styles.paddingY} ${styles.paddingX} ${styles.flexCenter} bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800`}>
      <div className={`${styles.boxWidth}`}>
        <div className="text-center mb-12" data-animate>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Trusted by <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Leading Companies</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Companies worldwide trust Escose for IT staffing and development
          </p>
        </div>

        {/* Client Slider */}
        <div 
          className="relative mb-8" 
          data-animate
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute -left-12 -top-10 h-28 w-28 rounded-full bg-cyan-500/15 blur-2xl" />
          <div className="absolute right-6 top-6 h-16 w-16 rounded-full bg-blue-500/20 blur-xl" />
          <div className="absolute -right-10 bottom-8 h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl" />
          <div className="absolute left-8 bottom-6 h-20 w-20 rounded-full bg-blue-400/15 blur-xl" />

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {clients.map((client) => (
                <div key={client.name} className="min-w-full p-6 flex justify-center">
                  <div
                    className="group flex w-full md:w-1/2 min-h-[320px] flex-col md:flex-row items-center gap-6 rounded-3xl bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-800/70 text-slate-100 border border-white/10 p-7 shadow-[0_20px_60px_rgba(8,47,73,0.35)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(14,165,233,0.35)]"
                  >
                    <div className="flex w-full md:w-1/2 justify-center">
                      <div
                        className={`w-[180px] h-[180px] md:w-[200px] md:h-[200px] rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 ${
                          client.logoBgClass || 'bg-white'
                        }`}
                      >
                        {logoErrors[client.name] ? (
                          <div className="flex flex-col items-center justify-center text-slate-400">
                            <svg className="w-16 h-16 md:w-20 md:h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-xs mt-1">{client.name}</span>
                          </div>
                        ) : (
                          <img
                            src={client.logo}
                            alt={`${client.name} logo`}
                            className="object-contain w-36 h-36 md:w-40 md:h-40"
                            loading="lazy"
                            onError={() => handleLogoError(client.name)}
                          />
                        )}
                      </div>
                    </div>
                    <div className="flex w-full md:w-1/2 flex-col gap-4 text-center md:text-left">
                      <div className="flex flex-col gap-1">
                        <span className="text-lg font-semibold text-white">
                          {client.name}
                        </span>
                        <span className="text-sm font-medium text-cyan-300">
                          {client.staffingRange} with Escose
                        </span>
                      </div>
                      <p className="text-base text-gray-200 leading-relaxed">
                        “{client.feedback}”
                      </p>
                      <a
                        href={client.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold text-cyan-200 transition-colors hover:text-cyan-100"
                      >
                        Visit website →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {clients.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-slate-900/70 p-2 text-white/80 transition hover:bg-slate-900 hover:text-white"
                aria-label="Previous client"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-slate-900/70 p-2 text-white/80 transition hover:bg-slate-900 hover:text-white"
                aria-label="Next client"
              >
                ›
              </button>
            </>
          )}
        </div>

        {clients.length > 1 && (
          <div className="mt-6 flex items-center justify-center gap-2">
            {clients.map((client, index) => (
              <button
                key={client.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  index === activeIndex
                    ? 'bg-cyan-300 scale-110'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to ${client.name}`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default ClientLogos;


