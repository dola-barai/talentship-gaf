import { Carousel } from "@material-tailwind/react";
import React from 'react';
import './Choose.css';
import SchemaIcon from '@mui/icons-material/Schema';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Groups2Icon from '@mui/icons-material/Groups2';
import PaidIcon from '@mui/icons-material/Paid';


const WhyChooseUs = () => {
    return (
        <div className='bg-teal-200'>
            <div className='py-10'>
                <div className='title font-sans'>
                    Why to choose us
                </div>
                <div className='mt-[58px] font-sans description w-[1121px] h-[165px] mx-[160px]'>
                    we believe that every individual possesses unique talents, and every venture holds untapped potential. We are a nonprofit startup dedicated to harnessing human capabilities and utilizing them for the greater good of society. Our mission is to empower individuals, organizations, and communities by providing expert advisory services, fostering collaboration, and envisioning a future where everyone can thrive.
                </div>

                <div className='mt-[105px] ms-[71px]'>
                    <div className='grid grid-cols-3 '>
                        <div className='bg-white w-[416px] h-[296px] rounded-[10px] mt-[25px] mr-[23px] mb-[38px]'>
                            <div className='text-3xl font-bold font-sans text-center mt-[24px]'>
                                Complex solutions<SchemaIcon className="ms-2"></SchemaIcon>
                            </div>
                            <div className='mt-[36px] mx-[19px] details font-sans'>
                                Congue lorem ipsum dolor ipsum faucibus mi et, scelerisque mauris. rutrum lorem ipsum dolor. Morbi from ipsum amet - eget augue bibendum, lorem ipsum faucibus mi et. Aenean dapibus massa leo.
                            </div>
                        </div>
                        <div className='bg-white w-[416px] h-[296px] rounded-[10px] mt-[25px] mr-[23px] mb-[38px]'>
                            <div className='text-3xl font-bold font-sans text-center mt-[24px]'>
                                High Quality Standards<RocketLaunchIcon className="ms-2"></RocketLaunchIcon>
                            </div>
                            <div className='mt-[36px] mx-[19px] details font-sans'>
                                Congue lorem ipsum dolor ipsum faucibus mi et, scelerisque mauris. rutrum lorem ipsum dolor. Morbi from ipsum amet - eget augue bibendum, lorem ipsum faucibus mi et. Aenean dapibus massa leo.
                            </div>
                        </div>
                        <div className='col-span-1 row-span-2 bg-white h-[707px] w-[423px] rounded-[24px]'>
                            <Carousel>
                                <div>
                                    <div >
                                        <img className='w-[423px] h-[413px] rounded-t-[24px] ' src="https://img.freepik.com/free-photo/handsome-groom_1153-7227.jpg?w=740&t=st=1699469839~exp=1699470439~hmac=07ffcb01bd2eff43440d1d6d4e7c12392211cb9c975cda43e6ab10d48f86f486" alt="" />
                                    </div>
                                    <div className='mt-[75px] employee h-[39px]'>
                                        EMPLOYEE NAME
                                    </div>
                                    <div className='head'>
                                        DEPARTMENT HEAD
                                    </div>
                                    <div className='mt-[45px] text-center text-white'>
                                        <button className='bg-[#00C2FF] px-[70px] py-[13px] rounded-[11px] button font-sans'>Details</button>
                                    </div>
                                </div>
                                <div>
                                    <div >
                                        <img className='w-[423px] h-[413px] rounded-t-[24px] ' src="https://img.freepik.com/free-photo/handsome-groom_1153-7227.jpg?w=740&t=st=1699469839~exp=1699470439~hmac=07ffcb01bd2eff43440d1d6d4e7c12392211cb9c975cda43e6ab10d48f86f486" alt="" />
                                    </div>
                                    <div className='mt-[75px] employee h-[39px]'>
                                        EMPLOYEE NAME
                                    </div>
                                    <div className='head'>
                                        DEPARTMENT HEAD
                                    </div>
                                    <div className='mt-[45px] text-center text-white'>
                                        <button className='bg-[#00C2FF] px-[70px] py-[13px] rounded-[11px] button font-sans'>Details</button>
                                    </div>
                                </div>
                                <div>
                                    <div >
                                        <img className='w-[423px] h-[413px] rounded-t-[24px] ' src="https://img.freepik.com/free-photo/handsome-groom_1153-7227.jpg?w=740&t=st=1699469839~exp=1699470439~hmac=07ffcb01bd2eff43440d1d6d4e7c12392211cb9c975cda43e6ab10d48f86f486" alt="" />
                                    </div>
                                    <div className='mt-[75px] employee h-[39px]'>
                                        EMPLOYEE NAME
                                    </div>
                                    <div className='head'>
                                        DEPARTMENT HEAD
                                    </div>
                                    <div className='mt-[45px] text-center text-white'>
                                        <button className='bg-[#00C2FF] px-[70px] py-[13px] rounded-[11px] button font-sans'>Details</button>
                                    </div>
                                </div>
                                <div>
                                    <div >
                                        <img className='w-[423px] h-[413px] rounded-t-[24px] ' src="https://img.freepik.com/free-photo/handsome-groom_1153-7227.jpg?w=740&t=st=1699469839~exp=1699470439~hmac=07ffcb01bd2eff43440d1d6d4e7c12392211cb9c975cda43e6ab10d48f86f486" alt="" />
                                    </div>
                                    <div className='mt-[75px] employee h-[39px]'>
                                        EMPLOYEE NAME
                                    </div>
                                    <div className='head'>
                                        DEPARTMENT HEAD
                                    </div>
                                    <div className='mt-[45px] text-center text-white'>
                                        <button className='bg-[#00C2FF] px-[70px] py-[13px] rounded-[11px] button font-sans'>Details</button>
                                    </div>
                                </div>
                            </Carousel>


                        </div>
                        <div className='bg-white w-[416px] h-[296px] rounded-[10px] mr-[23px]'>
                            <div className='text-3xl font-bold font-sans ms-[67.5px] mt-[24px]'>
                                Leading experts<Groups2Icon className="ms-2"></Groups2Icon>
                            </div>
                            <div className='mt-[36px] mx-[19px] details font-sans'>
                                Congue lorem ipsum dolor ipsum faucibus mi et, scelerisque mauris. rutrum lorem ipsum dolor. Morbi from ipsum amet - eget augue bibendum, lorem ipsum faucibus mi et. Aenean dapibus massa leo.
                            </div>
                        </div>
                        <div className='bg-white w-[416px] h-[296px] rounded-[10px] mr-[23px]'>
                            <div className='text-3xl font-bold font-sans ms-[93px] mt-[24px]'>
                                Free Of Cost <PaidIcon className="ms-2" ></PaidIcon>
                            </div>
                            <div className='mt-[36px] mx-[19px] details font-sans'>
                                Congue lorem ipsum dolor ipsum faucibus mi et, scelerisque mauris. rutrum lorem ipsum dolor. Morbi from ipsum amet - eget augue bibendum, lorem ipsum faucibus mi et. Aenean dapibus massa leo.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WhyChooseUs;