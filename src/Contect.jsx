import React from 'react'
import { motion } from "motion/react"
import { useInView } from 'react-intersection-observer'
import {
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaFacebook,
    FaLinkedin,
    FaInstagram,
    FaTwitter
} from "react-icons/fa";

const Contect = () => {

    const year = new Date().getFullYear()

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    return (
        <div id='contact'>
            <div className='max-w-7xl px-4 sm:px-6 lg:p-8 text-center py-12'>
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: -100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className='text-white text-4xl font-bold '>Let's discuess<span className='text-purple-500'>You'r Project</span></motion.h2>
                <motion.p
                    ref={ref}
                    initial={{ opacity: 0, y: -100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className='text-slate-400 text-center mt-2'>Have an idea or project in mind? I'm always open to new opportunities and collaborations. Let's connect and bring your vision to life!</motion.p>
            </div>
            <div className='max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-white'>
                <div className='space-y-6'>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className='flex items-center space-x-4'>
                        <div className='bg-purple-500 p-4 rounded-full'>
                            <FaPhone />
                        </div>
                        <div>
                            <p className='text-lg text-purple-500 font-medium'>Call Me</p>
                            <p>+91 6382493680</p>
                        </div>
                    </motion.div>

                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className='flex items-center space-x-4'>
                        <div className='bg-purple-500 p-4 rounded-full'>
                            <FaEnvelope />
                        </div>
                        <div>
                            <p className='text-lg text-purple-500 font-medium'>Email</p>
                            <p>muneeswarann27@email.com</p>
                        </div>
                    </motion.div>

                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className='flex items-center space-x-4'>
                        <div className='bg-purple-500 p-4 rounded-full'>
                            <FaMapMarkerAlt />
                        </div>
                        <div>
                            <p className='text-lg text-purple-500 font-medium'>Address</p>
                            <p>pudukottai,viralimali</p>
                        </div>
                    </motion.div>

                </div>
                <motion.form
                    ref={ref}
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className='text-white space-y-4'>
                    <div className='grid gried-cols-1 sm:grid-cols-2 gap-4'>
                        <input
                            className='border border-purple-500 p-4 rounded-md w-full'
                            type='text' placeholder='Full name' />
                        <input
                            className='border border-purple-500 p-4 rounded-md w-full'
                            type='email' placeholder="You'r Email" />
                    </div>
                    <div className='grid gried-cols-1 sm:grid-cols-2 gap-4'>
                        <input
                            className='border border-purple-500 p-4 rounded-md w-full'
                            type='text' placeholder='Phone Number' />
                        <input
                            className='border border-purple-500 p-4 rounded-md w-full'
                            type='text' placeholder="Budget" />
                    </div>
                    <textarea
                        className='border border-purple-500 p-4 rounded-md w-full'
                        placeholder='Message'></textarea>
                    <button type='submit' className='bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600 transition duration-200 cursor-pointer'>Submit</button>
                </motion.form>
            </div>
            {/* Fotter */}
            <motion.div
                ref={ref}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 }}
                className="text-white mt-12 flex flex-col md:flex-row justify-between items-center border-t-2 border-purple-500 p-6 space-y-4 md:space-y-0"
            >
                <p className="text-sm md:text-base">© {year} Copyright Reserved</p>
                <p className="text-sm md:text-base font-semibold">Munees</p>
                <div className="flex justify-center space-x-4">
                    <a href="#" aria-label="Facebook" className="hover:text-purple-500">
                        <FaFacebook className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/muneeswaran-n-447a93339/" aria-label="LinkedIn" className="hover:text-purple-500">
                        <FaLinkedin className="w-6 h-6" />
                    </a>
                    <a href="#" aria-label="Twitter" className="hover:text-purple-500">
                        <FaTwitter className="w-6 h-6" />
                    </a>
                    <a href="#" aria-label="Instagram" className="hover:text-purple-500">
                        <FaInstagram className="w-6 h-6" />
                    </a>
                </div>
            </motion.div>
        </div>
    )
}

export default Contect