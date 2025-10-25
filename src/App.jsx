import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styles from './style';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const navbarOffsetPx = 100;
    if (location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - navbarOffsetPx;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('[data-scrollspy][id]'));
    if (sections.length === 0) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const scrollPos = window.scrollY + 120; // add offset so section counts when under navbar
        let activeId = '';
        for (const el of sections) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            activeId = el.id;
            break;
          }
        }
        const newHash = activeId ? `#${activeId}` : '';
        if (newHash !== location.hash) {
          const url = `${location.pathname}${newHash}`;
          window.history.replaceState(null, '', url);
        }
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  // Global spotlight effect
  useEffect(() => {
    const onMove = (e) => {
      document.documentElement.style.setProperty('--spotlight-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--spotlight-y', `${e.clientY}px`);
    };
    const onLeave = () => {
      document.documentElement.style.setProperty('--spotlight-x', `-9999px`);
      document.documentElement.style.setProperty('--spotlight-y', `-9999px`);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseleave', onLeave);
    onLeave();
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  // Scroll reveal: observe elements with data-animate
  useEffect(() => {
    const animated = Array.from(document.querySelectorAll('[data-animate]'));
    if (animated.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('sr-show');
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
    );
    animated.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [location.pathname]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-slate-100 relative overflow-hidden">
      {/* Global spotlight overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-40"
        style={{
          background:
            'radial-gradient(2000px 2000px at var(--spotlight-x, -9999px) var(--spotlight-y, -9999px), rgba(59,130,246,0.12), transparent 60%)',
          mixBlendMode: 'screen',
        }}
      />
      {/* Navbar - Dark theme to match overall design */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full bg-gradient-to-r from-slate-900/85 via-slate-800/85 to-slate-900/85 backdrop-blur-sm border-b border-cyan-400/15 shadow-lg shadow-gray-900/40">
        <div className={`pl-0 pr-6 sm:pr-16 ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="relative">
        <Outlet />
      </div>
      
      {/* Footer - Dark theme */}
      <div className={`bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-cyan-400/15 ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
