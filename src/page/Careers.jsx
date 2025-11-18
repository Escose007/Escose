import { useState, useMemo, useCallback, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from '../style';
import { openPositions } from '../constants';
import { Link } from 'react-router-dom';

// Memoize departments list - only calculate once
const departments = ['All', ...Array.from(new Set(openPositions.map(p => p.department)))];

// Memoized regex cache to avoid recreating regex patterns
const regexCache = new Map();

// Optimized highlight function with memoized regex
const highlightText = (text, query) => {
  if (!query || !text) return text;
  
  // Use cached regex if available
  let regex = regexCache.get(query);
  if (!regex) {
    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    regex = new RegExp(`(${escapedQuery})`, 'gi');
    // Cache regex (limit cache size to prevent memory issues)
    if (regexCache.size < 50) {
      regexCache.set(query, regex);
    }
  }
  
  const parts = text.split(regex);
  
  // When using split with capturing group, every other element is a match
  return parts.map((part, index) => {
    // Odd indices are matches (captured groups)
    if (index % 2 === 1) {
      return (
        <mark key={index} className="bg-cyan-400/30 text-cyan-300 font-semibold px-1 rounded">
          {part}
        </mark>
      );
    }
    return part;
  });
};

// Optimized skills highlighting with memoization
const highlightSkills = (skills, query) => {
  if (!query || !skills) return skills.join(', ');
  
  const lowerQuery = query.toLowerCase();
  return skills.map((skill, index) => {
    const isMatch = skill.toLowerCase().includes(lowerQuery);
    return (
      <span key={index}>
        {isMatch ? (
          <mark className="bg-cyan-400/30 text-cyan-300 font-semibold px-1 rounded">
            {skill}
          </mark>
        ) : (
          skill
        )}
        {index < skills.length - 1 && ', '}
      </span>
    );
  });
};

export default function Careers() {
  const [selectedDept, setSelectedDept] = useState('All');
  const [activeJob, setActiveJob] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');

  // Debounce search query to reduce re-renders during typing
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 300); // 300ms debounce

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Optimized search function - memoized with useCallback
  const searchJobs = useCallback((jobs, query) => {
    if (!query.trim()) return jobs;
    
    const lowerQuery = query.toLowerCase();
    
    // Early return optimizations
    return jobs.filter(job => {
      // Search in title (most common search)
      if (job.title?.toLowerCase().includes(lowerQuery)) return true;
      
      // Search in department
      if (job.department?.toLowerCase().includes(lowerQuery)) return true;
      
      // Search in location
      if (job.location?.toLowerCase().includes(lowerQuery)) return true;
      
      // Search in job ID
      if (job.jobId?.toLowerCase().includes(lowerQuery)) return true;
      
      // Search in experience
      if (job.experience?.toLowerCase().includes(lowerQuery)) return true;
      
      // Search in skills (early return if match found)
      if (job.skills?.some(skill => skill.toLowerCase().includes(lowerQuery))) return true;
      
      // Search in summary
      if (job.summary?.toLowerCase().includes(lowerQuery)) return true;
      
      // Search in responsibilities (only if needed)
      if (job.jd?.responsibilities?.some(resp => resp.toLowerCase().includes(lowerQuery))) return true;
      
      // Search in requirements
      if (job.jd?.requirements?.some(req => req.toLowerCase().includes(lowerQuery))) return true;
      
      // Search in nice to have
      if (job.jd?.niceToHave?.some(item => item.toLowerCase().includes(lowerQuery))) return true;
      
      return false;
    });
  }, []);

  // Apply both department filter and search filter - memoized with debounced query
  const filtered = useMemo(() => {
    let result = selectedDept === 'All' ? openPositions : openPositions.filter(p => p.department === selectedDept);
    result = searchJobs(result, debouncedSearchQuery);
    return result;
  }, [selectedDept, debouncedSearchQuery, searchJobs]);

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

      {/* Search Bar */}
      <section className={`${styles.paddingX} ${styles.flexCenter} py-6`}>
        <div className={`${styles.boxWidth} max-w-2xl`}>
          <div className="relative">
            <input
              type="text"
              placeholder="Search jobs by title, skills, location, experience, or any keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pl-12 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all"
            />
            <svg 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                aria-label="Clear search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          {debouncedSearchQuery && (
            <div className="mt-3 text-sm text-gray-400 text-center">
              Found {filtered.length} {filtered.length === 1 ? 'job' : 'jobs'} matching "{debouncedSearchQuery}"
            </div>
          )}
        </div>
      </section>

      {/* Filters */}
      <section className={`${styles.paddingX} ${styles.flexCenter} py-4`}>
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
          {filtered.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg mb-2">No jobs found</div>
              <p className="text-gray-500 text-sm">
                {debouncedSearchQuery ? `Try adjusting your search or filter criteria.` : 'No jobs available at the moment.'}
              </p>
              {debouncedSearchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedDept('All');
                  }}
                  className="mt-4 text-cyan-400 hover:text-cyan-300 underline text-sm"
                >
                  Clear all filters
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((job, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-cyan-300 font-semibold">
                      {debouncedSearchQuery ? highlightText(job.department, debouncedSearchQuery) : job.department}
                    </div>
                    {job.jobId && (
                      <div className="text-xs text-gray-400 font-mono">
                        {debouncedSearchQuery ? highlightText(job.jobId, debouncedSearchQuery) : job.jobId}
                      </div>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-1">
                    {debouncedSearchQuery ? highlightText(job.title, debouncedSearchQuery) : job.title}
                  </h3>
                  <div className="text-gray-300 text-sm mb-4">
                    <span>{debouncedSearchQuery ? highlightText(job.location, debouncedSearchQuery) : job.location}</span>
                    {' • '}
                    <span>{job.type}</span>
                    {job.openings && <span className="ml-2 text-cyan-300">• {job.openings} openings</span>}
                    {job.postedDate && <span className="ml-2 text-gray-400">• Posted: {job.postedDate}</span>}
                  </div>
                  <ul className="text-gray-300 text-sm space-y-2 mb-4">
                    <li>
                      <span className="font-semibold text-white">Experience:</span>{' '}
                      {debouncedSearchQuery ? highlightText(job.experience, debouncedSearchQuery) : job.experience}
                    </li>
                    <li>
                      <span className="font-semibold text-white">Skills:</span>{' '}
                      {debouncedSearchQuery ? highlightSkills(job.skills, debouncedSearchQuery) : job.skills.join(', ')}
                    </li>
                  </ul>
                  <p className="text-gray-300 text-sm mb-4">
                    {debouncedSearchQuery ? highlightText(job.summary, debouncedSearchQuery) : job.summary}
                  </p>
                </div>
                <div className="flex gap-3">
                  {job.applyUrl ? (
                    <a href={job.applyUrl} target="_blank" rel="noopener noreferrer" className="bg-brand-gradient hover:brightness-110 text-white px-4 py-2 rounded-lg font-medium btn-hover-effect">Apply Now</a>
                  ) : (
                    <Link to="/contact?tab=job&action=apply" className="bg-brand-gradient hover:brightness-110 text-white px-4 py-2 rounded-lg font-medium btn-hover-effect">Apply Now</Link>
                  )}
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
          )}
        </div>
      </section>

      {/* In-page JD Viewer */}
      {activeJob && (
        <section id="jd-viewer" className={`${styles.paddingX} ${styles.flexCenter} pb-24`}>
          <div className={`${styles.boxWidth} bg-white/5 border border-white/10 rounded-2xl p-6`}> 
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <div className="text-sm text-cyan-300 font-semibold">
                    {debouncedSearchQuery ? highlightText(activeJob.department, debouncedSearchQuery) : activeJob.department}
                  </div>
                  {activeJob.jobId && (
                    <div className="text-xs text-gray-400 font-mono">
                      {debouncedSearchQuery ? highlightText(activeJob.jobId, debouncedSearchQuery) : activeJob.jobId}
                    </div>
                  )}
                </div>
                <h2 className="text-3xl font-bold">
                  {debouncedSearchQuery ? highlightText(activeJob.title, debouncedSearchQuery) : activeJob.title}
                </h2>
                <div className="text-gray-300 text-sm">
                  <span>{debouncedSearchQuery ? highlightText(activeJob.location, debouncedSearchQuery) : activeJob.location}</span>
                  {' • '}
                  <span>{activeJob.type}</span>
                  {' • '}
                  <span>{debouncedSearchQuery ? highlightText(activeJob.experience, debouncedSearchQuery) : activeJob.experience}</span>
                  {activeJob.openings && <span className="ml-2 text-cyan-300">• {activeJob.openings} openings</span>}
                  {activeJob.postedDate && <span className="ml-2 text-gray-400">• Posted: {activeJob.postedDate}</span>}
                </div>
              </div>
              <button onClick={() => setActiveJob(null)} className="text-gray-300 hover:text-white transition-colors">✕</button>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Responsibilities</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {activeJob.jd?.responsibilities?.map((item, i) => (
                      <li key={i}>{debouncedSearchQuery ? highlightText(item, debouncedSearchQuery) : item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Requirements</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {activeJob.jd?.requirements?.map((item, i) => (
                      <li key={i}>{debouncedSearchQuery ? highlightText(item, debouncedSearchQuery) : item}</li>
                    ))}
                  </ul>
                </div>
                {activeJob.jd?.niceToHave?.length ? (
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Nice to have</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {activeJob.jd?.niceToHave?.map((item, i) => (
                        <li key={i}>{debouncedSearchQuery ? highlightText(item, debouncedSearchQuery) : item}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 h-max">
                <h4 className="text-lg font-semibold mb-2">Apply for this role</h4>
                <p className="text-gray-300 text-sm mb-4">Share your profile and availability. Our talent team will reach out within 24 hours.</p>
                {activeJob.applyUrl ? (
                  <a href={activeJob.applyUrl} target="_blank" rel="noopener noreferrer" className="block text-center bg-brand-gradient hover:brightness-110 text-white px-4 py-2 rounded-lg font-medium btn-hover-effect">Apply Now</a>
                ) : (
                  <Link to="/contact?tab=job&action=apply" className="block text-center bg-brand-gradient hover:brightness-110 text-white px-4 py-2 rounded-lg font-medium btn-hover-effect">Apply Now</Link>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
    </>
  );
}
