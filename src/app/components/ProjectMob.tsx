import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MernStack, data } from "./ProjectData";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectsMob = () => {
  return (
    <div className="mt-16 p-5 sm:p-0">
      <div className="grid grid-cols-1 mt-16">
        {data.map((project, index) => (
          <div key={index} className="mt-8">
            <div className="flex items-center justify-center">
              <img
                src={project.image}
                alt=""
                width={500}
                height={300}
                className="rounded-lg"
              />
              {/* <Image
                src={project.image}
                alt="Project Image"
                width={500}
                height={300}
                className="object-cover rounded-lg text-white"
              /> */}
            </div>
            <div className="flex flex-col items-center mt-4">
              <h2 className="text-white text-2xl font-bold">
                {project.projectName}
              </h2>
              <div className="flex items-center ">
                <Link
                  href={project.projectExternalLinks.github}
                  className="mx-8 "
                >
                  <span className="p-1">
                    <FiGithub size={30} color="#fff" />
                  </span>
                </Link>
                <Link href={project.projectLink} className="ml-5">
                  <span className="p-1">
                    <FiExternalLink size={30} color="#fff" />
                  </span>
                </Link>
              </div>
              <p className="text-white text-center max-w-2xl mb-5">
                {project.projectDescription}
              </p>
              <div className="flex mt-2">
                {project.projectTech.map((tech, idx) => (
                  <span key={idx} className="text-[#a1a0a0] text-sm mr-2 mb-8">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        <h2 className="text-white text-3xl font-bold px-5 mt-16">MERN Stack</h2>
        <div className="grid grid-cols-1 mt-16">
          {MernStack.map((project, index) => (
            <div key={index} className="mt-8">
              <div className="flex items-center justify-center">
                <img
                  src={project.image}
                  alt=""
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
                {/* <Image
                src={project.image}
                alt="Project Image"
                width={500}
                height={300}
                className="object-cover rounded-lg text-white"
              /> */}
              </div>
              <div className="flex flex-col items-center mt-4">
                <h2 className="text-white text-2xl font-bold">
                  {project.projectName}
                </h2>
                <div className="flex items-center ">
                  <Link
                    href={project.projectExternalLinks.github}
                    className="mx-8 "
                  >
                    <span className="p-1">
                      <FiGithub size={30} color="#fff" />
                    </span>
                  </Link>
                  <Link href={project.projectLink} className="ml-5">
                    <span className="p-1">
                      <FiExternalLink size={30} color="#fff" />
                    </span>
                  </Link>
                </div>
                <p className="text-white text-center max-w-2xl mb-5">
                  {project.projectDescription}
                </p>
                <div className="flex mt-2">
                  {project.projectTech.map((tech, idx) => (
                    <span key={idx} className="text-[#a1a0a0] text-sm mr-2">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsMob;
