import React from 'react';

const RegulatoryDivision = () => {
    return (
        <div className='bg-green-50 h-[624px]'>
            <div className='grid grid-cols-2'>
                <div className='mt-[80px] ms-[80px] '>
                    <img className='w-[575px] h-[398px]' src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className='w-[624px] h-[324px]'>
                    <div className='mt-[120px] division_title font-sans'>
                        Regulatory Division
                    </div>
                    <div className='mt-[70px] division_desc'>
                        The Regulatory Division specializes in legal and financial expertise, offering invaluable insights to projects when needed. This division ensures that our projects adhere to all relevant regulatory requirements.
                    </div>
                    <div className='text-center mt-[95px]'>
                        <button className="btn btn-sm bg-[#005CE6] w-[183px] h-[52px]  text-white hover:text-blue-700 rounded-[7px]">CONTACT</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RegulatoryDivision;