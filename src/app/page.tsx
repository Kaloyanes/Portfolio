"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Hero from "@/components/sections/Hero";
import { Particles } from "@/components/shared/Particles";

export default function Home() {
  return (
    <div className="animate-in fade-in">
      <div className="h-screen w-full overflow-clip ">
        <Hero />
      </div>

      <div className="h-[200vh] mx-[24px]"></div>
    </div>
  );
}
