"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Hero from "@/components/sections/Hero";
import { Particles } from "@/components/shared/Particles";

export default function Home() {
	return (
		<div className="mx-[24px]">
			<div className="h-screen py-[24px] overflow-clip">
				<Particles
					className="absolute inset-0 -z-10"
					quantity={500}
					ease={50}
					color={"#fff"}
					refresh
					size={0.3}
				/>
				<Hero />
			</div>

			<div className="h-[200vh]"></div>
		</div>
	);
}
