"use client";
import { TypeAnimation } from "react-type-animation";

export default function TypeEffect() {
  return (
    <span className="text-2xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 block">
      <TypeAnimation
        sequence={[
          "Frontend Developer",
          2000,
          "MERN Stack Developer",
          2000,
          () => {
            console.log("Sequence completed");
          },
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{
          // fontSize: "1.7rem",
          display: "inline-block",
          lineHeight: "1.2",
        }}
        className="type-animation"
      />
    </span>
  );
}
