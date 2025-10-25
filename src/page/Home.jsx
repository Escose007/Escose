import styles from '../style';

import Hero from '../components/Hero';
import Service from '../components/Service';
import Solutions from '../components/Solutions';
import Technology from '../components/Technology';
import Industries from '../components/Industries';
import OutsourcingPreview from '../components/OutsourcingPreview';

const Home = () => (
  <>
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
