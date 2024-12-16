"use client";
import React from 'react';
import Image from "next/image";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Fade, Slide, Zoom} from "react-awesome-reveal";

const Promo = () => {
    return (
     
        <div className='py-20 w-full bg-black text-white h-[100%] p-4 '>
           
            <div className="relative pt-30 w-full h-full ">
                    <Image 
                        src="/image/promo.png" 
                        alt="Decorative Line" 
                        width={1200} 
                        height={500} 
                        className="hidden sm:block md:block w-full"  
                    />
                     {/* Image for small devices */}
  <Image 
    src="/image/promo-small.png"  // Change to your small device image source
    alt="Decorative Line for Small Devices" 
    width={535} 
    height={572} 
    className="block md:hidden sm:hidden "  //  // Hidden on large screens, shown on small screens
  />
                    {/* Content on top of the image */}
  <div className="absolute left:1/2 sm:left-0 top-1/2 transform -translate-y-1/2 ml-5  px-5  text-white">
  <p className='font-bold text-[12px] md:text-lg lg:text-[22px] plus-jakarta text-white lg:mb-4 '>One-stop platform</p>
  <h2 className="md:text-base relative text-[16px] lg:text-[44px] plus-jakarta font-extrabold text-white mt-2 lg:mt-6">
  {/* Image positioned above the text */}
  <span className="absolute md:top-[-6px] lg:top-[-23px] left-[-21px] w-[71.95px] h-[34.68px] lg:w-full">
   <Zoom delay={200} triggerOnce={true}><Image 
      src="/image/Circle 8.png" 
      alt="Decorative Line" 
      width={153} 
      height={64} 
    /></Zoom> 
  </span> Postiz is an open-source tool<br />
  <span className="lg:mt-5 block mt-1">for social media scheduling</span>
</h2>


    <p className="text-base  dm-sans  lg:text-lg text-white mt-3  lg:mt-3">Provides tools to manage social media,build an audience,<br />generate leads,and grow your business</p>
    <div className='sm:mt-2 mt-3  lg:mt-3'>
    <button className="px-1 py-1 lg:px-3 lg:py-3 flex gap-2 items-center font-medium text-black capitalize transition-colors duration-300 transform bg-white rounded-3xl text-xs lg:text-base hover:bg-slate-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                            Get Started
                            <MdKeyboardDoubleArrowRight />
                        </button>
    </div>
  </div>
                </div> 
              
        </div>
      
    );
};

export default Promo;