import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from '../style';
import { customSoftwareServices } from '../constants';
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const handleLearnMore = (service, index) => {
    if (activeService?.title === service.title) {
      setActiveService(null);
    } else {
      setActiveService(service);
      // Scroll to detail section after a short delay
      setTimeout(() => {
        const detailSection = document.getElementById('service-detail');
        if (detailSection) {
          detailSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <>
    <Helmet>
      <title>Custom Software Development Services | Web, Mobile, GenAI Solutions | Escose</title>
      <meta name="description" content="Custom software development services: Cutting-edge technology development (GenAI Solutions, Agentic Workflows), mobile app development, web development, and UI/UX design. End-to-end solutions tailored to your business needs." />
      <meta name="keywords" content="custom software development, web development, mobile app development, GenAI solutions, agentic workflows, UI UX design, software development services" />
      <link rel="canonical" href="https://escose.com/csd" />
      
      {/* Open Graph */}
      <meta property="og:title" content="Custom Software Development Services | Escose" />
      <meta property="og:description" content="Custom software development services: GenAI solutions, mobile apps, web applications, and UI/UX design. End-to-end solutions for your business." />
      <meta property="og:url" content="https://escose.com/csd" />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Custom Software Development Services | Escose" />
      <meta name="twitter:description" content="Custom software development services: GenAI solutions, mobile apps, web applications, and UI/UX design." />
    </Helmet>
  
    <div className={`bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 ${styles.paddingX} ${styles.flexCenter} py-32 md:py-28 min-h-screen`}>
      <div className={`${styles.boxWidth}`}>
        <div className={`${styles.flexCenter} flex-col flex-wrap mb-12`}>
          <div className="text-4xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold text-center">
            Custom Software Development
          </div>
          <div className="text-center text-lg text-gray-300 xl:w-2/3 mb-12">
            We deliver end-to-end software solutions tailored to your business needs, from cutting-edge AI technologies to modern web and mobile applications.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {customSoftwareServices.map((service, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 overflow-hidden backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-2 group border border-white/10 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              {/* Icon Section */}
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {service.img ? (
                  <img
                    src={service.img}
                    alt={`${service.title} icon`}
                    loading="lazy"
                    className="object-contain w-10 h-10 filter brightness-150"
                  />
                ) : (
                  <span className="text-3xl" aria-label={service.icon}>{service.icon}</span>
                )}
              </div>

              {/* Content Section */}
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              {/* Features List */}
              <div className="mb-4">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300 text-xs">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="mt-auto">
                <button
                  onClick={() => handleLearnMore(service, index)}
                  className={`w-full px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm text-center border ${
                    activeService?.title === service.title
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-cyan-400/50'
                      : 'bg-white/10 hover:bg-white/20 text-white border-white/10 hover:border-cyan-400/50'
                  }`}
                >
                  {activeService?.title === service.title ? 'Hide Details' : 'Learn More'}
                </button>
              </div>

              {/* Decorative gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Service Detail Section */}
        {activeService && (
          <section id="service-detail" className="mt-12 mb-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-2xl p-8 overflow-hidden">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full flex items-center justify-center">
                    {activeService.img ? (
                      <img
                        src={activeService.img}
                        alt={activeService.title}
                        className="object-contain w-10 h-10 filter brightness-150"
                      />
                    ) : (
                      <span className="text-3xl" aria-label={activeService.icon}>{activeService.icon}</span>
                    )}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{activeService.title}</h2>
                    <p className="text-gray-400 text-sm">Comprehensive service details</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveService(null)}
                  className="text-gray-400 hover:text-white transition-colors text-2xl font-bold"
                  aria-label="Close details"
                >
                  ✕
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="md:col-span-2 space-y-6">
                  {/* Overview */}
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">Overview</h3>
                    <p className="text-gray-300 leading-relaxed">{activeService.details.overview}</p>
                  </div>

                  {/* Capabilities */}
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">Capabilities</h3>
                    <ul className="space-y-3">
                      {activeService.details.capabilities.map((capability, idx) => (
                        <li key={idx} className="flex items-start gap-3 p-3 bg-gray-700/30 rounded-lg border border-gray-600/30 hover:border-cyan-400/30 transition-all duration-300">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-300 text-sm leading-relaxed">{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">Technologies & Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      {activeService.details.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 rounded-lg text-sm text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 h-max">
                  <h4 className="text-lg font-semibold mb-4 text-white">Key Benefits</h4>
                  <ul className="space-y-3 mb-6">
                    {activeService.details.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">✓</span>
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-cyan-600/20 to-blue-700/20 border-2 border-cyan-400/50 rounded-2xl p-8 text-center w-full">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Ready to Build Your Software Solution?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and turn your ideas into reality with our expert development team.
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
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Hire Developers
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Services; 