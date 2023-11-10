import React from 'react'
import work1 from '../assets/work1.jpg'
import work2 from '../assets/work2.jpg'
import work3 from '../assets/work3.jpg'
import work4 from '../assets/work 4.jpg'


function Opportunity() {
    return (
        <div className='font-sans text-black'>
            <h1 className='text-[64px] font-bold font-sans mt-[50px]'>Opportunities We show</h1>
            <p className='text-[28px]'>Helping the young starts for better life</p>

            <div className="carousel carousel-center w-[1440px] h-[492px] mt-[50px] rounded-[10px] ">
                <div className="carousel-item w-1/3 h-4/5 relative" id="slide1" >
                    <img className='w-full' src={work1} alt="" />
                    <div className='w-[343px] h-[162px] backdrop-blur-xl bg-white/30 absolute mt-[330px] ml-[68px] rounded-[8px]  '>
                        <h3 className='text-[24px] font-semibold mt-[29px] '>Project Name</h3>
                        <p className='text-[24px]  mt-[29px]'>Text related to project</p>
                    </div>
                </div>
                <div className="carousel-item w-1/3  relative h-4/5" id="slide2">
                <img className='w-full' src={work2} alt="" />
                    <div className='w-[343px] h-[162px] backdrop-blur-xl bg-white/30 absolute mt-[330px] ml-[68px] rounded-[8px]  '>
                        <h3 className='text-[24px] font-semibold mt-[29px] '>Project Name</h3>
                        <p className='text-[24px]  mt-[29px]'>Text related to project</p>
                    </div>

                </div>
                <div className="carousel-item w-1/3 h-4/5 relative" id="slide3">
                <img className='w-full' src={work3} alt="" />
                    <div className='w-[343px] h-[162px] backdrop-blur-xl bg-white/30 absolute mt-[330px] ml-[68px] rounded-[8px]  '>
                        <h3 className='text-[24px] font-semibold mt-[29px] '>Project Name</h3>
                        <p className='text-[24px]  mt-[29px]'>Text related to project</p>
                    </div>
                </div>
                <div className="carousel-item w-1/3 h-4/5 relative" id="slide4">
                <img className='w-full' src={work4} alt="" />
                    <div className='w-[343px] h-[162px] backdrop-blur-xl bg-white/30 absolute mt-[330px] ml-[68px] rounded-[8px]  '>
                        <h3 className='text-[24px] font-semibold mt-[29px] '>Project Name</h3>
                        <p className='text-[24px]  mt-[29px]'>Text related to project</p>
                    </div>
                </div>
                <div className="carousel-item w-1/3 h-4/5 relative" id="slide5">
                <img className='w-full' src={work2} alt="" />
                    <div className='w-[343px] h-[162px] backdrop-blur-xl bg-white/30 absolute mt-[330px] ml-[68px] rounded-[8px]  '>
                        <h3 className='text-[24px] font-semibold mt-[29px] '>Project Name</h3>
                        <p className='text-[24px]  mt-[29px]'>Text related to project</p>
                    </div>
                </div>

            </div>
            <button className=' w-[372px] h-[69px] mt-[40px] rounded-[8px] text-[30px] font-bold bg-[#227BE5] text-white'>Explore For More</button>

        </div>
    )
}

export default Opportunity