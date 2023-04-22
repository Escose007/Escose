import styles from '../style';
import { star } from '../assets';

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="text-slate-800 flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px]">
            Great Idea + Inovative Solution <br className="sm:block hidden  " />
            <span className="blut-text__gradient"> = Dream Product</span>{' '}
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With Escose Technologies, you will be able to digitise your business
          and achieve your business objectives. By transforming from offline to
          digital one, your business will gain an edge in a highly competitive
          market.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative `}
      >
        <img
          src={star}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 blue__gradient" /> */}
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 red__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
