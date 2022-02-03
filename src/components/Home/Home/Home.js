import React from 'react';
import AboutAndVideoConsultation from '../AboutAndVideoConsultation/AboutAndVideoConsultation';
import SearchForService from '../SearchForService/SearchForService';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div>
            <SearchForService></SearchForService>
            <AboutAndVideoConsultation></AboutAndVideoConsultation>
            <WhyChoose></WhyChoose>
        </div>
    );
};

export default Home;