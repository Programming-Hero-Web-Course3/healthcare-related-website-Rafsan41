import React from 'react';
import './CouncilingSedule.css'
const CouncilingSedule = () => {
    return (
        <div >
            <table class="table table-dark table-striped councilingsedule">
                <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Dr Name</th>
      <th scope="col"> Yahia amin</th>
      <th scope="col">susma reza</th>
      <th scope="col">kusal</th>
      <th scope="col">sayed asraf</th>
      <th scope="col">nabil</th>
      {/* <th scope="col">Friday</th>
      <th scope="col">Saturday</th> */}
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <th scope="row">09.00am to 11.00am</th>
     <td> sunday , monday</td>           
     <td>tuesday , wednesday</td>
     <td>thusday , friday</td>
                        
     <td>off day</td>
     <td>saturday</td>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <th scope="row">12.00pm to 02.00pm</th>
      <td>tuesday , wednesday</td>
      <td>thusday , friday</td>
      <td>off day</td>
                        
      <td>saturday</td>              
      <td> sunday , monday</td>
                        
      
      
    </tr>
    <tr>
      <th scope="row">3</th>
      <th scope="row">03.00pm to 05.00pm</th>
      
     <td>thusday , friday</td>                
     <td>off day</td>
     <td>saturday</td>
                        
     <td> sunday , monday</td> 
     <td>tuesday , wednesday</td>
     
     
    </tr>
    <tr>
      <th scope="row">4</th>
      <th scope="row">06.00pm to 08.00pm</th>
                    
      <td>Off Day</td>
    <td>saturday</td>
    <td> sunday , monday</td>           
     <td>tuesday , wednesday</td>
     <td>thusday , friday</td>
    </tr>
    
  </tbody>
</table>
        </div>
    );
};

export default CouncilingSedule;