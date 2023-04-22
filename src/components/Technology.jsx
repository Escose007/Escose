import { useState } from 'react';
import { technologies } from '../constants';
import styles from '../style';

const Technology = () => {
  const [technologySectionTitle, setTechnology] = useState(technologies[0]);

  function changeTechnology(tech) {
    setTechnology(tech);
  }

  return (
    <div className={`${styles.flexCenter} flex-col flex-wrap sm:mb-20 mb-6`}>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <div className="text-4xl mb-6 blut-text__gradient text-center">
          Technologies we work with
        </div>
      </div>
      <div
        className={`${styles.flexCenter} text-center text-lg text-dimBlack xl:w-1/2 mb-16`}
      >
        We have teamed up with major technology platforms to keep giving our
        customers most upgraded world-className software performance.
      </div>
      <div
        className={`${styles.flexCenter} w-full hidden md:flex flex-col mb-6 font-size-[14px]`}
      >
        <ul className={`w-full flex  md:border-b md:border-slate-300`}>
          {technologies.map((techType, index) => (
            <li
              className={`-mb-px mr-1 cursor-pointer text-lg`}
              key={index}
              onClick={() => changeTechnology(techType)}
            >
              <span
                className={`bg-white inline-block py-2 px-8 hover:blut-text__gradient capitalize
                ${
                  technologySectionTitle.title === techType.title &&
                  'border-l border-t border-r rounded-t blut-text__gradient border border-b-white'
                }`}
              >
                {techType.title}
              </span>
            </li>
          ))}
        </ul>
        <div
          className={`${styles.flexCenter} flex pt-10 flex justify-between bg-slate-50  align-center px-5 py-10 w-full bordor-box`}
        >
          {technologySectionTitle.tech.map((tech) => (
            <img
              src={tech.img}
              alt="menu"
              className="w-[120px] h-[100px] object-contain text-white-100"
              key={tech.title}
            />
          ))}
        </div>
      </div>
      <div className="w-full md:hidden block mx-auto">
        {technologies.map((techType, index) => (
          <div className="group outline-none" tabIndex={index} key={index}>
            <div className="group flex justify-between px-4 py-3 items-center text-gray-500 transition ease duration-500 cursor-pointer pr-10 relative">
              <div className="transition ease duration-500 capitalize">
                {techType.title}
              </div>
              <div className="h-8 w-8 items-center inline-flex justify-center transform transition ease duration-500 group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                <svg
                  data-accordion-icon
                  className="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="group-focus:max-h-screen max-h-0 px-4 overflow-hidden ease duration-500">
              <div className="py-5  flex overflow-x-auto">
                {techType.tech.map((tech) => (
                  <img
                    src={tech.img}
                    alt="menu"
                    className="w-[100px] h-[80px] object-contain text-white-100 mr-10"
                    key={tech.title}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
