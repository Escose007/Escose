import styles from './style';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

const App = () => (
  <div className="bg-primary w-full relative  overflow-hidden">
    <div
      className={`z-50 shadow-gray-200 shadow-lg fixed top-0 left-0 right-0 z-50 bg-white  ${styles.paddingX} ${styles.flexCenter}`}
    >
      <div className={`${styles.boxWidth} bg-white`}>
        <Navbar />
      </div>
    </div>

    <Outlet />

    <div className={` border-t-2 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} bg-white`}>
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
