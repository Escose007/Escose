import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import styles from '../style';
import { outsourcingFormFields } from '../constants';
import Input from '../pureComponents/Input';
import Button from '../pureComponents/Button';

const OutsourcingForm = ({ handleSuccessToster }) => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    // Get form data
    const formData = new FormData(form.current);
    const templateParams = {
      from_name: formData.get('from_name'),
      company_name: formData.get('company_name'),
      from_email: formData.get('from_email'),
      contact_number: formData.get('contact_number'),
      developer_type: formData.get('developer_type'),
      team_size: formData.get('team_size'),
      employment_type: formData.get('employment_type'),
      message: formData.get('message'),
      to_email: 'info@escose.com',
      form_type: 'outsourcing_request'
    };
    
    console.log('Sending outsourcing request with params:', templateParams);
    
    emailjs
      .send(
        'service_ccb920l',
        'template_t5904kb',
        templateParams,
        // form.current,
        '2HswVx6NHPH32wUNU'
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          form.current.reset();
          setIsSubmitting(false);
          handleSuccessToster(true);
        },
        (error) => {
          console.error('Failed to send email:', error);
          setErrorMessage(`Failed to send message: ${error.text}`);
          setIsSubmitting(false);
          
          // Show fallback option
          if (error.text.includes('Gmail_API: Invalid grant')) {
            alert('Email service temporarily unavailable. Please email us directly at info@escose.com or try again later.');
          } else {
            alert(`Failed to send message: ${error.text || 'Unknown error'}`);
          }
        }
      );
  };

  const sendFallbackEmail = () => {
    const formData = new FormData(form.current);
    const subject = 'Developer Outsourcing Request - Escose Technologies';
    const body = `
Name: ${formData.get('from_name')}
Company: ${formData.get('company_name')}
Email: ${formData.get('from_email')}
Contact Number: ${formData.get('contact_number')}
Developer Type: ${formData.get('developer_type')}
Team Size: ${formData.get('team_size')}
Employment Type: ${formData.get('employment_type')}

Additional Requirements:
${formData.get('message')}
    `;
    
    const mailtoLink = `mailto:info@escose.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };

  return (
    <section
      id="outsourcing-form"
      className="w-full"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 w-full">
        {/* Info Section */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-cyan-400/20 h-full">
            <h2 className="text-2xl font-bold text-cyan-300 mb-4">Hire Developers</h2>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Looking to scale your team with top talent? Fill out this form to get started with our IT staffing services.
            </p>
            
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-xl p-6 border border-cyan-400/20">
              <h3 className="text-xl font-bold text-cyan-300 mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                {[
                  'Access to 500+ pre-vetted developers',
                  'Flexible engagement models',
                  'Cost savings up to 60%',
                  'Quick onboarding within 2 weeks',
                  '24/7 support and management'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-cyan-400 mr-2 text-lg">✓</span>
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
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
              <h2 className="text-2xl font-bold text-slate-100 mb-6">Developer Outsourcing Request</h2>
              
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
              
              {outsourcingFormFields.map((field) => (
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
                text={isSubmitting ? 'Sending...' : 'Submit Request'} 
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

export default OutsourcingForm; 