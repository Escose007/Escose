import { Helmet } from 'react-helmet-async';
import styles from '../style';

import Hero from '../components/Hero';
import Service from '../components/Service';
import Technology from '../components/Technology';
import OutsourcingPreview from '../components/OutsourcingPreview';
import HowItWorks from '../components/HowItWorks';
import ClientLogos from '../components/ClientLogos';

const Home = () => (
  <>
    <Helmet>
      <title>IT Staffing, GenAI & Agentic Projects | Full-Spectrum Software Engineering | Escose Technologies</title>
      <meta name="description" content="Escose Technologies delivers across every dimension of software — IT staffing & staff augmentation (hire in 2 weeks), custom software development, GenAI products (RAG, LLMs, chatbots), and autonomous Agentic systems. 500+ pre-vetted engineers. Save 60% on costs." />
      <meta name="keywords" content="IT staffing India, IT staff augmentation, hire developers India, hire remote developers, offshore developer hiring, pre-vetted engineers, software development outsourcing India, IT staffing Bangalore, hire developers in 2 weeks, GenAI projects, agentic AI systems, LLM development, RAG pipeline, multi-agent systems, custom software development, LangChain, LangGraph, OpenAI, Anthropic, AI development company India, dedicated development team, software outsourcing company" />
      <link rel="canonical" href="https://escose.com/" />
      
      {/* Open Graph */}
      <meta property="og:title" content="IT Staffing, GenAI & Agentic Projects | Full-Spectrum Software Engineering | Escose" />
      <meta property="og:description" content="One brand for every software need — IT staffing, custom development, GenAI products, and agentic AI systems. 500+ pre-vetted engineers. Hire in 2 weeks. Save 60%." />
      <meta property="og:url" content="https://escose.com/" />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="IT Staffing, GenAI & Agentic Projects | Escose Technologies" />
      <meta name="twitter:description" content="Full-spectrum software engineering — IT staffing, custom dev, GenAI products, agentic AI. 500+ engineers. Hire in 2 weeks. Save 60%." />
      
      {/* FAQPage Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How quickly can I hire developers?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can hire pre-vetted developers in just 2 weeks. Our streamlined process includes technical screening, coding assessments, and culture-fit interviews before candidates reach you, ensuring fast onboarding without compromising quality."
              }
            },
            {
              "@type": "Question",
              "name": "What is the cost of IT staffing?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our IT staffing services can help you save up to 60% compared to local hiring while maintaining top-tier quality. We offer transparent pricing with no hidden fees, and flexible engagement models including staff augmentation, dedicated teams, and contract-to-hire."
              }
            },
            {
              "@type": "Question",
              "name": "What is staff augmentation?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Staff augmentation is a flexible IT staffing model where we extend your existing team with our skilled professionals to fill specific skill gaps. It allows you to quickly scale your team up or down based on project requirements, integrate developers seamlessly into your workflow, and maintain full control over project management."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer contract-to-hire?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer contract-to-hire engagement models. This allows you to evaluate developers on your team before making a permanent hiring decision. It's an ideal option for companies who want to test the fit before committing to full-time employment."
              }
            },
            {
              "@type": "Question",
              "name": "What technologies do your developers specialize in?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our 500+ pre-vetted engineers specialize in a wide range of technologies including React.js, Python, Java, Node.js, Full Stack Development (MERN/MEAN stacks), DevOps (AWS, Azure, GCP, Docker, Kubernetes), AI/ML (TensorFlow, PyTorch), GenAI (LLMs, RAG systems), Data Engineering, QA Engineering, Android, iOS, and more. We cover both frontend, backend, and full stack technologies."
              }
            },
            {
              "@type": "Question",
              "name": "What is the replacement guarantee?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We offer a replacement guarantee within 30 days if a hire doesn't work out. This ensures you can scale your team with confidence, knowing we'll quickly provide a replacement candidate if needed, minimizing any disruption to your projects."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide dedicated development teams?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide dedicated development teams where a full team of professionals works exclusively on your project with full commitment. This model is ideal for large projects, ongoing development, and product scaling. Teams can be scaled up or down quarterly based on your needs."
              }
            }
          ]
        })}
      </script>
      
      {/* SiteNavigationElement Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Main Navigation",
          "itemListElement": [
            {
              "@type": "SiteNavigationElement",
              "position": 1,
              "name": "IT Staffing & Outsourcing",
              "url": "https://escose.com/outsourcing"
            },
            {
              "@type": "SiteNavigationElement",
              "position": 2,
              "name": "Services",
              "url": "https://escose.com/services"
            },
            {
              "@type": "SiteNavigationElement",
              "position": 3,
              "name": "About Us",
              "url": "https://escose.com/about"
            },
            {
              "@type": "SiteNavigationElement",
              "position": 4,
              "name": "Careers",
              "url": "https://escose.com/careers"
            },
            {
              "@type": "SiteNavigationElement",
              "position": 5,
              "name": "Contact",
              "url": "https://escose.com/contact"
            }
          ]
        })}
      </script>
    </Helmet>
    
    {/* Hero Section - Dark theme - No wrapper needed as Hero handles its own spacing */}
    <Hero />
    
    {/* Services & Other Sections - Dark theme */}
    <div className={`bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Service />
        <Technology />
        <HowItWorks />
        <OutsourcingPreview />
      </div>
    </div>
    
    {/* Client Logos - Full width section */}
    <ClientLogos />
  </>
);

export default Home;
