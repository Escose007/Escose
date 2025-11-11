import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import styles from '../style';
import { contactUsFields } from '../constants';
import Input from '../pureComponents/Input';
import Button from '../pureComponents/Button';
import { useToast } from './ToastContainer';

const ContactUs = ({ handleSuccessToast }) => {
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
    if (mobile && mobile.trim().length > 0 && mobile.trim().length < 10) {
      showError('Please enter a valid mobile number');
      return;
    }

    setIsSubmitting(true);

    try {
      // Get form data
      const templateParams = {
        title: 'ContactUs',
        from_name: formData.get('from_name'),
        company_name: formData.get('company_name') || '',
        from_email: formData.get('from_email'),
        contact_number: formData.get('contact_number') || '',
        message: formData.get('message') || '',
        file_name: formData.get('file_name') || '',
        to_email: 'info@escose.com',
        form_type: 'general_inquiry',
      };

      // Send email with EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_ccb920l',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_t5904kb',
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '2HswVx6NHPH32wUNU'
      );

      form.current.reset();
      setIsSubmitting(false);
      showSuccess('Your message has been sent successfully! We will get back to you soon.');
      if (handleSuccessToast) handleSuccessToast(true);
    } catch (error) {
      setErrorMessage(`Failed to send message: ${error.text || error.message || 'Unknown error'}`);
      setIsSubmitting(false);
      showError('Failed to send message. Please try again or contact us directly.');
    }
  };

  const sendFallbackEmail = () => {
    const formData = new FormData(form.current);
    const subject = 'General Inquiry - Escose Technologies';
    const body = `
Name: ${formData.get('from_name')}
Email: ${formData.get('from_email')}
Contact Number: ${formData.get('contact_number')}

Message:
${formData.get('message')}
    `;
    
    const mailtoLink = `mailto:info@escose.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };

  return (
    <section
      id="contact-us-form"
      className="w-full"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 w-full">
        {/* Contact Information */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-cyan-400/20 h-full">
            <h3 className="text-2xl font-bold text-cyan-300 mb-8">Get In Touch</h3>
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
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-cyan-400/20">
            <form
              className="flex flex-col w-full"
              ref={form}
              onSubmit={sendEmail}
            >
              <h2 className="text-2xl font-bold text-slate-100 mb-6">General Inquiry</h2>
              
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
              
              {contactUsFields.map((field) => (
                <Input
                  key={field.id}
                  labelText={field.labelText}
                  labelFor={field.id}
                  id={field.id}
                  name={field.id}
                  type={field.fieldType}
                  isRequired={field.isRequired}
                  placeholder={field.placeholder}
                  fieldType={field.fieldType}
                />
              ))}
              <Button 
                text={isSubmitting ? 'Sending...' : 'Submit'} 
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

export default ContactUs;
