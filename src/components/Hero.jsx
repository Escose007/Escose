import styles from '../style';
import { star } from '../assets';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      id="home"
      data-scrollspy
      className={`flex md:flex-row flex-col ${styles.paddingY} pt-32 md:pt-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-slate-100 relative overflow-hidden`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-400/5 rounded-full blur-2xl"></div>
      </div>

      <div
        className={`flex-1 ${styles.flexStart} flex-col px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 relative z-10`}
      >
        <div className="flex flex-row justify-between items-center w-full mb-8">
          <h1 className="text-slate-100 flex-1 font-poppins font-bold ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px]">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Transform Ideas
            </span>
            <br className="sm:block hidden" />
            Into{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Digital Reality
            </span>
          </h1>
        </div>
        
        {/* New Value Proposition */}
        <div className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
          <p className="text-2xl font-semibold text-cyan-300 mb-2">
            Innovation + Expertise + Global Talent = Success
          </p>
          <p className="text-lg text-gray-300">
            From cutting-edge development to world-class talent acquisition
          </p>
        </div>
        
        <p className={`${styles.paragraph} max-w-[600px] mb-8 text-gray-300 text-lg leading-relaxed`}>
          Accelerate your digital transformation with our comprehensive technology solutions. 
          Build innovative products, scale with global talent, and dominate your market with 
          Escose Technologies - where vision meets execution.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <Link
            to="/services"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 text-center"
          >
            Explore Solutions
          </Link>
          <Link
            to="/outsourcing"
            className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-center backdrop-blur-sm"
          >
            Hire Global Talent
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">500+</div>
            <div className="text-gray-400">Expert Developers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">150+</div>
            <div className="text-gray-400">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">98%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">24/7</div>
            <div className="text-gray-400">Global Support</div>
          </div>
        </div>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative z-10 px-6 sm:px-8 md:px-12`}
      >
        <div className="relative">
          {/* Main Visual Element */}
          <div className="relative">
            <div className="w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-cyan-400/30">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-600/30 to-cyan-500/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-400/30">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <div className="text-2xl font-bold text-cyan-300">Digital Innovation</div>
                  <div className="text-gray-300">Powered by AI & Global Talent</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-4 -left-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-400/30 animate-pulse">
            <div className="text-2xl">⚡</div>
            <div className="text-sm font-semibold text-cyan-300">Fast Delivery</div>
          </div>
          
          <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-400/30 animate-pulse">
            <div className="text-2xl">🎯</div>
            <div className="text-sm font-semibold text-blue-300">Perfect Match</div>
          </div>
          
          <div className="absolute top-1/2 -right-8 bg-gradient-to-r from-cyan-600/20 to-blue-500/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-400/30 animate-pulse">
            <div className="text-2xl">💎</div>
            <div className="text-sm font-semibold text-cyan-300">Premium Quality</div>
          </div>

          <div className="absolute top-1/4 -left-8 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-400/30 animate-pulse">
            <div className="text-2xl">🌍</div>
            <div className="text-sm font-semibold text-blue-300">Global Reach</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
