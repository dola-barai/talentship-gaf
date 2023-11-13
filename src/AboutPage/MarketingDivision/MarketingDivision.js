import React from 'react';
import './MarketingDivision.css';

const MarketingDivision = () => {
    return (
        <div className='bg-white h-[624px] py-12'>
            <div className='grid grid-cols-2'>
                <div className='w-[624px] h-[324px]'>
                    <div className='mt-[80px] ms-[124px] division_title font-sans'>
                        Marketing Division
                    </div>
                    <div className='mt-[47px] division_desc ms-[124px]'>
                        Our dynamic marketing teams act as the gateway to new opportunities. They are responsible for acquiring projects for the organization, and these projects are subsequently evaluated and allocated by the Project Management Division to optimize resource utilization.
                    </div>
                    <div className='text-center mt-[80px]'>
                        <button className="btn btn-sm bg-[#005CE6] w-[183px] h-[52px]  text-white hover:text-blue-700 rounded-[7px]">CONTACT</button>
                    </div>
                </div>
                <div className='mt-[41px]'>
                    <img className='w-[575px] h-[398px]' src="https://images.pexels.com/photos/8867431/pexels-photo-8867431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
            </div>
        </div>
    );
};

export default MarketingDivision;