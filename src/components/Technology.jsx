import { useState } from 'react';
import { technologies } from '../constants';
import styles from '../style';

const Technology = () => {
  const [technologySectionTitle, setTechnology] = useState(technologies[0]);

  function changeTechnology(tech) {
    setTechnology(tech);
  }

  return (
    <div id="technology" data-scrollspy className={`${styles.flexCenter} flex-col flex-wrap sm:mb-20 mb-6 text-white`}>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <div className="text-4xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center font-bold" data-animate>
          Technologies we work with
        </div>
      </div>
      <div
        className={`${styles.flexCenter} text-center text-lg text-gray-300 xl:w-1/2 mb-16`}
      >
        We have teamed up with major technology platforms to keep giving our
        customers most upgraded world-class software performance.
      </div>
      
      {/* Desktop Version */}
      <div
        className={`${styles.flexCenter} w-full hidden md:flex flex-col mb-6`}
      >
        <ul className={`w-full flex border-b border-white/10`} data-animate="down">
          {technologies.map((techType, index) => (
            <li
              className={`-mb-px mr-1 cursor-pointer text-lg`}
              key={index}
              onClick={() => changeTechnology(techType)}
            >
              <span
                className={`bg-white/5 inline-block py-2 px-8 hover:text-brand-primary-300 capitalize transition-all duration-300 rounded-t-xl border-l border-t border-r border-white/10
                ${
                  technologySectionTitle.title === techType.title &&
                  'bg-white/10 text-brand-primary-300 border-white/30 border-b-transparent'
                }`}
              >
                {techType.title}
              </span>
            </li>
          ))}
        </ul>
        <div
          className={`${styles.flexCenter} flex pt-10 justify-between bg-white/5 border border-white/10 rounded-b-xl rounded-tr-xl align-center px-5 py-10 w-full`}
          data-animate
        >
          {technologySectionTitle.tech.map((individualTechnology, index) => (
            <div
              className="flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300 group"
              key={index}
            >
              <div className="w-24 h-24 mb-4 bg-white/10 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-brand-primary-300/25 transition-all duration-300">
                <img
                  src={individualTechnology.img}
                  alt={`${individualTechnology.title} logo - Expert ${individualTechnology.title} development services`}
                  loading="lazy"
                  className="w-16 h-16 object-contain filter brightness-150"
                />
              </div>
              <div className="text-center text-white font-medium">
                {individualTechnology.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Version */}
        <div className="md:hidden w-full" data-animate>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {technologies.map((techType, index) => (
            <button
              key={index}
              onClick={() => changeTechnology(techType)}
              className={`p-3 rounded-xl text-sm font-medium transition-all duration-300 capitalize ${
                technologySectionTitle.title === techType.title
                  ? 'bg-white/10 text-brand-primary-300 border border-white/30'
                  : 'bg-white/5 text-gray-300 border border-white/10 hover:border-brand-primary-300/30'
              }`}
            >
              {techType.title}
            </button>
          ))}
        </div>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-bold text-brand-primary-300 mb-6 text-center capitalize">
            {technologySectionTitle.title} Technologies
          </h3>
          <div className="grid grid-cols-2 gap-6">
            {technologySectionTitle.tech.map((individualTechnology, index) => (
              <div
                className="flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group"
                key={index}
              >
                <div className="w-20 h-20 mb-3 bg-white/10 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-brand-primary-300/25 transition-all duration-300">
                  <img
                    src={individualTechnology.img}
                    alt={`${individualTechnology.title} logo - Expert ${individualTechnology.title} development services`}
                    loading="lazy"
                    className="w-12 h-12 object-contain filter brightness-150"
                  />
                </div>
                <div className="text-center text-white text-sm font-medium">
                  {individualTechnology.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
