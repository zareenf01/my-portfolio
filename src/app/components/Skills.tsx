import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Backend_skill, Frontend_skill, Other_skills } from "./SkillInfo";
import SkillData from "./SkillData";

const slideInVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

function Skills() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className="px-5 md:px-28 0">
      <motion.h1
        className="text-white font-semibold text-center text-4xl mt-24 md:mt-48"
        initial="hidden"
        animate={controls}
        variants={slideInVariants}
        ref={ref}
      >
        Skills
        <div className="w-20 mx-auto h-2 bg-blue-500 rounded-full -rotate-6"></div>
        <div className="w-24 mx-auto h-2 bg-green-500 rounded-full -rotate-6"></div>
      </motion.h1>
      <section
        id="skills"
        className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-10 md:py-14"
        style={{ transform: "scale(0.9" }}
      />
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((img, index) => (
          <SkillData
            src={img.Image}
            key={index}
            width={img.width}
            height={img.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-16 gap-5 md:px-10 items-center">
        {Backend_skill.map((img, index) => (
          <SkillData
            src={img.Image}
            key={index}
            width={img.width}
            height={img.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-16  items-center">
        {Other_skills.map((img, index) => (
          <SkillData
            src={img.Image}
            key={index}
            width={img.width}
            height={img.height}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
