import React from 'react';
import Image from "next/image";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
const Footerlast = () => {
    return (
        <div className=" ">
        <footer className="px-4 divide-y divide-[#FFFFFF1F] bg-black  dark:bg-gray-100 text-gray-100 dark:text-gray-800">
<div className="container flex flex-col justify-between pt-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
    <div className="lg:w-2/3">
        <div rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
        <Image 
                src="/image/Postiz.png" 
                alt="Right Top Image" 
                width={154} 
                height={50} 
                className=''
            />
          
        </div>
       <div className='flex justify-center space-x-5 lg:justify-start text-center lg:text-left '>
        <p className='mt-4 dm-sans text-[#D1D1D1] text-lg'>Open-source social media scheduling tool</p>
       </div>
<div className="lg:flex justify-start space-x-3 mt-3 hidden ">
<a rel="noopener noreferrer" href="https://discord.com/" title="Discord" className="flex items-center px-3 py-4 rounded-full bg-[#FFFFFF33]">
    <FaDiscord className='text-white w-[24px] h-[16px]' />
    </a>
    <a rel="noopener noreferrer" href="https://www.youtube.com/" title="Youtube" className="flex items-center px-3 py-4  rounded-full bg-[#FFFFFF33]">
    <FaYoutube className='text-white w-[24px] h-[16px]' />
    </a>
    <a rel="noopener noreferrer" href="https://www.linkedin.com/" title="Linkdin" className="flex items-center px-3 py-4  rounded-full bg-[#FFFFFF33]">
    <FaLinkedinIn className='text-white w-[24px] h-[16px]' />
    </a>
    <a rel="noopener noreferrer"  href="https://x.com/" title="Twitter" className="flex items-center px-3 py-4  rounded-full bg-[#FFFFFF33]">
    <FaXTwitter className='text-white w-[24px] h-[16px]' />
    </a>
</div>


    </div>
    <div className="grid grid-cols-1  text-sm gap-x-4 gap-y-8 lg:w-2/3 lg:grid-cols-3  pb-4">
        <div className="space-y-3 text-center lg:text-left mb-4 lg:mb-0">
            <h3 className="tracking-wide uppercase text-base font-bold font-inter text-white dark:text-gray-900 dm-sans">Free Tools</h3>
            <ul className="space-y-3">
                <li>
                    <a rel="noopener noreferrer mb-2 font-inter font-bold text-lg dm-sans" href="#mens">Free Marketing Tools</a>
                </li>
                <li>
                    <a rel="noopener noreferrer mb-2 font-inter font-normal text-lg dm-sans" href="#womens">List your agency</a>
                </li>
              
                
            </ul>
        </div>
        <div className="space-y-3 text-center lg:text-left mb-4 lg:mb-0">
            <h3 className="tracking-wide  uppercase  font-bold font-inter dm-sans text-lg text-white dark:text-gray-900">Resources</h3>
            <ul className="space-y-1">
                <li>
                    <a rel="noopener noreferrer  mb-2 font-inter font-normal text-lg dm-sans" href="#home">Blog</a>
                </li>
                <li>
                    <a rel="noopener noreferrer  mb-2 font-inter font-normal text-lg dm-sans" href="#about">Docs</a>
                </li>
                <li>
                    <a rel="noopener noreferrer  mb-2 font-inter font-normal text-lg dm-sans" href="#about">Channels</a>
                </li>
                <li>
                    <a rel="noopener noreferrer  mb-2 font-inter font-normal text-lg dm-sans" href="#about">Roadmap</a>
                </li>
                <li>
                    <a rel="noopener noreferrer  mb-2 font-inter font-normal text-lg dm-sans" href="#about">Discord</a>
                </li>
                <li>
                    <a rel="noopener noreferrer  mb-2 font-inter font-normal text-lg dm-sans" href="#about">Alternatives</a>
                </li>
                <li>
                    <a rel="noopener noreferrer  mb-2 font-inter font-normal text-lg dm-sans" href="#about">Comparisons</a>
                </li>
            </ul>
        </div>
        <div className="space-y-3 text-center lg:text-left mb-4 lg:mb-0">
            <h3 className="uppercase text-lg font-bold font-inter text-white dm-sans dark:text-gray-900">Company</h3>
            <ul className="space-y-1">
                <li>
                    <a rel="noopener noreferrer  mb-2 font-inter font-normal text-lg dm-sans" href="#">Pricing</a>
                </li>
                <li>
                    <a rel="noopener noreferrer  mb-2 font-inter font-normal text-lg dm-sans" href="#">Terms of service</a>
                </li>
                <li>
                    <a rel="noopener noreferrer  mb-2 font-inter font-normal text-lg dm-sans" href="#">Privacy Policy</a>
                </li>
            </ul>
        </div>
      
    </div>
</div>
<div className="py-6 container mx-auto text-sm text-center lg:text-left text-[##FFFFFF1F
] dark:text-gray-600">
<div className="flex justify-center space-x-3 mt-3 lg:hidden  text-center lg:text-left mb-4 lg:mb-0">
    <a rel="noopener noreferrer" href="https://discord.com/" title="Discord" className="flex items-center px-3 py-4  rounded-full bg-[#FFFFFF33]">
    <FaDiscord className='text-white w-[24px] h-[16px]' />
    </a>
    <a rel="noopener noreferrer" href="https://www.youtube.com/" title="Youtube" className="flex items-center px-3 py-4  rounded-full bg-[#FFFFFF33]">
    <FaYoutube className='text-white w-[24px] h-[16px]' />
    </a>
    <a rel="noopener noreferrer" href="https://www.linkedin.com/" title="Linkdin" className="flex items-center px-3 py-4  rounded-full bg-[#FFFFFF33]">
    <FaLinkedinIn className='text-white w-[24px] h-[16px]' />
    </a>
    <a rel="noopener noreferrer" href="https://x.com/" title="Twitter" className="flex items-center px-3 py-4  rounded-full bg-[#FFFFFF33]">
    <FaXTwitter className='text-white w-[24px] h-[16px]' />
    </a>
</div>
    <div className='flex lg:flex-row flex-col-reverse justify-start items-center gap-2'>
    <p className='dm-sans text-[#D1D1D1] '> © Postiz, 2024. All rights reserved.</p>
    <div className='flex gap-2 items-center justify-center'>
    <p className=' ml-5 text-[#D1D1D1] text-xs dm-sans '> Designed by</p>
   <a href='https://peppermint.id/' className='cursor-pointer'><Image 
                src="/image/frame.png" 
                alt="Left Bottom Image" 
                width={108} 
                height={26} 

            /></a> 
            </div>
    </div>
   

</div>

</footer>
    </div>
    );
};

export default Footerlast;