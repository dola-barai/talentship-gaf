import React from 'react';
import './Mission.css';

const Mission = () => {
    return (
        <div>
            <div className='w-[783px] h-[82px] bg-black rounded-[15px] mx-auto absolute inset-x-0 top-[375px]'>
                <div className='grid grid-cols-3 gap-6 text-center py-6 px-[20px]'>
                    <div className='tab font-sans w-[176px] rounded-2xl hover:bg-blue-600 '>
                        Mission
                    </div>
                    <div className='tab font-sans hover:bg-blue-600 rounded-2xl'>
                        Vision
                    </div>
                    <div className='tab font-sans hover:bg-blue-600 rounded-2xl'>
                        Key Factors
                    </div>
                </div>
            </div>
            <div className='h-[570px] w-[1280px] bg-[#A0A7A6] rounded-[16px] mx-10 '>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='pt-[98px] ps-[22px]'>
                        <img src="https://img.freepik.com/free-photo/plan-planning-strategy-bysiness-ideas-concept_53876-132300.jpg?w=740&t=st=1699972596~exp=1699973196~hmac=4bf60d82fa63f52d04c7b12517a516090f6fbf2b9e4a433d4cf475b59ac15cd7" alt="" />
                    </div>
                    <div className='pt-[98px] px-[52px]'>
                        <div className='division_title mb-6'>
                            Mission
                        </div>
                        <div className='mission_desc '>
                            Talentship Global Advisory Forum is dedicated to extending a helping hand to all, with a resolute mission to provide free advisory services to individuals and businesses, irrespective of financial constraints. Our unwavering commitment is rooted in the belief that everyone, regardless of their economic circumstances, deserves access to professional guidance and resources that can empower talents, enable transformation, and drive universal prosperity.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mission;