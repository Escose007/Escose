import styles from '../style';
import { services } from '../constants';
import { Link } from 'react-router-dom';

const Services = () => (
  <>
    <div className={`bg-gray-100 pt-32 md:pt-28 ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} ${styles.paddingX}`}>
        <div className="text-center py-16">
          <h1 className="text-5xl font-bold blut-text__gradient mb-6">
            Our Services
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            We provide comprehensive technology solutions to help your business grow and succeed in the digital age.
          </p>
        </div>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <div className={`${styles.flexCenter} flex-col flex-wrap sm:mb-20 mb-6 mt-10`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
              >
                {/* Icon Section */}
                <div className="h-48 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-6 group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300">
                  {service.img ? (
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="material-icons text-white text-2xl">{service.icon}</span>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Action Button */}
                  <div className="flex gap-2">
                    {service.title === 'Employee Outsourcing' ? (
                      <Link
                        to="/outsourcing"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm text-center"
                      >
                        Learn More
                      </Link>
                    ) : (
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm">
                        Learn More
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Simple CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center w-full">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss your requirements and turn your ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/outsourcing"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Hire Developers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Services; 