/* eslint-disable react/no-unescaped-entities */
"use client";
import React from 'react';
import Image from "next/image";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Banner = () => {
    return (
        <div className="h-[300px] mt-20 flex flex-col justify-center items-center mx-auto container">
            {/* Flex Container for Heading and Image */}
            <div className="gap-4">
                <h1 className="md:text-6xl plus-jakarta text-3xl font-extrabold text-center ">
                    Postiz and Buffer <br /> comparison
                </h1>
                <div className="md:ml-40 w-1/2 ml-32 md:w-full mt-3">
                    <Image 
                        src="/image/Line 3.png" 
                        alt="Decorative Line" 
                        width={300} 
                        height={100} 
                    />
                </div>
            </div>

            {/* Paragraph */}
            <p className=" text-center md:text-base p-3 dm-sans">
                Postiz's superior scheduling flow,competitor tracking,and client<br />management make it the best Buffer alternative.
            </p>
            <div className='text-center mt-2'>
            <button className="px-3 dm-sans py-3 flex gap-2  text-center items-center  justify-center font-medium text-black capitalize transition-colors duration-300 transform bg-white rounded-3xl text-base hover:bg-slate-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                Get Started
                                <MdKeyboardDoubleArrowRight />
                            </button>
            </div>
        </div>
    );
};

export default Banner;
