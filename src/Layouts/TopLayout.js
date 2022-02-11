
import * as React from "react";
import { Link } from "react-router-dom";
import logo from '../Images/logo.svg' ;

export default function Home() {
   function routing(ele, id){
    ele.preventDefault();
    let offsetTop  = document.getElementById(id).offsetTop;
    window.scrollTo({
        top: offsetTop-100, 
        behavior: "smooth"
    });
}

    return (
    <header className="header">
   <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div className="container-fluid d-flex justify-content-between">
  <Link to="#" className="navbar-text margin-left-1">
    <img src={logo} className="company-logo"/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse margin-right-1" id="navbarText">
      <ul className="nav navbar-nav ms-auto mb-2 mb-lg-0 mr-3">
        <li className="nav-item">
        <Link className="nav-link" to="#" onClick={(e) => routing(e, 'hero-section')}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#" onClick={(e) => routing(e, 'technology-section')}>Technology</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#" onClick={(e) => routing(e, 'features-section')}>Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#" onClick={(e) => routing(e, 'features-app-section-2')}>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#contact-section" onClick={(e) => routing(e, 'contact-section')}>Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </header>  
    );
  }