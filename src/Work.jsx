import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import React from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Twitter-Clone",
      image: project1,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam incidunt.",
      link: "#",
    },
    {
      id: 2,
      title: "Chat-App",
      image: project2,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam incidunt.",
      link: "#",
    },
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam incidunt, enim doloremque
          ipsum dolore eligendi, officiis, facilis nobis recusandae expedita ut aperiam et nesciunt
          quo molestias voluptates optio tenetur asperiores!
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
                className="w-full h-60 object-cover rounded-lg"
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