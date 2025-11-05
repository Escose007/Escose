import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styles from '../style';

const caseStudies = [
  {
    id: 1,
    client: "Global FinTech Company",
    industry: "Financial Technology",
    title: "Building a Real-Time Trading Platform with React & Node.js",
    challenge: "Our client needed to replace their legacy trading platform with a modern, real-time solution that could handle 100,000+ concurrent users with sub-100ms latency. The existing system was slow, difficult to maintain, and couldn't scale.",
    solution: "We assembled a dedicated team of 8 developers (4 React, 2 Node.js, 2 DevOps) who worked on-site for 9 months. Implemented microservices architecture with WebSocket for real-time data, Redis for caching, and Kubernetes for auto-scaling. Used React with Redux for state management and TypeScript for type safety.",
    results: [
      "Reduced page load time from 5s to <800ms",
      "Achieved 99.97% uptime over 12 months",
      "Handled Black Friday traffic spike (10x normal) without issues",
      "Reduced infrastructure costs by 35% through optimization"
    ],
    techStack: ["React", "Node.js", "TypeScript", "Redis", "PostgreSQL", "Kubernetes", "AWS"],
    timeline: "9 months",
    teamSize: "8 developers",
    engagement: "Dedicated Team"
  },
  {
    id: 2,
    client: "Healthcare SaaS Startup",
    industry: "Healthcare Technology",
    title: "AI-Powered Patient Management System with Python & ML",
    challenge: "A healthcare startup needed to build an AI-powered patient management system from scratch. They had limited budget and tight deadlines (6 months to MVP). Required HIPAA compliance, secure data handling, and ML model for patient risk prediction.",
    solution: "Provided 5 engineers (2 Python, 1 Full Stack, 1 ML Engineer, 1 DevOps) via staff augmentation model. Built the backend with Django REST Framework, implemented ML models with TensorFlow for risk prediction, deployed on AWS with full HIPAA compliance. Frontend built with React and Material-UI.",
    results: [
      "Launched MVP in 5.5 months (ahead of schedule)",
      "ML model achieved 92% accuracy in risk prediction",
      "Passed HIPAA compliance audit on first attempt",
      "Acquired 50+ healthcare providers within 3 months of launch"
    ],
    techStack: ["Python", "Django", "TensorFlow", "React", "PostgreSQL", "AWS", "Docker"],
    timeline: "6 months",
    teamSize: "5 engineers",
    engagement: "Staff Augmentation"
  },
  {
    id: 3,
    client: "E-commerce Marketplace",
    industry: "E-commerce",
    title: "Scaling Infrastructure for 10x Traffic Growth",
    challenge: "An e-commerce marketplace experienced rapid growth and their infrastructure couldn't keep up. Frequent downtime during peak hours, slow checkout process (15+ seconds), and manual deployment process taking 6+ hours. Needed DevOps expertise urgently.",
    solution: "Deployed 3 DevOps engineers within 2 weeks via contract-to-hire model. Implemented CI/CD pipeline with GitLab, migrated to Kubernetes for auto-scaling, set up comprehensive monitoring with Prometheus & Grafana, optimized database queries and implemented CDN for static assets.",
    results: [
      "Reduced deployment time from 6 hours to 15 minutes",
      "Achieved 99.9% uptime over 6 months",
      "Reduced checkout time from 15s to 3s",
      "Infrastructure scaled automatically to handle 10x traffic"
    ],
    techStack: ["Kubernetes", "Docker", "GitLab CI/CD", "Prometheus", "Grafana", "AWS", "Terraform"],
    timeline: "4 months",
    teamSize: "3 DevOps engineers",
    engagement: "Contract-to-Hire"
  }
];

const CaseStudies = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | Client Success Stories | Escose Technologies</title>
        <meta name="description" content="Read how we helped companies scale with IT staffing and software development. Real client success stories: FinTech, Healthcare, E-commerce. React, Python, DevOps case studies." />
        <meta name="keywords" content="IT staffing case studies, software development success stories, client testimonials, React development case study, Python AI ML case study, DevOps case study" />
        <link rel="canonical" href="https://escose.com/case-studies" />
        
        <meta property="og:title" content="Case Studies | Client Success Stories | Escose" />
        <meta property="og:description" content="Real client success stories: FinTech, Healthcare, E-commerce projects." />
        <meta property="og:url" content="https://escose.com/case-studies" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Case Studies | Escose Technologies" />
        <meta name="twitter:description" content="Client success stories and project case studies." />
      </Helmet>

      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-slate-100 min-h-screen">
        {/* Hero */}
        <section className={`${styles.paddingX} ${styles.flexCenter} pt-32 md:pt-28 pb-12`}>
          <div className={`${styles.boxWidth} text-center`}>
            <h1 className="text-5xl font-bold mb-4">
              Client <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Success Stories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how we've helped companies across industries achieve their goals with our IT staffing and software development services.
            </p>
          </div>
        </section>

        {/* Case Studies */}
        <section className={`${styles.paddingX} ${styles.flexCenter} pb-20`}>
          <div className={`${styles.boxWidth}`}>
            <div className="space-y-12">
              {caseStudies.map((study, idx) => (
                <div key={study.id} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/40 transition-all">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 p-6 border-b border-white/10">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="bg-cyan-400/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-semibold">
                        {study.industry}
                      </span>
                      <span className="bg-blue-400/20 text-blue-300 px-3 py-1 rounded-full text-sm font-semibold">
                        {study.engagement}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold mb-2">{study.title}</h2>
                    <p className="text-gray-300 text-lg">{study.client}</p>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      {/* Challenge */}
                      <div>
                        <h3 className="text-2xl font-bold text-cyan-300 mb-3">🎯 Challenge</h3>
                        <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
                      </div>

                      {/* Solution */}
                      <div>
                        <h3 className="text-2xl font-bold text-blue-300 mb-3">💡 Solution</h3>
                        <p className="text-gray-300 leading-relaxed">{study.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-green-300 mb-4">📊 Results</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {study.results.map((result, i) => (
                          <div key={i} className="flex items-start gap-3 bg-white/5 rounded-lg p-4">
                            <svg className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-200">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack & Metadata */}
                    <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-2">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.techStack.map((tech, i) => (
                            <span key={i} className="bg-white/10 text-gray-300 px-3 py-1 rounded text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-2">Timeline</h4>
                        <p className="text-gray-200">{study.timeline}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-2">Team Size</h4>
                        <p className="text-gray-200">{study.teamSize}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-400 text-sm">
                Client names and identifying details have been anonymized for confidentiality.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={`${styles.paddingX} ${styles.flexCenter} py-20 bg-white/5`}>
          <div className={`${styles.boxWidth} text-center`}>
            <h2 className="text-4xl font-bold mb-6">Want Similar Results?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your technology goals with our expert teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                Get in Touch
              </Link>
              <Link to="/outsourcing" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                Explore IT Staffing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudies;


