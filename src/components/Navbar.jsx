import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { navLinks } from '../constants';
import { close, menu, escose_logo } from '../assets';
import styles from '../style';

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && navbar) {
        setNavbar(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [navbar]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-50">
      <div className="bg-slate-900 border-b border-slate-700/50 shadow-lg">
        <div className="justify-between pl-0 pr-2 mx-auto lg:max-w-7xl md:items-center md:flex md:pl-0 md:pr-4 h-20 md:h-24">
        <div>
          <div className="flex items-center justify-between h-full md:block">
            {/* Make logo clickable */}
            <Link to="/" className="cursor-pointer">
              <img
                src={escose_logo}
                alt="Escose Technologies - IT Staffing & Software Development Services"
                className="md:w-[200px] md:h-[60px] w-[160px] h-[48px] filter brightness-125 drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] hover:opacity-90 transition-opacity duration-300"
              />
            </Link>
            <div className="md:hidden">
              <button
                aria-label={navbar ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={navbar}
                onClick={() => setNavbar(!navbar)}
                className="p-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                <img
                  src={navbar ? close : menu}
                  alt=""
                  className="w-[28px] h-[28px] object-contain filter brightness-0 invert"
                />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ml-6 sm:ml-16 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <Link
                    to={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] transition-colors duration-300 ${
                      isActive(nav.id) ? 'text-brand-accent-500' : 'text-gray-300 hover:text-brand-primary-300'
                    }`}
                    onClick={() => {
                      if (nav.id === '/' && location.pathname === '/') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                      setNavbar(false);
                    }}
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="cursor-pointer py-3 px-6 text-white rounded-full transition-all duration-300 font-medium shadow-sm hover:shadow-lg bg-brand-gradient hover:brightness-110"
                  onClick={() => setNavbar(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </nav>
  );
}
