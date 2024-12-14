"use client"
import React from 'react';
import Image from "next/image";

const BufferPrice = () => {
    return (
        <div className='md:h-[1295px] h-[1478px] w-full bg-[#1A1919]  rounded-2xl text-white'>
        <div className='md:pr-7 md:pl-7 md:pb-7 md:pt-7 p-4'>
        <h1 className='text-2xl lg:text-4xl text-white font-bold plus-jakarta'>Buffer Pricing</h1>
       <div className='md:mt-7 mt-4 flex gap-3 dm-sans items-center'>
       <Image 
                        src="/image/right.png" 
                        alt="Right Top Image" 
                        width={34} 
                        height={34} 
                        className='md:h-[34px] h-[24px] md:w-[34px] w-[24px] '
                    />
     <h3 className=' text-[#D1D1D1] text-lg md:text-xl'>14 day free trial, credit card required</h3>
       </div>
       <div className='mt-2 flex gap-3 dm-sans items-center'>
       <Image 
                        src="/image/right.png" 
                        alt="Right Top Image" 
                        width={34} 
                        height={34} 
                        className='md:h-[34px] h-[24px] md:w-[34px] w-[24px] '
                    />
     <h3 className=' text-[#D1D1D1] text-lg md:text-xl'>10% annual discount</h3>
       </div>
       
    {/* card */}
    {/* 1 start */}
<div className="md:w-[566px] w-[287px] md:h-[146px] h-[250px] cursor-pointer  px-7 py-4 bg-[#242323] border border-[#353434] rounded-xl shadow-md text-white md:mt-7 mt-3 dark:bg-gray-800">
<div className="flex md:flex-row flex-col gap-3 justify-between p-4 ">
<div> 
<h1 className='font-medium text-lg md:text-xl text-white plus-jakarta'>Free</h1>
 <h1 className='mt-3 flex items-center font-semibold plus-jakarta text-3xl md:text-4xl text-white gap-2'>$0 <span className='font-normal text-lg md:text-xl'>/ mo</span> </h1>
</div>
<div>
<h1 className='mt-2 md:mt-0 text-lg md:text-xl dm-sans text-white'>Social sets: 1</h1>
<h1 className='md:mt-2 text-lg md:text-xl dm-sans text-white'>Users: 1</h1> 
</div>
</div>
</div>
    {/* 2 start */}
<div className="md:w-[566px] w-[287px]  md:h-[146px] h-[250px] cursor-pointer px-7 py-4 bg-[#242323] border border-[#353434] rounded-xl shadow-md text-white md:mt-7 mt-3 dark:bg-gray-800">
<div className="flex md:flex-row flex-col gap-3 justify-between p-4 ">
<div> 
<h1 className='font-medium text-lg md:text-xl text-white plus-jakarta'>Essentials</h1>
 <h1 className='mt-3 flex items-center font-semibold plus-jakarta text-3xl md:text-4xl text-white gap-2'>$6 <span className='font-normal text-lg md:text-xl'>/ mo</span> </h1>
</div>
<div>
<h1 className='mt-2 md:mt-0 text-lg md:text-xl dm-sans text-white'>Social sets: 1</h1>
<h1 className=' text-lg md:text-xl dm-sans text-white'>(additional: $6)</h1>
<h1 className='md:mt-2 text-lg md:text-xl dm-sans text-white'>Users: 1</h1> 
</div>
</div>
</div>
    {/* 3 start */}
<div className="md:w-[566px] w-[287px] md:h-[146px] h-[250px]  cursor-pointer px-7 py-4 bg-[#242323] border border-[#353434] rounded-xl shadow-md text-white md:mt-7 mt-3 dark:bg-gray-800">
<div className="flex md:flex-row flex-col gap-3 justify-between p-4 ">
<div> 
<h1 className='font-medium text-lg md:text-xl text-white plus-jakarta'>Team</h1>
 <h1 className='mt-3 flex items-center font-semibold plus-jakarta text-3xl md:text-4xl text-white gap-2'>$12 <span className='font-normal text-lg md:text-xl'>/ mo</span> </h1>
</div>
<div>
<h1 className='mt-2 md:mt-0 text-lg md:text-xl dm-sans text-white'>Social sets: 1</h1>
<h1 className=' text-lg md:text-xl dm-sans text-white'>(additional: $12)</h1>
<h1 className='md:mt-2 text-lg md:text-xl dm-sans text-white'>Users: unlimited</h1> 
</div>
</div>
</div>
    {/* 4 start */}
<div className="md:w-[566px] w-[287px] md:h-[146px] h-[250px] cursor-pointer  px-7 py-4 bg-[#242323] border border-[#353434] rounded-xl shadow-md text-white md:mt-7 mt-3 dark:bg-gray-800">
<div className="flex md:flex-row flex-col gap-3 justify-between p-4 ">
<div> 
<h1 className='font-medium text-lg md:text-xl text-white plus-jakarta'>Agency</h1>
 <h1 className='mt-3 flex items-center font-semibold plus-jakarta text-3xl md:text-4xl text-white gap-2'>$120 <span className='font-normal text-lg md:text-xl'>/ mo</span> </h1>
</div>
<div>
<h1 className='mt-2 md:mt-0 text-lg md:text-xl dm-sans text-white'>Social sets: 1</h1>
<h1 className=' text-lg md:text-xl dm-sans text-white'>(additional: $12)</h1>
<h1 className='md:mt-2 text-lg md:text-xl dm-sans text-white'>Users: unlimited</h1> 
</div>
</div>
</div>


        </div>
      
    </div>
    );
};

export default BufferPrice;