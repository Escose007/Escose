import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from '../style';
import ContactUs from '../components/ContactUs';
import OutsourcingForm from '../components/OutsourcingForm';
import ContactUsHero from '../components/ContactUsHero';

const Contact = () => {
  const [showSuccesToster, setSuccesToster] = useState(false);
  const [activeTab, setActiveTab] = useState('outsourcing'); // Changed default to 'outsourcing'
  const [searchParams] = useSearchParams();

  const handleSuccessToster = (value) => {
    setSuccesToster(value);
  };

  // Check URL parameters on component mount to set the correct tab
  useEffect(() => {
    const tab = searchParams.get('tab');
    const action = searchParams.get('action');
    
    // If tab parameter is explicitly set, use it
    if (tab === 'general') {
      setActiveTab('general');
    } else if (tab === 'outsourcing') {
      setActiveTab('outsourcing');
    }
    // If action parameter indicates hiring-related action, default to outsourcing tab
    else if (action === 'hire' || action === 'hiring' || action === 'developers') {
      setActiveTab('outsourcing');
    }
    // Default is already set to 'outsourcing' in useState
  }, [searchParams]);

  return (
    <>
      {showSuccesToster && (
        <div
          id="toast-success"
          className="flex fixed items-center z-100 top-[150px] md:left-[35%] left-[10%] w-full md:max-w-xl  max-w-xs p-4 mb-4 text-dimBlack bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="ml-3 text-sm font-normal">
            Thanks for connecting with Escose. We will get back to you soon.
          </div>
          <button
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-success"
            aria-label="Close"
            onClick={() => handleSuccessToster(false)}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      )}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950">
        <div className={`md:mt-10 sm:mt-24 ${styles.flexStart}`}>
          <ContactUsHero />
        </div>

        {/* Form Tabs */}
        <div className={`${styles.paddingX} ${styles.flexCenter} pt-10`}>
          <div className={`${styles.boxWidth} flex justify-center`}>
            <div className="inline-flex rounded-lg border border-cyan-400/30 p-1 mb-8">
              <button
                onClick={() => setActiveTab('general')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'general'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'text-slate-300 hover:text-cyan-400'
                }`}
              >
                General Inquiry
              </button>
              <button
                onClick={() => setActiveTab('outsourcing')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'outsourcing'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'text-slate-300 hover:text-cyan-400'
                }`}
              >
                Hire Developers
              </button>
            </div>
          </div>
        </div>

        <div className={`${styles.paddingX} ${styles.flexCenter} pb-20`}>
          <div className={`${styles.boxWidth}`}>
            {activeTab === 'general' ? (
              <ContactUs handleSuccessToster={handleSuccessToster} />
            ) : (
              <OutsourcingForm handleSuccessToster={handleSuccessToster} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
