import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import './SubMenuVar.css'
import logo from '../../../images/logo.png'
const SubMenuVar = () => {
    
    return (
        <div>
            <div>
  
  <div className='subMenubar'>
                    <div  className='space1st'>
                        <div className='logo' >
                            <img  src={logo} alt="" />
                    </div> {/*  01 */}
           </div>
                  <div className='space2nd'>

                 <div  className='call-section'>
                     <div className='callnav-group'>
                      <div className='call-icon'>
                             <i  class="fas fa-phone-alt "></i>
                         </div>
                         <div className='phonenumber'>
                            <strong>Call Today :</strong>
                        <p>555–123–2323; 555–123–2323</p>
                        </div></div>               
               
                 </div>
                    {/*  02 */}
                    <div className='time-section'>
            <div className ='timenav-group'>
                <div className='clock-icon'>
                    <i className="far fa-clock"></i>
                </div>
                <div className='opentime'>
                     <strong>Opening Hours:</strong>
                     <p>Mon–Fri: 9am–6pm; Sun: 10am–1pm</p>
                </div>
            </div></div>  </div> {/*  03 */}
  </div>
</div>
            
        </div>
    );
};

export default SubMenuVar;