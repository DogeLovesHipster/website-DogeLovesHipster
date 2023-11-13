import React from 'react';
import { contact } from "../constants";

const Footer = () => {
  return (
    <footer className='sm:px-16 px-6 sm:py-16 py-10 max-x-7xl mx-auto relative z-0'>
      <div className="h-[80px] rounded-2xl bg-black-100  w-full flex flex-wrap items-center justify-center gap-5">
        <span className="text-[#dfd9ff] font-medium lg:text-[25px] sm:text-[20px] xs:text-[20px] text-[16px] lg:leading-[40px]">Contact:</span>
        <div className="flex justify-center items-center space-x-4 ">
          {contact.map((item) => (
            <a key={item.name} href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.icon} alt={item.name} className="h-8 w-8" />
            </a>
          ))}
        </div>
        <div className="text-center">
          <p className="font-bold text-blue-300">Phone: 541-414-8447</p>
          <p className="text-blue-200">Built by Sergio Mendoza</p>
        </div>
      </div>
    </footer>
  );
};


export default Footer;