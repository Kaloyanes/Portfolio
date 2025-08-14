"use client";
import { motion, type Transition, type Variants } from "motion/react";
import React, { useEffect, useState } from "react";

export default function Footer() {
  const [fontSize, setFontSize] = useState("15rem");

  useEffect(() => {
    const calculateFontSize = () => {
      const screenWidth = window.innerWidth;
      const desiredSize = screenWidth * 0.7;
      const remSize = desiredSize / 55; // Convert px to rem (assuming 60px = 1rem)
      setFontSize(`${remSize}rem`);
    };

    calculateFontSize();
    window.addEventListener("resize", calculateFontSize);

    return () => window.removeEventListener("resize", calculateFontSize);
  }, []);

  const spring: Transition = {
    type: "spring",
    damping: 100,
    stiffness: 900,
    mass: 0.6,
  };

  const letterVariants: Variants = {
    initial: {
      opacity: 0,
      filter: "blur(5px)",
      y: "-100%",
    },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
    },
    exit: {
      opacity: 0,
      filter: "blur(5px)",
      y: "100%",
    },
  };

  return (
    <div>
      <h1
        style={{
          fontSize: fontSize,
        }}
        className="text-center font-semibold w-full tracking-tight h-fit overflow-clip flex items-center justify-center"
      >
        {"Kaloyanes".split("").map((ch, index) => (
          <motion.span
            style={{
              backgroundImage: "url(/images/text-image-mask.webp)",
              backgroundSize: "cover",
              backgroundPosition: `${index * 11.9}% 50%`,
            }}
            className="text-center text-transparent bg-clip-text tracking-tight whitespace-nowrap inline-block"
            key={`${ch}-${index}`}
            variants={letterVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              amount: "some",
              once: true,
            }}
            exit="exit"
            transition={{
              ...spring,
              delay: index * 0.05 + 0.5,
            }}
          >
            {ch}
          </motion.span>
        ))}
      </h1>
    </div>
  );
}
