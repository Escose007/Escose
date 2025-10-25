import { useState } from 'react';
import styles from '../style';
import { outsourcingRoles, engagementModels, outsourcingBenefits, hiringProcess } from '../constants';
import { Link } from 'react-router-dom';

const EmployeeOutsourcing = () => {
  const [selectedRole, setSelectedRole] = useState(outsourcingRoles[0]);
  const [selectedModel, setSelectedModel] = useState(engagementModels[0]);
  const [activeStep, setActiveStep] = useState(0);

  

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className={`${styles.paddingX} ${styles.flexCenter} pt-32 md:pt-28 relative overflow-hidden`}>
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className={`${styles.boxWidth} relative z-10 py-20`}>
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-6 py-3 rounded-full text-sm font-semibold mb-6">
              🚀 GLOBAL TALENT MARKETPLACE
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                IT Staffing
              </span>
              <br />
              Hire Elite Developers in 2 Weeks
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Access pre-vetted developers, designers, and technical experts from around the world. 
              Scale your team instantly with flexible engagement models and reduce costs by up to 60%.
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[
                { number: '500+', label: 'Expert Developers', icon: '👨‍💻' },
                { number: '2 Weeks', label: 'Average Hire Time', icon: '⏱️' },
                { number: '60%', label: 'Cost Reduction', icon: '💰' },
                { number: '98%', label: 'Success Rate', icon: '🎯' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-center"
              >
                Start Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Calculator removed */}

      {/* IT Staffing Models */}
      <section className={`${styles.paddingX} ${styles.flexCenter} py-20`}>
        <div className={`${styles.boxWidth}`}>
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              IT Staffing Models
            </span>
          </h2>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Choose the right model for your needs: staff augmentation for speed, dedicated teams for long-term builds, or contract-to-hire to validate fit before conversion.
          </p>
          {/* Highlighted Staffing Models */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="relative rounded-2xl p-6 border border-cyan-400/40 bg-gradient-to-br from-cyan-600/10 to-blue-700/10">
              <div className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500 text-black">Most Popular</div>
              <h3 className="text-2xl font-bold text-white mb-2">Elite</h3>
              <div className="text-cyan-300 font-semibold mb-4">6–12 Months</div>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• Rapid ramp-up with pre-vetted senior engineers</li>
                <li>• Managed onboarding and replacement guarantee</li>
                <li>• Time-zone overlap for daily syncs</li>
              </ul>
              <Link to="/contact" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">Enquire for Elite</Link>
            </div>
            <div className="relative rounded-2xl p-6 border border-blue-400/40 bg-gradient-to-br from-blue-700/10 to-purple-700/10">
              <div className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500 text-black">Best Value</div>
              <h3 className="text-2xl font-bold text-white mb-2">Elite Plus</h3>
              <div className="text-blue-300 font-semibold mb-4">1+ Years</div>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• Long-term dedicated squads with Lead/PM options</li>
                <li>• Continuity, knowledge retention, and lower TCO</li>
                <li>• Flexible scale-up/down with quarterly planning</li>
              </ul>
              <Link to="/contact" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">Enquire for Elite Plus</Link>
            </div>
          </div>
          
          {/* Role Selection */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {outsourcingRoles.map((role, index) => (
              <button
                key={index}
                onClick={() => setSelectedRole(role)}
                className={`p-4 rounded-xl text-center transition-all duration-300 ${
                  selectedRole.title === role.title
                    ? 'bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/50 text-cyan-400'
                    : 'bg-gray-800/30 border border-gray-600/30 hover:border-cyan-400/30 text-gray-300'
                }`}
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full flex items-center justify-center">
                  <img src={role.img} alt={role.title} className="w-6 h-6 object-contain filter brightness-150" />
                </div>
                <div className="font-semibold text-sm">{role.title}</div>
                <div className="text-xs text-gray-400 mt-1">{role.experience}</div>
              </button>
            ))}
          </div>
          
          {/* Selected Role Details */}
          <div className="bg-gradient-to-br from-gray-800/30 to-blue-900/20 rounded-2xl p-8 border border-cyan-400/20">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <h3 className="text-3xl font-bold text-cyan-400 mb-4">{selectedRole.title}</h3>
                <p className="text-gray-300 mb-6 text-lg">{selectedRole.description}</p>
                {/* Highlighted models are shown above; role details continue below */}
                
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-white mb-3">Core Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedRole.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="bg-cyan-600/20 text-cyan-300 px-3 py-1 rounded-full text-sm border border-cyan-400/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center"
                  >
                    Hire {selectedRole.title}
                  </Link>
                  <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                    View Profiles
                  </button>
                </div>
              </div>
              
              <div className="lg:w-1/3">
                <div className="bg-gray-700/30 rounded-xl p-6 text-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <div className="text-xl font-bold text-cyan-400 mb-2">Available Now</div>
                  <div className="text-3xl font-bold text-slate-100 mb-2">50+</div>
                  <div className="text-gray-300 text-sm">Qualified {selectedRole.title}</div>
                  
                  <div className="mt-6 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Average Response</span>
                      <span className="text-cyan-400">&lt; 2 hours</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Start Date</span>
                      <span className="text-cyan-400">Within 1 week</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Time Zone</span>
                      <span className="text-cyan-400">Your preference</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Hiring Process */}
      <section className={`${styles.paddingX} ${styles.flexCenter} py-20 bg-gray-900/50`}>
        <div className={`${styles.boxWidth}`}>
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Hiring Process
            </span>
          </h2>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Our streamlined process ensures you get the right talent quickly and efficiently.
          </p>
          
          {/* Process Steps */}
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-700 transform -translate-y-1/2 hidden lg:block"></div>
            <div 
              className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 transform -translate-y-1/2 transition-all duration-500 hidden lg:block"
              style={{ width: `${(activeStep / (hiringProcess.length - 1)) * 100}%` }}
            ></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {hiringProcess.map((step, index) => (
                <div 
                  key={index}
                  className="relative z-10"
                  onMouseEnter={() => setActiveStep(index)}
                >
                  <div className={`text-center transition-all duration-300 ${activeStep === index ? 'scale-105' : ''}`}>
                    <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold transition-all duration-300 ${
                      activeStep >= index 
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white' 
                        : 'bg-gray-700 text-gray-400'
                    }`}>
                      {step.step}
                    </div>
                    <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                      activeStep === index ? 'text-cyan-400' : 'text-white'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-2">{step.description}</p>
                    <div className="text-cyan-400 text-xs font-semibold">{step.timeframe}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Start Hiring Process
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${styles.paddingX} ${styles.flexCenter} py-20 bg-gradient-to-r from-cyan-600/10 to-blue-600/10`}>
        <div className={`${styles.boxWidth} text-center`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Scale Your Team?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join 500+ companies that have successfully scaled their development teams with Escose Technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 text-center"
            >
              Start Hiring Today
            </Link>
            {/* Calculator button removed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmployeeOutsourcing; 