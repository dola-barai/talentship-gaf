import React from 'react';
import './ITDivision.css';

const ITDivision = () => {
    return (
        <div className='bg-[#F4F6FC]  h-[624px]'>
            <div className='grid grid-cols-2'>
                <div className='mt-[80px] ms-[80px] '>
                    <img className='w-[575px] h-[398px]' src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className='w-[624px] h-[324px]'>
                    <div className='mt-[90px] division_title font-sans'>
                        IT DIVISION
                    </div>
                    <div className='mt-[50px] division_desc'>
                        In the age of technology, our IT Division takes the lead in web development and app creation. Working closely with other units, this division ensures that technology plays a vital role in enhancing the services we offer, infusing a tech-driven dimension into our service spectrum.
                    </div>
                    <div className='text-center mt-[123px]'>
                        <button className="btn btn-sm bg-[#005CE6] w-[183px] h-[52px]  text-white hover:text-blue-700 rounded-[7px]">CONTACT</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ITDivision;