import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from '../style';

const OutsourcingPreview = () => {
  const [activeTab, setActiveTab] = useState('developers');
  
  const tabs = {
    developers: {
      title: 'Top Developers',
      icon: '👨‍💻',
      count: '500+',
      description: 'Pre-vetted developers ready to join your team'
    },
    technologies: {
      title: 'Technologies',
      icon: '⚡',
      count: '50+',
      description: 'Cutting-edge technologies and frameworks'
    },
    countries: {
      title: 'Global Reach',
      icon: '🌍',
      count: '25+',
      description: 'Countries with available talent'
    }
  };

  const quickStats = [
    { label: 'Average Hire Time', value: '2 Weeks', icon: '⏱️' },
    { label: 'Client Satisfaction', value: '98%', icon: '⭐' },
    { label: 'Cost Savings', value: '60%', icon: '💰' },
    { label: 'Time Zones', value: '24/7', icon: '🕐' }
  ];

  return (
    <div className={`${styles.flexCenter} flex-col flex-wrap sm:mb-20 mb-6 mt-16`}>
      {/* Main Section */}
      <div className="w-full bg-gradient-to-br from-cyan-600/10 via-blue-800/20 to-purple-600/10 rounded-3xl p-8 lg:p-12 border border-cyan-400/20 backdrop-blur-sm relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500 rounded-full transform translate-x-32 -translate-y-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500 rounded-full transform -translate-x-24 translate-y-24 blur-3xl"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Content Side */}
            <div className="lg:w-2/3 mb-8 lg:mb-0">
              <div className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🚀 SCALE YOUR TEAM NOW
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
                Hire World-Class
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Developers in 2 Weeks</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Access our global pool of pre-vetted developers, designers, and technical experts. 
                Scale your team instantly with flexible engagement models and reduce costs while maintaining quality.
              </p>
              
              {/* Interactive Tabs */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {Object.entries(tabs).map(([key, tab]) => (
                  <div
                    key={key}
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                      activeTab === key 
                        ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-400/50' 
                        : 'bg-gray-800/30 border border-gray-600/30 hover:border-cyan-400/30'
                    }`}
                    onClick={() => setActiveTab(key)}
                  >
                    <div className="text-2xl mb-2">{tab.icon}</div>
                    <div className="text-2xl font-bold text-cyan-400">{tab.count}</div>
                    <div className="text-sm text-gray-300">{tab.description}</div>
                  </div>
                ))}
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/outsourcing"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-center shadow-lg hover:shadow-cyan-500/25"
                >
                  Start Hiring Now
                </Link>
                <Link 
                  to="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-center backdrop-blur-sm"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
            
            {/* Visual Side */}
            <div className="lg:w-1/3 flex justify-center">
              <div className="relative">
                {/* Main Circle */}
                <div className="w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-cyan-400/30">
                  <div className="text-center">
                    <div className="text-5xl mb-3">{tabs[activeTab].icon}</div>
                    <div className="text-xl font-semibold text-cyan-300">{tabs[activeTab].title}</div>
                    <div className="text-gray-300">{tabs[activeTab].count} Available</div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-sm rounded-lg p-3 border border-cyan-400/30 animate-pulse">
                  <div className="text-lg">⚡</div>
                  <div className="text-xs font-semibold text-cyan-300">Fast</div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500/20 to-cyan-600/20 backdrop-blur-sm rounded-lg p-3 border border-blue-400/30 animate-pulse">
                  <div className="text-lg">💎</div>
                  <div className="text-xs font-semibold text-blue-300">Quality</div>
                </div>
                
                <div className="absolute top-1/2 -right-8 bg-gradient-to-r from-cyan-600/20 to-blue-500/20 backdrop-blur-sm rounded-lg p-3 border border-cyan-400/30 animate-pulse">
                  <div className="text-lg">🎯</div>
                  <div className="text-xs font-semibold text-cyan-300">Precise</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick Stats Section */}
      <div className="w-full mt-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => (
          <div 
            key={index}
            className="bg-gradient-to-br from-gray-800/50 to-blue-900/30 rounded-2xl p-6 text-center border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:-translate-y-1 group"
          >
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{stat.value}</div>
            <div className="text-gray-300 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Featured Roles */}
      <div className="w-full mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { role: 'React Developers', icon: '⚛️', available: '120+' },
          { role: 'Python Engineers', icon: '🐍', available: '85+' },
          { role: 'DevOps Experts', icon: '🔧', available: '65+' },
          { role: 'UI/UX Designers', icon: '🎨', available: '95+' }
        ].map((item, index) => (
          <div 
            key={index}
            className="bg-gradient-to-br from-gray-800/30 to-blue-900/20 rounded-xl p-4 text-center border border-gray-600/30 hover:border-cyan-400/50 transition-all duration-300 group"
          >
            <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
            <div className="text-lg font-semibold text-white mb-1">{item.role}</div>
            <div className="text-cyan-400 text-sm font-medium">{item.available} Available</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutsourcingPreview; 