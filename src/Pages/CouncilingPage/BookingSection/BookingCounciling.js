import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './BookingCounciling.css'

const BookingCounciling = () => {
    return (
        <div>
           <Container>
  
  <Row className='firstrow'>
    <Col> <div className='inputboxBookingCouncil'>
                    <input  type="text" required />
                    <span>Username</span>
                </div></Col>
    <Col><div className='inputboxBookingCouncil'>
                    <input  type="tel" required />
                    <span>Phonenumber</span>
                </div></Col>
    <Col><div className='inputboxBookingCouncil'>
                    <input  type="date" required />
                    <span></span>
                </div></Col>
                </Row>
    <Row className='secondrow'>
    <Col><div className='inputboxBookingCouncil'>
                    <input  type="text" required />
                    <span>Doctor Name</span>
                </div></Col>
    <Col><div className='inputboxBookingCouncil'>
                    <input  type="text" required />
                    <span>Comment</span>
                </div></Col>
          </Row>
          <Row className='thirdrow'><button>Book Now</button></Row>
</Container>
        </div>
    );
};

export default BookingCounciling;