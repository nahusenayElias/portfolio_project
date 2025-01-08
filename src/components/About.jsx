// src/components/About.jsx
import { motion } from 'framer-motion';
import {
  FaCode,
  FaGraduationCap,
  FaBrain,
  FaLaptopCode
} from 'react-icons/fa';

const About = () => {
  const professionalSkills = [
    "Full Stack Web Development",
    "React.js Specialist",
    "Tailwind CSS Expert",
    "Shadcn UI Implementation",
    "JavaScript Enthusiast",
    "PHP Developer",
    "Drupal Development"
  ];

  const professionalSummary = `
    Innovative Full Stack Web Developer with a unique blend of technical expertise
    and behavioral sciences background. Combining advanced programming skills with
    deep insights into human behavior to create intuitive, user-centric digital solutions.
  `;

  return (
    <section id="about" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Professional Image */}
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-600">
                <img
                  src="/path-to-professional-image.jpg"
                  alt="Professional Headshot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Professional Description */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Full Stack Web Developer & Behavioral Scientist
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {professionalSummary}
              </p>

              <div className="mb-6">
                <h4 className="font-bold mb-3">Professional Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {professionalSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <FaGraduationCap className="mr-3 text-blue-600" size={24} />
                  <span>Master's in Behavioral Sciences</span>
                </div>
                <div className="flex items-center">
                  <FaLaptopCode className="mr-3 text-blue-600" size={24} />
                  <span>Full Stack Web Development</span>
                </div>
                <div className="flex items-center">
                  <FaBrain className="mr-3 text-blue-600" size={24} />
                  <span>User Experience Design</span>
                </div>
                <div className="flex items-center">
                  <FaCode className="mr-3 text-blue-600" size={24} />
                  <span>Innovative Problem Solving</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
