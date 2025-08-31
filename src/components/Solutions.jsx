import styles from '../style';
import { Link } from 'react-router-dom';

const problems = [
  {
    title: 'Automate Content Creation',
    desc: 'AI-powered content workflows for blogs, social posts, and localization with human-in-the-loop.',
    cta: 'See GenAI Content Flow',
    hash: 'genai-content',
  },
  {
    title: 'Knowledge Assistant (RAG)',
    desc: 'Private chat over your docs, wikis, and tickets with citations and role-based access.',
    cta: 'Explore RAG Assistant',
    hash: 'rag-assistant',
  },
  {
    title: 'Agentic Workflow Automation',
    desc: 'Tool orchestration with planners and memory to execute repeatable business processes.',
    cta: 'View Agentic Flow',
    hash: 'agentic-workflow',
  },
  {
    title: 'Developer Velocity',
    desc: 'Co-pilots for code, tests, and PRs to reduce cycle time and improve quality.',
    cta: 'Boost Dev Productivity',
    hash: 'dev-velocity',
  },
  {
    title: 'Data Extraction & Enrichment',
    desc: 'Turn PDFs, emails, and forms into structured data for downstream systems.',
    cta: 'Extract Structured Data',
    hash: 'data-extract',
  },
];

export default function Solutions() {
  return (
    <section id="solutions" data-scrollspy className={`py-16 ${styles.flexCenter} text-white`}>
      <div className={`${styles.boxWidth}`}>
        <h2 className="text-4xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold" data-animate>
          Solutions
        </h2>
        <p className="text-gray-300 mb-8" data-animate="right">
          Choose a solution by problem. Scroll to explore what fits your needs.
        </p>

        <div className="relative" data-animate>
          <div className="overflow-x-auto no-scrollbar">
            <ul className="flex gap-6 pr-4">
              {problems.map((p, idx) => (
                <li
                  key={idx}
                  className="min-w-[260px] sm:min-w-[320px] md:min-w-[380px] bg-gradient-to-br from-gray-800/50 to-blue-900/30 border border-cyan-400/20 rounded-2xl p-6 backdrop-blur-sm hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
                >
                  <div className="text-xl font-semibold mb-2">{p.title}</div>
                  <div className="text-gray-300 text-sm leading-relaxed mb-4">{p.desc}</div>
                  <Link to={`/solutions-flow#${p.hash}`} className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-5 py-2 rounded-xl text-sm font-medium">
                    {p.cta}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


