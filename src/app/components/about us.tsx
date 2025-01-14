// src/app/components/about-us.tsx
'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faFutbol } from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }, // Extended duration
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }, // Extended duration
  };

  return (
    <div id="about-us" className="bg-[#D9D9D9] py-16 md:py-20 px-4 flex justify-center">
      <div className="w-full md:w-3/4">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-center mb-12 md:mb-24"
          initial="hidden"
          animate={controls}
          variants={titleVariants}
        >
          Our Core Values
        </motion.h2>
        <motion.div
          className="flex flex-col md:flex-row justify-center items-stretch space-y-12 md:space-y-0 md:space-x-8"
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={cardVariants}
        >
          <div className="bg-white rounded-lg shadow-lg p-8 w-full md:w-1/2 flex flex-col relative">
            <div className="absolute -top-6 left-8 bg-[#9EAFA0] rounded-full h-12 w-12 flex items-center justify-center">
              <FontAwesomeIcon icon={faEye} className="text-white h-5 w-5" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mt-6">Our Vision</h3>
            <p className="text-gray-700 text-sm md:text-base mt-2">
              Arindama is a leading provider of innovative technology solutions for businesses worldwide. With a strong focus on cutting-edge technologies, we partner with our clients to harness the power of digital transformation to drive growth and stay ahead in today’s competitive landscape.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 w-full md:w-1/2 flex flex-col relative">
            <div className="absolute -top-6 left-8 bg-[#9EAFA0] rounded-full h-12 w-12 flex items-center justify-center">
              <FontAwesomeIcon icon={faFutbol} className="text-white h-5 w-5" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mt-6">Our Mission</h3>
            <p className="text-gray-700 text-sm md:text-base mt-2">
              At Arindama, our mission is to empower businesses with transformative technology solutions that enhance efficiency, productivity, and profitability. We strive to be a trusted partner for our clients, delivering exceptional values through innovations, expertise, and unparalleled customer service.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
