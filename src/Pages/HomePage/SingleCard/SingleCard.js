import React from 'react';
import './SingleCard.css'

const SingleCard = () => {
    return (
        <div>
            <div class="card mb-3 singleCard">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://i.ibb.co/JBRqkg7/masked-doctor.jpg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="Singlecard-body">
        <h5 class="card-title">Dr. Mark Splander</h5>
        <p class="Singlecard-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button className='btn-singlecard'></button>
        <button className='btn-singlecard'></button>
        <button className='btn-singlecard'></button>
        <button className='btn-singlecard'></button>
        <button className='btn-singlecard'></button>
        <button className='btn-singlecard'></button>
        <button className='btn-singlecard'></button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleCard;