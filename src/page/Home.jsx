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
