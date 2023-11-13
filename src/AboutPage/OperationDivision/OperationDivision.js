import React from 'react';

const OperationDivision = () => {
    return (
        <div className='bg-[#F4F6FC]  h-[624px]'>
            <div className='grid grid-cols-2'>
                <div className='mt-[80px] ms-[80px] '>
                    <img className='w-[575px] h-[398px]' src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className='w-[624px] h-[324px]'>
                    <div className='mt-[120px] division_title font-sans'>
                        Operations Division
                    </div>
                    <div className='mt-[70px] division_desc'>
                        Serving as the hub of coordination, the Operations Division plays a critical role in evaluating projects and upholding quality standards. It comprises dedicated sub-divisions, including Product and Project Management, to ensure the successful execution of projects.                    </div>
                    <div className='text-center mt-[95px]'>
                        <button className="btn btn-sm bg-[#005CE6] w-[183px] h-[52px]  text-white hover:text-blue-700 rounded-[7px]">CONTACT</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OperationDivision;