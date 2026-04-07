import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styles from '../../style';

const AGENT_TYPES = [
  {
    icon: '🤝',
    title: 'Multi-Agent Orchestration',
    desc: 'Hierarchical agent teams where a supervisor delegates subtasks to specialized workers — each with their own tools, memory, and goals.',
    bullets: ['Supervisor / worker agent architecture', 'Dynamic task decomposition', 'Inter-agent communication protocols', 'Parallel agent execution'],
    accent: 'cyan',
  },
  {
    icon: '🔀',
    title: 'LangGraph Stateful Workflows',
    desc: 'Graph-based workflows where agents follow conditional branches, loops, and checkpoints — with full state persistence across steps.',
    bullets: ['DAG & cyclic graph support', 'State checkpointing & recovery', 'Conditional routing & branching', 'Human-in-the-loop interrupts'],
    accent: 'purple',
  },
  {
    icon: '🛠️',
    title: 'Tool-Using Agents',
    desc: 'Agents equipped with real-world tools — they search the web, call APIs, query databases, write & execute code, and take actions autonomously.',
    bullets: ['Custom tool definitions', 'API & database connectors', 'Code interpreter integration', 'Browser & web scraping tools'],
    accent: 'blue',
  },
  {
    icon: '🧩',
    title: 'CrewAI Role-Based Systems',
    desc: 'Teams of AI agents with distinct roles, backstories, and expertise — working together like a real human team toward a shared goal.',
    bullets: ['Role & persona definition', 'Task delegation & handoff', 'Sequential & parallel execution', 'Inter-crew communication'],
    accent: 'cyan',
  },
  {
    icon: '🔄',
    title: 'Agentic RPA Replacement',
    desc: 'Replace brittle rule-based automation with intelligent agents that adapt to UI changes, handle exceptions, and self-recover.',
    bullets: ['Adaptive web & app automation', 'Exception detection & handling', 'Self-healing workflows', 'Audit logs & observability'],
    accent: 'purple',
  },
  {
    icon: '🤖',
    title: 'Autonomous Code Agents',
    desc: 'AI software engineers that write, test, debug, and deploy code autonomously — reducing manual effort on repetitive development tasks.',
    bullets: ['Code generation & review', 'Automated test writing', 'Bug detection & patching', 'PR creation & description'],
    accent: 'blue',
  },
];

const TECH_STACK = [
  { name: 'LangGraph', category: 'Orchestration' },
  { name: 'CrewAI', category: 'Orchestration' },
  { name: 'AutoGen', category: 'Orchestration' },
  { name: 'LangChain', category: 'Framework' },
  { name: 'OpenAI Functions', category: 'Tool Use' },
  { name: 'Anthropic Tool Use', category: 'Tool Use' },
  { name: 'Python', category: 'Backend' },
  { name: 'FastAPI', category: 'Backend' },
  { name: 'Redis', category: 'State / Memory' },
  { name: 'pgvector', category: 'Memory' },
  { name: 'Docker / K8s', category: 'Infra' },
  { name: 'LLMOps / Langfuse', category: 'Observability' },
];

const ARCHITECTURE_PATTERNS = [
  {
    pattern: 'ReAct Pattern',
    desc: 'Reason → Act → Observe loop where agents think step-by-step before acting, reducing errors on complex tasks.',
    best: 'Research agents, analysis tasks',
    color: '#67e8f9',
  },
  {
    pattern: 'Plan & Execute',
    desc: 'Planner agent creates a full plan upfront; executor agents carry out each step independently in parallel.',
    best: 'Multi-step pipelines, project management bots',
    color: '#c4b5fd',
  },
  {
    pattern: 'Reflection & Self-Critique',
    desc: 'Agents evaluate their own outputs, identify errors, and self-correct before returning results.',
    best: 'Content generation, code review, QA bots',
    color: '#93c5fd',
  },
  {
    pattern: 'Multi-Agent Debate',
    desc: 'Multiple agents take opposing perspectives on a problem and debate to consensus — higher accuracy on complex decisions.',
    best: 'Risk analysis, compliance review, research',
    color: '#67e8f9',
  },
];

