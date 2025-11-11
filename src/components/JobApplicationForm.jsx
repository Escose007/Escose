import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import styles from '../style';
import Input from '../pureComponents/Input';
import Button from '../pureComponents/Button';
import { useToast } from './ToastContainer';

const JobApplicationForm = ({ handleSuccessToster }) => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { showSuccess, showError } = useToast();


  const sendEmail = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Validate form
    const formData = new FormData(form.current);
    const email = formData.get('from_email');
    const name = formData.get('from_name');
    const mobile = formData.get('contact_number');

    if (!name || name.trim().length < 2) {
      showError('Please enter a valid name (at least 2 characters)');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      showError('Please enter a valid email address');
      return;
    }

    // Mobile validation (basic check)
    if (!mobile || mobile.trim().length < 10) {
      showError('Please enter a valid mobile number');
      return;
    }

    setIsSubmitting(true);

    try {
      // Get form data
      const templateParams = {
        title: 'Apply for a Job',
        from_name: name,
        company_name: formData.get('company_name') || '',
        from_email: email,
        contact_number: mobile,
        message: formData.get('message') || '',
        to_email: 'info@escose.com',
        form_type: 'job_application',
        subject: `Job Application - ${name}`,
      };

      // Send email with EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_ccb920l',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_t5904kb',
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '2HswVx6NHPH32wUNU'
      );

      console.log('Application sent successfully');
      form.current.reset();
      setIsSubmitting(false);
      showSuccess('Your application has been submitted successfully! We will get back to you soon.');
      if (handleSuccessToster) handleSuccessToster(true);
    } catch (error) {
      console.error('Error submitting application:', error);
      setErrorMessage(`Failed to send application: ${error.text || error.message || 'Unknown error'}`);
      setIsSubmitting(false);
      showError('Failed to send message. Please try again or contact us directly.');
    }
  };

  const sendFallbackEmail = () => {
    const formData = new FormData(form.current);
    const subject = 'Job Application - Escose Technologies';
    const body = `
Name: ${formData.get('from_name')}
Email: ${formData.get('from_email')}
Mobile: ${formData.get('contact_number')}
Message: ${formData.get('message') || ''}
    `;

    const mailtoLink = `mailto:info@escose.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };

  return (
    <section id="job-application-form" className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 w-full">
        {/* Contact Information */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-cyan-400/20 h-full">
            <h3 className="text-2xl font-bold text-cyan-300 mb-8">Join Our Team</h3>
            <ul className="space-y-8">
              {[
                { title: 'Location', value: '190C, SAI-KRUPA, 6TH MAIN 16TH CROSS, BTM 2ND STAGE, N S PALYA, Bangalore - 560076', icon: '📍' },
                { title: 'Phone', value: '+91 7416857052', icon: '📞' },
                { title: 'Email', value: 'info@escose.com', icon: '✉️' },
              ].map((item) => (
                <li key={item.title} className="flex items-start">
                  <span className="text-3xl mr-4">{item.icon}</span>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-200 mb-1">{item.title}</h4>
                    <p className="text-slate-300">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-xl p-6 border border-cyan-400/20 mt-8">
              <h4 className="text-lg font-bold text-cyan-300 mb-3">Why Join Escose?</h4>
              <ul className="space-y-2 text-slate-200 text-sm">
                <li>• Work on cutting-edge projects</li>
                <li>• Remote-first culture</li>
                <li>• Competitive compensation</li>
                <li>• Growth opportunities</li>
                <li>• Global team collaboration</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-cyan-400/20">
            <form className="flex flex-col w-full" ref={form} onSubmit={sendEmail}>
              <h2 className="text-2xl font-bold text-slate-100 mb-6">Job Application</h2>

              {errorMessage && (
                <div className="bg-red-500/20 border border-red-500/50 text-red-200 p-3 mb-4 rounded-md">
                  <p className="mb-2">{errorMessage}</p>
                  <button
                    type="button"
                    onClick={sendFallbackEmail}
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md text-sm transition-colors duration-200"
                  >
                    Send via Email Client
                  </button>
                </div>
              )}

              <Input
                labelText="Full Name"
                labelFor="from_name"
                id="from_name"
                name="from_name"
                type="text"
                isRequired={true}
                placeholder="Enter Your Full Name"
                fieldType="text"
              />

              <Input
                labelText="Email ID"
                labelFor="from_email"
                id="from_email"
                name="from_email"
                type="email"
                isRequired={true}
                placeholder="Enter Your Email"
                fieldType="email"
              />

              <Input
                labelText="Mobile Number"
                labelFor="contact_number"
                id="contact_number"
                name="contact_number"
                type="tel"
                isRequired={true}
                placeholder="Enter Your Mobile Number"
                fieldType="integer"
              />

              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-xl p-6 border border-cyan-400/20 mb-6">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">📎</span>
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-300 mb-2">Resume Submission</h4>
                    <p className="text-slate-200 text-sm leading-relaxed">
                      Please share your resume at{' '}
                      <a 
                        href="mailto:info@escose.com" 
                        className="text-cyan-400 hover:text-cyan-300 underline font-medium transition-colors duration-200"
                      >
                        info@escose.com
                      </a>
                      {' '}for applying to this job position.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                text={isSubmitting ? 'Submitting...' : 'Submit Application'}
                type="submit"
                styles={isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
                disabled={isSubmitting}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobApplicationForm;
