import React from "react";
import TypeEffect from "./TypeEffect";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SparklesCore } from "./ui/Sparkle";
import { AnimatedSpan, Terminal, TypingAnimation } from "./ui/Terminal";
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
      className="flex z-20 flex-col md:justify-center  lg:flex-row lg:justify-between mt-24 md:mt-40 lg:mt-20 md:min-h-[30rem]"
      initial="hidden"
      animate={controls}
      variants={slideInVariants}
      ref={ref}
    >
      <div className="flex flex-col justify-center md:-mt-20">
        <h1 className="font-bold text-5xl md:text-5xl text-white">Hey!</h1>
        <h1 className="font-bold text-5xl md:text-6xl mt-5  sm:text-7xl  relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
          I&apos;m Zareen
        </h1>
        <h1 className="flex flex-col md:block justify-center font-bold text-2xl md:text-5xl text-white mt-8">
          I am a{" "}
          <span className="inline-block align-middle">
            <TypeEffect />
          </span>
        </h1>
      </div>

      <div className="lg:mx-5 lg:max-w-md  md:block md:mx-auto mt-10 md:mt-20 lg:mt-0 max-w-xl w-full">
        <Terminal>
          <TypingAnimation>&gt; about-me --run</TypingAnimation>

          <AnimatedSpan delay={1500} className="text-green-500">
            ✔ Booting developer profile...
          </AnimatedSpan>

          <AnimatedSpan delay={2000} className="text-green-500">
            ✔ BCA Undergraduate detected.
          </AnimatedSpan>

          <AnimatedSpan delay={2500} className="text-green-500">
            ✔ Specialized in frontend development
          </AnimatedSpan>

          <AnimatedSpan delay={3000} className="text-green-500">
            ✔ Mobile dev tools initialized: React Native, Expo
          </AnimatedSpan>

          <AnimatedSpan delay={3500} className="text-green-500">
            ✔ Passion: Building beautiful, functional UIs.
          </AnimatedSpan>

          <AnimatedSpan delay={4000} className="text-green-500">
            ✔ Status: Evolving into Full Stack Developer
          </AnimatedSpan>

          <AnimatedSpan delay={5000} className="text-blue-500">
            ℹ Portfolio status: Live & maintained.
          </AnimatedSpan>

          <TypingAnimation delay={5500} className="text-muted-foreground">
            Developer profile initialized successfully.
          </TypingAnimation>

          <TypingAnimation delay={6000} className="text-muted-foreground">
            Ready to build something amazing.
          </TypingAnimation>
        </Terminal>
      </div>
    </motion.div>
    // </div>
  );
}
