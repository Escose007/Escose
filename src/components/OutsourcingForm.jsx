import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { outsourcingFormFields } from '../constants';
import Input from '../pureComponents/Input';
import { useToast } from './ToastContainer';

const WHY_ITEMS = [
  { icon: '⚡', text: '500+ pre-vetted engineers ready' },
  { icon: '💰', text: 'Save up to 60% vs local hire' },
  { icon: '🚀', text: 'Onboard in as little as 2 weeks' },
  { icon: '🔒', text: '30-day replacement guarantee' },
  { icon: '🌍', text: 'Global talent, local timezone support' },
];

const OutsourcingForm = ({ handleSuccessToast }) => {
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
          title: 'Hire Developer',
          from_name: formData.get('from_name'),
          company_name: formData.get('company_name') || '',
          from_email: formData.get('from_email'),
          contact_number: formData.get('contact_number') || '',
          message: formData.get('message') || '',
          to_email: 'info@escose.com',
          form_type: 'outsourcing_request',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '2HswVx6NHPH32wUNU'
      );
      form.current.reset();
      showSuccess("Request sent! We'll send your first CVs within 8 business days.");
      if (handleSuccessToast) handleSuccessToast(true);
    } catch {
      showError('Failed to send. Please try again or email us at info@escose.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="outsourcing-form" className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 w-full">

        {/* ── Left info panel ── */}
        <div className="lg:col-span-2">
          <div className="contact-info-card h-full p-7"
            style={{ background: 'linear-gradient(145deg, rgba(15,23,42,0.9), rgba(30,41,59,0.8))', backdropFilter: 'blur(20px)' }}>

            <div className="h-[2px] w-full rounded-full mb-7"
              style={{ background: 'linear-gradient(90deg, #00d4ff, #276ef1, transparent)' }} />

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5"
              style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.25)', color: '#67e8f9' }}>
              🚀 IT Staffing — Primary Service
            </div>

            <h3 className="text-2xl font-bold text-slate-100 mb-3">Hire elite engineers</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-7">
              Scale your team fast with pre-screened engineers who fit your tech stack, culture, and timeline.
            </p>

            {/* Why choose us */}
            <div className="space-y-3 mb-7">
              {WHY_ITEMS.map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
                    style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)' }}>
                    {icon}
                  </div>
                  <span className="text-slate-300 text-sm">{text}</span>
                </div>
              ))}
            </div>

            {/* Stat strip */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { val: 'avg 8 days', lbl: 'First CVs', col: '#67e8f9' },
                { val: '98%',        lbl: 'Success rate', col: '#86efac' },
                { val: '500+',       lbl: 'Engineers', col: '#c4b5fd' },
                { val: '60%',        lbl: 'Cost savings', col: '#93c5fd' },
              ].map(({ val, lbl, col }) => (
                <div key={lbl} className="p-3 rounded-xl text-center"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="text-base font-bold" style={{ color: col }}>{val}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right form ── */}
        <div className="lg:col-span-3">
          <div className="rounded-2xl overflow-hidden"
            style={{ background: 'linear-gradient(145deg, rgba(15,23,42,0.9), rgba(30,41,59,0.8))', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(20px)' }}>

            <div className="h-[2px]" style={{ background: 'linear-gradient(90deg, #00d4ff, #276ef1, #8b5cf6)' }} />

            <div className="p-7 contact-form-wrapper">
              <h2 className="text-xl font-bold text-slate-100 mb-1">Developer Hiring Request</h2>
              <p className="text-slate-500 text-sm mb-7">We'll send matching CVs within 8 business days.</p>

              <form ref={form} onSubmit={sendEmail} className="flex flex-col w-full">
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
                  ) : 'Submit Hiring Request →'}
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OutsourcingForm;
