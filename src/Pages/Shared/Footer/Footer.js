import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <div>
           
            <div className='footer-container'>
               
 <Container className='footerLink-container'>
  <Row>
            <Col>
                <p>who we are</p>
                <p>About us</p>
                <p>Awards & Achievements</p>
                <p>Board of Directors</p>
                <p>Clinics & Hospitals</p>
                <p>Our History</p>
                <p>News & Media</p>
            </Col>
            <Col>
                <p>MEDICAL SERVICES</p>        
                <p>Cancer Care</p>        
                <p>Heart Care</p>        
                <p>Orthopedic Care</p>        
                <p>Women's Health</p>        
                <p>Emergency Services</p>        
                <p>Urgent Care</p>        
            </Col>
                <Col>
                <p>PATIENTS & VISITORS</p>
                <p>Advance Care Planning</p>
                <p>Billing and Insurance</p>
                <p>Medical Records Request</p>
                <p>Pharmacy</p>
                <p>Patient Education</p>
                <p>Web Nursery</p>
                </Col>
                        <Col>
                        <p>Follow us</p>
                            <p>
                                <i className="fab fa-twitter footer-icon ">  </i>    
                                <i className="fab fa-facebook-f footer-icon "></i>
                                <i className="fab fa-google-plus-g footer-icon "></i>
                                <i className="fab fa-youtube footer-icon "></i>
                                <i className="fas fa-globe-asia footer-icon "></i>
                            
                            </p>
                            <p>Subscribe us</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed incidunt inventore, aspernatur magnam .
                            </p>
                            <input className='footer-input' type="email" placeholder='Your Email-Address'/><button className='btn-submitfooter'><i class="fas fa-arrow-right"></i></button>
                        </Col>
                    </Row>
                    <hr />
                <p>© 2021 Hogash.com | All rights reserved.</p>
                </Container>
                
            </div>
        </div>
    );
};

export default Footer;