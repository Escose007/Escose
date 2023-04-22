import { useState } from 'react';
import { Link } from 'react-router-dom';

import { navLinks } from '../constants';
import { close, menu, escose_logo } from '../assets';
import styles from '../style';

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState('Home');
  return (
    <nav className="w-full bg-white">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <img
              src={escose_logo}
              alt="escose_logo"
              className="md:w-[240px] md:h-[80px] w-[200px] h-[60px] text-red-100 relative "
            />
            <div className="md:hidden">
              <img
                src={toggle ? close : menu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain text-black color-black"
                onClick={() => setNavbar(!navbar)}
              />
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? 'text-white' : 'text-dimWhite'
                  } `}
                  onClick={() => {
                    setActive(nav.title);
                    setNavbar(!navbar);
                  }}
                >
                  <Link to={nav.id} className="text-dimBlack hover:text-black">
                    {nav.title}
                  </Link>
                </li>
              ))}
              <li
                className={`cursor-pointer hover:text-blue-700 py-2 px-4 relative bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full outline-none `}
                onClick={() => {
                  setActive('');
                  setNavbar(!navbar);
                }}
              >
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
