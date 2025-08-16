import { services } from '../constants';
import styles from '../style';
import { Link } from 'react-router-dom';

const Service = () => (
  <div
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
      className={`${styles.flexCenter} flex-row justify-between flex-wrap mb-6`}
    >
      {services.map((service) => (
        <li
          className="flex h-60 justify-center flex-col mr-3 w-full sm:w-1/2 md:w-1/3 xl:w-1/5 md:mb-0 mb-4 md:mb-6 p-6 bg-gradient-to-br from-gray-800/50 to-blue-900/30 border border-cyan-400/20 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/20 rounded-xl overflow-hidden backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-2 group"
          key={service.title}
        >
          <div className="w-[60px] h-[60px] mx-auto mb-4 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            {service.img ? (
              <img
                src={service.img}
                alt="service"
                className="object-cover w-8 h-8 filter brightness-150"
              />
            ) : (
              <span className="material-icons text-cyan-400 text-2xl">{service.icon}</span>
            )}
          </div>
          <div className={`${styles.flexCenter} text-center text-lg text-white mb-2 font-semibold`}>
            {service.title}
          </div>
          <div className="text-center text-gray-300 text-sm leading-relaxed">
            {service.description}
          </div>
          
          {/* CTA Button */}
          <div className="mt-4">
            {service.title === 'Employee Outsourcing' ? (
              <Link
                to="/outsourcing"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm text-center block"
              >
                Explore Now
              </Link>
            ) : (
              <button className="w-full bg-gradient-to-r from-gray-700 to-gray-600 hover:from-cyan-500 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm">
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
