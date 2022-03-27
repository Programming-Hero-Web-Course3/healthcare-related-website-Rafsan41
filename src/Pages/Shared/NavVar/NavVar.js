import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/UseFirebase';
import logo from '../../../images/logo.png'
import './NavVar.css'
const NavVar = () => {
  const { user, LogOut, } = useFirebase();
  return (
      
        <div>
            <>
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="/home"><img className='NavVar-logo' src={logo} alt="" /></Navbar.Brand>
    <Nav className="me-auto">
              </Nav>
              <div className='nav-contact'>
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
                    <div className='timenav-group'>
                       <div className='clock-icon'>
                           <i className="far fa-clock"></i>
                        </div>
                        <div className='opentime'>
                    <strong>Opening Hours
                      :</strong>
                        <p>Mon–Fri: 9am–6pm; Sun: 10am–1pm</p>
                        </div>
                      </div>
    </Nav.Link>
                </div>
                 </Nav.Item>
                </div>
                       
    </Container>
    
          </Navbar>
          <Navbar bg="light" variant="light">
    <Container>
   
    <Nav className="me-auto ">
      <Link className='navLink' to="/home">Home</Link>
      <Link className='navLink' to="/about">About</Link>
      <Link className='navLink' to="/service">Service</Link>
      <Link className='navLink' to="/apointment">Apointment</Link>
      <Link className='navLink' to="/counciling">Counciling</Link>
            </Nav>
          
              <h4>{user.displayName}</h4>
           
               <Link className='navLink' to="/register"><button className='btn- rounded-pill btn-signup'>Register</button></Link>
            <Link className='navLink' to="/logIn"><button className='btn- rounded-pill btn-signup'>Log In</button></Link>
            {user?.email && <button onClick={LogOut} className='btn- rounded-pill btn-signup'>Log Out</button>}
               
    </Container>
  </Navbar>
</>
        </div>
    );
};

export default NavVar;


