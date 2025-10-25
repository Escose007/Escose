import { Helmet } from 'react-helmet-async';
import styles from '../style';

import Hero from '../components/Hero';
import Service from '../components/Service';
import Solutions from '../components/Solutions';
import Technology from '../components/Technology';
import Industries from '../components/Industries';
import OutsourcingPreview from '../components/OutsourcingPreview';

const Home = () => (
  <>
    <Helmet>
      <title>IT Staffing & Software Outsourcing Services | Hire Elite Developers | Escose Technologies</title>
      <meta name="description" content="Leading IT staffing and software outsourcing company. Hire pre-vetted developers in 2 weeks. Staff augmentation, dedicated teams, contract-to-hire. 500+ expert engineers in React, Python, Java, AI/ML, DevOps. 60% cost savings." />
      <meta name="keywords" content="IT staffing, IT staff augmentation, software outsourcing, hire developers, contract to hire, dedicated development team, offshore developers, remote developers, hire React developers, hire Python developers" />
      <link rel="canonical" href="https://escose.com/" />
      
      {/* Open Graph */}
      <meta property="og:title" content="IT Staffing & Software Outsourcing Services | Hire Elite Developers" />
      <meta property="og:description" content="Hire pre-vetted developers in 2 weeks. IT staff augmentation, dedicated teams, contract-to-hire. 500+ expert engineers. 60% cost savings." />
      <meta property="og:url" content="https://escose.com/" />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="IT Staffing & Software Outsourcing Services | Escose" />
      <meta name="twitter:description" content="Hire pre-vetted developers in 2 weeks. 500+ expert engineers. Staff augmentation, dedicated teams." />
    </Helmet>
    
    {/* Hero Section - Dark theme - No wrapper needed as Hero handles its own spacing */}
    <Hero />
    
    {/* Services & Other Sections - Dark theme */}
    <div className={`bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Solutions />
        <Service />
        <Technology />
        <OutsourcingPreview />
        <Industries />
      </div>
    </div>
  </>
);

export default Home;
