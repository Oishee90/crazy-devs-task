"use client"
import React from 'react';
import PostizCom from './Compare/PostizCom';
import BufferCom from './Compare/BufferCom';

const ComAlt = () => {
    return (
        <div className='py-20'>
        <div className=''>
        <h1 className='text-center mt-7 mb-14 plus-jakarta text-2xl font-bold md:text-3xl lg:text-5xl text-white'>
        Compare Alternatives
    </h1>
    <div className='flex  lg:flex-row flex-col lg:justify-around items-center gap-5 md:gap-2'>
     <div className='w-full lg:w-1/2'>
<PostizCom></PostizCom>
     </div>
     <div className='w-full lg:w-1/2'>
      
  <BufferCom></BufferCom>
     </div>
    </div>
        </div>
    </div>
    );
};

export default ComAlt;