const ENGAGEMENT_MODELS = [
  {
    icon: '📋',
    title: 'Fixed-Price Build',
    desc: 'Scoped agentic system with defined inputs, outputs, and performance criteria. Milestone-based delivery.',
    points: ['Architecture workshop included', 'PoC in 1–2 weeks', 'Full build in 4–10 weeks', 'Source code & docs handoff'],
    accent: 'rgba(0,212,255,0.12)',
    border: 'rgba(0,212,255,0.3)',
    textColor: '#67e8f9',
  },
  {
    icon: '🏗️',
    title: 'Long-Term Partner',
    desc: 'Dedicated agentic AI team building, iterating, and scaling your autonomous systems over months.',
    points: ['Senior agentic AI engineers', 'Agile delivery with weekly reviews', 'Expanding agent capabilities', 'Observability & LLMOps included'],
    accent: 'rgba(168,85,247,0.12)',
    border: 'rgba(168,85,247,0.35)',
    textColor: '#c4b5fd',
    featured: true,
  },
  {
    icon: '🔬',
    title: 'Consulting + Build',
    desc: 'Architecture review first, then phased implementation. Ideal for teams exploring agentic AI for the first time.',
    points: ['Feasibility & ROI assessment', 'Architecture blueprint', 'Phased pilot → production', 'Knowledge transfer sessions'],
    accent: 'rgba(39,110,241,0.12)',
    border: 'rgba(39,110,241,0.3)',
    textColor: '#93c5fd',
  },
];

const HOW_IT_WORKS = [
  { step: '01', title: 'Use Case Mapping', desc: 'We identify the exact workflow to automate — mapping inputs, decisions, tools, and success metrics.' },
  { step: '02', title: 'Agent Architecture', desc: 'Design the agent graph: roles, tools, memory, routing logic, and human-in-the-loop checkpoints.' },
  { step: '03', title: 'Pilot Agent Build', desc: 'Working single-agent or 2-agent pilot in 1–2 weeks. We measure accuracy, latency, and cost per run.' },
  { step: '04', title: 'Full System Build', desc: 'Expand to full multi-agent system with observability, error recovery, and production infra.' },
  { step: '05', title: 'Deploy & Monitor', desc: 'Production deployment with Langfuse tracing, cost dashboards, and alert thresholds set.' },
];

const USE_CASES = [
  { workflow: 'Sales Research Agent', desc: 'Autonomously researches prospects, pulls LinkedIn + news + CRM data, writes personalized outreach drafts' },
  { workflow: 'Document Processing Agent', desc: 'Ingests contracts, invoices, or reports — extracts structured data, validates, routes for approval' },
  { workflow: 'Engineering Assistant Agent', desc: 'Analyzes GitHub PRs, writes tests, flags security issues, and summarizes changes for reviewers' },
  { workflow: 'Customer Support Agent', desc: 'Handles Tier-1 support autonomously — queries CRM, executes refunds, escalates with context' },
  { workflow: 'Competitive Intelligence Agent', desc: 'Monitors competitor sites, news, and job boards — synthesizes weekly briefings automatically' },
  { workflow: 'Data Analysis Agent', desc: 'Receives natural language questions, writes and runs SQL/Python, returns charts and insights' },
];

const ACCENT_MAP = {
  cyan:   { bg: 'rgba(0,212,255,0.07)',  border: 'rgba(0,212,255,0.25)',  glow: 'rgba(0,212,255,0.15)',  text: '#67e8f9'  },
  blue:   { bg: 'rgba(39,110,241,0.07)', border: 'rgba(39,110,241,0.25)', glow: 'rgba(39,110,241,0.15)', text: '#93c5fd'  },
  purple: { bg: 'rgba(168,85,247,0.07)', border: 'rgba(168,85,247,0.25)', glow: 'rgba(168,85,247,0.15)', text: '#c4b5fd' },
};

