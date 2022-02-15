import React from 'react';
import { Carousel, Col, Container,  Row, Table } from 'react-bootstrap';
import './AboutFrom.css'

const AboutFrom = () => {
    return (
        <div>
        <div className='about1-section'>
       <Carousel variant="dark">
  <Carousel.Item>
              <img
                height='50%'
      className="d-block w-100"
      src="https://i.ibb.co/zNYqtjH/Portrait-of-smiling-doctor-looking-at-camera-on-background-of-his-working-colleagues.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
                <div >
                  
                  <div className='about2-section'>
                    <h4 className='aboutFrom-head'>Book Your Free  Consultation</h4>
                    <div>
                      <input className='aboutinput' type="Email" placeholder='Enter Your Email'/><br /><br />
                    <input className='aboutinput' type="password" placeholder='Enter Your Password' /><br /><br />

                    <button className='btn-aboutfrom'>submit</button>
                    </div>
                   </div>
                </div>
    </Carousel.Caption>
  </Carousel.Item>
  
          </Carousel>
          <Container className='about-description'>
  <Row>
    <Col xs={12} md={8}>
                <div className='about-head'>
                  About
                </div>
                <div className='about-pharagraph'>
                  <h3>Medlife Clinic London</h3>
                  <p>
                    
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                  <p>
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                  </p>
                </div>
    </Col>
    <Col xs={6} md={4}>
                <div className='about-time'>
    <Table responsive="sm" className='tabletime-about1' >
                    <tbody className='tabletime-about2'>
                      <th className='about-timeTableaHead'>Opening Hours :</th>
      <tr className='tr'>
        
        <td>Monday - Friday :</td>
        <td>08:00 am - 06:00 pm</td>
       
      </tr>
     
      <tr className='tr'>
        
        <td>Saturday :</td>
        <td>10:00 am - 4:00 pm</td>
        
      </tr>
      <tr className='tr'>
       
        <td>Sunday :</td>
        <td>10:00 am - 4:00 pm</td>
        
      </tr>
    </tbody>
  </Table>
      </div>
    </Col>
  </Row>
</Container>
        </div>
        <div>
          
        </div>
        </div>
    );
};

export default AboutFrom;