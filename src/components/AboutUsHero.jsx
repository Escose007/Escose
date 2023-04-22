import styles from '../style';
import {
  about_us,
  yongPassionat,
  enthusiasmandCreativity,
  cheerfulandComfortable,
} from '../assets';

const ContactUsHero = () => (
  <section
    id="aboutus"
    className={`${styles.flexCenter} ${styles.boxWidth} flex-col flex-wrap sm:mb-20 mb-6 mt-10 flex justify-center items-center flex-col flex-wrap sm:mb-20 mb-6 mt-10`}
  >
    <div className="mb-[64px]">
      <img
        src={about_us}
        alt="About Us"
        className="relative  w-[250px] h-[200px] m-auto"
      />
      <div className="flex-1 flex  justify-center items-center md:my-0 my-10 relative">
        <h2 className={`${styles.heading2} `}>Who we are?</h2>
      </div>
    </div>
    <div
      className={`${styles.flexCenter} flex-row justify-between flex-wrap mb-6 text-center mb-[64px]`}
    >
      <div
        className={`${styles.flexCenter} flex-col mx-auto width-[160px] items-center md:my-0 my-10 relative md:mr-[102px]`}
      >
        <div className="flex justify-center align-items-center  height-[48px] mb-[32px] ">
          <img
            src={yongPassionat}
            alt="yongPassionat"
            className="relative pb-4"
          />
        </div>
        <div className="text-[20px] leading-5 font-semibold text-dimBlack text-align relative">
          Young & passionate
        </div>
      </div>
      <div
        className={`${styles.flexCenter} flex-col width-[160px] mx-auto  md:mr-[102px] md:my-0 my-10`}
      >
        <div className="flex justify-center align-items-center height-[48px] mb-[32px] ">
          <img
            src={enthusiasmandCreativity}
            alt="yongPassionat"
            className="relative  pb-4"
          />
        </div>
        <div className="text-[20px] leading-5 font-semibold text-dimBlack text-align break-words">
          Enthusiasm & creativity
        </div>
      </div>
      <div
        className={`${styles.flexCenter} width-[160px] flex-col mx-auto md:mr-[102px] md:my-0 my-10`}
      >
        <div className="flex justify-center align-items-center height-[48px] mb-[32px] ">
          <img
            src={cheerfulandComfortable}
            alt="yongPassionat"
            className="relative  pb-4"
          />
        </div>
        <div className="text-[20px] leading-5 font-semibold text-dimBlack text-align break-words">
          Cheerful & comfortable
        </div>
      </div>
    </div>
    <div
      className={`${styles.flexCenter} text-center text-lg text-dimBlack  mb-16`}
    >
      We deliver outcomes quickly by enabling digital business and culture while
      infusing speed and agility into enterprise technology and connected
      solutions.We’re a customer-focused company that understands the need for
      digital transformation in the 21st century. Safe to say, our experts are
      sufficiently equipped with the needed talents and resources that can make
      the impossible happen. Whether you’re a start-up or an established
      organization, our innovative approach to digital products paves the way
      for unmatched excellence that you can leverage for exponential growth.
    </div>
  </section>
);

export default ContactUsHero;
