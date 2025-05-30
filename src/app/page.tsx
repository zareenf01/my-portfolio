"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { SparklesCore } from "./components/ui/Sparkle";
import { Spotlight } from "./components/ui/Spotlight";

export default function Home() {
  return (
    <div className="overflow-x-hidden ">
      <div className="relative -px-20 z-10">
        {/* <div className="absolute inset-0 z-10 "> */}
        {/* <SparklesCore
            background="transparent"
            particleDensity={15}
            speed={4}
            minSize={1}
            maxSize={2}
            particleColor="#ffffff"
            className="w-full h-full pointer-events-none"
          /> */}

        {/* </div> */}
        <Navbar />
        <Main />
      </div>
      <Skills />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}
