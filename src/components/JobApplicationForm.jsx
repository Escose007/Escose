import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Input from '../pureComponents/Input';
import { useToast } from './ToastContainer';

const PERKS = [
  { icon: '🌍', text: 'Work with global clients' },
  { icon: '💻', text: 'Remote-first culture' },
  { icon: '💰', text: 'Competitive compensation' },
  { icon: '🚀', text: 'Cutting-edge tech projects' },
  { icon: '📈', text: 'Clear growth path' },
];

const ROLES_OPEN = ['Backend Dev', 'Frontend Dev', 'Full Stack', 'DevOps', 'GenAI Engineer', 'Data Engineer', 'QA Engineer'];

const JobApplicationForm = ({ handleSuccessToast }) => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showSuccess, showError } = useToast();

  const sendEmail = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const email  = formData.get('from_email');
    const name   = formData.get('from_name');
    const mobile = formData.get('contact_number');

    if (!name || name.trim().length < 2)           return showError('Please enter a valid name');
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showError('Please enter a valid email address');
    if (!mobile || mobile.trim().length < 10)      return showError('Please enter a valid mobile number');

    setIsSubmitting(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_ccb920l',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_t5904kb',
        {
          title: 'Apply for a Job',
          from_name: name,
          company_name: formData.get('company_name') || '',
          from_email: email,
          contact_number: mobile,
          message: formData.get('message') || '',
          to_email: 'info@escose.com',
          form_type: 'job_application',
          subject: `Job Application - ${name}`,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '2HswVx6NHPH32wUNU'
      );
      form.current.reset();
      showSuccess('Application submitted! Our HR team will reach out within 3–5 business days.');
      if (handleSuccessToast) handleSuccessToast(true);
    } catch {
      showError('Failed to submit. Please try again or email us at info@escose.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="job-application-form" className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 w-full">

        {/* ── Left info panel ── */}
        <div className="lg:col-span-2">
          <div className="contact-info-card h-full p-7"
            style={{ background: 'linear-gradient(145deg, rgba(15,23,42,0.9), rgba(30,41,59,0.8))', backdropFilter: 'blur(20px)' }}>

            <div className="h-[2px] w-full rounded-full mb-7"
              style={{ background: 'linear-gradient(90deg, #8b5cf6, #276ef1, transparent)' }} />

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5"
              style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.3)', color: '#c4b5fd' }}>
              🎯 Join Our Talent Pool
            </div>

            <h3 className="text-2xl font-bold text-slate-100 mb-3">Work with Escose</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-7">
              Join our network of 500+ pre-vetted engineers and get placed with top global companies.
            </p>

            {/* Perks */}
            <div className="space-y-3 mb-7">
              {PERKS.map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
                    style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)' }}>
                    {icon}
                  </div>
                  <span className="text-slate-300 text-sm">{text}</span>
                </div>
              ))}
            </div>

            {/* Open roles */}
            <div className="mb-6">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Currently hiring for</div>
              <div className="flex flex-wrap gap-2">
                {ROLES_OPEN.map(r => (
                  <span key={r} className="px-2.5 py-1 rounded-full text-xs font-medium"
                    style={{ background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.2)', color: '#c4b5fd' }}>
                    {r}
                  </span>
                ))}
              </div>
            </div>

            {/* Resume note */}
            <div className="p-4 rounded-xl"
              style={{ background: 'rgba(139,92,246,0.07)', border: '1px solid rgba(139,92,246,0.2)' }}>
              <div className="flex items-start gap-3">
                <span className="text-xl">📎</span>
                <div>
                  <div className="text-xs font-semibold text-purple-300 mb-1">Send your resume</div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Email your CV to{' '}
                    <a href="mailto:info@escose.com" className="text-purple-300 hover:text-purple-200 underline">
                      info@escose.com
                    </a>{' '}
                    along with this form submission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right form ── */}
        <div className="lg:col-span-3">
          <div className="rounded-2xl overflow-hidden"
            style={{ background: 'linear-gradient(145deg, rgba(15,23,42,0.9), rgba(30,41,59,0.8))', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(20px)' }}>

            <div className="h-[2px]" style={{ background: 'linear-gradient(90deg, #8b5cf6, #276ef1, #00d4ff)' }} />

            <div className="p-7 contact-form-wrapper">
              <h2 className="text-xl font-bold text-slate-100 mb-1">Job Application</h2>
              <p className="text-slate-500 text-sm mb-7">Our HR team will reach out within 3–5 business days.</p>

              <form ref={form} onSubmit={sendEmail} className="flex flex-col w-full">
                <Input labelText="Full Name" labelFor="from_name" id="from_name" name="from_name"
                  type="text" isRequired placeholder="Your full name" fieldType="text" />

                <Input labelText="Email Address" labelFor="from_email" id="from_email" name="from_email"
                  type="email" isRequired placeholder="your@email.com" fieldType="email" />

                <Input labelText="Mobile Number" labelFor="contact_number" id="contact_number" name="contact_number"
                  type="tel" isRequired placeholder="Your phone number" fieldType="integer" />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 w-full py-4 px-6 rounded-xl font-semibold text-white text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  style={{ background: isSubmitting ? 'rgba(139,92,246,0.5)' : 'linear-gradient(135deg, #8b5cf6, #276ef1)', boxShadow: isSubmitting ? 'none' : '0 4px 20px rgba(139,92,246,0.2)' }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Submitting…
                    </span>
                  ) : 'Submit Application →'}
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default JobApplicationForm;
