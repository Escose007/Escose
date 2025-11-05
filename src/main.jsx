import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import App from './App';
import './index.css';
import Home from './page/Home';
import Blogs from './page/Blogs';
import BlogDetail from './page/BlogDetail';
import Contact from './page/Contact';
import EmployeeOutsourcing from './page/EmployeeOutsourcing';
import SolutionsFlow from './page/SolutionsFlow';
import Services from './page/Services';
import Careers from './page/Careers';
import About from './page/About';
import NotFound from './page/NotFound';
import CaseStudies from './page/CaseStudies';
import PrivacyPolicy from './page/PrivacyPolicy';
import TermsConditions from './page/TermsConditions';
import CookiePolicy from './page/CookiePolicy';
// Service Landing Pages
import ReactDevelopers from './page/services/ReactDevelopers';
import PythonDevelopers from './page/services/PythonDevelopers';
import FullStackDevelopers from './page/services/FullStackDevelopers';
import DevOpsEngineers from './page/services/DevOpsEngineers';
import GenAIEngineers from './page/services/GenAIEngineers';
import DataEngineers from './page/services/DataEngineers';
import QAEngineers from './page/services/QAEngineers';
import ErrorBoundary from './components/ErrorBoundary';
import { ToastProvider } from './components/ToastContainer';
import ScrollToTop from './components/ScrollToTop';
// Favicon assets are now served from /public and referenced in index.html

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <HelmetProvider>
        <ToastProvider>
          <BrowserRouter>
            <Routes>
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
            <ScrollToTop />
          </BrowserRouter>
        </ToastProvider>
      </HelmetProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
