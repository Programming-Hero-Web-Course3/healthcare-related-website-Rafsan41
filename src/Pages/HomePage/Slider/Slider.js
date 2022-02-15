import React from 'react';
import { Carousel } from 'react-bootstrap';
import slideOne from '../../../images/slideOne.jpg';
import slideTwo from '../../../images/slideTwo.jpg';
import slideThree from '../../../images/slideThree.jpg';
import './Slider.css';
const Slider = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item interval={2000}>
                  <img
      height='600px'
      className="d-block w-100"
      src={slideOne}
      alt="First slide"
    />
    <Carousel.Caption className='slider-caption'>
       <h1>Dr.Mark Holen</h1>
                        <p>Dr.Mark Holen's Clinic  Welcomes You!</p>
                        <button className='btn-slide'>Book Apointment</button>
        <button className='btn-slide'>Get Special Offer</button>                
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
                    <img
                        height='600px'
      className="d-block w-100"
      src={slideTwo}
      alt="Second slide"
    />
    <Carousel.Caption className='slider-caption'>
     <h1>Dr.Mark Holen</h1>
                        <p>Dr. Mark Holen's Clinic  Welcomes You!</p>
                        <button className='btn-slide'>Book Apointment</button>
        <button className='btn-slide'>Get Special Offer</button> 
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
                    <img
                        height='600px'
      className="d-block w-100"
      src={slideThree}
      alt="Third slide"
    />
    <Carousel.Caption className='slider-caption'>
     <h1>Dr. Mark Holen</h1>
                        <p>Dr. Mark Holen's Clinic  Welcomes You!</p>
                        <button className='btn-slide'>Book Apointment</button>
        <button className='btn-slide'>Get Special Offer</button> 
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Slider;