"use client";
import React from 'react';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Image from "next/image";
import {  Zoom} from "react-awesome-reveal";

const ChoosePostiz = () => {
    return (
        <div className='pt-10 lg:pt-20 p-4'>
          <div className='flex  flex-col lg:flex-row items-start lg:items-center justify-between h-full bg-[#3C1AC9] w-full p-8 md:pl-14 md:pr-14 md:pt-8 md:pb-8 rounded-2xl'>
            <div className='md:w-3/5 w-full '>
            <div className='relative'>
  <h1 className='text-3xl plus-jakarta md:text-4xl lg:text-5xl font-bold'>
    Choose <span className='gap-0 text-[#F471FF] relative inline-block'>Postiz   <Zoom  delay={300} triggerOnce={true}> <Image 
    src="/image/Line 1.png" 
    alt="Left Bottom Image" 
    width={150.32} 
    height={10} 
    className='lg:w-[152px] w-[105px] h-[7px] top-full left-[20%]'
  /> </Zoom> </span>to enhance your social media approach!
  </h1>
  
</div>

           <p className='lg:mt-8 md:mt-5 mt-3 text-lg dm-sans md:text-xl'>Easily design, schedule, and optimize captivating content for all your channels.</p>
            </div>
            <div className='flex flex-row-reverse items-center gap-6 lg:flex-row mt-3'>
            <div className='lg:mt-5' >
            <Zoom  delay={300} triggerOnce={true}> 
            <Image 
                src="/image/doodle3.png" 
                alt="Left Bottom Image" 
                width={105.32} 
                height={95} 
                className='w-[102px] h-[84px] hidden lg:block rotate-10 transform transition-transform duration-500 hover:rotate-25 hover:scale-110'
            /> </Zoom > 
              <Zoom  delay={300} triggerOnce={true}>  <Image 
                src="/image/doodle2.png" 
                alt="Left Bottom Image" 
                width={85} 
                height={64} 
                className='w-[75px] h-[54px] rotate-20 block lg:hidden rotate-10 transform transition-transform duration-500 hover:rotate-25 hover:scale-110'
            /> </Zoom > 
            </div>
            <div className='text-center mt-2'>
        
            <button className="px-3 dm-sans py-3 flex gap-2  whitespace-nowrap text-center items-center  justify-center font-medium text-black capitalize transition-colors duration-300 transform bg-white rounded-3xl text-base hover:bg-slate-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                Get Started
                                <MdKeyboardDoubleArrowRight />
                            </button>
            </div>
            </div>
        </div>  
        </div>
    );
};

export default ChoosePostiz;