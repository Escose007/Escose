import { useState, useEffect, useRef } from 'react';
import styles from '../style';

const clientCompanies = [
  "HS Control and Systems", "TechVenture Solutions", "StartupHub Labs", "InnovateFlow",
  "CloudScale Dynamics", "DataStream Innovations", "AgileTech Partners", "NextGen Ventures",
  "DigitalBridge Co", "SwiftStart Technologies", "ProActive Solutions", "Velocity Labs",
  "SmartScale Systems", "FutureForward Tech", "RapidDeploy Inc", "CodeCraft Studios",
  "InnovateSphere", "TechMomentum", "StartupStack", "DevFlow Solutions",
  "ScaleUp Dynamics", "CloudFirst Ventures", "AgileMind Technologies", "NextWave Systems",
  "TechPulse Innovations"
];

// Windows tile color schemes
const tileColors = [
  { bg: 'from-blue-500 to-blue-600', text: 'text-white' },
  { bg: 'from-cyan-500 to-cyan-600', text: 'text-white' },
  { bg: 'from-purple-500 to-purple-600', text: 'text-white' },
  { bg: 'from-green-500 to-green-600', text: 'text-white' },
  { bg: 'from-orange-500 to-orange-600', text: 'text-white' },
  { bg: 'from-pink-500 to-pink-600', text: 'text-white' },
  { bg: 'from-indigo-500 to-indigo-600', text: 'text-white' },
  { bg: 'from-teal-500 to-teal-600', text: 'text-white' },
];

// Shuffle array function
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const ClientLogos = () => {
  const [displayedCompanies, setDisplayedCompanies] = useState([]);
  const [fadingTiles, setFadingTiles] = useState(new Set());
  const [fadeIndex, setFadeIndex] = useState(0);
  const timeoutsRef = useRef([]);

  // Initialize with shuffled companies
  useEffect(() => {
    setDisplayedCompanies(shuffleArray(clientCompanies).slice(0, 12));
  }, []);

  // Continuous flipping - Windows 8 style
  useEffect(() => {
    const numTiles = displayedCompanies.length;
    if (numTiles === 0) return;

    // Clear all previous timeouts
    timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
    timeoutsRef.current = [];

    // Function to fade a single tile
    const fadeTile = (tileIndex) => {
      // Add to fading set to start animation
      setFadingTiles(prev => new Set([...prev, tileIndex]));

      // After fade out completes (half duration), update the company
      const timeout1 = setTimeout(() => {
        const shuffled = shuffleArray(clientCompanies);
        setDisplayedCompanies(prev => {
          const newDisplay = [...prev];
          // Get a random company that's different from current
          let newCompany;
          do {
            newCompany = shuffled[Math.floor(Math.random() * shuffled.length)];
          } while (newCompany === prev[tileIndex] && shuffled.length > 1);
          newDisplay[tileIndex] = newCompany;
          return newDisplay;
        });
        setFadeIndex(prev => prev + 1);
      }, 5000); // Half of fade duration (10000ms / 2) - fade out complete

      // Remove from fading set after animation completes and reset
      const timeout2 = setTimeout(() => {
        setFadingTiles(prev => {
          const newSet = new Set(prev);
          newSet.delete(tileIndex);
          return newSet;
        });
      }, 10000); // Full fade duration (10 seconds)

      timeoutsRef.current.push(timeout1, timeout2);
    };

    // Schedule next fade for a tile
    const scheduleNextFade = (tileIndex) => {
      // Wait for current animation to complete (10s) + small gap before next fade
      const delay = 10000 + Math.random() * 2000 + 1000; // 11-13 seconds
      const timeout = setTimeout(() => {
        fadeTile(tileIndex);
        scheduleNextFade(tileIndex); // Schedule the next fade recursively
      }, delay);
      timeoutsRef.current.push(timeout);
    };

    // Initialize staggered fades for all tiles
    // Each tile starts at a different time to create continuous effect
    for (let i = 0; i < numTiles; i++) {
      // Stagger initial delays so tiles fade continuously
      // First tile starts immediately, others start with delays
      const initialDelay = i * 600 + Math.random() * 400;
      
      const timeout = setTimeout(() => {
        fadeTile(i);
        scheduleNextFade(i); // Schedule continuous fades
      }, initialDelay);
      
      timeoutsRef.current.push(timeout);
    }

    return () => {
      timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
      timeoutsRef.current = [];
    };
  }, [displayedCompanies.length]);

  return (
    <section className={`${styles.paddingY} ${styles.paddingX} ${styles.flexCenter} bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800`}>
      <div className={`${styles.boxWidth}`}>
        <div className="text-center mb-12" data-animate>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Trusted by <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Leading Companies</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            25+ companies worldwide trust Escose for their IT staffing and development needs
          </p>
        </div>

        {/* Client Logo Grid - Windows Tiles Style */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8" data-animate>
          {displayedCompanies.map((company, index) => {
            const colorScheme = tileColors[index % tileColors.length];
            const isFading = fadingTiles.has(index);
            return (
              <div
                key={`${company}-${index}-${fadeIndex}`}
                className="relative aspect-square tile-container"
              >
                <div
                  className={`relative w-full h-full rounded-lg bg-gradient-to-br ${colorScheme.bg} ${colorScheme.text} p-4 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer ${
                    isFading ? 'animate-fade' : ''
                  }`}
                  style={{ 
                    opacity: isFading ? undefined : 1,
                    willChange: isFading ? 'opacity' : 'auto'
                  }}
                >
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold mb-1">
                      {company.substring(0, 2).toUpperCase()}
                    </div>
                    <div className="text-[10px] md:text-xs font-medium leading-tight opacity-90">
                      {company.length > 20 ? company.substring(0, 20) + '...' : company}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>


        {/* Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12" data-animate>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">25+</div>
            <div className="text-gray-300 text-sm">Happy Clients</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">150+</div>
            <div className="text-gray-300 text-sm">Projects Delivered</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">98%</div>
            <div className="text-gray-300 text-sm">Client Retention</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">25+</div>
            <div className="text-gray-300 text-sm">Countries Served</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ClientLogos;


