import React from 'react';
import AboutAndVideoConsultation from '../AboutAndVideoConsultation/AboutAndVideoConsultation';
import EasySteps from '../EasySteps/EasySteps';
import OrderMedicine from '../OrderMedicine/OrderMedicine';
import SearchForService from '../SearchForService/SearchForService';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div>
            <SearchForService></SearchForService>
            <AboutAndVideoConsultation></AboutAndVideoConsultation>
            <WhyChoose></WhyChoose>
            <EasySteps></EasySteps>
            <OrderMedicine></OrderMedicine>
        </div>
    );
};

export default Home;