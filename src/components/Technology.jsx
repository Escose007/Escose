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
        <div className="text-4xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center font-bold">
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
        <ul className={`w-full flex border-b border-cyan-400/30`}>
          {technologies.map((techType, index) => (
            <li
              className={`-mb-px mr-1 cursor-pointer text-lg`}
              key={index}
              onClick={() => changeTechnology(techType)}
            >
              <span
                className={`bg-gray-800/50 inline-block py-2 px-8 hover:text-cyan-400 capitalize transition-all duration-300 rounded-t-xl border-l border-t border-r border-cyan-400/20
                ${
                  technologySectionTitle.title === techType.title &&
                  'bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-cyan-400 border-cyan-400/50 border-b-transparent'
                }`}
              >
                {techType.title}
              </span>
            </li>
          ))}
        </ul>
        <div
          className={`${styles.flexCenter} flex pt-10 justify-between bg-gradient-to-br from-gray-800/30 to-blue-900/20 border border-cyan-400/20 rounded-b-xl rounded-tr-xl align-center px-5 py-10 w-full`}
        >
          {technologySectionTitle.tech.map((individualTechnology, index) => (
            <div
              className="flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300 group"
              key={index}
            >
              <div className="w-24 h-24 mb-4 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
                <img
                  src={individualTechnology.img}
                  alt={individualTechnology.title}
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
      <div className="md:hidden w-full">
        <div className="grid grid-cols-2 gap-4 mb-6">
          {technologies.map((techType, index) => (
            <button
              key={index}
              onClick={() => changeTechnology(techType)}
              className={`p-3 rounded-xl text-sm font-medium transition-all duration-300 capitalize ${
                technologySectionTitle.title === techType.title
                  ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 border border-cyan-400/50'
                  : 'bg-gray-800/30 text-gray-300 border border-gray-600/30 hover:border-cyan-400/30'
              }`}
            >
              {techType.title}
            </button>
          ))}
        </div>
        
        <div className="bg-gradient-to-br from-gray-800/30 to-blue-900/20 border border-cyan-400/20 rounded-xl p-6">
          <h3 className="text-xl font-bold text-cyan-400 mb-6 text-center capitalize">
            {technologySectionTitle.title} Technologies
          </h3>
          <div className="grid grid-cols-2 gap-6">
            {technologySectionTitle.tech.map((individualTechnology, index) => (
              <div
                className="flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group"
                key={index}
              >
                <div className="w-20 h-20 mb-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
                  <img
                    src={individualTechnology.img}
                    alt={individualTechnology.title}
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
