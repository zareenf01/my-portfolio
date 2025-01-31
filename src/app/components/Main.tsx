import React from "react";
import TypeEffect from "./TypeEffect";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SparklesCore } from "./ui/Sparkle";
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
      className="flex z-20 justify-between px-6 md:px-28 mt-24 md:mt-10 md:min-h-[30rem]"
      initial="hidden"
      animate={controls}
      variants={slideInVariants}
      ref={ref}
    >
      <div className="flex flex-col justify-center ">
        <h1 className="font-bold text-4xl md:text-7xl text-white">Hey!👋</h1>
        <h1 className="font-bold text-5xl md:text-8xl mt-5  sm:text-7xl  relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
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
    // </div>
  );
}
