"use client";
import { useState } from 'react';
import Image from "next/image";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-none shadow dark:bg-gray-800">
            <div className="container px-6 py-4 mx-auto">
                <div className="flex items-center justify-between">
                    {/* Logo Section */}
                    <div className="w-[100px]">
                        <Image 
                            src="/image/Logo.png" 
                            alt="Descriptive text" 
                            width={300} 
                            height={500} 
                        />
                    </div>

                    {/* Navbar Items */}
                    <div className="hidden md:ml-14 md:mr-2 md:flex flex-1 justify-center md:items-center md:gap-8 lg:gap-16">
                        <div className="flex dm-sans text-white capitalize dark:text-gray-300 gap-6 lg:gap-8">
                            <a href="#" className="transition-colors duration-300 transform hover:text-slate-300 dark:hover:text-gray-200">Features</a>
                            <a href="#" className="flex items-center gap-1 transition-colors duration-300 transform hover:text-slate-300 dark:hover:text-gray-200">Providers <MdOutlineKeyboardArrowDown /></a>
                            <a href="#" className="transition-colors duration-300 transform hover:text-slate-300 dark:hover:text-gray-200">Blog</a>
                            <a href="#" className="transition-colors duration-300 transform hover:text-slate-300 dark:hover:text-gray-200">Pricing</a>
                            <a href="#" className="transition-colors duration-300 transform hover:text-slate-300 dark:hover:text-gray-200">FAQ</a>
                        </div>
                    </div>

                    {/* Button Section */}
                    <div className="hidden dm-sans md:flex md:items-center gap-6 lg:gap-8">
                        <button className="px-5 py-2 whitespace-nowrap font-medium text-base text-white hover:text-black capitalize transition-colors duration-300 transform bg-none border-2 border-white rounded-3xl hover:bg-white focus:outline-none focus:ring focus:ring-white focus:ring-opacity-80">
                            Log in
                        </button>
                        <button className="px-3 py-3 flex gap-2 items-center font-medium text-black capitalize transition-colors duration-300 transform bg-white rounded-3xl text-base hover:bg-slate-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                            Get Started
                            <MdKeyboardDoubleArrowRight />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden dm-sans">
                        <button 
                            onClick={() => setIsOpen(!isOpen)} 
                            type="button" 
                            className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" 
                            aria-label="toggle menu">
                            {!isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navbar */}
                {isOpen && (
                    <div className="flex flex-col dm-sans gap-4 mt-4 dm-sans text-white capitalize bg-gray-800 px-6 py-4 rounded-lg md:hidden">
                        <a href="#" className="transition-colors duration-300 transform hover:text-slate-300 dark:hover:text-gray-200">Features</a>
                        <a href="#" className="flex items-center gap-1 transition-colors duration-300 transform hover:text-slate-300 dark:hover:text-gray-200">Providers <MdOutlineKeyboardArrowDown /></a>
                        <a href="#" className="transition-colors duration-300 transform hover:text-slate-300 dark:hover:text-gray-200">Blog</a>
                        <a href="#" className="transition-colors duration-300 transform hover:text-slate-300 dark:hover:text-gray-200">Pricing</a>
                        <a href="#" className="transition-colors duration-300 transform hover:text-slate-300 dark:hover:text-gray-200">FAQ</a>

                        <div className="flex flex-col gap-4">
                            <button className="px-5 py-2 whitespace-nowrap font-medium text-base text-white hover:text-black capitalize transition-colors duration-300 transform bg-none border border-white rounded-3xl hover:bg-white focus:outline-none focus:ring focus:ring-white focus:ring-opacity-80">
                                Log in
                            </button>
                            <button className="px-3 py-3 flex gap-2  text-center items-center  justify-center font-medium text-black capitalize transition-colors duration-300 transform bg-white rounded-3xl text-base hover:bg-slate-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                Get Started
                                <MdKeyboardDoubleArrowRight />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
