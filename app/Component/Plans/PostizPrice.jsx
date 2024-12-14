"use client"
import React from 'react';
import Image from "next/image";

const PostizPrice = () => {
    return (
        <div className='md:h-[1295px] h-[1678px] w-full bg-[#1A1919] rounded-2xl text-white'>
            <div className='md:pr-7 md:pl-7 md:pb-7 md:pt-7 p-4'>
            <h1 className='text-2xl lg:text-4xl text-white font-bold plus-jakarta'>Postiz Pricing</h1>
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
<div className="md:w-[566px] w-[287px] md:h-[146px] h-[200px]  cursor-pointer  px-7 py-4 bg-[#242323] border border-[#353434] rounded-xl shadow-md text-white md:mt-7 mt-3 dark:bg-gray-800">
  <div className="flex md:flex-row flex-col gap-3 justify-between p-4 ">
    <div> 
    <h1 className='font-medium text-lg md:text-xl text-white plus-jakarta'>Standart</h1>
     <h1 className='mt-3 flex items-center font-semibold plus-jakarta text-3xl md:text-4xl text-white gap-2'>$29 <span className='font-normal text-lg md:text-xl'>/ mo</span> </h1>
    </div>
    <div>
    <h1 className='mt-2 md:mt-0 text-lg md:text-xl dm-sans text-white'>Social sets: 1</h1>
    <h1 className='md:mt-2 text-lg md:text-xl dm-sans text-white'>Users: 1</h1> 
    </div>
  </div>
</div>
        {/* 2 start */}
<div className="md:w-[566px] w-[287px] md:h-[146px] h-[200px]  cursor-pointer  px-7 py-4 bg-[#242323] border border-[#353434] rounded-xl shadow-md text-white md:mt-7 mt-3 dark:bg-gray-800">
  <div className="flex md:flex-row flex-col gap-3 justify-between p-4 ">
    <div> 
    <h1 className='font-medium text-lg md:text-xl text-white plus-jakarta'>Team</h1>
     <h1 className='mt-3 flex items-center font-semibold plus-jakarta text-3xl md:text-4xl text-white gap-2'>$39 <span className='font-normal text-lg md:text-xl'>/ mo</span> </h1>
    </div>
    <div>
    <h1 className='mt-2 md:mt-0 text-lg md:text-xl dm-sans text-white'>Social sets: 1</h1>
    <h1 className='md:mt-2 text-lg md:text-xl dm-sans text-white'>Users: unlimited</h1> 
    </div>
  </div>
</div>
        {/* 3 start */}
<div className="md:w-[566px] w-[287px] md:h-[146px] h-[200px] cursor-pointer  px-7 py-4 bg-[#242323] borde border-[#353434] rounded-xl shadow-md text-white md:mt-7 mt-3 dark:bg-gray-800">
  <div className="flex md:flex-row flex-col gap-3 justify-between p-4 ">
    <div> 
    <h1 className='font-medium text-lg md:text-xl text-white plus-jakarta'>Pro</h1>
     <h1 className='mt-3 flex items-center font-semibold plus-jakarta text-3xl md:text-4xl text-white gap-2'>$49 <span className='font-normal text-lg md:text-xl'>/ mo</span> </h1>
    </div>
    <div>
    <h1 className='mt-2 md:mt-0 text-lg md:text-xl dm-sans text-white'>Social sets: 1</h1>
    <h1 className='md:mt-2 text-lg md:text-xl dm-sans text-white'>Users: unlimited</h1> 
    </div>
  </div>
</div>
        {/* 4 start */}
<div className="md:w-[566px] w-[287px] md:h-[146px] h-[200px] cursor-pointer  px-7 py-4 bg-[#242323] border border-[#353434] rounded-xl shadow-md text-white md:mt-7 mt-3 dark:bg-gray-800">
  <div className="flex md:flex-row flex-col gap-3 justify-between p-4 ">
    <div> 
    <h1 className='font-medium text-lg md:text-xl text-white plus-jakarta'>Ultimate</h1>
     <h1 className='mt-3 flex items-center font-semibold plus-jakarta text-3xl md:text-4xl text-white gap-2'>$99 <span className='font-normal text-lg md:text-xl'>/ mo</span> </h1>
    </div>
    <div>
    <h1 className='mt-2 md:mt-0 text-lg md:text-xl dm-sans text-white'>Social sets: 1</h1>
    <h1 className='md:mt-2 text-lg md:text-xl dm-sans text-white'>Users: unlimited</h1> 
    </div>
  </div>
</div>

<div className='md:mt-7 mt-4'>
<h1 className='text-[22px] plus-jakarta font-bold'>On-premise services & Enterprise</h1>
</div>
       {/* 5 start */}

       <div className="md:w-[566px] w-[287px] md:h-[146px] h-[200px] cursor-pointer  px-7 py-4 bg-gradient-to-b from-[#45007C] to-[#1C0033] border border-[#45007C] rounded-xl shadow-md text-white  mt-5 dark:bg-gray-800">
 <div className="flex md:flex-row flex-col gap-3 justify-between p-4 ">
   <div> 
   <h1 className='font-medium text-lg md:text-xl text-white plus-jakarta'>Self service installation</h1>
    <h1 className='mt-3 flex items-center font-semibold plus-jakarta text-3xl md:text-4xl text-white gap-2'>$2000 <span className='font-normal text-lg md:text-xl'>/ one time</span> </h1>
   </div>
   <div>
   <h1 className='mt-2 md:mt-0 text-lg md:text-xl dm-sans text-white'>Social sets: 1</h1>
   <h1 className='md:mt-2 text-lg md:text-xl dm-sans text-white'>Users: 1</h1> 
   </div>
 </div>
</div>
       {/* 6 start */}

       <div className="md:w-[566px] w-[287px]  md:h-[146px] h-[200px] cursor-pointer  px-7 py-4 bg-gradient-to-b from-[#6B007C] to-[#280033] border border-[#6B007C] rounded-xl shadow-md text-white  mt-5 dark:bg-gray-800">
 <div className="flex md:flex-row flex-col gap-3 justify-between p-4 ">
   <div> 
   <h1 className='font-medium text-lg md:text-xl text-white plus-jakarta'>Enterprise</h1>
    <h1 className='mt-3  font-semibold plus-jakarta text-3xl md:text-4xl text-white gap-2'>Custom</h1>
   </div>
   <div>
   <h1 className='mt-2 md:mt-0 text-lg md:text-xl dm-sans text-white'>Social sets: 1</h1>
   <h1 className='md:mt-2 text-lg md:text-xl dm-sans text-white'>Users: 1</h1> 
   </div>
 </div>
</div>


            </div>
          
        </div>
    );
};

export default PostizPrice;

