import React from 'react';
import AboutImg from "./assets/munees.png";
import { motion } from "motion/react";
import { useInView } from 'react-intersection-observer';

const About = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <div className='text-white py-20' id='about' ref={ref}>
      <div className='container mx-auto px-6 text-center'>
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className='text-4xl md:text-5xl font-mono underline decoration-purple-500 underline-offset-8 mb-6'
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.08, duration: 0.45 }}
          className='mb-12 text-gray-400 max-w-2xl mx-auto leading-relaxed'
        >
          I&apos;m a passionate and motivated fresher who is currently focused on full-stack development using the MERN stack and TypeScript. I enjoy learning by building real-world projects and constantly improving my skills through hands-on experience.
        </motion.p>
      </div>

      <div className='flex flex-col md:flex-row justify-center items-center px-6'>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.12, duration: 0.45 }}
          className='mb-10 md:mb-0 md:mr-12 flex justify-center'
        >
          <img
            src={AboutImg}
            alt="About Muneeswaran"
            className="w-64 h-64 object-cover rounded-full"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.18, duration: 0.45 }}
          className='md:w-1/2 text-gray-400 text-base lg:text-lg md:text-xl leading-relaxed'
        >
          I started my web development journey recently and have built multiple frontend and full-stack projects using technologies like React, Node.js, Express, MongoDB, and TypeScript. I&apos;m always eager to learn new things and excited to kickstart my career as a developer.
        </motion.p>
      </div>

      <div className='flex flex-col md:flex-row justify-around items-center mt-16 space-y-10 md:space-y-0'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.18, duration: 0.4 }}
          className='text-center'
        >
          <h3 className='text-5xl md:text-7xl font-bold text-purple-500 mb-4'>4+
          </h3>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.22, duration: 0.4 }}
            className='text-sm sm:text-base text-gray-300'
          >
            MERN Projects I have Made
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.24, duration: 0.4 }}
          className='text-center'
        >
          <h3 className='text-5xl md:text-7xl font-bold text-purple-500 mb-4'>10+</h3>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.28, duration: 0.4 }}
            className='text-sm sm:text-base text-gray-300'
          >
            JavaScript & Frontend Projects
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.4 }}
          className='text-center'
        >
          <h3 className='text-5xl md:text-7xl font-bold text-purple-500 mb-4'>1+</h3>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.34, duration: 0.4 }}
            className='text-sm sm:text-base text-gray-300'
          >
            Year of Learning
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
