"use client";
import React from 'react';
import Image from "next/image";
import PostizPrice from './Plans/PostizPrice';
import BufferPrice from './Plans/BufferPrice';

const Pricing = () => {
    return (
        <div className='py-10'>
            <div>
            <h1 className='text-center mt-7 mb-14 plus-jakarta text-2xl font-bold md:text-3xl lg:text-5xl text-white'>
            Pricing & Plans
        </h1>
        <div className='flex md:flex-col lg:flex-row flex-col justify-around items-center gap-5 md:gap-2'>
         <div>
            <PostizPrice></PostizPrice>
         </div>
         <div>
            <BufferPrice></BufferPrice>
         </div>
        </div>
            </div>
        </div>
    );
};

export default Pricing;