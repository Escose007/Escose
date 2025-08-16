import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import styles from '../style';
import { contactUsFields } from '../constants';
import Input from '../pureComponents/Input';
import Button from '../pureComponents/Button';

const ContactUs = ({ handleSuccessToster }) => {
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
      from_email: formData.get('from_email'),
      contact_number: formData.get('contact_number'),
      project_type: formData.get('project_type'),
      estimated_budget: formData.get('estimated_budget'),
      message: formData.get('message'),
      to_email: 'info@escose.com',
      form_type: 'general_inquiry'
    };
    
    // console.log('Sending email with params:', templateParams);
    
    emailjs
      .send(
        'service_ccb920l',
        'template_key7wtr',
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
    const subject = 'General Inquiry - Escose Technologies';
    const body = `
Name: ${formData.get('from_name')}
Email: ${formData.get('from_email')}
Contact Number: ${formData.get('contact_number')}
Project Type: ${formData.get('project_type')}
Estimated Budget: ${formData.get('estimated_budget')}

Message:
${formData.get('message')}
    `;
    
    const mailtoLink = `mailto:info@escose.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };

  return (
    <section
      id="contact-us-form"
      className={`${styles.flexCenter} ${styles.paddingY} ${styles.boxWidth} `}
    >
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <ul className="flex-[1] flex flex-col justify-start mr-10">
          {[
            { title: 'location', value: 'Bengalore, India' },
            { title: 'phone', value: '+91 7568288997' },
            { title: 'Email', value: 'info@escose.com' },
          ].map((item) => (
            <li key={item.title} className="mb-10">
              <h2 className={`${styles.heading3} capitalize`}>{item.title}</h2>
              <p className={`${styles.paragraph}`}>{item.value}</p>
            </li>
          ))}
        </ul>
        <div className="flex-[2] w-full flex flex-col md:flex-row justify-between flex-wrap md:mt-0 mt-10">
          <form
            className={`flex flex-col w-full`}
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
    </section>
  );
};

export default ContactUs;
