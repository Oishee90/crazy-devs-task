"use client"
import { useState } from 'react';
import Image from "next/image";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-none shadow dark:bg-gray-800">
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex lg:items-center lg:gap-52">
                    <div className="flex items-center justify-between">
                    <div className="w-[100px] ">
  <Image 
    src="/image/Logo.png" 
    alt="Descriptive text" 
    width={300} 
    height={500} 
  />
</div>

                       
                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
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

                    <div 
                        className={`absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-none  dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between   ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'}`}
                    >
                        <div className="flex flex-col text-white capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
                            <a href="#" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-slate-300 dark:hover:text-gray-200">Features</a>
                            <a href="#" className="mt-2 flex items-center gap-1 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-slate-300 dark:hover:text-gray-200">Providers <MdOutlineKeyboardArrowDown /></a>
                            <a href="#" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-slate-300 dark:hover:text-gray-200">Blog</a>
                            <a href="#" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-slate-300 dark:hover:text-gray-200">Pricing</a>
                            <a href="#" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-slate-300 dark:hover:text-gray-200">FAQ</a>

                          
                        </div>
                        <div className="flex items-center gap-5">
                        <div> <button className="px-5 py-2  font-medium text-base text-white hover:text-black capitalize transition-colors duration-300 transform bg-noner  border border-white rounded-3xl hover:bg-white focus:outline-none focus:ring focus:ring-white focus:ring-opacity-80">
            Log in
        </button></div>
        <div> <button className="px-3 py-3 flex gap-2  items-center font-medium  text-black capitalize transition-colors duration-300 transform bg-white  rounded-3xl text-base  hover:bg-slate-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
           Get Started
            <MdKeyboardDoubleArrowRight />
        </button></div>
                    </div>
                    </div>
                   
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
