import { services } from '../constants';
import styles from '../style';
import { Link } from 'react-router-dom';
import useTilt3D from './hooks/useTilt3D';

const Service = () => (
  <div id="services" data-scrollspy
    className={`${styles.flexCenter} flex-col flex-wrap sm:mb-20 mb-6 mt-10 text-white`}
  >
    <div className="text-4xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold text-center">
      OUR SERVICES
    </div>
    <div
      className={`${styles.flexCenter} text-center text-lg text-gray-300 xl:w-1/2 mb-16`}
    >
      Escose can help you to build applications that automate your business
      processes, improve efficiency, and enhance customer experience. We serve
      numerous domains to transform our client's Dream into reality.
    </div>
    <ul
      className={`${styles.flexCenter} flex-row flex-wrap justify-center gap-6 mb-6`}
    >
      {services.map((service, idx) => (
        <li data-animate={idx % 2 === 0 ? 'left' : 'right'}
          className="relative min-w-0 flex flex-col justify-between w-full sm:w-1/2 md:w-1/3 xl:w-[30%] p-7 bg-white/5 border border-white/10 hover:border-brand-accent-500/50 hover:shadow-2xl hover:shadow-brand-primary-300/20 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-2 group"
          style={{ aspectRatio: '1 / 1', transformStyle: 'preserve-3d' }}
          key={service.title}
        >
          <div className="w-[72px] h-[72px] mx-auto mb-5 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
            {service.img ? (
              <img
                src={service.img}
                alt={`${service.title} - ${service.description}`}
                className="object-contain w-10 h-10 filter brightness-150"
              />
            ) : (
              <span className="material-icons text-cyan-400 text-3xl">{service.icon}</span>
            )}
          </div>
          <div className={`${styles.flexCenter} text-center text-xl text-white mb-3 font-semibold min-w-0`}>
            {service.title}
          </div>
          <div className="text-center text-gray-300 text-base leading-relaxed break-words overflow-hidden px-1">
            {service.description}
          </div>
          
          {/* CTA Button */}
          <div className="mt-6">
            {service.title === 'IT Staffing' ? (
              <Link
                to="/outsourcing"
                className="w-full bg-brand-gradient hover:brightness-110 text-white px-5 py-3 rounded-xl font-medium transition-all duration-300 text-base text-center block truncate"
              >
                Explore Now
              </Link>
            ) : (
              <button className="w-full bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-xl font-medium transition-all duration-300 text-base truncate border border-white/10">
                Learn More
              </button>
            )}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default Service;
