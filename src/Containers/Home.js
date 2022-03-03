
import  React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Modal, Button } from 'react-bootstrap';

export default function Home() {
  const form = useRef();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_z2djj1k', 'template_key7wtr', form.current, 'user_OQDlxm04mac90RvzQrEsi')
    .then(() => {
      form.current.reset()
      handleShow()
    }, (error) => {
        console.log(error.text);
    });
  };

    return (
      <>
        <section>
      <div id="hero-section" className="landing-hero" data-stellar-background-ratio="0">
        <div className="hero-content">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-sm-offset-2">

                <div className="hero-text">
                  <div className="herolider">
                    <ul className="caption-slides">
                      <li className="caption">
                        <h1>Professional Technology Assistance </h1>
                        <p className="hero">for</p>
                      </li>
                      <li className="caption">
                        <h1>IT services & Web Development</h1>
                        <div className="div-line"></div>
                      </li>
                    </ul>
                  </div>
                </div> 
              </div> 
            </div> 
          </div> 
        </div>
      </div>
    </section>
        <section>
        <div className="pad-sec full-page-cover" id="technology-section">
          <div className="container">
            <div className="title-section big-title-sec animated in  d-flex justify-content-center" data-animation="fadeInUp" data-delay="0">
              <div className="row">
                <div className="col-sm-12 col-sm-offset-2">
                  <h1 className="big-subtitle">We make technology accessible! </h1>
                  <hr />
                </div>
              </div> 
            </div>
  
            <div className="offer-boxes">
              <div className="row">
              <div className="col-sm-4">
                <div className="offer-post text-center animated in" data-animation="fadeInLeft" data-delay="0">
                  <div className="offer-icon">
                    <img src={require('../Images/custom_web_app.png')} />
                  </div>
                  <h4>Custom Web Solutions</h4>
                  <p>With our strong expertise on developing technically advanced custom web solutions, we have helped enterprises to improve their efficiency manifold. Our technology experts focus on developing highly scalable, new age, secured and robust solutions.Our certified professionals across technologies bring you the best in className solution by implementing industries best practices and years of experience across all domains. </p>
                </div>
              </div> 
  
              <div className="col-sm-4">
                <div className="offer-post text-center animated in" data-animation="fadeInUp" data-delay="0">
                  <div className="offer-icon">
                  <img src={require('../Images/mobile.png')} className="technology-image"/>
                  </div>
                  <h4>Enterprise Mobility Services</h4>
                  <p>End-to-end service offerings for Enterprise’s Mobile Application development needs. Two people bring together deep technical expertise with cross-industry mobile solution development experience. Having worked on a wide

range of platforms in mobile space. The Various Team adopts an innovative approach to bring.

smarter solutions with lesser time to market in a cost effective manner.</p>
                </div> 
              </div>
  
              <div className="col-sm-4">
                <div className="offer-post text-center animated in" data-animation="fadeInRight" data-delay="0">
                  <div className="offer-icon">
                  <img src={require('../Images/quality1.png')} className="technology-image"/>
                  </div>
                  <h4>Quality Assurance</h4>
                  <p>By following industry recognized leading testing methodologies, business-driven quality

assurance and testing services. We focus on improving quality levels to prevent high severity defects and make sure that all the

technical and business related risks are significantly mitigated. Our highly skilled QA professionals leverage tools, resources, processes and technologies to deliver near to zero-defect-solutions</p>
                </div> 
              </div>
  
              </div>
  
            </div>
          </div>
        </div> 
      </section>
      <section>
      <div id="features-section" className="pad-sec">
        <div className="container">
          <div className="title-section text-center animated " data-animation="fadeInUp" data-delay="0">
            <div className="row d-flex justify-content-center">
              <div className="col-sm-8 col-sm-offset-2">
                <h2 className="border-bottom d-inline">What we do?</h2>
                <p>Seamlessly restore client-focused potentialities rather than functional strategic theme areas.</p>
              </div>
            </div> 
          </div>
          <div className="row">
            <div className="col-md-4 without-padding">
              <div className="left-features-services">
                <ul className="features-list">
                  <li>
                    <div className="left-features-box animated" data-animation="fadeInLeft" data-delay="0">
                      <span className="iconbox"><i className="fa fas fa-mobile font-size-30"></i></span>
                      <div className="features-box-content">
                        <h6>Mobile App</h6>
                        <p>We are developing a hybrid mobile App as per your requirement. </p>
                      </div> 
                    </div>
                  </li>
                  <li>
                    <div className="left-features-box animated " data-animation="fadeInLeft" data-delay="0">
                      <span className="iconbox"><i className="fa fa-desktop"></i></span>
                      <div className="features-box-content">
                        <h6>Web design</h6>
                        <p>Web designers take your ideas and turn them into a mockup that shows what your future website will look like. Web designers handle the creative part of designing a website.</p>
                      </div> 
                    </div> 
                  </li>
                  <li>
                    <div className="left-features-box animated " data-animation="fadeInLeft" data-delay="0">
                      <span className="iconbox"><i className="fa fa-copyright"></i></span>
                      <div className="features-box-content">
                        <h6>Branding</h6>
                        <p>Branding is the process of giving a meaning to a specific organization, company, products or services by creating and shaping a brand in consumers' minds, we can help you to make a brand.</p>
                      </div> 
                    </div>
                  </li>
                </ul> 
              </div>
            </div>

            <div className="col-md-4">
              <div className="features-image animated " data-animation="fadeInUp" data-delay="0">
              <link rel="icon" href="assets/images/temp/woman.jpg" />
              </div> 
            </div> 

            <div className="col-md-4 without-padding">
              <div className="right-features-services">
                <ul className="features-list">
               
                <li>
                    <div className="right-features-box animated " data-animation="fadeInRight" data-delay="0">
                      <span className="iconbox"><i className="fa fa-youtube"></i></span>
                      <div className="features-box-content">
                        <h6>Video</h6>
                        <p>We provide youtube chanel related solutions.</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="right-features-box animated " data-animation="fadeInRight" data-delay="0">
                      <span className="iconbox"><i className="fa fa-wrench"></i></span>
                      <div className="features-box-content">
                        <h6>Easy Customization</h6>
                        <p>Description. Personalize your own website, no matter what theme and what customization options are added by the themes creator or your end.</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="right-features-box animated " data-animation="fadeInRight" data-delay="0">
                      <span className="iconbox"><i className="fa fa-life-ring"></i></span>
                      <div className="features-box-content">
                        <h6>Support</h6>
                        <p>Escose team will support you on your digital solution. </p>
                      </div>
                    </div>
                  </li>
                </ul> 
              </div>
            </div>

          </div> 
        </div> 
      </div>
    </section>
    <section>
      <div id="features-app-section-2" className="pad-sec full-page-cover">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 features-app-content-left animated " data-animation="fadeInLeft" data-delay="0">
              <div className="section_header">
                <h2>About Us</h2> 
              </div>
                <ul className="features-app-list">
                  <li>
                    <div className="feature-app-box animated " data-animation="fadeInLeft" data-delay="0">
                      <div className="app-feature-icon pull-left"><span className="pe-7s-graph"></span></div>
                      <div className="feature-app-box-content">
                        <h6>Technical Experience</h6>
                        <p>We are well-versed in a variety of operating systems, networks, and databases. We work with just about any technology that a small business would encounter. We use this expertise to help customers with small to mid-sized projects. </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="feature-app-box animated " data-animation="fadeInLeft" data-delay="0">
                      <div className="app-feature-icon pull-left"><span className="pe-7s-config"></span></div>
                      <div className="feature-app-box-content">
                        <h6>High ROI</h6>
                        <p>Do you spend most of your IT budget on maintaining your current system? Many companies find that constant maintenance eats into their budget for new technology. By outsourcing your IT management to us, you can focus on what you do best--running your business we covers it service, web development, website designers.</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="feature-app-box animated " data-animation="fadeInLeft" data-delay="0">
                      <div className="app-feature-icon pull-left"><span className="pe-7s-lock"></span></div>
                      <div className="feature-app-box-content">
                        <h6>Satisfaction Guaranteed</h6>
                        <p>The world of technology can be fast-paced and scary. That's why our goal is to provide an experience that is tailored to your company's needs. No matter the budget, we pride ourselves on providing professional customer service. We guarantee you will be satisfied with our work. </p>
                      </div>
                    </div>
                  </li>
                  
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div id="contact-section" className="pad-sec">

        <div className="container">

          <div className="title-section text-center animated" data-animation="fadeInUp" data-delay="0">
              <div className="row d-flex justify-content-center">
                <div className="col-sm-8 col-sm-offset-2">
                  <h2 className="d-inline border-bottom">Get in touch</h2>
                
                  <p>For More Qusetions or Quots, Please send mail</p>
              </div>
            </div> 
          </div>
          <div className="form-wrapper">
            <div className="row d-flex justify-content-center">
              <div className="col-md-6 col-md-offset-2">
                <form ref={form} onSubmit={sendEmail}>
                <fieldset>
                    <div className="form-group">
                      <input className="form-control br-b" required type="text" name="from_name" id="name" placeholder="Name" />
                    </div>
                    
                    <div className="form-group">
                      <input className="form-control br-b" type="tel" name="telphone" placeholder="Mobile Number" pattern="[0-9]{10}" maxlength="10"  required/>
                    </div>

                    <div className="form-group">
                      <input className="form-control br-b" required type="email" name="from_email" id="email" placeholder="Email" />
                    </div>

                    <div className="form-group">
                      <textarea className="form-control br-b" required name="message" id="message" placeholder="Message..."></textarea>
                    </div>
                  </fieldset>
                  
                  <div className="form-group">
                    <button type="submit" name="submit" id="submit" className="btn btn-sm send-mail-button" data-target="#exampleModalCenter" >Send message</button>
                  </div>
                  <div id="alert"></div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
    <footer>
      <div id="footer-section" className="text-center footer">
        <div className="container">
          <div className="row">
          <div className="col-sm-12 col-sm-offset-2">
              <ul className="footer-social-links">
                <li className="display-inline-block"><a href="https://www.facebook.com/Escoseinfo" target="_blank" rel="noreferrer"><i className="fa fa-facebook-square icon-wrapper"></i></a></li>
                <li><a href="https://www.linkedin.com/company/escose" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square icon-wrapper"></i></a></li>
              </ul>
              
            </div>
            <div className="col-sm-12 col-sm-offset-2">
            <p className="copyright">
                &copy; Copyright @ 2022 Escose - All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="">
            <h3>congratulation's</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          Your request got successfully, we'll get back to you soon.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} className="btn btn-sm send-mail-button">Close</Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  }