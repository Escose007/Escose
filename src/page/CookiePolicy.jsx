import { Helmet } from 'react-helmet-async';
import styles from '../style';

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | Escose Technologies</title>
        <meta name="description" content="Cookie Policy for Escose Technologies. Learn about how we use cookies and similar technologies on our website." />
        <link rel="canonical" href="https://escose.com/cookies" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-slate-100 min-h-screen">
        <section className={`${styles.paddingX} ${styles.flexCenter} pt-32 md:pt-28 pb-20`}>
          <div className={`${styles.boxWidth} max-w-4xl`}>
            <h1 className="text-3xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-gray-400 text-xs mb-8">Last Updated: October 25, 2025</p>

            <div className="space-y-6 text-gray-300 leading-relaxed text-xs">
              <div>
                <h2 className="text-lg font-bold text-slate-100 mb-3">1. What Are Cookies?</h2>
                <p className="text-xs">
                  Cookies are small text files that are placed on your device when you visit a website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-100 mb-3">2. Types of Cookies We Use</h2>
                
                <h3 className="text-base font-semibold text-slate-200 mb-2 mt-4">Essential Cookies</h3>
                <p className="text-xs">
                  These cookies are necessary for the website to function properly. They enable basic features like page navigation, form submissions, and maintaining session state during your visit.
                </p>

                <h3 className="text-base font-semibold text-slate-200 mb-2 mt-4">Analytics Cookies</h3>
                <p className="mb-2 text-xs">
                  We use Google Analytics 4 (GA4) to understand how visitors interact with our website and to improve our services. These cookies collect anonymous information such as:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Pages visited and time spent on each page</li>
                  <li>How visitors arrived at our site (referring websites, search engines)</li>
                  <li>Device and browser information (device type, operating system, browser version)</li>
                  <li>General geographic location (country and city level, not exact addresses)</li>
                  <li>User interactions (clicks, form submissions, scrolling behavior)</li>
                </ul>
                <p className="mt-3 text-xs">
                  This data is aggregated and anonymized, and we do not use it to identify individual users. Google Analytics cookies typically expire after 2 years or when you clear your browser cookies.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-100 mb-3">3. Third-Party Services</h2>
                <p className="mb-3 text-xs">We use the following third-party services:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Google Analytics 4:</strong> Website traffic analysis and user behavior tracking. Google Analytics sets cookies such as <code className="bg-slate-800 px-2 py-1 rounded text-sm">_ga</code>, <code className="bg-slate-800 px-2 py-1 rounded text-sm">_ga_*</code>, and <code className="bg-slate-800 px-2 py-1 rounded text-sm">_gid</code> to distinguish users and track sessions. 
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline ml-1">Google's Privacy Policy</a>
                  </li>
                  <li>
                    <strong>Google Fonts:</strong> We load fonts from Google Fonts to provide a consistent and fast loading experience. Google Fonts may set cookies when fonts are served from their servers. 
                    <a href="https://fonts.google.com/about" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline ml-1">Learn more about Google Fonts</a>
                  </li>
                  <li>
                    <strong>EmailJS:</strong> We use EmailJS for contact form functionality. EmailJS does not set cookies; it's a client-side API service that sends emails directly from your browser without storing personal data on their servers.
                  </li>
                </ul>
                <p className="mt-3 text-xs">
                  Note: We do not currently use social media sharing widgets or advertising cookies that would track your activity across other websites.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-100 mb-3">4. How to Control Cookies</h2>
                <p className="mb-3 text-xs">You can control and manage cookies in several ways:</p>
                
                <h3 className="text-base font-semibold text-slate-200 mb-2 mt-4">Browser Settings</h3>
                <p className="mb-2 text-xs">Most web browsers allow you to control cookies through their settings:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                  <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                  <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                  <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
                </ul>

                <h3 className="text-base font-semibold text-slate-200 mb-2 mt-4">Opt-Out Tools</h3>
                <p className="mb-2 text-xs">You can opt-out of Google Analytics tracking:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Google Analytics Opt-out:</strong> Install the <a href="https://tools.google.com/dlpage/gaoptout" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a> to prevent your data from being used by Google Analytics</li>
                  <li><strong>Browser Settings:</strong> Most modern browsers allow you to block third-party cookies entirely, which will prevent Google Analytics from tracking your visits</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-100 mb-3">5. Impact of Disabling Cookies</h2>
                <p className="mb-3 text-xs">
                  If you disable cookies, some features of our website may not function properly:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Essential cookies:</strong> These cannot be disabled as they are necessary for basic website functionality (form submissions, navigation).</li>
                  <li><strong>Analytics cookies:</strong> Disabling these will not affect your ability to use our website, but we won't be able to gather insights to improve our services.</li>
                  <li><strong>Third-party cookies:</strong> Blocking third-party cookies may prevent Google Analytics from tracking your visits, but all website features will continue to work.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-100 mb-3">6. Cookie Duration</h2>
                <p className="mb-3 text-xs">The cookies we use have different lifespans:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Session Cookies:</strong> These are temporary cookies that are deleted when you close your browser. They are used for basic website functionality during your visit.</li>
                  <li><strong>Persistent Cookies:</strong> These remain on your device for a set period:
                    <ul className="list-disc list-inside space-y-1 ml-6 mt-2">
                      <li>Google Analytics cookies: Typically expire after 2 years</li>
                      <li>Google Analytics session cookies: Expire after 30 minutes of inactivity or when you close your browser</li>
                    </ul>
                  </li>
                </ul>
                <p className="mt-3 text-xs">
                  You can manually delete cookies at any time through your browser settings.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-100 mb-3">7. Updates to This Policy</h2>
                <p className="text-xs">
                  We may update this Cookie Policy from time to time. Please check this page regularly for any changes.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-100 mb-3">8. Contact Us</h2>
                <p className="mb-3 text-xs">If you have questions about our use of cookies, please contact us:</p>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <p className="text-xs"><strong>Escose Technologies</strong></p>
                  <p className="text-xs">Email: info@escose.com</p>
                  <p className="text-xs">Phone: +91 7416 8570 52</p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CookiePolicy;


