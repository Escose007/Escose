import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styles from '../../style';

const DevOpsEngineers = () => {
  const skills = [
    "AWS, Azure, Google Cloud Platform",
    "Docker, Kubernetes, Container Orchestration",
    "Jenkins, GitLab CI/CD, GitHub Actions",
    "Terraform, Ansible, Infrastructure as Code",
    "Linux, Shell Scripting, Python",
    "Monitoring (Prometheus, Grafana, ELK)",
    "Security & Compliance (OWASP, GDPR)",
    "Microservices Architecture"
  ];

  const services = [
    { icon: "☁️", title: "Cloud Infrastructure", desc: "Design, deploy, and manage cloud infrastructure on AWS, Azure, or GCP" },
    { icon: "🔄", title: "CI/CD Pipelines", desc: "Automate build, test, and deployment processes for faster releases" },
    { icon: "🐳", title: "Containerization", desc: "Implement Docker and Kubernetes for scalable applications" },
    { icon: "📊", title: "Monitoring & Logging", desc: "Set up comprehensive monitoring, alerting, and logging systems" }
  ];

  return (
    <>
      <Helmet>
        <title>Hire DevOps Engineers | Expert AWS, Azure, Kubernetes DevOps Specialists | Escose</title>
        <meta name="description" content="Hire expert DevOps engineers in 2 weeks. AWS, Azure, Kubernetes specialists. Pre-vetted engineers with CI/CD, Docker, Terraform expertise. Staff augmentation and dedicated teams available." />
        <meta name="keywords" content="hire DevOps engineers, AWS DevOps, Azure DevOps, Kubernetes engineers, hire DevOps specialists, CI CD engineers, Docker engineers, infrastructure engineers, cloud DevOps" />
        <link rel="canonical" href="https://escose.com/services/devops-engineers" />
        
        <meta property="og:title" content="Hire Expert DevOps Engineers | Escose Technologies" />
        <meta property="og:description" content="Pre-vetted DevOps engineers ready in 2 weeks. AWS, Azure, Kubernetes. Save 60% on costs." />
        <meta property="og:url" content="https://escose.com/services/devops-engineers" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire DevOps Engineers | Escose" />
        <meta name="twitter:description" content="Expert DevOps engineers. AWS, Azure, Kubernetes specialists." />
      </Helmet>

      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-slate-100 min-h-screen">
        {/* Hero */}
        <section className={`${styles.paddingX} ${styles.flexCenter} pt-32 md:pt-28 pb-16`}>
          <div className={`${styles.boxWidth}`}>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-6 py-2 rounded-full text-sm font-semibold mb-6">
                ⚙️ DEVOPS ENGINEERS
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Hire Expert <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">DevOps Engineers</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Pre-vetted DevOps engineers specializing in AWS, Azure, Kubernetes, CI/CD, and infrastructure automation. Ready to optimize your deployment pipeline in 2 weeks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact?tab=outsourcing" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                  Hire DevOps Engineers
                </Link>
                <Link to="/about" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className={`${styles.paddingX} ${styles.flexCenter} py-16 bg-white/5`}>
          <div className={`${styles.boxWidth}`}>
            <h2 className="text-3xl font-bold text-center mb-12">What Our DevOps Engineers Do</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-400/40 transition-all">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-300">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className={`${styles.paddingX} ${styles.flexCenter} py-16`}>
          <div className={`${styles.boxWidth}`}>
            <h2 className="text-3xl font-bold text-center mb-12">DevOps Engineer Skills</h2>
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

        {/* Benefits */}
        <section className={`${styles.paddingX} ${styles.flexCenter} py-16 bg-white/5`}>
          <div className={`${styles.boxWidth}`}>
            <h2 className="text-3xl font-bold text-center mb-12">Impact of Hiring DevOps Engineers</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-5xl font-bold text-cyan-400 mb-2">50%</div>
                <div className="text-xl font-semibold mb-2">Faster Deployments</div>
                <p className="text-gray-300">Automate CI/CD for rapid, reliable releases</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-xl font-semibold mb-2">Uptime</div>
                <p className="text-gray-300">Robust monitoring and automated recovery</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-cyan-400 mb-2">40%</div>
                <div className="text-xl font-semibold mb-2">Cost Savings</div>
                <p className="text-gray-300">Optimize cloud infrastructure and resources</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className={`${styles.paddingX} ${styles.flexCenter} py-16`}>
          <div className={`${styles.boxWidth}`}>
            <h2 className="text-3xl font-bold text-center mb-4">Flexible Engagement Models</h2>
            <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
              Choose the model that fits your needs. All options include pre-vetted engineers and replacement guarantee.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { title: "Staff Augmentation", price: "From $50/hr", features: ["Flexible scaling", "Monthly billing", "Direct management", "Quick onboarding"] },
                { title: "Dedicated Team", price: "From $9,000/mo", features: ["Full-time engineers", "Your infrastructure", "Long-term projects", "Team leadership"], popular: true },
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
        <section className={`${styles.paddingX} ${styles.flexCenter} py-20`}>
          <div className={`${styles.boxWidth} text-center`}>
            <h2 className="text-4xl font-bold mb-6">Ready to Hire DevOps Engineers?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get matched with pre-vetted DevOps engineers in 2 weeks. Start optimizing your infrastructure today.
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

export default DevOpsEngineers;


