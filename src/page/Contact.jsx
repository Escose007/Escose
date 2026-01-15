import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import styles from '../style';
import ContactUs from '../components/ContactUs';
import OutsourcingForm from '../components/OutsourcingForm';
import JobApplicationForm from '../components/JobApplicationForm';
import ContactUsHero from '../components/ContactUsHero';

const Contact = () => {
  const [showSuccessToast, setSuccessToast] = useState(false);
  const [activeTab, setActiveTab] = useState('outsourcing'); // Changed default to 'outsourcing'
  const [searchParams] = useSearchParams();

  const handleSuccessToast = (value) => {
    setSuccessToast(value);
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
    } else if (tab === 'job' || tab === 'career' || tab === 'application') {
      setActiveTab('job');
    }
    // If action parameter indicates hiring-related action, default to outsourcing tab
    else if (action === 'hire' || action === 'hiring' || action === 'developers') {
      setActiveTab('outsourcing');
    }
    // If action parameter indicates job application
    else if (action === 'apply' || action === 'job' || action === 'career') {
      setActiveTab('job');
    }
    // Default is already set to 'outsourcing' in useState
  }, [searchParams]);

  return (
    <>
      <Helmet>
        <title>Contact Escose Technologies | Get Free Consultation | Hire Developers</title>
        <meta name="description" content="Contact Escose Technologies for IT staffing, software development, and GenAI solutions. Get free consultation, hire pre-vetted developers, or discuss your project requirements. Response within 24 hours." />
        <meta name="keywords" content="contact escose, hire developers, IT staffing inquiry, software development consultation, get quote, free consultation, contact IT company" />
        <link rel="canonical" href="https://escose.com/contact" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contact Escose Technologies | Get Free Consultation" />
        <meta property="og:description" content="Get in touch for IT staffing, software development, or GenAI solutions. Free consultation available." />
        <meta property="og:url" content="https://escose.com/contact" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact Escose Technologies" />
        <meta name="twitter:description" content="Get free consultation for IT staffing and software development needs." />
        
        {/* ContactPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Escose Technologies",
            "description": "Contact Escose Technologies for IT staffing, software development, and GenAI solutions. Get free consultation, hire pre-vetted developers, or discuss your project requirements.",
            "mainEntity": {
              "@type": "Organization",
              "name": "Escose Technologies",
              "url": "https://escose.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "190C, SAI-KRUPA, 6TH MAIN 16TH CROSS, BTM 2ND STAGE, N S PALYA",
                "addressLocality": "Bangalore",
                "addressRegion": "Karnataka",
                "postalCode": "560076",
                "addressCountry": "IN"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-7416857052",
                  "email": "info@escose.com",
                  "contactType": "Sales",
                  "areaServed": "Global",
                  "availableLanguage": ["English"]
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-7416857052",
                  "email": "info@escose.com",
                  "contactType": "Customer Service",
                  "areaServed": "Global",
                  "availableLanguage": ["English"]
                }
              ]
            }
          })}
        </script>
        {/* BreadcrumbList Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://escose.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Contact",
                "item": "https://escose.com/contact"
              }
            ]
          })}
        </script>
      </Helmet>
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
              <button
                onClick={() => setActiveTab('job')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'job'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'text-slate-300 hover:text-cyan-400'
                }`}
              >
                Apply for Job
              </button>
            </div>
          </div>
        </div>

        <div className={`${styles.paddingX} ${styles.flexCenter} pb-20`}>
          <div className={`${styles.boxWidth}`}>
            {activeTab === 'general' ? (
              <ContactUs handleSuccessToast={handleSuccessToast} />
            ) : activeTab === 'outsourcing' ? (
              <OutsourcingForm handleSuccessToast={handleSuccessToast} />
            ) : (
              <JobApplicationForm handleSuccessToast={handleSuccessToast} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
