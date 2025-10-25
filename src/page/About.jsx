import styles from '../style';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-slate-100 min-h-screen">
      {/* Hero */}
      <section className={`${styles.paddingX} ${styles.flexCenter} pt-32 md:pt-28 pb-12`}>
        <div className={`${styles.boxWidth} text-center`}>
          <h1 className="text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Escose Technologies</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your trusted partner for IT staffing, software development, and enterprise GenAI solutions.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className={`${styles.paddingX} ${styles.flexCenter} py-12`}>
        <div className={`${styles.boxWidth}`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Escose Technologies is a global IT services company specializing in <span className="text-white font-semibold">IT staffing and outsourcing</span>, custom software development, and cutting-edge GenAI solutions. Founded with a vision to bridge the talent gap for growing tech companies, we've evolved into a comprehensive technology partner serving startups, scale-ups, and enterprises worldwide.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our core strength lies in delivering <span className="text-white font-semibold">pre-vetted, highly skilled engineers</span> who integrate seamlessly into your team—whether you need staff augmentation, dedicated squads, or contract-to-hire talent. We combine deep technical expertise with a client-first approach, ensuring you scale quickly without compromising quality.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-1">500+</div>
                  <div className="text-gray-300">Pre-vetted Engineers</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-1">150+</div>
                  <div className="text-gray-300">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-1">98%</div>
                  <div className="text-gray-300">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-1">25+</div>
                  <div className="text-gray-300">Countries Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - IT Staffing Focus */}
      <section className={`${styles.paddingX} ${styles.flexCenter} py-12 bg-white/5`}>
        <div className={`${styles.boxWidth}`}>
          <h2 className="text-3xl font-bold mb-8 text-center">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-cyan-600/10 to-blue-700/10 border border-cyan-400/20 rounded-2xl p-6">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="text-xl font-bold mb-2">IT Staffing & Outsourcing</h3>
              <p className="text-gray-300 text-sm mb-4">
                Our flagship service. We provide <span className="text-white font-semibold">Elite</span> (6–12 months) and <span className="text-white font-semibold">Elite Plus</span> (1+ years) staffing models with rapid onboarding, replacement guarantees, and flexible scale-up/down options.
              </p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Staff Augmentation</li>
                <li>• Dedicated Teams</li>
                <li>• Contract-to-Hire</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-3xl mb-3">💻</div>
              <h3 className="text-xl font-bold mb-2">Custom Software Development</h3>
              <p className="text-gray-300 text-sm mb-4">
                End-to-end development services: web, mobile, cloud, and IoT. We build scalable, maintainable products using modern stacks (React, Node, Python, Java, Flutter) with DevOps best practices.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-xl font-bold mb-2">GenAI & Agentic Solutions</h3>
              <p className="text-gray-300 text-sm mb-4">
                Enterprise-grade AI: RAG knowledge assistants, agentic workflows, LLMOps, evaluators/guardrails, and secure deployments. We help you ship production-ready GenAI apps with observability and cost controls.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-2xl p-8 border border-cyan-400/20">
            <h3 className="text-2xl font-bold mb-4 text-center">Why IT Staffing with Escose?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-2">⚡ Speed & Quality</h4>
                <p className="text-gray-300 text-sm">Hire vetted engineers in 2 weeks. Every candidate passes technical screens, coding assessments, and culture-fit interviews before reaching you.</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">💰 Cost Efficiency</h4>
                <p className="text-gray-300 text-sm">Save up to 60% vs. local hiring while maintaining top-tier quality. Transparent pricing with no hidden fees.</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">🔄 Flexibility</h4>
                <p className="text-gray-300 text-sm">Scale teams up or down quarterly. Choose from staff augmentation, dedicated squads, or contract-to-hire based on your needs.</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">🛡️ Risk Mitigation</h4>
                <p className="text-gray-300 text-sm">Replacement guarantee within 30 days if a hire doesn't work out. Managed onboarding, compliance, and ongoing support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className={`${styles.paddingX} ${styles.flexCenter} py-12`}>
        <div className={`${styles.boxWidth}`}>
          <h2 className="text-3xl font-bold mb-8 text-center">Our Approach</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Understand', desc: 'We deep-dive into your tech stack, team culture, and hiring goals.' },
              { step: '02', title: 'Match', desc: 'Our talent team shortlists 3–5 pre-vetted candidates aligned with your needs.' },
              { step: '03', title: 'Interview', desc: 'You interview finalists and select the best fit. We handle contracts and onboarding.' },
              { step: '04', title: 'Deliver', desc: 'Engineers start within a week. We provide ongoing support and performance tracking.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{item.step}</div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${styles.paddingX} ${styles.flexCenter} py-16`}>
        <div className={`${styles.boxWidth} text-center`}>
          <h2 className="text-4xl font-bold mb-4">Ready to Scale Your Team?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your staffing needs and find the right engineers to accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/outsourcing" className="bg-brand-gradient hover:brightness-110 text-white px-8 py-4 rounded-xl font-semibold transition-all">
              Explore IT Staffing
            </Link>
            <Link to="/contact" className="border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

