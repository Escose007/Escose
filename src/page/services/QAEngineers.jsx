import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styles from '../../style';

const QAEngineers = () => {
  const skills = [
    "Selenium, Cypress, Playwright",
    "Jest, Mocha, TestNG, JUnit",
    "Test Automation Frameworks",
    "API Testing (Postman, REST Assured)",
    "Performance Testing (JMeter, LoadRunner)",
    "Mobile Testing (Appium, Espresso)",
    "Test Strategy & Planning",
    "CI/CD Integration"
  ];

  const benefits = [
    { icon: "✅", title: "Quality Assurance", desc: "Expert QA engineers ensuring software reliability and quality" },
    { icon: "🎯", title: "Pre-Vetted Talent", desc: "All engineers pass technical screening on testing frameworks" },
    { icon: "💰", title: "Cost Effective", desc: "Save up to 60% compared to local QA engineer hiring" },
    { icon: "🔄", title: "Flexible Engagement", desc: "Scale QA teams up or down based on project needs" }
  ];

  return (
    <>
      <Helmet>
        <title>Hire QA Engineers | Expert Quality Assurance Talent | Escose</title>
        <meta name="description" content="Hire expert QA engineers in 2 weeks. Pre-vetted quality assurance specialists with 2-8 years experience. Specialized in test automation, Selenium, Cypress, and API testing. Staff augmentation, dedicated teams." />
        <meta name="keywords" content="hire QA engineers, quality assurance engineers, test automation engineers, Selenium engineers, Cypress developers, QA staff augmentation, hire testers, QA testing engineers" />
        <link rel="canonical" href="https://escose.com/services/qa-engineers" />
        
        <meta property="og:title" content="Hire Expert QA Engineers | Escose Technologies" />
        <meta property="og:description" content="Pre-vetted QA engineers ready in 2 weeks. Specialized in test automation and quality assurance. Staff augmentation, dedicated teams. Save 60% on costs." />
        <meta property="og:url" content="https://escose.com/services/qa-engineers" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire QA Engineers | Escose" />
        <meta name="twitter:description" content="Expert QA engineers. Pre-vetted, ready in 2 weeks." />
      </Helmet>

      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-slate-100 min-h-screen">
        {/* Hero */}
        <section className={`${styles.paddingX} ${styles.flexCenter} pt-32 md:pt-28 pb-16`}>
          <div className={`${styles.boxWidth}`}>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-6 py-2 rounded-full text-sm font-semibold mb-6">
                ✅ QUALITY ASSURANCE ENGINEERS
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Hire Expert <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">QA Engineers</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Pre-vetted QA engineers ready to join your team in 2 weeks. Ensure software reliability through comprehensive testing strategies and automation frameworks with 2-8 years experienced engineers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact?tab=outsourcing" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                  Hire QA Engineers
                </Link>
                <Link to="/about" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className={`${styles.paddingX} ${styles.flexCenter} py-16 bg-white/5`}>
          <div className={`${styles.boxWidth}`}>
            <h2 className="text-3xl font-bold text-center mb-12">Why Hire QA Engineers from Escose?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-400/40 transition-all">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className={`${styles.paddingX} ${styles.flexCenter} py-16`}>
          <div className={`${styles.boxWidth}`}>
            <h2 className="text-3xl font-bold text-center mb-12">QA Engineer Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {skills.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-4">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-200">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testing Types */}
        <section className={`${styles.paddingX} ${styles.flexCenter} py-16 bg-white/5`}>
          <div className={`${styles.boxWidth}`}>
            <h2 className="text-3xl font-bold text-center mb-12">QA Testing Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Test Automation", desc: "Automated testing frameworks for web, mobile, and API" },
                { title: "Manual Testing", desc: "Comprehensive manual testing strategies and test cases" },
                { title: "API Testing", desc: "REST API and GraphQL endpoint testing and validation" },
                { title: "Performance Testing", desc: "Load, stress, and performance testing for scalability" },
                { title: "Mobile Testing", desc: "iOS and Android app testing across devices" },
                { title: "Security Testing", desc: "Security vulnerability testing and compliance validation" }
              ].map((testType, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-400/40 transition-all">
                  <h3 className="text-xl font-semibold mb-2 text-cyan-400">{testType.title}</h3>
                  <p className="text-gray-300">{testType.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className={`${styles.paddingX} ${styles.flexCenter} py-16`}>
          <div className={`${styles.boxWidth}`}>
            <h2 className="text-3xl font-bold text-center mb-4">Flexible Engagement Models</h2>
            <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
              Choose the model that fits your needs. All options include pre-vetted QA engineers and replacement guarantee.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { title: "Staff Augmentation", price: "From $30/hr", features: ["Flexible scaling", "Monthly billing", "Direct management", "Quick onboarding"] },
                { title: "Dedicated Team", price: "From $5,500/mo", features: ["Full-time QA engineers", "Your testing stack", "Long-term projects", "QA team leadership"], popular: true },
                { title: "Contract-to-Hire", price: "Custom", features: ["Try before hiring", "3-6 month contract", "Hire permanently", "Risk mitigation"] }
              ].map((plan, idx) => (
                <div key={idx} className={`bg-white/5 border ${plan.popular ? 'border-cyan-400' : 'border-white/10'} rounded-xl p-6 relative`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                  <div className="text-3xl font-bold text-cyan-400 mb-6">{plan.price}</div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-cyan-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact?tab=outsourcing" className={`block text-center py-3 rounded-lg font-semibold transition-all ${plan.popular ? 'bg-cyan-400 text-black hover:bg-cyan-500' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 text-sm mt-8">💡 All prices are indicative. Final pricing depends on experience level and project requirements.</p>
          </div>
        </section>

        {/* CTA */}
        <section className={`${styles.paddingX} ${styles.flexCenter} py-20 bg-white/5`}>
          <div className={`${styles.boxWidth} text-center`}>
            <h2 className="text-4xl font-bold mb-6">Ready to Hire QA Engineers?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get matched with pre-vetted QA engineers in 2 weeks. Start ensuring software quality and reliability.
            </p>
            <Link to="/contact?tab=outsourcing" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
              Schedule a Call
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default QAEngineers;

