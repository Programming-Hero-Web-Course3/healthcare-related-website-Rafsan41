import React from 'react';
import { Card, CardGroup, Table } from 'react-bootstrap';
import './FromCard.css'
const FormCard = () => {
    return (
        <div className='fromcard'>
            <CardGroup>
  <Card>
    
    <Card.Body className='card1'>
                       
                        <div className='cardtitle1'>
                             <Card.Title>WORKING HOURS</Card.Title>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                        <div>
  <Table responsive="sm" className='tabletime'>
    
    <tbody>
      <tr className='tr'>
        
        <td>Monday - Thusday :</td>
        <td>10:00 am - 2:00 pm</td>
       
      </tr>
      <tr className='tr'>
       
        <td>Friday :</td>
        <td>12:00 am - 3:00 pm</td>
       
      </tr>
      <tr className='tr'>
        
        <td>Saturday :</td>
        <td>13:00 am - 3:00 pm</td>
        
      </tr>
      <tr className='tr'>
       
        <td>Sunday :</td>
        <td>10:00 am - 2:00 pm</td>
        
      </tr>
    </tbody>
  </Table>
  
  
</div>
    </Card.Body> 
  </Card>
  <Card>
    
    <Card.Body className='card2'>
      <Card.Title className='cardtitle1'>BOOK AN APPOINTMENT</Card.Title>
                        <form action="">
                         <div class="grid-container">
  <div class="grid-item"><input className='inputfc' type="text" placeholder='Your Name'/></div>
  <div class="grid-item"><input className='inputfc' type="number" placeholder='Number' /></div>
  <div class="grid-item"><input className='inputfc' type="date"  /></div>  
  <div class="grid-item"><input className='inputfc' type="text" placeholder='Doctor Name' /></div>
</div> 
                        </form>
                        <button className='btn-appointment'> Make An Appoinment</button>
                    </Card.Body>
                    
  </Card>
  <Card>
    <Card.Img variant="top" src="https://i.ibb.co/h1nvCgD/team-doctors-working-place.webp" />
  </Card>
</CardGroup>
        </div>
    );
};

export default FormCard;