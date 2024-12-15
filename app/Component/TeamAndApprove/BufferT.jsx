"use client"
import React from 'react';
import Image from "next/image";

const BufferT = () => {
    return (
        <div className='h-full  w-full bg-[#1A1919] rounded-2xl text-white'>
        <div className='lg:pr-7 lg:pl-7 lg:pb-7 md:pt-7 p-4'>
        <h1 className='text-2xl lg:text-4xl text-white font-bold plus-jakarta'>Postiz - Teams & Approvals</h1>
        <div>

       
       <div className=' mt-6 flex gap-3 dm-sans items-center'>
       <Image 
                        src="/image/right.png" 
                        alt="Right Top Image" 
                        width={34} 
                        height={34} 
                        className='md:h-[34px] h-[24px] md:w-[34px] w-[24px] '
                    />
     <h3 className=' text-[#D1D1D1] text-lg md:text-[22px]'>Approval Workflows</h3>
       </div>
       <div className=' mt-3 flex gap-3 dm-sans items-center'>
       <Image 
                        src="/image/cross.png" 
                        alt="Right Top Image" 
                        width={34} 
                        height={34} 
                        className='md:h-[34px] h-[24px] md:w-[34px] w-[24px] '
                    />
     <h3 className=' text-[#D1D1D1] text-lg md:text-[22px]'>Assign Users to Posts</h3>
       </div>
       <div className=' mt-3 flex gap-3 dm-sans items-center'>
       <Image 
                        src="/image/cross.png" 
                        alt="Right Top Image" 
                        width={34} 
                        height={34} 
                        className='md:h-[34px] h-[24px] md:w-[34px] w-[24px] '
                    />
     <h3 className=' text-[#D1D1D1] text-lg md:text-[22px]'>Leave Comments on Posts</h3>
       </div>
       <div className=' mt-3 flex gap-3 dm-sans items-center'>
       <Image 
                        src="/image/cross.png" 
                        alt="Right Top Image" 
                        width={34} 
                        height={34} 
                        className='md:h-[34px] h-[24px] md:w-[34px] w-[24px] '
                    />
     <h3 className=' text-[#D1D1D1] text-lg md:text-[22px]'>Assign Users to Messages</h3>
       </div>
       <div className=' mt-3 flex gap-3 dm-sans items-center'>
       <Image 
                        src="/image/cross.png" 
                        alt="Right Top Image" 
                        width={34} 
                        height={34} 
                        className='md:h-[34px] h-[24px] md:w-[34px] w-[24px] '
                    />
     <h3 className=' text-[#D1D1D1] text-lg md:text-[22px]'>Tag Team Members in Comments</h3>
       </div>
     
      

 
       </div>

        </div>
      
    </div>
    );
};

export default BufferT;