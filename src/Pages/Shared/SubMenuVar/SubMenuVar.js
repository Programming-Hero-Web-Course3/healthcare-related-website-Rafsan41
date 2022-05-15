import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import './SubMenuVar.css'
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logo.png'
const SubMenuVar = () => {
    const { user } = useAuth();
    return (
        <div>
            <Container>
  
  <Row>
                    <Col>
                        <div className='logo' >
                            <img  src={logo} alt="" />
                    </div></Col>
                    <Col>

                 <Nav.Item  className='call-section'>
             <div className='call-navs'>
               <Nav.Link  eventKey="link-1" >
                     <div className='callnav-group'>
                      <div className='call-icon'>
                             <i class="fas fa-phone-alt "></i>
                         </div>
                         <div className='phonenumber'>
                            <strong>Call today :</strong>
                        <p>555–123–2323; 555–123–2323</p>
                        </div></div>               
                  </Nav.Link>
                </div> </Nav.Item>
              <Nav.Item>
                <div className='opentime-navs' >
                  <Nav.Link   eventKey="link-2">
                    
     </Nav.Link>
                 </div>
                  </Nav.Item>
                
                    </Col>
                    <Col>
            <div className='timenav-group'>
                <div className='clock-icon'>
                    <i className="far fa-clock"></i>
                </div>
                <div className='opentime'>
                     <strong>Opening Hours:</strong>
                     <p>Mon–Fri: 9am–6pm; Sun: 10am–1pm</p>
                </div>
            </div></Col>
  </Row>
</Container>
            
        </div>
    );
};

export default SubMenuVar;