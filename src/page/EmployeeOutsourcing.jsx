import { useState } from 'react';
import styles from '../style';
import { outsourcingRoles, engagementModels, outsourcingBenefits, hiringProcess } from '../constants';
import { Link } from 'react-router-dom';

const EmployeeOutsourcing = () => {
  const [selectedRole, setSelectedRole] = useState(outsourcingRoles[0]);
  const [selectedModel, setSelectedModel] = useState(engagementModels[0]);
  const [activeStep, setActiveStep] = useState(0);
  const [showCalculator, setShowCalculator] = useState(false);
  const [costCalculation, setCostCalculation] = useState({
    role: 'frontend',
    experience: 'mid',
    duration: '6',
    developers: '2'
  });

  const calculateCost = () => {
    const baseCosts = {
      frontend: { junior: 2500, mid: 4000, senior: 6000 },
      backend: { junior: 2800, mid: 4500, senior: 6500 },
      fullstack: { junior: 3000, mid: 5000, senior: 7000 },
      mobile: { junior: 2700, mid: 4200, senior: 6200 },
      devops: { junior: 3500, mid: 5500, senior: 7500 },
      designer: { junior: 2000, mid: 3500, senior: 5500 }
    };
    
    const monthlyCost = baseCosts[costCalculation.role][costCalculation.experience];
    const totalCost = monthlyCost * parseInt(costCalculation.developers) * parseInt(costCalculation.duration);
    const savings = totalCost * 0.6; // 60% savings
    
    return { monthlyCost, totalCost, savings };
  };

  const { monthlyCost, totalCost, savings } = calculateCost();

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
                Hire Elite Developers
              </span>
              <br />
              In Just 7 Days
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Access pre-vetted developers, designers, and technical experts from around the world. 
              Scale your team instantly with flexible engagement models and reduce costs by up to 60%.
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[
                { number: '500+', label: 'Expert Developers', icon: '👨‍💻' },
                { number: '7 Days', label: 'Average Hire Time', icon: '⏱️' },
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
              <button 
                onClick={() => setShowCalculator(!showCalculator)}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Calculate Hiring Cost
              </button>
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

      {/* Cost Calculator Modal */}
      {showCalculator && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-800 to-blue-900 rounded-2xl p-8 max-w-md w-full border border-cyan-400/30">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-cyan-400">Cost Calculator</h3>
              <button 
                onClick={() => setShowCalculator(false)}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Role</label>
                <select 
                  value={costCalculation.role}
                  onChange={(e) => setCostCalculation({...costCalculation, role: e.target.value})}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-400"
                >
                  <option value="frontend">Frontend Developer</option>
                  <option value="backend">Backend Developer</option>
                  <option value="fullstack">Full Stack Developer</option>
                  <option value="mobile">Mobile Developer</option>
                  <option value="devops">DevOps Engineer</option>
                  <option value="designer">UI/UX Designer</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Experience</label>
                <select 
                  value={costCalculation.experience}
                  onChange={(e) => setCostCalculation({...costCalculation, experience: e.target.value})}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-400"
                >
                  <option value="junior">Junior (1-3 years)</option>
                  <option value="mid">Mid (3-6 years)</option>
                  <option value="senior">Senior (6+ years)</option>
                </select>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Developers</label>
                  <input 
                    type="number" 
                    min="1" 
                    max="20"
                    value={costCalculation.developers}
                    onChange={(e) => setCostCalculation({...costCalculation, developers: e.target.value})}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Months</label>
                  <input 
                    type="number" 
                    min="1" 
                    max="24"
                    value={costCalculation.duration}
                    onChange={(e) => setCostCalculation({...costCalculation, duration: e.target.value})}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
              </div>
              
              <div className="bg-cyan-600/10 rounded-lg p-4 border border-cyan-400/30">
                <div className="text-center">
                  <div className="text-sm text-gray-300 mb-2">Monthly Cost per Developer</div>
                  <div className="text-2xl font-bold text-cyan-400">${monthlyCost.toLocaleString()}</div>
                  
                  <div className="text-sm text-gray-300 mb-2 mt-4">Total Project Cost</div>
                  <div className="text-3xl font-bold text-white">${totalCost.toLocaleString()}</div>
                  
                  <div className="text-sm text-green-400 mt-2">
                    💰 Save ${savings.toLocaleString()} compared to local hiring
                  </div>
                </div>
              </div>
              
              <Link
                to="/contact"
                onClick={() => setShowCalculator(false)}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center block"
              >
                Get Detailed Quote
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Available Roles Section */}
      <section className={`${styles.paddingX} ${styles.flexCenter} py-20`}>
        <div className={`${styles.boxWidth}`}>
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Available Talent
            </span>
          </h2>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Browse our carefully curated pool of expert developers and technical professionals.
          </p>
          
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

      {/* Live Chat Simulation */}
      <section className={`${styles.paddingX} ${styles.flexCenter} py-20`}>
        <div className={`${styles.boxWidth} max-w-4xl`}>
          <div className="bg-gradient-to-br from-gray-800/50 to-blue-900/30 rounded-2xl p-8 border border-cyan-400/20">
            <h2 className="text-3xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Quick Support
              </span>
            </h2>
            
            <div className="bg-gray-900/50 rounded-xl p-6 h-64 overflow-y-auto mb-4 border border-gray-700">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-xs">
                    AI
                  </div>
                  <div className="bg-gray-700 rounded-lg p-3 max-w-xs">
                    <p className="text-sm text-slate-100">Hi! I'm here to help you find the perfect developer for your project. What role are you looking to fill?</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 justify-end">
                  <div className="bg-cyan-600 rounded-lg p-3 max-w-xs">
                    <p className="text-sm text-slate-100">I need a React developer for my e-commerce project</p>
                  </div>
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-xs">
                    You
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-xs">
                    AI
                  </div>
                  <div className="bg-gray-700 rounded-lg p-3 max-w-xs">
                    <p className="text-sm text-slate-100">Great! We have 120+ React developers available. What's your project timeline and experience level requirement?</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <input 
                type="text" 
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                Send
              </button>
            </div>
            
            <div className="text-center mt-4">
              <p className="text-gray-400 text-sm">💬 Get instant responses from our AI assistant or connect with a human expert</p>
            </div>
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
            <button 
              onClick={() => setShowCalculator(true)}
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-center"
            >
              Calculate Your Savings
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmployeeOutsourcing; 