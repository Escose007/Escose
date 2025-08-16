import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { navLinks } from '../constants';
import { close, menu, escose_logo } from '../assets';
import styles from '../style';

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="w-full">
      <div className="justify-between pl-0 pr-2 mx-auto lg:max-w-7xl md:items-center md:flex md:pl-0 md:pr-4">
        <div>
          <div className="flex items-center justify-between py-4 md:py-6 md:block">
            {/* Make logo clickable */}
            <Link to="/" className="cursor-pointer">
              <img
                src={escose_logo}
                alt="escose_logo"
                className="md:w-[200px] md:h-[60px] w-[160px] h-[48px] filter brightness-150 hover:opacity-80 transition-opacity duration-300"
              />
            </Link>
            <div className="md:hidden">
              <img
                src={navbar ? close : menu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain filter brightness-0 invert cursor-pointer"
                onClick={() => setNavbar(!navbar)}
              />
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
                    className={`font-poppins font-medium cursor-pointer text-[16px] hover:text-cyan-400 transition-colors duration-300 ${
                      isActive(nav.id) ? 'text-cyan-400' : 'text-gray-300'
                    }`}
                    onClick={() => setNavbar(false)}
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="cursor-pointer hover:text-blue-700 py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-full transition-all duration-300 font-medium"
                  onClick={() => setNavbar(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
