import { Helmet } from 'react-helmet-async';
import styles from '../style';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Escose Technologies</title>
        <meta name="description" content="Privacy Policy for Escose Technologies. Learn how we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://escose.com/privacy-policy" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-slate-100 min-h-screen">
        <section className={`${styles.paddingX} ${styles.flexCenter} pt-32 md:pt-28 pb-20`}>
          <div className={`${styles.boxWidth} max-w-4xl`}>
            <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-400 text-xs mb-8">Last Updated: October 25, 2025</p>

            <div className="space-y-6 text-gray-300 leading-relaxed text-xs">
              <div>
                <h2 className="text-lg font-bold text-slate-100 mb-3">1. Introduction</h2>
                <p className="text-xs">
                  Escose Technologies ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://escose.com or use our services.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-100 mb-3">2. Information We Collect</h2>
                <h3 className="text-base font-semibold text-slate-200 mb-2 mt-4">Personal Information</h3>
                <p className="mb-3 text-xs">We may collect personal information that you voluntarily provide to us, including:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Company name and job title</li>
                  <li>Resume/CV data when applying for positions</li>
                  <li>Project requirements and technical specifications</li>
                  <li>Communication preferences</li>
                </ul>

                <h3 className="text-base font-semibold text-slate-200 mb-2 mt-4">Automatically Collected Information</h3>
                <p className="mb-3 text-xs">When you visit our website, we may automatically collect:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>IP address and browser type</li>
                  <li>Device information and operating system</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-100 mb-3">3. How We Use Your Information</h2>
                <p className="mb-3 text-xs">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Provide and improve our IT staffing and development services</li>
                  <li>Respond to your inquiries and communicate with you</li>
                  <li>Process job applications and match candidates with positions</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Analyze website usage and improve user experience</li>
                  <li>Comply with legal obligations and prevent fraud</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-100 mb-3">4. Information Sharing and Disclosure</h2>
                <p className="mb-3 text-xs">We may share your information with:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Client Companies:</strong> When you apply for positions through our staffing services</li>
                  <li><strong>Service Providers:</strong> Third-party vendors who assist in our operations (email services, analytics, hosting)</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                </ul>
                <p className="mt-3 text-xs">We do not sell your personal information to third parties.</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-100 mb-3">5. Cookies and Tracking Technologies</h2>
                <p className="text-xs">
                  We use cookies and similar technologies to enhance your experience. You can control cookies through your browser settings. Our website uses Google Analytics to understand how visitors interact with our site. For more information, see our Cookie Policy.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-100 mb-3">6. Data Security</h2>
                <p className="text-xs">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-100 mb-3">7. Your Rights</h2>
                <p className="mb-3 text-xs">Depending on your location, you may have the following rights:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to or restrict processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent</li>
                </ul>
                <p className="mt-3 text-xs">To exercise these rights, contact us at info@escose.com</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-100 mb-3">8. International Data Transfers</h2>
                <p className="text-xs">
                  Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-100 mb-3">9. Children's Privacy</h2>
                <p className="text-xs">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-100 mb-3">10. Changes to This Policy</h2>
                <p className="text-xs">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page with an updated "Last Updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-100 mb-3">11. Contact Us</h2>
                <p className="mb-3 text-xs">If you have questions about this Privacy Policy, please contact us:</p>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <p className="text-xs"><strong>Escose Technologies</strong></p>
                  <p className="text-xs">Email: info@escose.com</p>
                  <p className="text-xs">Phone: +91 7416 8570 52</p>
                  <p className="text-xs">Address: Bangalore, Karnataka, India</p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;


