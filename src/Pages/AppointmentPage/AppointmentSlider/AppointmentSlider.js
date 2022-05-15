
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './AppointmentSlider.css'
import paris from '../../../images/paris.PNG'

const AppointmentSlider = () => {
    return (
        <div>
            
           <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div>
<Container>
  <Row>
    <Col className='placeSection' sm={8}>
         <Container>
     <Row>
      <Col>
        <div>
        <h3 className='placeName'>Paris</h3>
            <h2>CHAMBERS</h2>
            <p>Place siant andredes arts, 752006</p>
                <h5>Open Now</h5>
                  <div>
                <p><strong>Estimate Wait Time:</strong> 15 min</p>
            <p><strong>Mon - Fri:</strong> 5:00 am - 9:00 pm</p>
            <p><strong>Sun:</strong> 11:00 am - 12:00 pm</p>
            <p><strong>Sat:</strong> 11:00 am - 12:00 pm</p>
            </div>
            <div>
            <button className='more-info'>More Info</button>
            </div>                                            
        </div>
        </Col>
        <Col>
                            <div className='placeservice'>
                            <p><strong>SERVICE</strong></p>
                            <p>General and preventive</p>
                            <p>Cosmic Solutions</p>
                            <p>Restorative Solutions</p>
                            <p>Aditionals Treatments</p>
                            <p>Orthodintics</p>
                            <p>Dentures and Dentures Repair</p>
                            <p>Digonistic and Preventive</p>
                            <p>Pediatric Dentistry</p>
                                                        

          </div>
        </Col>
  </Row>
  
</Container>                           
                                    </Col>
<Col sm={4}><img src="https://i.ibb.co/2t9YWVj/paris.png" class="d-block w-100"  alt="image1"/></Col>
  </Row>
</Container>
                        </div>
      
    </div>
    <div class="carousel-item">
     <div>
<Container>
  <Row>
    <Col className='placeSection' sm={8}>
         <Container>
     <Row>
      <Col>
        <div>
        <h3 className='placeName'>New York</h3>
            <h2>CHAMBERS</h2>
                    <p>87 chambers, ST New York,NY 10007    <br></br>  (212)335-0549
                                                        </p>
                <h5>Open Now</h5>
                  <div>
                <p><strong>Estimate Wait Time:</strong> 6 min</p>
            <p><strong>Mon - Fri:</strong> 8:00 am - 8:00 pm</p>
            <p><strong>Sun:</strong> 10:00 am - 10:00 pm</p>
            <p><strong>Sat:</strong> 10:00 am - 10:00 pm</p>
            </div>
            <div>
            <button className='more-info'>More Info</button>
            </div>                                            
        </div>
        </Col>
        <Col>
                            <div className='placeservice'>
                            <p><strong>SERVICE</strong></p>
                            <p>General and preventive</p>
                            <p>Cosmic Solutions</p>
                            <p>Restorative Solutions</p>
                            <p>Aditionals Treatments</p>
                            <p>Orthodintics</p>
                            <p>Dentures and Dentures Repair</p>
                            <p>Digonistic and Preventive</p>
                            <p>Pediatric Dentistry</p>
                                                        

          </div>
        </Col>
  </Row>
  
</Container>                           
                                    </Col>
<Col sm={4}><img src="https://i.ibb.co/zfJJ79Z/New-york.png" class="d-block w-100" alt="image2"/></Col>
  </Row>
</Container>
                        </div>
    </div>
    <div class="carousel-item">
     <div>
<Container>
  <Row>
    <Col className='placeSection' sm={8}>
         <Container>
     <Row>
      <Col>
        <div>
        <h3 className='placeName'>Bucharest</h3>
            <h2>CHAMBERS</h2>
            <p>U6, Splaiul Independentei 280-290</p>
                <h5>Open Now</h5>
                  <div>
                <p><strong>Estimate Wait Time:</strong> 36 min</p>
            <p><strong>Mon - Fri:</strong> 7:00 am - 8:00 pm</p>
            <p><strong>Sun:</strong> 10:00 am - 01:00 pm</p>
            <p><strong>Sat:</strong> 10:00 am - 01:00 pm</p>
            </div>
            <div>
            <button className='more-info'>More Info</button>
            </div>                                            
        </div>
        </Col>
        <Col>
                            <div className='placeservice'>
                            <p><strong>SERVICE</strong></p>
                            <p>General and preventive</p>
                            <p>Cosmic Solutions</p>
                            <p>Restorative Solutions</p>
                            <p>Aditionals Treatments</p>
                            <p>Orthodintics</p>
                            <p>Dentures and Dentures Repair</p>
                            <p>Digonistic and Preventive</p>
                            <p>Pediatric Dentistry</p>
                                                        
{/*
*/}
          </div>
        </Col>
  </Row>
  
</Container>                           
                                    </Col>
<Col sm={4}><img src="https://i.ibb.co/R2YSqLy/bucharest.png" class="d-block w-100" alt="image1"/></Col>
  </Row>
</Container>
                        </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    );
};

export default AppointmentSlider;