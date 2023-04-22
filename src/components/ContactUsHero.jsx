import styles from '../style';

const ContactUsHero = () => (
  <div className={`${styles.boxWidth}`}>
    <section
      id="home"
      className={`flex md:flex-row flex-col  ${styles.paddingY}`}
    >
      <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <div className="text-center text-gray-800">
          <div className="block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12 mt-[180px] bg-white">
            <div>
              <h1 className="flex-1 blut-text__gradient font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px]">
                Let's work together
              </h1>
              <p className={`${styles.paragraph} mt-5`}>
                We would to like more about the needs of your business. Please
                fill out the form below and let's grow together. We look forword
                to hearing from you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default ContactUsHero;
