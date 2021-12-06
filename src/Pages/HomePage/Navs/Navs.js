import React from 'react';
import { Nav } from 'react-bootstrap';
import logo from '../../../images/logo.png'
import './Navs.css'
const Navs = () => {
    return (
        <div>
            <Nav fill variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <img className='navs-logo' src={logo} alt="" />
  </Nav.Item>
  <Nav.Item>
                    <Nav.Link className='call-navs' eventKey="link-1" >
                        <div className='call-icon'>
                            <i class="fas fa-phone-alt "></i>
                        </div>
                        <div className='phonenumber'>
                            <strong>Call today:</strong>
                        <p>555–123–2323; 555–123–2323</p>
                        </div>
                        
                        
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
                    <Nav.Link className='opentime-navs' eventKey="link-2">
                       <div className='clock-icon'>
                           <i class="far fa-clock"></i>
                        </div>
                        <div className='opentime'>
                            <strong>Opening Hours:</strong>
                        <p>Mon–Fri: 9am–6pm; Sun: 10am–1pm</p>
                        </div>
                         

    </Nav.Link>
  </Nav.Item>
</Nav>
        </div>
    );
};

export default Navs;