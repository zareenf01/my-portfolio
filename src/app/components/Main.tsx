import React from "react";
import TypeEffect from "./TypeEffect";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const slideInVariants = {
  hidden: { x: "-5%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 2, ease: "easeInOut" },
  },
};

export default function Main() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      className="flex  justify-between px-6 md:px-28 mt-24"
      initial="hidden"
      animate={controls}
      variants={slideInVariants}
      ref={ref}
    >
      <div className="flex flex-col justify-center ">
        <h1 className="font-bold text-4xl md:text-7xl text-white">Hey!👋</h1>
        <h1 className="font-bold text-5xl md:text-8xl text-white mt-5">
          I&apos;m Zareen
        </h1>
        <h1 className="flex flex-col md:block justify-center font-bold text-2xl md:text-5xl text-white mt-8">
          I am a{" "}
          <span className="inline-block align-middle">
            <TypeEffect />
          </span>
        </h1>
      </div>
    </motion.div>
  );
}
