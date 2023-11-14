import React from 'react';
import Mission from '../Mission/Mission';

const WhyWeChoose = () => {
    return (
        <div>
            <div className='py-12'>
                <div className='title font-sans'>
                    Why to choose us
                </div>
                <div className='mt-[28px] font-sans description w-[1121px] h-[165px] mx-[160px] mb-[100px]'>
                    we believe that every individual possesses unique talents, and every venture holds untapped potential. We are a nonprofit startup dedicated to harnessing human capabilities and utilizing them for the greater good of society. Our mission is to empower individuals, organizations, and communities by providing expert advisory services, fostering collaboration, and envisioning a future where everyone can thrive.
                </div>
                <div>
                    <Mission></Mission>
                </div>
                <div className='mt-[50px] font-sans description w-[1018px] h-[106px] mx-[160px] mb-[12px]'>
                    Talentship Global Advisory Forum is a well-structured entity, and our operations are organized into six distinct divisions, each playing a strategic role in delivering our mission seamlessly
                </div>
            </div>
        </div>
    );
};

export default WhyWeChoose;