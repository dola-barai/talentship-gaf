import React from 'react';
import person1 from '../assets/person1.jpg';
import person2 from '../assets/person2.jpg';
import person3 from '../assets/peson3.jpg';
import SchemaIcon from '@mui/icons-material/Schema';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import GroupsIcon from '@mui/icons-material/Groups';
import PaidIcon from '@mui/icons-material/Paid';

function ChooseUs() {
    return (
        <div className="text-black font-sans">
            <h1 className='text-[64px] font-bold font-sans'>Why to choose us</h1>
            <p className='text-center text-[28px] px-[50px] py-[40px]'>we believe that every individual possesses unique talents, and every venture holds untapped potential. We are a nonprofit startup dedicated to harnessing human capabilities and utilizing them for
                the greater good of society. Our mission is to empower individuals, organizations, and communities by providing expert advisory services, fostering collaboration, and envisioning a future where everyone can thrive.</p>
            <div className='flex flex-row'>
                <div className='pt-[30px]'>
                    <div className='flex flex-row w-11000px'>
                        <div className='w-[416px] h-[296px] bg-[#FFFFFFB2] ml-[71px] rounded-[10px]'>
                            <h2 className='text-[34px]  p-[10px]'>Complex solutions<SchemaIcon className='ml-[10px] fontSizeLarge' /></h2>

                            <p className='text-[20px] text-left p-[20px] pt-[5px]'>omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicaboomnis iste natus error  iste natus.</p>
                        </div>
                        <div className='w-[416px] h-[296px] bg-[#FFFFFFB2] ml-[50px] rounded-[10px]'>
                            <h2 className='text-[32px]  p-[15px]'>High Quality standards<RocketLaunchIcon className='ml-[10px] fontSizeLarge' /></h2>
                            <p className='text-[20px] text-left p-[20px] pt-[5px]'>omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicaboomnis iste natus error  iste natus.</p>
                        </div>
                    </div>
                    <div className='flex flex-row p-[20px] w-[1000px]'>
                        <div className='w-[416px] h-[296px] bg-[#FFFFFFB2] ml-[51px]  rounded-[10px]'>
                            <h2 className='text-[34px]  p-[15px]'>Leading experts <GroupsIcon className='ml-[10px] fontSizeLarge' /></h2>
                            <p className='text-[20px] text-left p-[20px] pt-[5px]'>omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicaboomnis iste natus error  iste natus.</p>
                        </div>
                        <div className='w-[416px] h-[296px] bg-[#FFFFFFB2] ml-[50px] rounded-[10px]'>
                            <h2 className='text-[34px] p-[15px]'>Free of Cost <PaidIcon className='ml-[10px] fontSizeLarge' /></h2>
                            <p className='text-[20px] text-left p-[20px] pt-[5px]'>omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicaboomnis iste natus error  iste natus.</p>
                        </div>
                    </div>
                </div>
                <div className="carousel w-[423px] h-[707px] rounded-[24px] bg-white relative">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img className="w-full h-[413px]" src={person1} alt="" />

                        <div className='absolute pl-[110px]  '>
                            <h2 className='text-black mt-[488px] text-[24px] font-semibold'>EMPLOYEE NAME</h2>
                            <h3 className='text-[20px] text-sky-400 font-semibold '>DEPARTMENT HEAD</h3>
                            <button className='text-white bg-[#00C2FF] h-[54px] w-[215px] rounded-[11px] mt-[25px] text-[24px] font-semibold'>Details</button>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full bg-white">
                    <img className="w-full h-[413px]" src={person2} alt="" />
                        <div className='absolute pl-[110px]  '>
                            <h2 className='text-black mt-[488px] text-[24px] font-semibold'>EMPLOYEE NAME</h2>
                            <h3 className='text-[20px] text-sky-400 font-semibold '>DEPARTMENT HEAD</h3>
                            <button className='text-white bg-[#00C2FF] h-[54px] w-[215px] rounded-[11px] mt-[25px] text-[24px] font-semibold'>Details</button>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full bg-white">
                    <img className="w-full h-[413px]" src={person3} alt="" />
                        <div className='absolute pl-[110px]  '>
                            <h2 className='text-black mt-[488px] text-[24px] font-semibold'>EMPLOYEE NAME</h2>
                            <h3 className='text-[20px] text-sky-400 font-semibold '>DEPARTMENT HEAD</h3>
                            <button className='text-white bg-[#00C2FF] h-[54px] w-[215px] rounded-[11px] mt-[25px] text-[24px] font-semibold'>Details</button>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ChooseUs