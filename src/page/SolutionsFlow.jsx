import { Helmet } from 'react-helmet-async';
import styles from '../style';
import { Link } from 'react-router-dom';

const Section = ({ id, title, description, children }) => (
  <section id={id} data-scrollspy className={`py-16 ${styles.flexCenter} text-white`}>
    <div className={`${styles.boxWidth}`}>
      <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4" data-animate>
        {title}
      </h2>
      {description && (
        <p className="text-gray-300 mb-8 max-w-3xl" data-animate="right">{description}</p>
      )}
      <div data-animate>{children}</div>
    </div>
  </section>
);

const ArrowDefs = () => (
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
    </marker>
  </defs>
);

const Box = ({ x, y, w, h, label }) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx="12" className="fill-slate-800/70 stroke-cyan-400/40" strokeWidth="1.5" />
    <text x={x + w / 2} y={y + h / 2} textAnchor="middle" dominantBaseline="middle" className="fill-gray-200 text-[12px] md:text-[14px]">
      {label}
    </text>
  </g>
);

const Arrow = ({ x1, y1, x2, y2 }) => (
  <line x1={x1} y1={y1} x2={x2} y2={y2} className="stroke-cyan-400/70" strokeWidth="2" markerEnd="url(#arrow)" />
);

const DiagramFrame = ({ children }) => (
  <div className="w-full overflow-x-auto rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-gray-800/40 to-blue-900/20 p-4">
    <svg className="min-w-[720px] w-full h-[360px] text-cyan-300" viewBox="0 0 960 360">
      <ArrowDefs />
      {children}
    </svg>
  </div>
);

const GlobalArchitecture = () => (
  <DiagramFrame>
    <Box x={40} y={60} w={180} h={80} label="Users / Company" />
    <Box x={300} y={30} w={210} h={70} label="Orchestration (Agent/Flow)" />
    <Box x={300} y={130} w={210} h={70} label="LLM / Tools / RAG" />
    <Box x={600} y={60} w={180} h={80} label="Review & Approval" />
    <Box x={820} y={60} w={100} h={80} label="Outcomes" />
    <Arrow x1={220} y1={100} x2={300} y2={65} />
    <Arrow x1={405} y1={100} x2={405} y2={130} />
    <Arrow x1={510} y1={165} x2={600} y2={100} />
    <Arrow x1={780} y1={100} x2={820} y2={100} />
  </DiagramFrame>
);

const GenAIContentDiagram = () => (
  <DiagramFrame>
    <Box x={40} y={40} w={160} h={70} label="Brief / Requirements" />
    <Box x={240} y={40} w={200} h={70} label="Prompt Templates + Guardrails" />
    <Box x={480} y={40} w={200} h={70} label="LLM Generation (Drafts)" />
    <Box x={720} y={40} w={200} h={70} label="Human Review ➜ Publish" />
    <Arrow x1={200} y1={75} x2={240} y2={75} />
    <Arrow x1={440} y1={75} x2={480} y2={75} />
    <Arrow x1={680} y1={75} x2={720} y2={75} />
  </DiagramFrame>
);

const RAGDiagram = () => (
  <DiagramFrame>
    <Box x={40} y={40} w={160} h={70} label="Docs / Wiki / Tickets" />
    <Box x={240} y={40} w={200} h={70} label="Ingestion + Chunk + Embed" />
    <Box x={480} y={40} w={200} h={70} label="Vector DB Retrieval" />
    <Box x={720} y={40} w={200} h={70} label="LLM + Citations (Answer)" />
    <Arrow x1={200} y1={75} x2={240} y2={75} />
    <Arrow x1={440} y1={75} x2={480} y2={75} />
    <Arrow x1={680} y1={75} x2={720} y2={75} />
  </DiagramFrame>
);

const AgenticDiagram = () => (
  <DiagramFrame>
    <Box x={40} y={40} w={160} h={70} label="Goal / Task" />
    <Box x={240} y={20} w={200} h={60} label="Planner" />
    <Box x={240} y={100} w={200} h={60} label="Memory" />
    <Box x={480} y={20} w={200} h={60} label="Tools (APIs)" />
    <Box x={480} y={100} w={200} h={60} label="Evaluator" />
    <Box x={720} y={40} w={200} h={70} label="Result / Next Step" />
    <Arrow x1={200} y1={75} x2={240} y2={50} />
    <Arrow x1={200} y1={75} x2={240} y2={130} />
    <Arrow x1={440} y1={50} x2={480} y2={50} />
    <Arrow x1={440} y1={130} x2={480} y2={130} />
    <Arrow x1={680} y1={85} x2={720} y2={75} />
  </DiagramFrame>
);

