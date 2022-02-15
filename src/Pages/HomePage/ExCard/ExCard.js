import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import {cardone} from '../../../images/ambulance.jpg'
import './ExCard.css';

const ExCard = () => {
    return (
        <div>
            <CardGroup className='exCard'>
  <Card>
            <Card.Img variant="top" src="https://i.ibb.co/LYCygr3/ambulance.webp"
              width="300px"
            height="200px"/>
    <Card.Body>
      <Card.Title>Ambulatory</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://i.ibb.co/QQ7wMyd/Vaccination-schedule-motion-graphic-flat-line-icon-animation-Alpha-channel-will-be-included-when-dow.jpg"  width="300px"
            height="200px" />
    <Card.Body>
      <Card.Title>Vacination</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://i.ibb.co/ypDyb5g/scalpel.webp"  width="300px"
            height="200px"/>
    <Card.Body>
      <Card.Title>General Sugery</Card.Title>
                        <Card.Text>
                            
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
            <Card.Img variant="top" src="https://i.ibb.co/r2MXx91/Doctor-Line-Icon-with-Editable-Stroke-and-Pixel-Perfect.jpg
"
 width="300px"
            height="200px"            />
    <Card.Body>
      <Card.Title>Physicians</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
        </div>
    );
};

export default ExCard;