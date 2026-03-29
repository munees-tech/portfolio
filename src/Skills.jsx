import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiPostman, SiTypescript } from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 />, color: '#e34f26' },
  { name: 'CSS3', icon: <FaCss3Alt />, color: '#264de4' },
  { name: 'JavaScript', icon: <FaJs />, color: '#f7df1e' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178c6' },
  { name: 'React', icon: <FaReact />, color: '#61dafb' },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#8cc84b' },
  { name: 'Express', icon: <SiExpress />, color: '#ffffff' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#4db33d' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38bdf8' },
  { name: 'Git', icon: <FaGitAlt />, color: '#f05032' },
  { name: 'GitHub', icon: <FaGithub />, color: '#ffffff' },
  { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
];

const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="py-20 text-white" id="skills" ref={ref}>
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-mono font-bold underline decoration-purple-500 underline-offset-8 mb-4">
            My Skills
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base leading-relaxed">
            My core stack is MERN + TypeScript, along with the tools I use to build fast and responsive web applications.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.03 * i, duration: 0.3 }}
              whileHover={{ scale: 1.15, y: -5 }}
              className="flex flex-col items-center gap-2 bg-[#1c1a2b] border border-gray-700 hover:border-purple-500 transition-all duration-300 rounded-2xl px-5 py-5 w-24 cursor-default shadow-md hover:shadow-purple-900/30"
            >
              <span style={{ color: skill.color }} className="text-4xl drop-shadow-lg">{skill.icon}</span>
              <span className="text-[11px] text-gray-400 font-medium text-center leading-tight">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
