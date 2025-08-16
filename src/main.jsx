import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import './index.css';
import Home from './page/Home';
import Services from './page/Services';
import Blogs from './page/Blogs';
import AboutUs from './page/AboutUs';
import Contact from './page/Contact';
import EmployeeOutsourcing from './page/EmployeeOutsourcing';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="outsourcing" element={<EmployeeOutsourcing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
