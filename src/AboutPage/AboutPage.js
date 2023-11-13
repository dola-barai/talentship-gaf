import React from 'react';
import WhyWeChoose from './WhyWeChoose/WhyWeChoose';
import ConsultingDivision from './ConsultingDivision/ConsultingDivision';
import MarketingDivision from './MarketingDivision/MarketingDivision';
import HumanDivision from './HumanDivision/HumanDivision';
import ITDivision from './ITDivision/ITDivision';
import RegulatoryDivision from './RegulatoryDivision/RegulatoryDivision';
import OperationDivision from './OperationDivision/OperationDivision';

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
        </div>
    );
};

export default AboutPage;