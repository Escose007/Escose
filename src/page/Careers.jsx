import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from '../style';
import { openPositions } from '../constants';
import { Link } from 'react-router-dom';

export default function Careers() {
  const [selectedDept, setSelectedDept] = useState('All');
  const [activeJob, setActiveJob] = useState(null);
  const departments = ['All', ...Array.from(new Set(openPositions.map(p => p.department)))];
  const filtered = selectedDept === 'All' ? openPositions : openPositions.filter(p => p.department === selectedDept);

  return (
    <>
      <Helmet>
        <title>Careers at Escose Technologies | Join Our Global Engineering Team</title>
        <meta name="description" content="Explore career opportunities at Escose Technologies. Join our team of 500+ engineers working on cutting-edge projects. Remote-first culture, competitive pay, and exciting challenges in IT staffing, software development, and GenAI." />
        <meta name="keywords" content="escose careers, software engineer jobs, IT jobs, remote developer jobs, React developer jobs, Python developer jobs, full stack jobs, DevOps jobs, AI ML jobs, tech careers India" />
        <link rel="canonical" href="https://escose.com/careers" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Careers at Escose Technologies | We're Hiring" />
        <meta property="og:description" content="Join our global engineering team. Work on innovative projects with modern tech stacks. Remote-first culture and competitive benefits." />
        <meta property="og:url" content="https://escose.com/careers" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers at Escose Technologies" />
        <meta name="twitter:description" content="Join our team of 500+ engineers. Exciting opportunities in software development and GenAI." />
      </Helmet>
    
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-slate-100 min-h-screen">
      {/* Hero */}
      <section className={`${styles.paddingX} ${styles.flexCenter} pt-32 md:pt-28`}>
        <div className={`${styles.boxWidth} text-center`}>
          <div className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-6 py-2 rounded-full text-sm font-semibold mb-4">We're Hiring</div>
          <h1 className="text-5xl font-bold mb-4">
            Join <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Escose</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Build modern products and accelerate client success with our global engineering team.</p>
        </div>
      </section>

      {/* Filters */}
      <section className={`${styles.paddingX} ${styles.flexCenter} py-8`}>
        <div className={`${styles.boxWidth}`}>
          <div className="flex flex-wrap gap-3 justify-center">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${selectedDept === dept ? 'bg-white/10 border-white/30' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className={`${styles.paddingX} ${styles.flexCenter} pb-20`}>
        <div className={`${styles.boxWidth}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((job, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <div className="text-sm text-cyan-300 font-semibold mb-2">{job.department}</div>
                  <h3 className="text-2xl font-bold mb-1">{job.title}</h3>
                  <div className="text-gray-300 text-sm mb-4">{job.location} • {job.type}</div>
                  <ul className="text-gray-300 text-sm space-y-2 mb-4">
                    <li><span className="font-semibold text-white">Experience:</span> {job.experience}</li>
                    <li><span className="font-semibold text-white">Skills:</span> {job.skills.join(', ')}</li>
                  </ul>
                  <p className="text-gray-300 text-sm mb-4">{job.summary}</p>
                </div>
                <div className="flex gap-3">
                  <Link to="/contact?tab=job&action=apply" className="bg-brand-gradient hover:brightness-110 text-white px-4 py-2 rounded-lg font-medium btn-hover-effect">Apply Now</Link>
                  <button 
                    onClick={() => {
                      setActiveJob(job);
                      // Scroll to JD viewer after a short delay to ensure it's rendered
                      setTimeout(() => {
                        const jdViewer = document.getElementById('jd-viewer');
                        if (jdViewer) {
                          jdViewer.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }, 100);
                    }} 
                    className="border border-white/20 hover:border-white/40 text-white px-4 py-2 rounded-lg font-medium btn-hover-effect"
                  >
                    View JD
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In-page JD Viewer */}
      {activeJob && (
        <section id="jd-viewer" className={`${styles.paddingX} ${styles.flexCenter} pb-24`}>
          <div className={`${styles.boxWidth} bg-white/5 border border-white/10 rounded-2xl p-6`}> 
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="text-sm text-cyan-300 font-semibold">{activeJob.department}</div>
                <h2 className="text-3xl font-bold">{activeJob.title}</h2>
                <div className="text-gray-300 text-sm">{activeJob.location} • {activeJob.type} • {activeJob.experience}</div>
              </div>
              <button onClick={() => setActiveJob(null)} className="text-gray-300 hover:text-white transition-colors">✕</button>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Responsibilities</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {activeJob.jd?.responsibilities?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Requirements</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {activeJob.jd?.requirements?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                {activeJob.jd?.niceToHave?.length ? (
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Nice to have</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {activeJob.jd?.niceToHave?.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 h-max">
                <h4 className="text-lg font-semibold mb-2">Apply for this role</h4>
                <p className="text-gray-300 text-sm mb-4">Share your profile and availability. Our talent team will reach out within 24 hours.</p>
                <Link to="/contact?tab=job&action=apply" className="block text-center bg-brand-gradient hover:brightness-110 text-white px-4 py-2 rounded-lg font-medium btn-hover-effect">Apply Now</Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
    </>
  );
}
