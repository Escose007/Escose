import { Helmet } from 'react-helmet-async';
import styles from '../style';

const TermsConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Escose Technologies</title>
        <meta name="description" content="Terms and Conditions for using Escose Technologies services. Read our terms of service for IT staffing and software development." />
        <link rel="canonical" href="https://escose.com/terms" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-slate-100 min-h-screen">
        <section className={`${styles.paddingX} ${styles.flexCenter} pt-32 md:pt-28 pb-20`}>
          <div className={`${styles.boxWidth} max-w-4xl`}>
            <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-gray-400 text-xs mb-8">Last Updated: October 25, 2025</p>

            <div className="space-y-6 text-gray-300 leading-relaxed text-xs">
              <div>
                <h2 className="text-lg font-bold text-slate-100 mb-3">1. Acceptance of Terms</h2>
                <p className="text-xs">
                  By accessing or using the services of Escose Technologies ("Company," "we," "our"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-100 mb-3">2. Services</h2>
                <p className="mb-3 text-xs">Escose Technologies provides:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>IT staffing and staff augmentation services</li>
                  <li>Software development and consulting services</li>
                  <li>Dedicated development teams</li>
                  <li>Contract-to-hire arrangements</li>
                  <li>Technical recruitment and talent acquisition</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-100 mb-3">3. Client Responsibilities</h2>
                <p className="mb-3 text-xs">As a client, you agree to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Provide accurate information about project requirements</li>
                  <li>Make timely payments as per agreed terms</li>
                  <li>Provide necessary access and resources for developers</li>
                  <li>Communicate professionally and respectfully with our team</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-100 mb-3">4. Payment Terms</h2>
                <p className="mb-3 text-xs">Payment terms vary by engagement model:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Staff Augmentation:</strong> Monthly invoicing based on hours worked</li>
                  <li><strong>Dedicated Teams:</strong> Fixed monthly fee</li>
                  <li><strong>Contract-to-Hire:</strong> As per individual agreement</li>
                </ul>
                <p className="mt-3 text-xs">Payment is typically due within 30 days of invoice date. Late payments may incur interest charges.</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-100 mb-3">5. Intellectual Property</h2>
                <p className="text-xs">
                  All work product created by our developers during the engagement belongs to the client upon full payment, unless otherwise agreed in writing. We retain the right to use general knowledge and skills gained during the project.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-100 mb-3">6. Confidentiality</h2>
                <p className="text-xs">
                  Both parties agree to maintain confidentiality of proprietary information shared during the engagement. This obligation survives termination of the agreement.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-100 mb-3">7. Replacement Guarantee</h2>
                <p className="text-xs">
                  If a developer does not meet expectations within the first 30 days, we will provide a replacement at no additional cost, subject to reasonable cause and proper notice.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-100 mb-3">8. Termination</h2>
                <p className="text-xs">
                  Either party may terminate the agreement with 30 days written notice. Client remains responsible for payment of services rendered up to the termination date.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-100 mb-3">9. Limitation of Liability</h2>
                <p className="text-xs">
                  To the maximum extent permitted by law, Escose Technologies shall not be liable for indirect, incidental, special, or consequential damages arising from the use of our services.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-100 mb-3">10. Governing Law</h2>
                <p className="text-xs">
                  These terms shall be governed by the laws of India. Any disputes shall be resolved through arbitration in Bangalore, Karnataka.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-100 mb-3">11. Changes to Terms</h2>
                <p className="text-xs">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-100 mb-3">12. Contact Information</h2>
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

export default TermsConditions;


