import React from 'react';
import profileImg from "./assets/boy2.png";
import { motion } from "motion/react"

const Hero = () => {
  return (
    <section className='text-white py-10' id='home'>
      {/* Profile Image */}
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.5
        }}
        src={profileImg}
        alt="Profile of Muneeswaran"
       className="w-64 h-64 object-cover rounded-full mx-auto"
      />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.5
        }}
        className='container text-center mx-auto px-4'>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 0.5
          }}
          className='text-4xl md:text-5xl mt-10 flex flex-col justify-center gap-4 text-purple-500 font-bold'>
          Muneeswaran
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1,
              duration: 0.5
            }}
          >Software Engineer</motion.span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 0.5
          }}
          className='mt-4 text-lg md:text-xl font-medium'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.
        </motion.p>
      </motion.div>

      {/* Action Buttons */}
      <div className='flex justify-center mt-10 space-x-4'>
        <motion.button
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 1,
            duration: 0.5
          }}
          className='bg-purple-700 hover:bg-purple-600 px-6 py-3 text-lg font-medium cursor-pointer rounded-full transition duration-300'>
          Hire Me
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 1,
            duration: 0.5
          }}
          className='border border-white px-6 py-3 text-lg font-medium rounded-full hover:bg-white hover:text-purple-700 transition duration-300 cursor-pointer'>
          My Story
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;