const DevVelocityDiagram = () => (
  <DiagramFrame>
    <Box x={40} y={40} w={160} h={70} label="Codebase / PR" />
    <Box x={240} y={40} w={200} h={70} label="Co-pilot (Code/Test/Docs)" />
    <Box x={480} y={40} w={200} h={70} label="Checks (CI / Security)" />
    <Box x={720} y={40} w={200} h={70} label="Review ➜ Merge" />
    <Arrow x1={200} y1={75} x2={240} y2={75} />
    <Arrow x1={440} y1={75} x2={480} y2={75} />
    <Arrow x1={680} y1={75} x2={720} y2={75} />
  </DiagramFrame>
);

const DataExtractDiagram = () => (
  <DiagramFrame>
    <Box x={40} y={40} w={160} h={70} label="PDF / Email / Forms" />
    <Box x={240} y={40} w={200} h={70} label="Parsing + OCR + Heuristics" />
    <Box x={480} y={40} w={200} h={70} label="LLM Structuring / Validation" />
    <Box x={720} y={40} w={200} h={70} label="JSON ➜ Systems" />
    <Arrow x1={200} y1={75} x2={240} y2={75} />
    <Arrow x1={440} y1={75} x2={480} y2={75} />
    <Arrow x1={680} y1={75} x2={720} y2={75} />
  </DiagramFrame>
);

export default function SolutionsFlow() {
  return (
    <>
      <Helmet>
        <title>GenAI Solutions & Agentic Workflow Architecture | Escose Technologies</title>
        <meta name="description" content="Explore our GenAI and agentic workflow solution architectures. RAG knowledge assistants, content automation, agentic systems, dev velocity tools, and data extraction flows with LLMs and enterprise-grade guardrails." />
        <meta name="keywords" content="GenAI solutions, agentic workflows, RAG architecture, AI automation, LLMOps, GenAI development, AI workflow automation, enterprise AI, knowledge assistants, LLM integration" />
        <link rel="canonical" href="https://escose.com/solutions-flow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="GenAI & Agentic Workflow Solutions | Escose" />
        <meta property="og:description" content="Explore enterprise GenAI solution architectures: RAG, content automation, agentic systems, and more." />
        <meta property="og:url" content="https://escose.com/solutions-flow" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GenAI Solutions & Workflows | Escose" />
        <meta name="twitter:description" content="Enterprise GenAI architectures and agentic workflow solutions." />
      </Helmet>
    
    <div className={`bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 ${styles.paddingX}`}>
      <section className={`pt-32 md:pt-28 pb-8 ${styles.flexCenter} text-white`}>
        <div className={`${styles.boxWidth}`}>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4" data-animate>
            Solution Architecture & Flows
          </h1>
          <p className="text-gray-300 max-w-3xl" data-animate="right">
            Explore how users and companies interact with our GenAI and Agentic solutions. These diagrams show the
            end-to-end flow—from inputs and orchestration to review and outcomes—designed for clarity and real-world use.
          </p>
        </div>
      </section>

      <Section id="overview" title="High-level Architecture" description="A simple view of how inputs flow through orchestration, AI components, and review to outcomes.">
        <GlobalArchitecture />
        <div className="mt-6" data-animate>
          <Link to="/#solutions" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
            Explore All Solutions
          </Link>
        </div>
      </Section>

      <Section id="genai-content" title="GenAI Content Automation" description="From brief to publish with templates, safeguards, and human review.">
        <GenAIContentDiagram />
        <div className="mt-6" data-animate>
          <Link to="/#solutions" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
            Explore GenAI Solutions
          </Link>
        </div>
      </Section>

      <Section id="rag-assistant" title="Knowledge Assistant (RAG)" description="Secure retrieval-augmented generation with citations.">
        <RAGDiagram />
        <div className="mt-6" data-animate>
          <Link to="/#solutions" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
            Explore RAG Solutions
          </Link>
        </div>
      </Section>

      <Section id="agentic-workflow" title="Agentic Workflow Automation" description="Planner, memory, tools, and evaluators for reliable autonomy.">
        <AgenticDiagram />
        <div className="mt-6" data-animate>
          <Link to="/#solutions" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
            Explore Agentic Workflow Solutions
          </Link>
        </div>
      </Section>

      <Section id="dev-velocity" title="Developer Velocity (Co-pilots)" description="Accelerate coding, testing, and review while keeping quality high.">
        <DevVelocityDiagram />
        <div className="mt-6" data-animate>
          <Link to="/#solutions" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
            Explore Developer Velocity Solutions
          </Link>
        </div>
      </Section>

      <Section id="data-extract" title="Data Extraction & Enrichment" description="From unstructured documents to validated structured outputs.">
        <DataExtractDiagram />
        <div className="mt-6" data-animate>
          <Link to="/#solutions" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
            Explore Data Extraction Solutions
          </Link>
        </div>
      </Section>

      <div className="h-12" />
    </div>
    </>
  );
}


