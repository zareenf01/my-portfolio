"use client";

import React from "react";
import { delay, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
}

const SkillData = ({ src, width, height, index }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const tiltScale = 1.1;
  const tiltAngle = -5;
  const animationDelay = 0.4;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariant}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      whileHover={{
        scale: tiltScale,
        rotate: tiltAngle,
        transition: { duration: 0.2 },
      }}
    >
      <img
        src={src}
        width={width}
        height={height}
        alt=""
        className="rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
      />
    </motion.div>
  );
};

export default SkillData;
