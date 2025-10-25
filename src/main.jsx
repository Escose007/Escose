import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
// Favicon assets are now served from /public and referenced in index.html

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:slug" element={<BlogDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
          <Route path="careers" element={<Careers />} />
          <Route path="outsourcing" element={<EmployeeOutsourcing />} />
          <Route path="solutions-flow" element={<SolutionsFlow />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
