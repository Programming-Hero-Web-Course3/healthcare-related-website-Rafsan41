import React from 'react';
import ExCard from '../ExCard/ExCard';
import FormCard from '../FormCard/FormCard';
import MiddleCard from '../MiddleCard/MiddleCard';
import SingleCard from '../SingleCard/SingleCard';
import Slider from '../Slider/Slider';
import SliderMap from '../SliderMap/SliderMap';
const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <ExCard></ExCard>
            <MiddleCard></MiddleCard>
            <SingleCard></SingleCard>
            <FormCard></FormCard>
            <SliderMap></SliderMap>
        </div>
    );
};

export default Home;