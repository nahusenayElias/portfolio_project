import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const Hero = () => {
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
      className="min-h-screen flex items-center bg-gray-100 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <motion.div variants={itemVariants} className="space-y-6">
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-bold text-gray-800 dark:text-white"
          >
            Hi, I'm Elias Hagos
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-3xl text-blue-600 dark:text-blue-400"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-300 text-lg"
          >
            Passionate about creating innovative web solutions and crafting
            exceptional digital experiences.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex space-x-4"
          >
            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg
              flex items-center space-x-2 hover:bg-blue-700 transition"
            >
              <FaDownload />
              <span>Download CV</span>
            </button>

            <button
              className="border border-blue-600 text-blue-600
              px-6 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        {/* Right Content - Profile Image */}
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
