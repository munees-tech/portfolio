import React from "react"
import { FaAppStore } from "react-icons/fa"
import {motion} from "motion/react"
import { useInView } from 'react-intersection-observer';


const Service = () => {
  const serviceData = [
    {
      title: "Web Development",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "web Development",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "web development",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    }
  ]

  const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2
    });

  return (
    <div className='text-white' id="services">
      <motion.div
      ref={ref} 
      initial={{opacity:0,y:50}}
      animate={inView ? {opacity:1,y:0} : {}}
      transition={{
        duration:0.5
      }}
      className='container px-4 mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl underline decoration-purple-800 mb-8'>Services</h2>
        <p className="mb-12 text-gray-400">
          ducimus libero qui ipsum sint doloremque ullam dolorum molestias
          mollitia praesentium reiciendis.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service,index) => (
            <motion.div
            ref={ref} 
            initial={{opacity:0,scale:0.5}}
            animate={inView ? {opacity:1,scale:1} : {opacity:0,scale:0.5}}
            transition={{
              delay:index*0.2,
              duration:0.5
            }} 
            className="bg-[#1c1a2b] rounded-lg p-6 text-center hover:shadow-lg hover:shadow-purple-500 transition-shadow duration-300"
            key={index}>
              <FaAppStore className="text-4xl text-purple-500 sm:text-5xl lg:text-6xl mb-4 mx-auto"/>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">{service.title}</h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Service