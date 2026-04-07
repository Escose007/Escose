import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { contactUsFields } from '../constants';
import Input from '../pureComponents/Input';
import { useToast } from './ToastContainer';

const ContactUs = ({ handleSuccessToast }) => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showSuccess, showError } = useToast();

  const sendEmail = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const email  = formData.get('from_email');
    const name   = formData.get('from_name');
    const mobile = formData.get('contact_number');

    if (!name || name.trim().length < 2)           return showError('Please enter a valid name (at least 2 characters)');
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showError('Please enter a valid email address');
    if (mobile && mobile.trim().length > 0 && mobile.trim().length < 10) return showError('Please enter a valid mobile number');

    setIsSubmitting(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_ccb920l',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_t5904kb',
        {
          title: 'ContactUs',
          from_name: formData.get('from_name'),
          company_name: formData.get('company_name') || '',
          from_email: formData.get('from_email'),
          contact_number: formData.get('contact_number') || '',
          message: formData.get('message') || '',
          to_email: 'info@escose.com',
          form_type: 'general_inquiry',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '2HswVx6NHPH32wUNU'
      );
      form.current.reset();
      showSuccess('Your message has been sent! We\'ll get back to you within 24 hours.');
      if (handleSuccessToast) handleSuccessToast(true);
    } catch (err) {
      showError('Failed to send message. Please try again or email us directly at info@escose.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-us-form" className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 w-full">

        {/* ── Left info panel ── */}
        <div className="lg:col-span-2">
          <div className="contact-info-card h-full p-7"
            style={{ background: 'linear-gradient(145deg, rgba(15,23,42,0.9), rgba(30,41,59,0.8))', backdropFilter: 'blur(20px)' }}>

            {/* Top accent line */}
            <div className="h-[2px] w-full rounded-full mb-7"
              style={{ background: 'linear-gradient(90deg, #00d4ff, #276ef1, transparent)' }} />

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5"
              style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.25)', color: '#67e8f9' }}>
              💬 General Inquiry
            </div>

            <h3 className="text-2xl font-bold text-slate-100 mb-3">Let's connect</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Have a question about our services, pricing, or want to explore a partnership? We'd love to hear from you.
            </p>

            {/* Contact details */}
            <div className="space-y-5 mb-8">
              {[
                { icon: '📍', title: 'Office', value: 'BTM 2nd Stage, Bangalore 560076', color: 'rgba(0,212,255,0.1)', border: 'rgba(0,212,255,0.2)', text: '#67e8f9' },
                { icon: '📞', title: 'Phone',  value: '+91 7416 857052',               color: 'rgba(39,110,241,0.1)', border: 'rgba(39,110,241,0.2)', text: '#93c5fd' },
                { icon: '✉️', title: 'Email',  value: 'info@escose.com',               color: 'rgba(139,92,246,0.1)', border: 'rgba(139,92,246,0.2)', text: '#c4b5fd' },
              ].map(item => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                    style={{ background: item.color, border: `1px solid ${item.border}` }}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: item.text }}>{item.title}</div>
                    <div className="text-slate-300 text-sm">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Response time badge */}
            <div className="flex items-center gap-3 p-4 rounded-xl"
              style={{ background: 'rgba(34,197,94,0.07)', border: '1px solid rgba(34,197,94,0.2)' }}>
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
              </span>
              <div>
                <div className="text-xs font-semibold text-green-400">Average response time</div>
                <div className="text-xs text-slate-500">Under 24 hours on business days</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right form ── */}
        <div className="lg:col-span-3">
          <div className="rounded-2xl overflow-hidden"
            style={{ background: 'linear-gradient(145deg, rgba(15,23,42,0.9), rgba(30,41,59,0.8))', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(20px)' }}>

            {/* Card top bar */}
            <div className="h-[2px]" style={{ background: 'linear-gradient(90deg, #00d4ff, #276ef1, #8b5cf6)' }} />

            <div className="p-7 contact-form-wrapper">
              <h2 className="text-xl font-bold text-slate-100 mb-1">Send us a message</h2>
              <p className="text-slate-500 text-sm mb-7">We'll get back to you within 24 hours.</p>

              <form ref={form} onSubmit={sendEmail} className="flex flex-col w-full">
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

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 w-full py-4 px-6 rounded-xl font-semibold text-white text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/25 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  style={{ background: isSubmitting ? 'rgba(39,110,241,0.6)' : 'linear-gradient(135deg, #00d4ff, #276ef1)', boxShadow: isSubmitting ? 'none' : '0 4px 20px rgba(0,212,255,0.2)' }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending…
                    </span>
                  ) : 'Send Message →'}
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;
