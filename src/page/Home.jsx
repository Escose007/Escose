import { Helmet } from 'react-helmet-async';
import styles from '../style';

import Hero from '../components/Hero';
import Service from '../components/Service';
import Technology from '../components/Technology';
import OutsourcingPreview from '../components/OutsourcingPreview';
import ClientLogos from '../components/ClientLogos';

const Home = () => (
  <>
    <Helmet>
      <title>IT Staffing & Software Development | Hire Elite Developers in 2 Weeks | Escose Technologies</title>
      <meta name="description" content="Hire pre-vetted developers in 2 weeks. IT staffing, staff augmentation, dedicated teams & contract-to-hire. 500+ expert engineers. Save 60% on costs. Plus custom software development & GenAI solutions." />
      <meta name="keywords" content="IT staffing, IT staff augmentation, software outsourcing, hire developers, contract to hire, dedicated development team, offshore developers, remote developers, hire React developers, hire Python developers" />
      <link rel="canonical" href="https://escose.com/" />
      
      {/* Open Graph */}
      <meta property="og:title" content="IT Staffing & Software Development | Hire Elite Developers in 2 Weeks" />
      <meta property="og:description" content="Hire pre-vetted developers in 2 weeks. IT staffing, staff augmentation, dedicated teams. 500+ expert engineers. Save 60% on costs. Plus custom development & GenAI solutions." />
      <meta property="og:url" content="https://escose.com/" />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="IT Staffing & Software Development | Hire Developers in 2 Weeks | Escose" />
      <meta name="twitter:description" content="Hire pre-vetted developers in 2 weeks. IT staffing, staff augmentation, dedicated teams. 500+ engineers. Save 60% on costs." />
      
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
        <OutsourcingPreview />
      </div>
    </div>
    
    {/* Client Logos - Full width section */}
    <ClientLogos />
  </>
);

export default Home;
