import React, { useState } from 'react';
import Interns from './Interns';
import Professional from './Professional';

const Testimonial = () => {
    const [selectedTab, setSelectedTab] = useState('professional');

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <div className='bg-gradient-to-b from-teal-200 to-teal-300 min-h-screen pb-20'>
            <div className='font-sans mb-20'>
                <h1 className='text-black font-bold text-center text-6xl pt-20'>Testimonials</h1>
                <p className='text-black text-center text-3xl pt-3'>Some text related to Testimonials</p>
            </div>

            <div className='position: relative top-10 flex justify-around items-center bg-black w-[700px] py-5 px-10 w-200 rounded-2xl mx-auto'>
                <div
                    onClick={() => handleTabClick('professional')}
                    className={`cursor-pointer py-2 px-10 rounded-full font-bold text-white text-2xl font-sans ${selectedTab === 'professional' ? 'bg-blue-700' : 'bg-black'
                        }`}
                >
                    Professionals
                </div>

                <div
                    onClick={() => handleTabClick('interns')}
                    className={`cursor-pointer py-2 px-20 rounded-full font-bold text-white text-2xl font-sans ${selectedTab === 'interns' ? 'bg-blue-700 ' : 'bg-black'
                        }`}
                >
                    Interns
                </div>
            </div>

            <div
                className='carousel-wrapper px-14 py-24 mx-auto'
                style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2018/02/15/14/37/paper-3155438_1280.jpg")', width: '78rem' }}
            >
                {selectedTab === 'professional' ? <Professional /> : <Interns />}
            </div>
        </div>
    );
};

export default Testimonial;