import React from 'react';
import './SingleInternalService.css'
const SingleInternalService = ({ serviceCard }) => {
    const { name, description, img } = serviceCard;
    return (
        <div className='singleService'>
            <img src={img}  alt="" />
            <h3>{name}</h3>
            <h6>{description}</h6>
            <button className='btn-isCard'>Read More</button>
        </div>
    );
};

export default SingleInternalService;