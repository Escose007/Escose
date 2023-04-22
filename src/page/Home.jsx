import styles from '../style';

import Hero from '../components/Hero';
import Service from '../components/Service';
import Technology from '../components/Technology';
import Industries from '../components/Industries';

const Home = () => (
  <>
    <div className={`bg-gray-100 md:mt-10 mt-20 ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-primary  ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} `}>
        <Service />
        <Technology />
        <Industries />
      </div>
    </div>
  </>
);

export default Home;
