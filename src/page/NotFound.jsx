import { Link } from 'react-router-dom';
import styles from '../style';

const NotFound = () => {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} flex flex-col items-center justify-center text-center py-20`}>
        {/* 404 Animation */}
        <div className="relative mb-8">
          <h1 className="text-[150px] md:text-[200px] font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent leading-none">
            404
          </h1>
          <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-cyan-500/20 to-blue-600/20 -z-10"></div>
        </div>

        {/* Error Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        {/* Floating Icons */}
        <div className="flex gap-8 mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full flex items-center justify-center border border-cyan-400/30 animate-pulse">
            <span className="text-3xl">🔍</span>
          </div>
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-full flex items-center justify-center border border-blue-400/30 animate-pulse" style={{ animationDelay: '0.2s' }}>
            <span className="text-3xl">❓</span>
          </div>
          <div className="w-20 h-20 bg-gradient-to-br from-cyan-600/20 to-blue-500/20 rounded-full flex items-center justify-center border border-cyan-400/30 animate-pulse" style={{ animationDelay: '0.4s' }}>
            <span className="text-3xl">🏠</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            Go to Homepage
          </Link>
          <Link
            to="/contact"
            className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300"
          >
            Contact Support
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-16 pt-8 border-t border-white/10 w-full">
          <p className="text-gray-400 mb-4">You might be looking for:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/services" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
              Services
            </Link>
            <span className="text-gray-600">•</span>
            <Link to="/outsourcing" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
              IT Staffing
            </Link>
            <span className="text-gray-600">•</span>
            <Link to="/about" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
              About Us
            </Link>
            <span className="text-gray-600">•</span>
            <Link to="/careers" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
              Careers
            </Link>
            <span className="text-gray-600">•</span>
            <Link to="/blogs" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

