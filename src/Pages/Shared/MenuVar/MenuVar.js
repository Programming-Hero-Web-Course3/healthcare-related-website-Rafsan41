import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './MenuVar.css'

const MenuVar = () => {
    const { user, LogOut } = useAuth()
    
    return (
        <div>
        
            <div className='container1'>
  
                <Container className='container1'>
                    <Row>
                        <Col>
                            <div className='section-navlink'>
<Link className='navLink' to="/home">Home</Link>
<Link className='navLink' to="/about">About</Link>
<Link className='navLink' to="/service">Service</Link>
<Link className='navLink' to="/appointment">Appointment</Link>
<Link className='navLink' to="/counciling">Counciling</Link>
                            </div>
                        </Col>
                        <Col className='col-btn'>
                            
                            <div className='btn-section'>
                                <div className='registerdiv'>
                                <Link className='navLink' to="/register"><button className='btn-register rounded-pill btn-signup'>Register</button></Link>
                            </div>
                            
             <div className='logIndiv'><Link className='navLink' to="/logIn"><button className='btn-logIn rounded-pill btn-signup'>Log In</button></Link></div>
                            <div className='logOutdiv'>{user?.email && <button onClick={LogOut} className='btn-logOut rounded-pill btn-signup'>Log Out</button>}</div>
                            <div className='userNameDisplay'>
 <div className='displayName'>
 {user?.email &&
  <p>Signed in as: 
  <a className='userName' href="#login">
  { user.displayName}
  </a></p>}</div>
    
    </div>
                            </div>
                        </Col>
  </Row>
                </Container>   
  </div>
            
  

        </div>
    );
};

export default MenuVar;