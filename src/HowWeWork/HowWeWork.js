import React from 'react';
import './Work.css';
import image1 from '../../src/image1.jpg'
import image2 from '../../src/image2.jpg'
const HowWeWork = () => {
    return (
        <div className='bg-gradient-to-b from-teal-200 to-teal-300'>
            <div className='py-[112px]'>
                <div>
                    <div className='title font-sans'>
                        How We Work
                    </div>
                    <div className='sub-title font-sans'>
                        Don’t be busy – be productive!
                    </div>
                </div>
                <div className='mt-[99px] mx-[51px]'>
                    <div className='grid grid-cols-3'>
                        <div className='bg-white w-[434px] h-[434px] rounded-[21px]  me-[15px] mb-[25px]'>
                            <div className='w-[111px] h-[113px] mt-[6px] ms-[21px] number'>
                                01
                            </div>
                            <div className='w-[152px] h-[42px] mt-[10px] ms-[20px] topic '>
                                Research
                            </div>
                            <div className='w-[393px] h-[112px] mt-[50px] ms-[21px] info'>
                                Glavrida ipsum – augue bibendum, faucibus mi et, scelerisque mauris. Aenean dapibus massa a sapien hendrerit.
                            </div>
                        </div>
                        <div className='bg-white w-[434px] h-[434px] rounded-[21px]  me-[21px] mb-[25px]'>
                            <div className='w-[111px] h-[113px] mt-[6px] ms-[21px] number'>
                                02
                            </div>
                            <div className='w-[152px] h-[42px] mt-[10px] ms-[20px] topic'>
                                Planning
                            </div>
                            <div className='w-[393px] h-[112px] mt-[50px] ms-[21px] info'>
                                Glavrida ipsum – augue bibendum, faucibus mi et, scelerisque mauris. Aenean dapibus massa a sapien hendrerit.
                            </div>
                        </div>
                        <div className='mb-[25px]'>
                            <img className='w-[434px] h-[434px] rounded-[21px] ' src={image1} alt="" />
                        </div>
                        <div className=''>
                            <img className='w-[434px] h-[434px] rounded-[21px] ' src={image2} alt="" />
                        </div>
                        <div className='bg-white w-[434px] h-[434px] rounded-[21px]  me-[15px]'>
                            <div className='w-[111px] h-[113px] mt-[6px] ms-[21px] number'>
                                03
                            </div>
                            <div className='w-[152px] h-[42px] mt-[10px] ms-[20px] topic'>
                                Implementation
                            </div>
                            <div className='w-[393px] h-[112px] mt-[50px] ms-[21px] info'>
                                Glavrida ipsum – augue bibendum, faucibus mi et, scelerisque mauris. Aenean dapibus massa a sapien hendrerit.
                            </div>
                        </div>
                        <div className='bg-white w-[434px] h-[434px] rounded-[21px]  me-[21px]'>
                            <div className='w-[111px] h-[113px] mt-[6px] ms-[21px] number'>
                                04
                            </div>
                            <div className='w-[152px] h-[42px] mt-[10px] ms-[20px] topic'>
                                Results
                            </div>
                            <div className='w-[393px] h-[112px] mt-[50px] ms-[21px] info'>
                                Glavrida ipsum – augue bibendum, faucibus mi et, scelerisque mauris. Aenean dapibus massa a sapien hendrerit.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowWeWork;