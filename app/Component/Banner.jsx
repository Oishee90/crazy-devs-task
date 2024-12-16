/* eslint-disable react/no-unescaped-entities */
"use client";
import React from 'react';
import Image from "next/image";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Fade, Slide, Zoom} from "react-awesome-reveal";

const Banner = () => {
    return (
        <div className="relative md:h-[400px] md:mt-20  mt-10 flex flex-col justify-center items-center mx-auto container overflow-hidden">
        {/* Image at Right-Top Corner */}
       
      <div className="absolute top-0 md:right-[-124px] right-[-161px] -translate-x-1/2">
     <Fade triggerOnce={true}>
        <Image 
          src="/image/Highlight 29.png" 
          alt="Right Top Image" 
          width={150} 
          height={100} 
        /></Fade>
      </div>
   

        {/* Image at Left-Bottom Corner */}
      {/* Image at Left-Bottom Corner */}

  <div className="absolute md:bottom-0 bottom-[-57px] md:left-[22px] left-[3px] -translate-x-1/2">
  <Fade triggerOnce={true} delay={300} >
    <Image 
      src="/image/tornado.png" 
      alt="Left Bottom Image" 
      width={250} 
      height={100} 
    /></Fade>
  </div>


            <div className="gap-4 mt-6">
           
                <h1 className="md:text-6xl plus-jakarta text-white text-3xl font-extrabold text-center ">
                    Postiz and Buffer <br /> comparison
                </h1> 
                <div className="md:ml-40 w-1/2 ml-32 md:w-full mt-3">
                <Zoom triggerOnce={true}>
                    <Image 
                        src="/image/Line 3.png" 
                        alt="Decorative Line" 
                        width={300} 
                        height={100} 
                    /> </Zoom>
                </div>
            </div>

            {/* Paragraph */}
           
            <p className=" text-center text-[#D1D1D1] md:text-base px-3 dm-sans">
                Postiz's superior scheduling flow,competitor tracking,and client<br />management make it the best Buffer alternative.
            </p>
            <div className='text-center mt-2'> 
            <button className="px-3 dm-sans py-3 flex gap-2   text-center items-center  whitespace-nowrap justify-center font-medium text-black capitalize transition-colors duration-300 transform bg-white rounded-3xl text-base hover:bg-slate-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                Get Started
                                <MdKeyboardDoubleArrowRight />
                            </button>
            </div>
        </div>
    );
};

export default Banner;
