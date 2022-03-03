import { Routes, Route } from "react-router-dom";
import TopLayout from './Layouts/TopLayout'
import Home from './Containers/Home'
import * as React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './Text.css';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';

function App() {
  return (
   
   <div>
     <TopLayout />
     <div id="wrapper">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
    </Routes>
    </div>
    </div>
  );
}

export default App;
