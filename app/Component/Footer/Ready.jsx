import React from 'react';
import Image from "next/image";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Ready = () => {
    return (
        <div className='pt-36 '>
           <div className='flex flex-col items-center' >
            <h1 className='text-center text-3xl  lg:text-6xl text-white plus-jakarta font-bold'>Ready to get started?</h1>
            <p className=' pl-80 pr-80 text-center mt-5 dm-sans font-normal text-[22px] text-[#D1D1D1]'>Elevate your social media planning and achieve new heights of efficiency and effectiveness with Postiz.</p>
            <button className="px-3 py-2 mt-5 flex whitespace-nowrap gap-2 items-center font-medium text-black capitalize transition-colors duration-300 transform bg-white rounded-3xl text-base hover:bg-slate-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                            Get Started
                            <MdKeyboardDoubleArrowRight />
                        </button>
            </div> 
            <div className='pt-10 pl-20 pr-20'>
            <Image 
                src="/image/postiz3.png" 
                alt="Right Top Image" 
                width={1190} 
                height={542} 
                className='w-full h-full'
            />
            </div>
        </div>
    );
};

export default Ready;