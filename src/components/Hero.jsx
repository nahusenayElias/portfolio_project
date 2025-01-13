import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const Hero = ({ darkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div variants={itemVariants} className="space-y-6">
          <motion.h1
            variants={itemVariants}
            className={`text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}
          >
            Hi, I'm Elias Hagos
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className={`text-3xl ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
            Passionate about creating innovative web solutions and crafting
            exceptional digital experiences.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex space-x-4"
          >
            <button
              className={`px-6 py-3 rounded-lg flex items-center space-x-2 transition ${
                darkMode
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              <FaDownload />
              <span>Download CV</span>
            </button>

            <button
              className={`px-6 py-3 rounded-lg transition ${
                darkMode
                  ? 'border border-blue-400 text-blue-400 hover:bg-blue-900'
                  : 'border border-blue-600 text-blue-600 hover:bg-blue-50'
              }`}
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-blue-600">
            <img
              src="/src/assets/IMG_6077.PNG"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
