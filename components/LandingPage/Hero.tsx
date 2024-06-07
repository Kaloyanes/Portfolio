"use client";
import { motion, useAnimate } from "framer-motion";
import { Noto_Sans } from "next/font/google";
import { useEffect } from "react";
import SplitType from "split-type";

const roboto = Noto_Sans({
  subsets: ["cyrillic"],
  weight: ["400", "700", "900"],
});
export default function Hero() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const text = new SplitType("#firstName");
  });

  return (
    <div className={roboto.className} ref={scope}>
      <motion.h1
        id="firstName"
        className="text-left text-9xl absolute font-bold "
      >
        Kaloyan
      </motion.h1>
      <motion.h1 className="text-right text-9xl font-bold">
        Stoyan
        <br />o<br />v
      </motion.h1>
    </div>
  );
}
