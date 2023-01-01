
import  React, { useState } from "react";
import logo from '../Images/escose.png' ;
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function TopLayout() {

  const [activeNav, setActive] = useState();
  const [expanded, setExpanded] = useState(false);

   function routing(ele, id){
    ele.preventDefault();
    let offsetTop  = document.getElementById(id).offsetTop;
    setActive(id);
    setExpanded(false)
    window.scrollTo({
        top: offsetTop-100, 
        behavior: "smooth"
    });
  }

  function isInViewport(element) {
      const rect = document.getElementById(element) ?  document.getElementById(element).getBoundingClientRect() : null;
     if(rect){
       console.log( rect.top >= 0)
        debugger
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
      }
      return null
  }

    return (
    <header className="header">
      <Navbar bg="light" expand="lg" fixed="top" expanded={expanded}>
        <Container>
          <Navbar.Brand href="#home"><img src={logo} className="company-logo"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" expanded={true}>
            <Nav>
            <Nav.Link className={`nav-link ${activeNav === 'hero-section' ? "activeNav" : "hidden"}`} to="#" onClick={(e) => routing(e, 'hero-section')}>Home</Nav.Link>
            <Nav.Link className={`nav-link ${activeNav === 'technology-section' ? "activeNav" : "hidden"}`} to="#" onClick={(e) => routing(e, 'technology-section')}>Technology</Nav.Link>
            <Nav.Link className={`nav-link ${activeNav === 'features-section' ? "activeNav" : "hidden"}`} to="#" onClick={(e) => routing(e, 'features-section')}>Services</Nav.Link>
            <Nav.Link className={`nav-link ${activeNav === 'features-app-section-2' ? "activeNav" : "hidden"}`} to="#" onClick={(e) => routing(e, 'features-app-section-2')}>About</Nav.Link>
            <Nav.Link className={`nav-link ${activeNav === 'contact-section' ? "activeNav" : "hidden"}`} to="#contact-section" onClick={(e) => routing(e, 'contact-section')}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  </header>  
    );
  }