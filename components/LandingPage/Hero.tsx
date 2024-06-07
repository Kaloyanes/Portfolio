"use client";
import { animate, motion, stagger } from "framer-motion";
import { Noto_Sans } from "next/font/google";
import { useEffect } from "react";
import SplitType from "split-type";

const roboto = Noto_Sans({
  subsets: ["cyrillic"],
  weight: ["400", "700", "900"],
});
export default function Hero() {
  useEffect(() => {
    const text = new SplitType("#firstName");
    const lastNameText = new SplitType("#lastName");

    const transitionProperties = {
      duration: 0.3,
      delay: stagger(0.07),
      type: "spring",
      stiffness: 125,
    };

    const animationProperties = {
      y: [50, 0],
      opacity: [0, 1],
    };
    animate(
      text.chars!,
      animationProperties as any,
      transitionProperties as any,
    );

    animate(
      lastNameText.chars!,
      animationProperties as any,
      transitionProperties as any,
    );
  });

  return (
    <div className={roboto.className}>
      <motion.h1
        id="firstName"
        className="text-left text-9xl absolute font-bold "
      >
        Kaloyan
      </motion.h1>
      <motion.h1 id="lastName" className="text-right text-9xl font-bold">
        Stoyan
        <br />o<br />v
      </motion.h1>
    </div>
  );
}
