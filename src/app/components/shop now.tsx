'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ShopNowCard = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="bg-[#D9D9D9] py-16 flex justify-center">
      <motion.div
        className="bg-gradient-to-r from-[#65637C] to-[#4B4A5A] rounded-lg shadow-lg p-8 md:p-16 flex flex-col md:flex-row justify-between items-center w-full max-w-4xl mx-4"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={cardVariants}
      >
        <div className="text-white text-3xl md:text-5xl font-bold mb-4 md:mb-0">
          Shop Now
        </div>
        <div className="text-white text-center md:text-right">
          <p className="mb-4 text-sm md:text-base">Ready to enhance your digital experience?</p>
          <p className="mb-4 text-sm md:text-base">Reach out to us today</p>
          <button className="border-2 border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-[#65637C] transition">
            See Our Catalogue
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ShopNowCard;
