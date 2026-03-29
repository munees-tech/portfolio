import twitterclone from "./assets/twitter.png";
import chatApp from "./assets/chat.png";
import ECommers from "./assets/ecommers.png";
import TaskManager from "./assets/Taskmanager.png"
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Twitter Clone",
      image: twitterclone,
      stack: "React • Node.js • Express • MongoDB",
      description:
        "A full-stack social media application with authentication, tweet posting, likes, and a clean responsive interface inspired by Twitter/X.",
      link: "https://twitter-clone-1-933p.onrender.com/",
    },
    {
      id: 2,
      title: "Chat App",
      image: chatApp,
      stack: "React • Socket.io • Node.js • MongoDB",
      description:
        "A real-time messaging platform with JWT authentication, secure communication, and a modern UI designed for fast and smooth conversations.",
      link: "https://chat-app-67u0.onrender.com/",
    },
    {
      id: 3,
      title: "E-Commerce App",
      image: ECommers,
      stack: "React • Express • MongoDB • Razorpay",
      description:
        "A modern e-commerce application featuring secure login, cart management, online payments, coupon support, and a seamless shopping experience.",
      link: "https://e-commers-1-7o5j.onrender.com/",
    },
    {
      id: 4,
      title: "Task-Manager",
      image: TaskManager,
      stack: "React • Express • MongoDB •TypeScript",
      description:
        "Built a MERN + TypeScriptbased task management application to efficiently create, update, and track tasks with a clean and responsive UI.",
      link: "https://taskmanager27052006.netlify.app/",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-16" id="work" ref={ref}>
      <div className="text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.4,
          }}
          className="text-4xl text-center font-bold underline mb-6 decoration-purple-500"
        >
          Work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: 0.08,
            duration: 0.4,
          }}
          className="mb-12 max-w-3xl mx-auto text-center text-gray-400"
        >
          A selection of projects that reflect my experience building responsive
          full-stack applications with modern frontend design and practical
          backend features.
        </motion.p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.12 + index * 0.08,
                duration: 0.35,
              }}
              key={project.id}
              className="bg-[#1c1a2b] rounded-2xl overflow-hidden border border-gray-700 shadow-lg hover:shadow-purple-900/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-5">
                <p className="text-sm text-purple-400 font-medium mb-2">
                  {project.stack}
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.link}
                  className="text-xl font-semibold text-white hover:text-purple-400 transition-colors duration-200"
                >
                  {project.title}
                </a>
                <p className="text-gray-400 mt-3 leading-7 text-sm sm:text-base">
                  {project.description}
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.link}
                  className="inline-block mt-5 text-purple-400 font-medium hover:text-purple-300 transition-colors duration-200"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
