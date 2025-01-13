import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const projectsData = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
    image: "/path-to-project-image-1.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubLink: "https://github.com/yourusername/project1",
    liveLink: "https://project1-demo.com"
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather app using OpenWeatherMap API and React.",
    image: "/path-to-project-image-2.jpg",
    technologies: ["React", "API Integration", "CSS3"],
    githubLink: "https://github.com/yourusername/project2",
    liveLink: "https://project2-demo.com"
  },
  // Add more projects as needed
];

const Projects = ({darkMode}) => {
    return (
      <section className={`py-16 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}
    //   className="py-16 bg-gray-100 dark:bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <LazyLoadImage
                  src={project.image}
                  alt={project.title}
                  effect="blur"
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/path-to-fallback-image.jpg'; // Provide a fallback image
                  }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-white hover:text-blue-600">
                      <FaGithub size={24} />
                    </a>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-white hover:text-blue-600">
                      <FaExternalLinkAlt size={24} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default Projects;
