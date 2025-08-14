"use client";
import { motion } from "motion/react";
import useMousePosition from "@/hooks/useMousePosition";

export default function Cursor() {
  const { mousePosition, hoverElement, hasMoved } = useMousePosition();
  const size = 40;

  return (
    <motion.div
      className="fixed top-0 left-0 w-10 h-10 bg-purple-200 mix-blend-difference rounded-full z-[9999] pointer-events-none origin-center"
      initial={{
        opacity: 0,
        scale: 0.3,
      }}
      animate={{
        opacity: hasMoved ? 1 : 0,
        scale: hasMoved ? (hoverElement ? 1.5 : 1) : 0.3,
        x: mousePosition.x - size / 2,
        y: mousePosition.y - size / 2,
        // width: hoverElement ? 5 : size,
      }}
      transition={{
        // type: "spring",
        // stiffness: 900,
        // damping: 140,
        // mass: 0.2,
        type: "tween",
        ease: "backOut",
      }}
    />
  );
}
