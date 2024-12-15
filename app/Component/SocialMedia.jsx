import React from 'react';
import PostizA from './SocialMediaAnalytics/PostizA';
import BufferA from './SocialMediaAnalytics/BufferA';

const SocialMedia = () => {
    return (
        <div className='py-10'>
        <div className=''>
        <h1 className='text-center mt-7 mb-14 plus-jakarta text-2xl font-bold md:text-3xl lg:text-5xl text-white'>
        Social Media Analytics & Reporting
    </h1>
    <div className='flex  lg:flex-row flex-col lg:justify-around items-center gap-5 md:gap-2'>
     <div className='w-full lg:w-1/2'>
 <PostizA></PostizA>
     </div>
     <div className='w-full lg:w-1/2'>
      
    <BufferA></BufferA>
     </div>
    </div>
        </div>
    </div>
    );
};

export default SocialMedia;