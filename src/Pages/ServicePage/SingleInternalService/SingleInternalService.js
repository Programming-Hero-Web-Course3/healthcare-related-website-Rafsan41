import React from 'react';
import './SingleInternalService.css'
const SingleInternalService = ({ serviceCard }) => {
    const { name, description, img } = serviceCard;
    return (
        <div className='singleService'>
            <img src={img}  alt="" />
            <h4>{name}</h4>
            <p>{description}</p>
            <button className='btn-isCard'>Read More</button>
        </div>
    );
};

export default SingleInternalService;