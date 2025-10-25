import styles from '../style';

const OutsourcingHero = () => {
  return (
    <section
      id="outsourcing-hero"
      className={`flex md:flex-row flex-col ${styles.paddingY} text-white`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Scale Your Team with
            <br className="sm:block hidden" />
            <span className="text-yellow-400"> Expert Developers</span>
          </h1>
        </div>
        
        <p className={`${styles.paragraph} max-w-[600px] mt-5 text-gray-200 text-lg`}>
          Access a global pool of skilled developers, designers, and technical experts. 
          Build your dream team with flexible engagement models and reduce costs by up to 60% 
          while maintaining exceptional quality standards.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Hire Developers Now
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
            View Available Roles
          </button>
        </div>

        <div className="flex flex-wrap gap-8 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">500+</div>
            <div className="text-gray-300">Skilled Professionals</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">100+</div>
            <div className="text-gray-300">Successful Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">60%</div>
            <div className="text-gray-300">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">24/7</div>
            <div className="text-gray-300">Support Available</div>
          </div>
        </div>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <div className="relative">
          {/* Placeholder for team illustration */}
          <div className="w-96 h-96 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
            <div className="text-center">
              <div className="text-6xl mb-4">👥</div>
              <div className="text-xl font-semibold">Global Team</div>
              <div className="text-gray-300">Ready to Scale</div>
            </div>
          </div>
          
          {/* Floating cards */}
          <div className="absolute -top-4 -left-4 bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
            <div className="text-2xl">⚡</div>
            <div className="text-sm font-semibold">Fast Hiring</div>
          </div>
          
          <div className="absolute -bottom-4 -right-4 bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
            <div className="text-2xl">🎯</div>
            <div className="text-sm font-semibold">Perfect Match</div>
          </div>
          
          <div className="absolute top-1/2 -right-8 bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
            <div className="text-2xl">💰</div>
            <div className="text-sm font-semibold">Cost Effective</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutsourcingHero; 