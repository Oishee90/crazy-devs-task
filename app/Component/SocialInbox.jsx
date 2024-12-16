"use client"
import React from 'react';

import PostizIn from './Inbox/PostizIn';
import BufferIn from './Inbox/BufferIn';

const SocialInbox = () => {
    return (
        <div className='pt-10 lg:pt-20 p-4'>
        <div className=''>
        <h1 className='text-center mt-7 mb-14 plus-jakarta text-2xl font-bold md:text-3xl lg:text-5xl text-white'>
        Social Media Inbox
    </h1>
    <div className='flex  lg:flex-row flex-col lg:justify-around items-center gap-5 md:gap-2'>
     <div className='w-full lg:w-1/2'>
 <PostizIn></PostizIn>
     </div>
     <div className='w-full lg:w-1/2'>
      
<BufferIn></BufferIn>
     </div>
    </div>
        </div>
    </div>
    );
};

export default SocialInbox;