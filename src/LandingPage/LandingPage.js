import React from 'react';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import HowWeWork from './HowWeWork/HowWeWork';
import Associate from './Opportunities/Associate';
import Opportunity from './Opportunities/Opportunity';


const LandingPage = () => {
    return (
        <div>
            <WhyChooseUs></WhyChooseUs>
            <Associate></Associate>
            <Opportunity></Opportunity>
            <HowWeWork></HowWeWork>
        </div>
    );
};

export default LandingPage;