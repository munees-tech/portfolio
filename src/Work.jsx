import twitterclone from "./assets/twitter.png";
import chatApp from "./assets/chat.png"
import ECommers from "./assets/ecommers.png"
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Twitter-Clone",
      image: twitterclone,
      description: "A minimalist Twitter/X clone built using React, Node.js, Express, and MongoDB. It supports user authentication, posting tweets, likes, and real-time updates. Designed with a focus on performance and a smooth UI using Tailwind CSS.",
      link: "https://twitter-clone-1-933p.onrender.com/",
    },
    {
      id: 2,
      title: "Chat-App",
      image: chatApp,
      description: "A real-time chat application built with React, Node.js, Express, Socket.io, and MongoDB. Features include user authentication using JWT, secure messaging, and a responsive UI. Perfect for instant communication with a smooth and modern interface.",
      link: "https://chat-app-67u0.onrender.com/",
    },
    {
      id:3,
      title: "E-Commers",
      image: ECommers,
      description : "A modern E-commerce web application built with React, Node.js, Express, and MongoDB. Features include user authentication using JWT, secure checkout with RazorPay integration, dynamic product management, cart functionality, coupon system, and a responsive user interface. Designed for seamless online shopping with a clean and intuitive experience.",
      link : "https://e-commers-5ayz.onrender.com/"
    }
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="py-12" id="work">
      <div className="text-white max-w-7xl mx-auto sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: 0.3,
            duration: 0.5,
          }}
          className="text-4xl text-center font-bold underline mb-12 decoration-purple-500"
        >
          Work
        </motion.h2>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
          className="mb-12 text-center text-gray-400"
        >
         I love building full-stack web applications that are fast, modern, and user-friendly. Here are some of my recent projects that showcase my skills in React, Node.js, and MongoDB.👇
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: index * 0.4,
                duration: 0.5,
              }}
              key={project.id}
              className="bg-gray-800 p-4 rounded-lg shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-100 h-60 object-cover rounded-lg"
              />
              <div className="mt-4">
                <a
                  href={project.link}
                  className="text-lg font-semibold text-purple-500 hover:underline text-center"
                >
                  {project.title}
                </a>
                <p className="text-gray-400 mt-2 text-center">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;