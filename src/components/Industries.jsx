import { useState } from 'react';
import { industries } from '../constants';
import styles from '../style';

const Industries = () => {
  const [industriesSectionTitle, setIndustries] = useState(industries[0]);

  function changeIndustries(tech) {
    setIndustries(tech);
  }

  return (
    <div className={`${styles.flexCenter} flex-col flex-wrap sm:mb-20 mb-6`}>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <div className="text-4xl mb-6 blut-text__gradient">
          Industries We Cater
        </div>
      </div>
      <div
        className={`${styles.flexCenter} text-center text-lg text-dimBlack xl:w-1/2 mb-16`}
      >
        We serve diverse industry verticals, helping business startegize for new
        ventures or make an impact in the existing one. Regardless your industry
        or enterprise size, we offer custom software development services that
        address your business challenges and address your needs.
      </div>
      <div className={`${styles.flexStart} w-full hidden md:flex mb-6`}>
        <ul className="md:flex flex-col w-25">
          {industries.map((industry) => (
            <li
              className={`mb-6 pb-2 capitalize cursor-pointer flex ${
                industriesSectionTitle.title === industry.title &&
                'md:border-b-4 md:border-blue-300 rounded-sm blut-text__gradient'
              }`}
              onClick={() => changeIndustries(industry)}
              key={industry.title}
            >
              <img
                src={industry.img[0]}
                alt="billing"
                className="w-[32px] h-[32px] relative z-[5] mr-5 "
              />
              {industry.title}
            </li>
          ))}
        </ul>
        <div className="flex-auto w-60 ml-20">
          {industriesSectionTitle.img.map((img) => (
            <div>
              <div className="flex justify-between w-full mb-6">
                <label className="text-2xl blut-text__gradient">
                  {industriesSectionTitle.title}
                </label>
              </div>
              <div className="flex flex-col text-dimBlack">
                {industriesSectionTitle?.description && (
                  <div>
                    {industriesSectionTitle.description.header && (
                      <div
                        className={`${styles.paragraph} mb-2 title-font text-lg `}
                      >
                        {industriesSectionTitle.description.header}
                      </div>
                    )}
                    <div
                      className={`${styles.paragraph} title-font font-medium mb-2`}
                    >
                      {industriesSectionTitle.description.title}
                    </div>
                    {industriesSectionTitle.description?.list?.length && (
                      <ul className="list-disc list-inside leading-relaxed text-base">
                        {industriesSectionTitle.description.list.map(
                          (listItem) => (
                            <li className="mb-2 mb-16">{listItem}</li>
                          )
                        )}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:hidden block mx-auto">
        <ul className="md:flex flex-col ">
          {industries.map((industry) => (
            <li
              className={`mb-6 pb-2 capitalize cursor-pointer flex pt-[30px] px-[24px] pb-[100px] shadow-2xl mb-20 rounded-xl`}
              onClick={() => changeIndustries(industry)}
              key={industry.title}
            >
              <div className="flex flex-col">
                <img
                  src={industry.img[0]}
                  alt="billing"
                  className="w-[200px] h-[200px] relative z-[5] mr-5 mb-[50px] "
                />
                <h2
                  className={`font-poppins font-semibold mx-auto xs:text-[48px] text-[40px] text-dimBlack xs:leading-[76.8px] leading-[66.8px] w-full text-dimBlack mb-[24px]`}
                >
                  {industry.title}
                </h2>
                <p className={`${styles.paragraph}`}>
                  {industry.description.header}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Industries;
