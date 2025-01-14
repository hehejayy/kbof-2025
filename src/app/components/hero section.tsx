'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import logo from '../assets/logo.png';

const HeroSection = () => {
  useEffect(() => {
    document.fonts.load('1em Poppins');
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#D9D9D9] font-poppins px-4">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 md:mb-0 md:mr-12"
      >
        <Image src={logo} alt="Tree Logo" width={400} height={400} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <div className="text-center">
          <p className="text-lg md:text-2xl font-semibold text-[#6A7665] md:text-middle">we are</p>
          <h1 className="text-4xl md:text-6xl font-bold text-[#65637C] tracking-widest mt-2">A R I N D A M A</h1>
        </div>
        <div className="relative mt-8">
          <button
            type="button"
            onClick={() => document.getElementById('about-us').scrollIntoView({ behavior: 'smooth' })}
            className="text-black bg-[#9EAFA0] hover:bg-[#8E9F90] focus:ring-4 focus:outline-none focus:ring-[#9EAFA0] font-medium rounded-full text-sm px-7   py-2.5 text-center inline-flex items-center shadow-[4px_4px_8px_rgba(0,0,0,1)] transition duration-300 border-2 border-black"
          >
            Learn More
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 1v8m0 0l4-4m-4 4L3 5"/>
            </svg>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;

