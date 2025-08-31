import { useState } from 'react';
import { industries } from '../constants';
import styles from '../style';

const Industries = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);

  return (
    <div id="industries" data-scrollspy className={`${styles.flexCenter} flex-col flex-wrap sm:mb-20 mb-6 text-white`}>
      <div className="text-4xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center font-bold">
        Industries We Serve
      </div>
      <div className={`${styles.flexCenter} text-center text-lg text-gray-300 xl:w-1/2 mb-16`}>
        We have experience working across various industries, delivering
        customized solutions that meet specific business requirements and drive
        digital transformation.
      </div>

      {/* Industry Selection */}
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
        {industries.map((industry, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndustry(industry)}
            className={`p-4 rounded-xl text-center transition-all duration-300 group ${
              selectedIndustry.title === industry.title
                ? 'bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/50 text-cyan-400'
                : 'bg-gray-800/30 border border-gray-600/30 hover:border-cyan-400/30 text-gray-300 hover:text-cyan-400'
            }`}
          >
            {industry.img && industry.img[0] && (
              <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img
                  src={industry.img[0]}
                  alt={industry.title}
                  className="w-8 h-8 object-contain filter brightness-150"
                />
              </div>
            )}
            <div className="font-semibold text-sm">{industry.title}</div>
          </button>
        ))}
      </div>

      {/* Selected Industry Details */}
      <div className="w-full bg-gradient-to-br from-gray-800/30 to-blue-900/20 border border-cyan-400/20 rounded-2xl p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Content */}
          <div className="lg:w-2/3">
            <h3 className="text-3xl font-bold text-cyan-400 mb-6">
              {selectedIndustry.title} Solutions
            </h3>
            
            <div className="text-gray-300 mb-6 text-lg leading-relaxed">
              {selectedIndustry.description.header}
            </div>

            {selectedIndustry.description.title && (
              <h4 className="text-xl font-semibold text-white mb-4">
                {selectedIndustry.description.title}
              </h4>
            )}

            <div className="space-y-3">
              {selectedIndustry.description.list.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-gray-700/30 rounded-lg border border-gray-600/30 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="text-gray-300 text-sm leading-relaxed">{item}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Explore {selectedIndustry.title} Solutions
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="lg:w-1/3 flex justify-center items-center">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-2xl flex items-center justify-center border border-cyan-400/20 backdrop-blur-sm">
                {selectedIndustry.img && selectedIndustry.img[0] && (
                  <img
                    src={selectedIndustry.img[0]}
                    alt={selectedIndustry.title}
                    className="w-32 h-32 object-contain filter brightness-150 hover:scale-110 transition-transform duration-300"
                  />
                )}
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-sm rounded-lg p-3 border border-cyan-400/30 animate-pulse">
                <div className="text-lg">📈</div>
                <div className="text-xs font-semibold text-cyan-300">Growth</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500/20 to-cyan-600/20 backdrop-blur-sm rounded-lg p-3 border border-blue-400/30 animate-pulse">
                <div className="text-lg">🎯</div>
                <div className="text-xs font-semibold text-blue-300">Precision</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Industry Stats */}
      <div className="w-full mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: 'Industries Served', value: '25+', icon: '🏢' },
          { label: 'Successful Projects', value: '150+', icon: '✅' },
          { label: 'Years Experience', value: '8+', icon: '📅' },
          { label: 'Client Retention', value: '95%', icon: '🤝' }
        ].map((stat, index) => (
          <div 
            key={index}
            className="bg-gradient-to-br from-gray-800/50 to-blue-900/30 rounded-xl p-6 text-center border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:-translate-y-1 group"
          >
            <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
            <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{stat.value}</div>
            <div className="text-gray-300 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries;
