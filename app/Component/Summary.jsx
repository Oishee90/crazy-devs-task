import React from 'react';

const Summary = () => {
    return (
        <div className='pt-10 lg:pt-20 p-4'>
           <div className='pb-10'>
           <h1 className='text-center mt-7 mb-14 plus-jakarta text-2xl font-bold md:text-3xl lg:text-5xl text-white'>
           Summary
    </h1>
    <div className='bg-[#1A1919] border border-[#353434] rounded-xl h-full pt-10 pb-10 pl-8 pr-8'>
    <h1 className='text-white plus-jakarta text-[22px] font-bold'>Which platform is the most affordable?</h1>
    <p className='text-[#D1D1D1] text-[22px] dm-sans mt-7'> The most affordable plan is the Standart plan from Postiz. It starts from $29 per month, and includes 1 social set (which includes 1 social profiles), and 1 users.</p>
    </div>
            </div> 
        </div>
    );
};

export default Summary;