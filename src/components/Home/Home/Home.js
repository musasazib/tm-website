import React from 'react';
import AboutAndVideoConsultation from '../AboutAndVideoConsultation/AboutAndVideoConsultation';
import EasySteps from '../EasySteps/EasySteps';
import ExpertDoctors from '../ExpertDoctors/ExpertDoctors';
import OrderMedicine from '../OrderMedicine/OrderMedicine';
import OurService from '../OurService/OurService';
import QualifiedDoctor from '../QualifiedDoctor/QualifiedDoctor';
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
            <OurService></OurService>
            <ExpertDoctors></ExpertDoctors>
            <QualifiedDoctor></QualifiedDoctor>
        </div>
    );
};

export default Home;