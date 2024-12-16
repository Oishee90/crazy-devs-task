/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react';
import Image from "next/image";
import {  Zoom} from "react-awesome-reveal";
const Faq = () => {
    return (
        <div className='py-10 p-4'>
            <div className='flex flex-col lg:flex-row items-center lg:items-start justify-between gap-5 lg:gap-14'>
                <div className='w-full lg:w-1/4 flex-col items-center justify-center flex'>
          <h1 className='lg:text-5xl font-bold plus-jakarta text-3xl text-[white] text-center lg:text-left'>Frequently asked questions</h1>
          <Zoom  delay={300} triggerOnce={true}>  <Image 
    src="/image/fq.png" 
    alt="Left Bottom Image" 
    width={225} 
    height={60} 
    className='mt-3 lg:mt-6 w-[129px] h-[33px] lg:w-[223px] lg:h-[57]  '
  /></Zoom>
                </div>
                <div className='w-full lg:w-3/4'>
                <div className="space-y-3">
  <details className="group [&_summary::-webkit-details-marker]:hidden bg-[#1A1919] border border-[#353434] rounded-2xl pb-5" open>
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 pt-7 lg:pr-5 lg:pl-5  pr-4 pl-4 text-white"
    >
      <h2 className="font-bold text-[22] lg:text-2xl plus-jakarta">How easy is it to switch from Buffer to Postiz?</h2>

      <svg
        className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>

    <p className=" text-lg mt-4 px-4 leading-relaxed text-[#D1D1D1] lg:pr-5 lg:pl-5 lg:pb-7  text-[22px] dm-sans">
    Very easy, and only takes minutes. Our social set setup is quick & easy so you'll be up and running in no time.
    </p>
  </details>

  <details className="group [&_summary::-webkit-details-marker]:hidden bg-[#1A1919] border border-[#353434] rounded-2xl pb-5" open>
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 pt-7 lg:pr-5 lg:pl-5  pr-4 pl-4 text-white"
    >
      <h2 className="font-bold text-[22] lg:text-2xl plus-jakarta">Can I use Postiz & Buffer at the same time safely?</h2>

      <svg
        className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>

    <p className=" text-lg mt-4 px-4 leading-relaxed text-[#D1D1D1] lg:pr-5 lg:pl-5 lg:pb-7  text-[22px] dm-sans">
    Yes, Postiz and Buffer can be used together without any issues. They won't conflict with each other.
    </p>
  </details>

  <details className="group [&_summary::-webkit-details-marker]:hidden bg-[#1A1919] border border-[#353434] rounded-2xl pb-5" open>
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 pt-7 lg:pr-5 lg:pl-5  pr-4 pl-4 text-white"
    >
      <h2 className="font-bold text-[22] lg:text-2xl plus-jakarta">I'm paying for Buffer, but don't want to pay double while I get setup - can I get a extended trial?</h2>

      <svg
        className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>

    <p className=" text-lg mt-4 px-4 leading-relaxed text-[#D1D1D1] lg:pr-5 lg:pl-5 lg:pb-7  text-[22px] dm-sans">
    Yes, we offer extended trials for users with active Buffer subscriptions. Just contact our support team with proof of your subscription!
    </p>
  </details>
</div>
                </div>
            </div>
        </div>
    );
};

export default Faq;