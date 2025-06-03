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

  const allImage = [
    ...Frontend_skill.map((skill) => skill.Image),
    ...Backend_skill.map((skill) => skill.Image),
    ...Other_skills.map((skill) => skill.Image),
  ];

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className="px-5 md:px-28">
      <motion.h1
        className="text-white font-semibold text-center text-4xl mt-24 md:mt-40"
        initial="hidden"
        animate={controls}
        variants={slideInVariants}
        ref={ref}
      >
        Skills
        <div className="w-20 mx-auto h-2 bg-blue-500 rounded-full -rotate-6"></div>
        <div className="w-24 mx-auto h-2 bg-green-500 rounded-full -rotate-6"></div>
      </motion.h1>
      {/* <div className="relative flex justify-center mx-auto w-full">
        <h2 className="text-5xl font-bold pb-4 pt-10 relative text-center">
          Skills
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white" />
          <div className="absolute -bottom-[4px] left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-orange-800/80 to-transparent blur-sm" />
          <div className="absolute -bottom-[6px] left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent blur-md" />
          <div className="absolute -bottom-[8px] left-0 right-0 h-[8px] bg-gradient-to-r from-transparent via-orange-400/50 to-transparent blur-lg" />
          <div className="absolute -bottom-[12px] left-1/4 right-1/4 h-[10px] bg-gradient-to-r from-transparent via-orange-300/40 to-transparent blur-xl" />
          <div className="absolute -bottom-[16px] left-1/3 right-1/3 h-[12px] bg-gradient-to-r from-transparent via-orange-600/20 to-transparent blur-2xl" />
        </h2>
      </div> */}

      {/* <div className="relative mt-32 flex mx-auto h-96 w-full aspect-square max-w-2xl  items-center justify-center overflow-hidden my-20 bg-transparent">
        <IconCloud images={allImage} />
      </div> */}
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
