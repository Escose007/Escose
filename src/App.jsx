import { Outlet } from 'react-router-dom';
import styles from './style';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => (
  <div className="min-h-screen w-full bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-slate-100 relative overflow-hidden">
    {/* Navbar - Dark theme to match overall design */}
    <div className="fixed top-0 left-0 right-0 z-50 w-full bg-gradient-to-r from-slate-900/85 via-slate-800/85 to-slate-900/85 backdrop-blur-sm border-b border-cyan-400/15 shadow-lg shadow-gray-900/40">
      <div className={`pl-0 pr-6 sm:pr-16 ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
    </div>
    
    {/* Main Content */}
    <div className="relative">
      <Outlet />
    </div>
    
    {/* Footer - Dark theme */}
    <div className={`bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-cyan-400/15 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
