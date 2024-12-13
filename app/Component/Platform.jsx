"use client";
import React from 'react';
import Image from "next/image";

const Platform = () => {
    return (
<div className='py-10 px-5'>
    <div className='relative'> 
        <h1 className='text-center mt-7 mb-14 plus-jakarta text-2xl font-bold md:text-3xl lg:text-5xl text-white'>
            Platform Comparison
        </h1>
        <div className='flex sm:flex-row flex-col  items-center gap-2 md:gap-4 relative'>
            <div className="w-full sm:h-[396px] h-[292px] rounded-3xl px-4 py-3 text-white shadow-md"  
                style={{
                    background: "linear-gradient(90deg, #24005e 0%, #5608d5 100%)",
                }}>
                <div className='p-4 md:pt-10 md:pb-10 md:pr-10 md:pl-10'>
                    <div>
                        <Image 
                            src="/image/Postiz.png" 
                            alt="Right Top Image" 
                            width={190} 
                            height={75} 
                            className='w-1/2 h-full'
                        />
                    </div>
                    <h1 className="md:mt-5 mt-2 sm:text-4xl text-[22px] font-semibold dm-sans">
                        Postiz
                    </h1>
                    <p className="md:mt-3 mt-2 sm:text-[22px] text-base dm-sans">
                        Postiz helps you build an audience organically. We’re a values-driven company that provides affordable, intuitive, marketing tools for ambitious people and teams.
                    </p>
                </div>
            </div>
            <div className="w-full sm:h-[396px] h-[292px] rounded-3xl px-4 py-3 bg-[#1A1919] text-white shadow-md">
                <div className='p-4 md:pt-10 md:pb-10 md:pr-10 md:pl-10'>
                    <div className='w-full'>
                        <Image 
                            src="/image/buffer.png" 
                            alt="Right Top Image" 
                            width={190} 
                            height={75} 
                            className='w-1/2 h-full'
                        />
                    </div>
                    <h1 className="md:mt-5 mt-2 text-white sm:text-4xl text-[22px] font-semibold dm-sans">
                        Buffer
                    </h1>
                    <p className="md:mt-3 mt-2 text-[#D1D1D1] sm:text-[22px] text-base dm-sans">
                        Buffer helps you build an audience organically. We’re a values-driven company that provides affordable, intuitive, marketing tools for ambitious people and teams.
                    </p>
                </div>
            </div>
            {/* VS */}
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center'>
                <h1 className='bg-[#0E0E0E] rounded-2xl md:w-[50px] md:h-[50px]  w-[40px] h-[40px] flex items-center justify-center text-white font-extrabold md:text-xl text-lg dm-sans'>
                    VS
                </h1>
            </div>
        </div>
    </div>
</div>

    );
};

export default Platform;