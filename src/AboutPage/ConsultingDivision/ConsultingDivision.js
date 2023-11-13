import React from 'react';
import './ConsultingDivision.css';

const ConsultingDivision = () => {
    return (
        <div className='bg-[#EDF3D7]  h-[624px]'>
            <div className='grid grid-cols-2'>
                <div className='w-[624px] h-[345px]'>
                    <div className='mt-[80px] ms-[80px] division_title font-sans'>
                        Consulting Division
                    </div>
                    <div className='mt-[37px] division_desc ms-[81px]'>
                        Our Consulting Division is at the heart of our operations. It focuses on providing specialized business advisory services that encompass business strategy, financial consultation, and regulatory guidance. Within this division, a consortium of teams caters to specific client needs and collaborates to create comprehensive solutions tailored to each client's unique requirements.
                    </div>
                    <div className='text-center mt-[123px]'>
                        <button className="btn btn-sm bg-[#005CE6] w-[183px] h-[52px]  text-white hover:text-blue-700 rounded-[7px]">CONTACT</button>
                    </div>
                </div>
                <div className='mt-[41px]'>
                    <img className='w-[575px] h-[398px]' src="https://images.pexels.com/photos/7176030/pexels-photo-7176030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ConsultingDivision;