import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { navLinks } from '../constants';
import { close, menu, escose_logo } from '../assets';
import styles from '../style';

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && navbar) {
        setNavbar(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [navbar]);

  const isActive = (path) => {
    if (path.includes('#')) {
      return false;
    }
    return location.pathname === path;
  };

  const handleDropdownToggle = (navId, e) => {
    e.preventDefault();
    setOpenDropdown(openDropdown === navId ? null : navId);
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
                className="p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded min-w-[44px] min-h-[44px] flex items-center justify-center"
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
                <li 
                  key={nav.id} 
                  className="relative"
                  onMouseEnter={() => nav.subItems && window.innerWidth >= 768 && setOpenDropdown(nav.id)}
                  onMouseLeave={() => nav.subItems && window.innerWidth >= 768 && setOpenDropdown(null)}
                >
                  {nav.subItems ? (
                    <>
                      <button
                        onClick={(e) => handleDropdownToggle(nav.id, e)}
                        className={`font-poppins font-medium cursor-pointer text-[16px] transition-colors duration-300 flex items-center gap-1 ${
                          openDropdown === nav.id ? 'text-brand-accent-500' : 'text-gray-300 hover:text-brand-primary-300'
                        }`}
                      >
                        {nav.title}
                        <svg 
                          className={`w-4 h-4 transition-transform duration-300 ${openDropdown === nav.id ? 'rotate-180' : ''}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {/* Dropdown Menu */}
                      <ul 
                        className={`${
                          openDropdown === nav.id ? 'block' : 'hidden'
                        } md:block absolute md:top-full md:left-0 mt-4 md:mt-2 ml-4 md:ml-0 bg-slate-800 rounded-lg shadow-xl border border-slate-700 min-w-[180px] overflow-hidden transition-all duration-300 z-50 ${
                          openDropdown === nav.id 
                            ? 'md:opacity-100 md:visible md:translate-y-0' 
                            : 'md:opacity-0 md:invisible md:-translate-y-2'
                        }`}
                      >
                        {nav.subItems.map((subItem) => (
                          <li key={subItem.id}>
                            <Link
                              to={subItem.id}
                              className={`block px-4 py-3 text-sm font-poppins transition-colors duration-300 ${
                                isActive(subItem.id) 
                                  ? 'text-brand-accent-500 bg-slate-700/50' 
                                  : 'text-gray-300 hover:text-brand-primary-300 hover:bg-slate-700/30'
                              }`}
                              onClick={() => {
                                if (subItem.id.includes('#')) {
                                  // Handle hash links
                                  const [path, hash] = subItem.id.split('#');
                                  if (path && location.pathname === path) {
                                    const element = document.querySelector(`#${hash}`);
                                    if (element) {
                                      element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                  }
                                }
                                setNavbar(false);
                                setOpenDropdown(null);
                              }}
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      to={nav.id}
                      className={`font-poppins font-medium cursor-pointer text-[16px] transition-colors duration-300 ${
                        isActive(nav.id) ? 'text-brand-accent-500' : 'text-gray-300 hover:text-brand-primary-300'
                      }`}
                      onClick={() => {
                        if (nav.id === '/' && location.pathname === '/') {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                        if (nav.id.includes('#')) {
                          // Handle hash links
                          const [path, hash] = nav.id.split('#');
                          if (path && location.pathname === path) {
                            const element = document.querySelector(`#${hash}`);
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                          }
                        }
                        setNavbar(false);
                        setOpenDropdown(null);
                      }}
                    >
                      {nav.title}
                    </Link>
                  )}
                </li>
              ))}
              {/* Phone Number - Hidden on mobile, shown on desktop */}
              <li className="hidden lg:flex items-center gap-2">
                <a
                  href="tel:+917416857052"
                  className="cursor-pointer py-2 px-4 text-cyan-300 hover:text-cyan-400 rounded-lg transition-all duration-300 font-medium flex items-center gap-2 border border-cyan-400/20 hover:border-cyan-400/40"
                  title="Call Escose Technologies"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 7416 8570 52
                </a>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </nav>
  );
}
