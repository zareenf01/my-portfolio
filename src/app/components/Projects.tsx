import React from "react";
import { motion } from "framer-motion";
import { data } from "./ProjectData";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

function Projects() {
  // Function to truncate text to approximately 4 lines (adjust character limit as needed)
  const truncateDescription = (text: string, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  return (
    <div className="mt-28 px-4 sm:px-6 lg:px-8 max-w-7xl -mx-5" id="projects">
      <motion.div
        className="text-center mb-16"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
          Projects
        </h2>
        <div className="w-20 mx-auto h-2 bg-green-500 rounded-full rotate-6"></div>
        <div className="w-24 mx-auto h-2 bg-blue-500 rounded-full rotate-6"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10">
        {data.map((project, index) => (
          <motion.div
            key={index}
            className="group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            variants={{
              visible: { opacity: 1, y: 0, scale: 1 },
              hidden: { opacity: 0, y: 30, scale: 0.95 },
            }}
          >
            <div className="bg-gradient-to-br from-gray-900/80 via-black/60 to-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden  border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 group-hover:scale-[1.02] h-[450px] flex flex-col">
              {/* Image Container with Overlay */}
              <div className="relative w-full h-48 overflow-hidden flex-shrink-0">
                <Image
                  src={project.image}
                  alt={project.projectName}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Bottom shadow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Hover overlay with links */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Link
                    href={project.projectExternalLinks.github}
                    className="p-3 bg-purple-500/20 backdrop-blur-sm rounded-full hover:bg-purple-400/30 border border-purple-400/30 hover:border-purple-300/50 transition-all duration-300 hover:scale-110"
                  >
                    <FiGithub size={20} className="text-white" />
                  </Link>
                  <Link
                    href={project.projectLink}
                    className="p-3 bg-pink-500/20 backdrop-blur-sm rounded-full hover:bg-pink-400/30 border border-pink-400/30 hover:border-pink-300/50 transition-all duration-300 hover:scale-110"
                  >
                    <FiExternalLink size={20} className="text-white" />
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 transition-all duration-300 line-clamp-1 flex-shrink-0">
                    {project.projectName}
                  </h3>
                  <div className="flex gap-2 ml-2 opacity-70 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
                    <Link
                      href={project.projectExternalLinks.github}
                      className="p-1 hover:text-purple-400 transition-colors duration-300"
                    >
                      <FiGithub size={18} className="text-gray-300" />
                    </Link>
                    <Link
                      href={project.projectLink}
                      className="p-1 hover:text-pink-400 transition-colors duration-300"
                    >
                      <FiExternalLink size={18} className="text-gray-300" />
                    </Link>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                  {truncateDescription(project.projectDescription)}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.projectTech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-black/40 border border-purple-500/30 text-gray-300 rounded-lg text-xs font-medium hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 hover:border-purple-400/50 hover:text-white transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
