"use client"
import React from 'react';
import BufferS from './SocialScheduling/BufferS';
import PostizS from './SocialScheduling/PostizS';

const Social = () => {
    return (
        <div className='pt-10 lg:pt-20 p-4'>
        <div className=''>
        <h1 className='text-center mt-7 mb-14 plus-jakarta text-2xl font-bold md:text-3xl lg:text-5xl text-white'>
        Social Media Scheduling & Publishing
    </h1>
    <div className='flex  lg:flex-row flex-col lg:justify-around items-center gap-5 md:gap-2'>
     <div className='w-full lg:w-1/2'>
     <PostizS></PostizS>
     </div>
     <div className='w-full lg:w-1/2'>
      
       <BufferS></BufferS>
     </div>
    </div>
        </div>
    </div>
);

};

export default Social;