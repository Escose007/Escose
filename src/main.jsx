import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import App from './App';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary';
import { ToastProvider } from './components/ToastContainer';
import ScrollToTop from './components/ScrollToTop';

// Lazy load all routes for code splitting
const Home = lazy(() => import('./page/Home'));
const Blogs = lazy(() => import('./page/Blogs'));
const BlogDetail = lazy(() => import('./page/BlogDetail'));
const Contact = lazy(() => import('./page/Contact'));
const EmployeeOutsourcing = lazy(() => import('./page/EmployeeOutsourcing'));
const SolutionsFlow = lazy(() => import('./page/SolutionsFlow'));
const Services = lazy(() => import('./page/Services'));
const Careers = lazy(() => import('./page/Careers'));
const About = lazy(() => import('./page/About'));
const NotFound = lazy(() => import('./page/NotFound'));
const CaseStudies = lazy(() => import('./page/CaseStudies'));
const PrivacyPolicy = lazy(() => import('./page/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./page/TermsConditions'));
const CookiePolicy = lazy(() => import('./page/CookiePolicy'));
const BlogAdmin = lazy(() => import('./page/BlogAdmin'));

// Service Landing Pages - Lazy loaded
const ReactDevelopers = lazy(() => import('./page/services/ReactDevelopers'));
const PythonDevelopers = lazy(() => import('./page/services/PythonDevelopers'));
const FullStackDevelopers = lazy(() => import('./page/services/FullStackDevelopers'));
const DevOpsEngineers = lazy(() => import('./page/services/DevOpsEngineers'));
const GenAIEngineers = lazy(() => import('./page/services/GenAIEngineers'));
const DataEngineers = lazy(() => import('./page/services/DataEngineers'));
const QAEngineers = lazy(() => import('./page/services/QAEngineers'));

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950">
    <div className="flex flex-col items-center gap-4">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-400"></div>
      <p className="text-gray-400 text-sm">Loading...</p>
    </div>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <HelmetProvider>
        <ToastProvider>
          <BrowserRouter>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                {/* Admin Routes - Hidden, not in navigation, standalone (no navbar/footer) */}
                <Route path="admin/blogs" element={<BlogAdmin />} />
                
                <Route path="/" element={<App />}>
                  <Route index element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="blogs" element={<Blogs />} />
                  <Route path="blogs/:slug" element={<BlogDetail />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="csd" element={<Services />} />
                  <Route path="careers" element={<Careers />} />
                  <Route path="outsourcing" element={<EmployeeOutsourcing />} />
                  <Route path="solutions-flow" element={<SolutionsFlow />} />
                  
                  {/* Service Landing Pages */}
                  <Route path="services/react-developers" element={<ReactDevelopers />} />
                  <Route path="services/python-developers" element={<PythonDevelopers />} />
                  <Route path="services/fullstack-developers" element={<FullStackDevelopers />} />
                  <Route path="services/devops-engineers" element={<DevOpsEngineers />} />
                  <Route path="services/genai-engineers" element={<GenAIEngineers />} />
                  <Route path="services/data-engineers" element={<DataEngineers />} />
                  <Route path="services/qa-engineers" element={<QAEngineers />} />
                  
                  {/* Case Studies & Legal */}
                  <Route path="case-studies" element={<CaseStudies />} />
                  <Route path="privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="terms" element={<TermsConditions />} />
                  <Route path="cookies" element={<CookiePolicy />} />
                  
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </Suspense>
            <ScrollToTop />
          </BrowserRouter>
        </ToastProvider>
      </HelmetProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
