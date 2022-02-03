import React from 'react';
import AboutAndVideoConsultation from '../AboutAndVideoConsultation/AboutAndVideoConsultation';
import EasySteps from '../EasySteps/EasySteps';
import SearchForService from '../SearchForService/SearchForService';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div>
            <SearchForService></SearchForService>
            <AboutAndVideoConsultation></AboutAndVideoConsultation>
            <WhyChoose></WhyChoose>
            <EasySteps></EasySteps>
        </div>
    );
};

export default Home;