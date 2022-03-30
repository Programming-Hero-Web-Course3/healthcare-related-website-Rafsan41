
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './ServiceBanner.css'

const ServiceBanner = () => {
    return (
        <div>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/096BPpD/imageedit-1-3702631346.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
                <div >
                  
                  <div className='servicebanner'>
                    <h4 className='servicebannertitle'>Book Your Free  Consultation</h4>
                    <div>
                      <input className='servicebannerinput ' type="Email" placeholder='Enter Your Email'/><br /><br />
                    <input className='servicebannerinput' type="password" placeholder='Enter Your Password' /><br /><br />

                    <button className='servicebanner-btn'>Submit</button>
                    </div>
                   </div>
                </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default ServiceBanner;