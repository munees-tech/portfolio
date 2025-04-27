import React, { useState } from 'react';
import { MdMenu } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { motion } from "motion/react"

const Navbar = () => {
  const variants = {
    open: {
      clipPath: "circle(1200px at 43px 43px)",
      transition: { type: "spring", duration:3 }
    },
    closed: {
      clipPath: "circle(25px at 47px 37px)",
      transition: { type: "spring", stiffness: 20, /* damping: 10, */ duration:2}
    }
  };

  const [menu, setMenu] = useState(false);
  const items = [
    { id: 1, text: "Home" },
    { id: 2, text: "Services" },
    { id: 3, text: "About" },
    { id: 4, text: "Contact" }
  ];

  return (
    <div>
      <div className='container mx-auto hidden md:flex justify-between items-center py-6'>
        <div className='font-xl lg:font-2xl font-mono flex items-center gap-1'>
          <div>
            <span className='text-white hover:text-purple-500 hover:duration-200'>Munees</span>
          </div>
        </div>
        <div>
          <ul className='hidden md:flex items-center space-x-4 list-none lg:text-lg md:text-base text-white cursor-pointer'>
            {items.map(({ id, text }) => (
              <li className='hover:text-purple-500 duration-200' key={id}>
                {text}
              </li>
            ))}
          </ul>
        </div>
        <a className='md:text-base lg:text-lg bg-purple-800 hover: duration-300 hover:bg-purple-700 px-1 py-1 rounded-full cursor-pointer'>Download cv</a>
      </div>

      <div className='md:hidden flex justify-between '>
        <motion.div
          variants={variants}
          animate={menu ? "open" : "closed"}
          className='w-2/3 h-screen fixed z-10 text-white bg-gray-900'
          onClick={() => setMenu((prev) => !prev)}
        >
          <div className='px-6 py-6'>
            {menu ? (<IoIosClose size={30} />) : <MdMenu size={28} />}
          </div>
          <div>
            {menu && (
              <div className='flex flex-col justify-center items-center'>
                <ul className='space-y-6 text-white text-lg'>
                  {items.map(({ id, text }) => (
                    <li className='hover:text-purple-500 duration-200 cursor-pointer' key={id}>
                      {text}
                    </li>
                  ))}
                </ul>
                <a className='md:text-base lg:text-lg bg-purple-800 hover:bg-purple-700 hover:duration-200 mt-6 px-1 py-1 rounded-full cursor-pointer'>Download cv</a>
              </div>
            )}
          </div>
        </motion.div>
       {/*  <div className='text-xl font-mono flex items-center gap-2 py-6 px-4'>
          <span>Munees</span>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
