import styles from '../style';

const ContactUsHero = () => (
  <div className={`${styles.boxWidth} ${styles.paddingX}`}>
    <section
      id="contact-hero"
      className={`flex md:flex-row flex-col ${styles.paddingY} pt-32 md:pt-28`}
    >
      <div className="container mx-auto">
        <div className="text-center relative">
          {/* Background blur effects */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 block rounded-2xl shadow-xl px-6 py-12 md:py-16 md:px-12 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-400/20 backdrop-blur-sm">
            <div>
              <h1 className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Let's Work Together
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                We would like to learn more about the needs of your business. Please
                fill out the form below and let's grow together. We look forward
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
