import React from 'react';
import Image from "next/image";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Footer from '../Footer';
import Footerlast from './Footerlast';

const Ready = () => {
    return (
        <div className='pt-36 '>
            <div className='flex flex-col items-center' >
            <h1 className='text-center text-3xl pl-4 pr-4   lg:text-6xl text-white plus-jakarta font-bold'>Ready to get started?</h1>
            <p className=' lg:pl-80 lg:pr-80 pl-10 pr-10 text-center mt-5 dm-sans font-normal text-[22px] text-[#D1D1D1]'>Elevate your social media planning and achieve new heights of efficiency and effectiveness with Postiz.</p>
            <button className="px-3 py-2 mt-5 flex whitespace-nowrap gap-2 items-center font-medium text-black capitalize transition-colors duration-300 transform bg-white rounded-3xl text-base hover:bg-slate-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                            Get Started
                            <MdKeyboardDoubleArrowRight />
                        </button>
            </div> 
            <div className='pt-10 lg:pl-20  lg:pr-20  container mx-auto pl-5 pr-5'>
            <Image 
                src="/image/postiz3.png" 
                alt="Right Top Image" 
                width={1190} 
                height={542} 
                className='w-[335px] h-[151px]  lg:w-full md:h-[542px]'
            />
            </div>
<div className='h-full'>
<Footerlast></Footerlast>
</div>
        </div>
    );
};

export default Ready;

