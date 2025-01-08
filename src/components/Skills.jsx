import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws
} from 'react-icons/fa';

const skillsData = [
  {
    icon: <FaReact size={48} className="text-blue-500" />,
    name: 'React.js',
    level: 'Advanced'
  },
  {
    icon: <FaNodeJs size={48} className="text-green-500" />,
    name: 'Node.js',
    level: 'Intermediate'
  },
  // Add more skills
];

const Skills = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          My Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg text-center"
            >
              {skill.icon}
              <h3 className="mt-4 text-xl font-semibold">
                {skill.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {skill.level}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
