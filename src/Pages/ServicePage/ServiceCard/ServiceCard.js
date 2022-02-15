import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './ServiceCard.css'
import SingleInternalService from '../SingleInternalService/SingleInternalService'
const ServiceCard = () => {
    const [serviceCards, setServiceCards] = useState([])
    useEffect(() => {
        fetch('internalService.json')
            .then(res => res.json())
            .then(data => setServiceCards(data));
    }, [])
    return (
        <div className='serviceCards-container'>
            {
                serviceCards.map(serviceCard => <SingleInternalService
                    key={serviceCard.id}
                    serviceCard = {serviceCard}
                ></SingleInternalService>)
           } 
        </div>
    );
};

export default ServiceCard;