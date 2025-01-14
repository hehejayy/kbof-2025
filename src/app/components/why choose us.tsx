// src/app/components/why-choose-us.tsx
'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTshirt, faCheckCircle, faUsers } from '@fortawesome/free-solid-svg-icons';

const WhyChooseUs = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <div id="why-choose-us" className="bg-[#D9D9D9] py-16 md:py-20 px-4 flex justify-center">
      <div className="w-full md:w-3/4">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-center mb-6"
          initial="hidden"
          animate={controls}
          variants={titleVariants}
        >
          Why
        </motion.h2>
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-center text-[#65637C] mb-12 md:mb-24"
          initial="hidden"
          animate={controls}
          variants={titleVariants}
        >
          Choose ARINDAMA
        </motion.h2>
        <motion.div
          className="flex flex-col items-center"
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={cardVariants}
        >
          <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-8 w-full">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full md:w-1/2 flex flex-col relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#9EAFA0] rounded-full h-12 w-12 flex items-center justify-center">
                <FontAwesomeIcon icon={faTshirt} className="text-white h-5 w-5" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mt-4 text-center">Expertise in Fashion</h3>
              <p className="text-gray-700 text-sm md:text-base mt-2 text-center">
                We excel in diverse fashion. Our team crafts innovative solutions using cutting-edge tools and frameworks, ensuring your project stays ahead in the tech landscape.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 w-full md:w-1/2 flex flex-col relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#9EAFA0] rounded-full h-12 w-12 flex items-center justify-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-white h-5 w-5" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mt-4 text-center">Proven Success Record</h3>
              <p className="text-gray-700 text-sm md:text-base mt-2 text-center">
                Our track record speaks volumes. With consistent success across industries, we've earned trust from startups to enterprises. Choose us for a partner with a history of client satisfaction and project excellence.
              </p>
            </div>
          </div>
          <div className="mt-12 md:mt-16 flex justify-center w-full">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full md:w-1/2 flex flex-col relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#9EAFA0] rounded-full h-12 w-12 flex items-center justify-center">
                <FontAwesomeIcon icon={faUsers} className="text-white h-5 w-5" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mt-4 text-center">Client-Centric Approach</h3>
              <p className="text-gray-700 text-sm md:text-base mt-2 text-center">
                We prioritize your needs throughout. Transparent communication, regular updates, and deep understanding of your objectives define our approach. Choose us for a partner dedicated to surpassing expectations.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
