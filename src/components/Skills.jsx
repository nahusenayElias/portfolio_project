import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/SkillsData';

const SkillItem = ({ icon, name, level }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg text-center shadow-md transition-all duration-300"
  >
    {icon}
    <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">{name}</h3>
    <p className="text-gray-600 dark:text-gray-300 mt-2">{level}</p>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          My Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <SkillItem key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;