export default function AgenticProjects() {
  return (
    <>
      <Helmet>
        <title>Agentic AI Projects | Multi-Agent Systems & LangGraph Workflows | Escose Technologies</title>
        <meta name="description" content="Build autonomous multi-agent AI systems with Escose — LangGraph workflows, CrewAI pipelines, tool-using agents, and agentic automation. Fixed-price or long-term. Production-ready." />
        <meta name="keywords" content="agentic AI development India, multi-agent systems development, LangGraph development company, CrewAI development services, autonomous AI agents, agentic workflow automation, AI task automation, tool-using agents, AutoGen development, agentic AI outsourcing, AI agent orchestration, agentic systems for enterprise, ReAct agents, AI workflow agents India" />
        <link rel="canonical" href="https://escose.com/services/agentic-projects" />
        <meta property="og:title" content="Agentic AI Projects | Escose Technologies" />
        <meta property="og:description" content="Autonomous multi-agent systems. LangGraph, CrewAI, tool-using agents. Fixed-price or long-term. Production-ready." />
        <meta property="og:url" content="https://escose.com/services/agentic-projects" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Agentic AI Projects | Escose Technologies" />
        <meta name="twitter:description" content="Build autonomous AI agents — LangGraph, CrewAI, tool use. Fixed-price or long-term." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Agentic AI Project Development",
            "description": "Build autonomous multi-agent AI systems — LangGraph workflows, CrewAI pipelines, tool-using agents, and agentic automation.",
            "provider": { "@type": "Organization", "name": "Escose Technologies", "url": "https://escose.com" },
            "serviceType": "Agentic AI Development",
            "areaServed": { "@type": "Place", "name": "Global" },
          })}
        </script>
      </Helmet>

      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-slate-100 min-h-screen">

        {/* ── HERO ── */}
        <section
          className={`${styles.paddingX} ${styles.flexCenter} pt-32 md:pt-36 pb-20 relative overflow-hidden`}
          style={{ background: 'linear-gradient(135deg, #0b1220 0%, #0f1a2e 50%, #0b1220 100%)' }}
        >
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] bg-purple-600/6 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

          <div className={`${styles.boxWidth} relative z-10`}>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/40 text-cyan-300 text-sm font-semibold mb-6"
                style={{ background: 'rgba(0,212,255,0.08)' }} data-animate>
                ✦ Next-Gen AI · Agentic Projects
              </div>

              <h1 className="font-poppins font-bold ss:text-[58px] text-[38px] ss:leading-[72px] leading-[50px] mb-6" data-animate>
                AI That{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Plans, Decides
                </span>
                <br />& Acts Autonomously
              </h1>

              <p className="text-xl text-gray-300 mb-5 max-w-3xl mx-auto leading-relaxed" data-animate="fade">
                Agentic AI goes beyond chatbots. We build multi-agent systems that use tools, delegate tasks, manage memory, and execute complex workflows — with minimal human intervention.
              </p>

              <div
                className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl border border-cyan-400/20 text-sm text-cyan-300 font-medium mb-10"
                style={{ background: 'rgba(0,212,255,0.06)', backdropFilter: 'blur(10px)' }}
                data-animate
              >
                <span>⚡ LangGraph</span>
                <span className="text-white/20">·</span>
                <span>🤝 CrewAI</span>
                <span className="text-white/20">·</span>
                <span>🔄 AutoGen</span>
                <span className="text-white/20">·</span>
                <span>🛠️ Tool-Using Agents</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center" data-animate>
                <Link to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/30 glow-pulse">
                  Start an Agentic Project
                </Link>
                <Link to="/services/genai-projects"
                  className="border-2 border-cyan-400/40 text-cyan-300 hover:bg-cyan-500/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-center">
                  Explore GenAI Projects Instead
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── EXPLAINER STRIP ── */}
        <div className={`${styles.paddingX} ${styles.flexCenter} py-10 border-y border-white/8`}
          style={{ background: 'rgba(0,212,255,0.04)' }}>
          <div className={`${styles.boxWidth}`}>
            <div className="flex flex-wrap justify-center gap-8 md:gap-14" data-animate>
              {[
                ['🧠', 'Agents that reason before acting'],
                ['🛠️', 'Agents that use real-world tools'],
                ['🤝', 'Agents that delegate to other agents'],
                ['🔄', 'Agents that self-correct & retry'],
                ['👁️', 'Full observability & audit trails'],
              ].map(([icon, label]) => (
                <div key={label} className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="text-lg">{icon}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── AGENT TYPES ── */}
        <section className={`${styles.paddingX} ${styles.flexCenter} py-20`}>
          <div className={`${styles.boxWidth}`}>
            <div className="text-center mb-14" data-animate>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 text-cyan-400 text-sm font-semibold mb-4"
                style={{ background: 'rgba(0,212,255,0.06)' }}>
                ✦ What We Build
              </div>
              <h2 className="text-4xl font-bold text-slate-100">Types of Agentic Systems</h2>
              <p className="text-gray-400 mt-3 max-w-2xl mx-auto">Six categories of autonomous AI systems we design, build, and ship to production.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {AGENT_TYPES.map((at, i) => {
                const a = ACCENT_MAP[at.accent];
                return (
                  <div key={at.title}
                    className="bento-card p-7 group"
                    style={{ background: a.bg, border: `1px solid ${a.border}` }}
                    data-animate={i % 2 === 0 ? 'left' : 'right'}>
                    <div className="text-3xl mb-4">{at.icon}</div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: a.text }}>{at.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{at.desc}</p>
                    <ul className="space-y-1.5">
                      {at.bullets.map(b => (
                        <li key={b} className="flex items-start gap-2 text-xs text-gray-400">
                          <span className="mt-1 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: a.text }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── ARCHITECTURE PATTERNS ── */}
        <section className={`${styles.paddingX} ${styles.flexCenter} py-20`}
          style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.04) 0%, rgba(168,85,247,0.04) 100%)' }}>
          <div className={`${styles.boxWidth}`}>
            <div className="text-center mb-14" data-animate>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-400/30 text-blue-300 text-sm font-semibold mb-4"
                style={{ background: 'rgba(39,110,241,0.07)' }}>
                ✦ Architecture
              </div>
              <h2 className="text-4xl font-bold text-slate-100">Agent Design Patterns</h2>
              <p className="text-gray-400 mt-3 max-w-2xl mx-auto">We pick the right architecture for your use case — not one-size-fits-all agent systems.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {ARCHITECTURE_PATTERNS.map((ap, i) => (
                <div key={ap.pattern}
                  className="bento-card p-7"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                  data-animate={i % 2 === 0 ? 'left' : 'right'}>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ background: ap.color, boxShadow: `0 0 8px ${ap.color}` }} />
                    <div>
                      <h3 className="font-bold text-slate-100 mb-1" style={{ color: ap.color }}>{ap.pattern}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-2">{ap.desc}</p>
                      <span className="text-xs text-gray-500">Best for: {ap.best}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className={`${styles.paddingX} ${styles.flexCenter} py-20`}>
          <div className={`${styles.boxWidth}`}>
            <div className="text-center mb-14" data-animate>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 text-cyan-400 text-sm font-semibold mb-4"
                style={{ background: 'rgba(0,212,255,0.06)' }}>
                ✦ Our Process
              </div>
              <h2 className="text-4xl font-bold text-slate-100">From Workflow to Autonomous Agent</h2>
              <p className="text-gray-400 mt-3 max-w-2xl mx-auto">A structured 5-phase delivery — from identifying the right workflow to a monitored production agent.</p>
            </div>

            <div className="grid md:grid-cols-5 gap-4">
              {HOW_IT_WORKS.map((step, i) => (
                <div key={step.step} className="relative" data-animate>
                  <div className="bento-card p-6 text-center h-full"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3">
                      {step.step}
                    </div>
                    <h3 className="text-sm font-bold text-slate-100 mb-2">{step.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                  {i < HOW_IT_WORKS.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-cyan-400/40 to-blue-400/40 z-10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── REAL-WORLD USE CASES ── */}
        <section className={`${styles.paddingX} ${styles.flexCenter} py-20`}
          style={{ background: 'rgba(0,212,255,0.03)' }}>
          <div className={`${styles.boxWidth}`}>
            <div className="text-center mb-14" data-animate>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 text-cyan-400 text-sm font-semibold mb-4"
                style={{ background: 'rgba(0,212,255,0.06)' }}>
                ✦ Real Deployments
              </div>
              <h2 className="text-4xl font-bold text-slate-100">Agentic Systems We've Built</h2>
              <p className="text-gray-400 mt-3 max-w-2xl mx-auto">Representative examples of agentic workflows we design and ship for clients.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {USE_CASES.map(({ workflow, desc }, i) => (
                <div key={workflow}
                  className="bento-card p-6 group"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                  data-animate={i % 2 === 0 ? 'left' : 'right'}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                    <h3 className="font-bold text-cyan-300 text-sm">{workflow}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TECH STACK ── */}
        <section className={`${styles.paddingX} ${styles.flexCenter} py-20`}>
          <div className={`${styles.boxWidth}`}>
            <div className="text-center mb-12" data-animate>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-400/30 text-blue-300 text-sm font-semibold mb-4"
                style={{ background: 'rgba(39,110,241,0.07)' }}>
                ✦ Technology Stack
              </div>
              <h2 className="text-4xl font-bold text-slate-100">The Agentic Stack We Use</h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3" data-animate>
              {TECH_STACK.map(({ name, category }) => (
                <div key={name}
                  className="flex flex-col items-center px-4 py-3 rounded-xl border border-white/10 hover:border-cyan-400/40 transition-all duration-200 cursor-default"
                  style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <span className="text-xs font-medium text-cyan-400 mb-1">{category}</span>
                  <span className="text-sm font-semibold text-slate-200">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ENGAGEMENT MODELS ── */}
        <section className={`${styles.paddingX} ${styles.flexCenter} py-20`}
          style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.05), rgba(39,110,241,0.05))' }}>
          <div className={`${styles.boxWidth}`}>
            <div className="text-center mb-14" data-animate>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 text-cyan-400 text-sm font-semibold mb-4"
                style={{ background: 'rgba(0,212,255,0.06)' }}>
                ✦ How to Engage
              </div>
              <h2 className="text-4xl font-bold text-slate-100">Choose Your Engagement</h2>
              <p className="text-gray-400 mt-3 max-w-xl mx-auto">Fixed-price for defined projects. Long-term for evolving systems. Consulting for those just getting started.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {ENGAGEMENT_MODELS.map((model, i) => (
                <div key={model.title}
                  className={`bento-card p-7 relative ${model.featured ? 'ring-1 ring-cyan-400/40' : ''}`}
                  style={{ background: model.accent, border: `1px solid ${model.border}` }}
                  data-animate={i % 2 === 0 ? 'left' : 'right'}>
                  {model.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold text-black"
                      style={{ background: 'linear-gradient(90deg, #00d4ff, #276ef1)' }}>
                      Most Popular
                    </div>
                  )}
                  <div className="text-2xl mb-4">{model.icon}</div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: model.textColor }}>{model.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{model.desc}</p>
                  <ul className="space-y-2">
                    {model.points.map(p => (
                      <li key={p} className="flex items-start gap-2 text-sm text-gray-300">
                        <svg className="w-4 h-4 shrink-0 mt-0.5" style={{ color: model.textColor }} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className={`${styles.paddingX} ${styles.flexCenter} py-20`}
          style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.08), rgba(39,110,241,0.1))' }}>
          <div className={`${styles.boxWidth}`}>
            <div className="max-w-3xl mx-auto text-center" data-animate>
              <h2 className="text-4xl font-bold text-slate-100 mb-4">
                Ready to Build{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Autonomous AI
                </span>
                ?
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Tell us the workflow you want to automate. We'll design the agent architecture and ship a working pilot in 1–2 weeks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/30">
                  Book Architecture Call
                </Link>
                <Link to="/services/genai-projects"
                  className="border-2 border-white/20 text-gray-300 hover:border-purple-400/50 hover:text-purple-300 px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-center">
                  ← Explore GenAI Projects
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
