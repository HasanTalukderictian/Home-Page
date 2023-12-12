import React from 'react';
import Banner from './Banner';
import Service from './Service';
import QualityService from './QualityService';
import ExclusiveProducts from './ExclusiveProducts';
import Experience from './Experience';
import Technology from './Technology';
import Trusted from './Trusted';
import Weare from './Weare';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <QualityService></QualityService>
            <ExclusiveProducts></ExclusiveProducts>
            <Experience></Experience>
            <Technology></Technology>
            <Trusted></Trusted>
            <Weare></Weare>
        </div>
    );
};

export default Home;