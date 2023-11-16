import React from 'react';
import WhyWeChoose from './WhyWeChoose/WhyWeChoose';
import ConsultingDivision from './ConsultingDivision/ConsultingDivision';
import MarketingDivision from './MarketingDivision/MarketingDivision';
import HumanDivision from './HumanDivision/HumanDivision';
import ITDivision from './ITDivision/ITDivision';
import RegulatoryDivision from './RegulatoryDivision/RegulatoryDivision';
import OperationDivision from './OperationDivision/OperationDivision';
import Testimonial from './Testimonials/Testimonial';

const AboutPage = () => {
    return (
        <div>
            <WhyWeChoose></WhyWeChoose>
            <ConsultingDivision></ConsultingDivision>
            <ITDivision></ITDivision>
            <MarketingDivision></MarketingDivision>
            <RegulatoryDivision></RegulatoryDivision>
            <OperationDivision></OperationDivision>
            <HumanDivision></HumanDivision>
            <Testimonial></Testimonial>
        </div>
    );
};

export default AboutPage;