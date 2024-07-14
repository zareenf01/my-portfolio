import React, { useState, useEffect } from "react";
import ProjectsMob from "./ProjectMob";
import { ProjectHover } from "./ui/ProjectHover";
import { motion } from "framer-motion";
import { MernStack, data } from "./ProjectData";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { cn } from "../utils/cn";

function Projects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 1100);
    };

    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);
  return (
    <div className="mt-28 p-5 sm:p-0">
      <motion.h2
        className="text-white text-4xl font-semibold text-center rotate-6"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.6 }}
      >
        Projects
        <div className="w-20 mx-auto h-2 bg-green-500 rounded-full rotate-6"></div>
        <div className="w-24 mx-auto h-2 bg-blue-500 rounded-full rotate-6"></div>
      </motion.h2>

      {isMobile ? (
        <ProjectsMob />
      ) : (
        <>
          <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 mt-16">
            {data.map((project, index) => {
              return (
                <motion.div
                  key={index}
                  className={cn(
                    "p-2 rounded-lg mt-16 w-full h-full cursor-pointer space-y-5"
                  )}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  variants={{
                    visible: { opacity: 1, y: -50 },
                    hidden: { opacity: 0, y: 0 },
                  }}
                >
                  <ProjectHover
                    imageUrl={project.image}
                    className="mx-3 w-full h-4/5 "
                  >
                    <h1 className="text-white font-bold flex items-center">
                      {project.projectName}
                      <Link
                        href={project.projectExternalLinks.github}
                        className="  ml-3"
                      >
                        <span className="p-1">
                          <FiGithub size={25} />
                        </span>
                      </Link>
                      <Link href={project.projectLink} className="ml-5">
                        <span className="p-1">
                          <FiExternalLink size={25} />
                        </span>
                      </Link>
                    </h1>
                    <div className="flex items-center -mt-3 gap-2">
                      {project.projectTech.map((tech, idx) => (
                        <h3 key={idx} className="text-[#a1a0a0] ">
                          {tech}
                        </h3>
                      ))}
                    </div>
                  </ProjectHover>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-10">
            <h2 className="text-white text-3xl text-bold px-5 ">MERN Stack</h2>
            <div className="mt-10 ">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 mt-10">
                {MernStack.map((project, index) => {
                  return (
                    <motion.div
                      key={index}
                      className={cn(
                        "p-2 rounded-lg mt-16 w-full h-full cursor-pointer space-y-5"
                      )}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      variants={{
                        visible: { opacity: 1, y: -50 },
                        hidden: { opacity: 0, y: 0 },
                      }}
                    >
                      <ProjectHover
                        imageUrl={project.image}
                        className="mx-3 w-full h-4/5 "
                      >
                        <h1 className="text-white font-bold flex items-center">
                          {project.projectName}
                          <Link
                            href={project.projectExternalLinks.github}
                            className="  ml-3"
                          >
                            <span className="p-1">
                              <FiGithub size={25} />
                            </span>
                          </Link>
                          <Link href={project.projectLink} className="ml-5">
                            <span className="p-1">
                              <FiExternalLink size={25} />
                            </span>
                          </Link>
                        </h1>
                        <div className="flex items-center -mt-3 gap-2">
                          {project.projectTech.map((tech, idx) => (
                            <h3 key={idx} className="text-[#a1a0a0] ">
                              {tech}
                            </h3>
                          ))}
                        </div>
                      </ProjectHover>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Projects;
