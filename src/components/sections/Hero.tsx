import { SplitText } from "gsap/all";
import {
	AnimatePresence,
	animate,
	motion,
	stagger,
	type Transition,
	useInView,
	type Variants,
} from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { Particles } from "../shared/Particles";

export default function Hero() {
	const [showContactButton, setShowContactButton] = useState(false);
	const roles = ["Designer", "Freelancer", "Software Engineer"];
	const productQualities = ["Beautiful", "Polished", "Snappy"];
	const startupQualities = ["looks", "feels", "performs"];

	const [productIndex, setProductIndex] = useState(0);
	const [roleIndex, setRoleIndex] = useState(0);
	const [startupQualityIndex, setStartupQualityIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setProductIndex((prev) => (prev + 1) % productQualities.length);
			setRoleIndex((prev) => (prev + 1) % roles.length);
			setStartupQualityIndex((prev) => (prev + 1) % startupQualities.length);
		}, 6000);
		return () => clearInterval(interval);
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

	return (
		<div className="h-full w-full flex flex-col items-center justify-center gap-4">
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
						animate="animate"
						exit="exit"
						transition={{
							...spring,
							delay: index * 0.05,
						}}
					>
						{ch}
					</motion.span>
				))}
			</h1>

			<div className="flex flex-col items-center justify-start gap-4 *:text-center flex-1 font-semibold">
				<div className="overflow-hidden py-1.5">
					<h1 className="text-5xl role-text  h-fit">
						<AnimatePresence mode="wait" initial={false}>
							{roles[roleIndex].split("").map((ch, index) => (
								<motion.span
									className={cn(
										"whitespace-nowrap inline-block",
										ch === " " && "w-4",
									)}
									key={`${ch}-${index}-${roleIndex}`}
									variants={letterVariants}
									initial="initial"
									animate="animate"
									exit="exit"
									transition={{
										fontWeight: {
											delay: index * 0.01,
										},
										delay: index * 0.03,
										...spring,
									}}
								>
									{ch}
								</motion.span>
							))}
						</AnimatePresence>
					</h1>
				</div>

				<h1 className="text-8xl font-normal overflow-clip split-lines leading-[1.2]">
					I Build{" "}
					<span className="font-serif italic font-semibold">Polished</span>{" "}
					Products <br />
					for Startups that care how it{" "}
					<span className="font-serif italic font-semibold">feels</span>
				</h1>
			</div>
		</div>
	);
}
