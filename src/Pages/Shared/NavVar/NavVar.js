import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './NavVar.css'
const NavVar = () => {
    return (
        <div>
            <>
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">MetLife</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <button className='btn- rounded-pill btn-signup'>sign up</button>
    </Container>
    
  </Navbar>
</>
        </div>
    );
};

export default NavVar;