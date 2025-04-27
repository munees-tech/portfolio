import React from 'react';
import AboutImg from "./assets/boy2.png";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const About = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <div className='text-white py-20 bg-gray-900'>
      {/* About Header */}
      <div className='container mx-auto px-6 text-center'>
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className='text-4xl md:text-5xl font-mono underline decoration-purple-500 underline-offset-8 mb-6'
        >
          About Me
        </motion.h2>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className='mb-12 text-gray-400 max-w-2xl mx-auto leading-relaxed'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quia.
        </motion.p>
      </div>

      {/* About Content */}
      <div className='flex flex-col md:flex-row justify-center items-center px-6'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className='mb-10 md:mb-0 md:mr-12 flex justify-center'
        >
          <img
            src={AboutImg}
            alt="About Muneeswaran"
            className='w-2/3 sm:w-3/4 md:w-10/12 rounded-2xl shadow-lg'
          />
        </motion.div>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className='md:w-1/2 text-gray-400 text-base lg:text-lg md:text-xl leading-relaxed'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi repellat nulla eligendi vel vero magnam animi, ipsum possimus odio, similique unde earum at ex nostrum! Eligendi quae earum magni ipsum!
        </motion.p>
      </div>

      {/* Stats Section */}
      <div className='flex flex-col md:flex-row justify-around items-center mt-16 space-y-10 md:space-y-0'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.6, duration: 0.5 }}
          className='text-center'
        >
          <h3 className='text-5xl md:text-7xl font-bold text-purple-500 mb-4'>3+</h3>
          <motion.p
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.6, duration: 0.5 }}
            className='text-sm sm:text-base text-gray-300'
          >
            MERN Projects
          </motion.p>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.9, duration: 0.5 }}
          className='text-center'
        >
          <h3 className='text-5xl md:text-7xl font-bold text-purple-500 mb-4'>20+</h3>
          <motion.p
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.9, duration: 0.5 }}
            className='text-sm sm:text-base text-gray-300'
          >
            MERN Projects I have made
          </motion.p>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.8, duration: 0.5 }}
          className='text-center'
        >
          <h3 className='text-5xl md:text-7xl font-bold text-purple-500 mb-4'>30+</h3>
          <motion.p
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.8, duration: 0.5 }}
            className='text-sm sm:text-base text-gray-300'
          >
            Years of Experience
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
