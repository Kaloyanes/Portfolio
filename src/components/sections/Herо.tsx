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

	const contactButtonRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(contactButtonRef, {
		once: true,
	});

	useEffect(() => {
		// Only split static lines to avoid conflicting with React updates on dynamic content
		const split = SplitText.create(".split-lines", {
			type: "lines",
			mask: "lines",
		});
		const roleText = document.querySelector(".role-text");
		const productQualities = document.querySelector(".product-qualities-text");
		const startupQualities = document.querySelector(".startup-quality-text");

		animate(
			[
				roleText,
				...split.lines.slice(0, 1),
				productQualities,
				...split.lines.slice(1),
				startupQualities,
			],
			{
				y: 100,
				opacity: 0.7,
			},
			{
				duration: 0,
			},
		);

		animate(
			[
				roleText,
				...split.lines.slice(0, 1),
				productQualities,
				...split.lines.slice(1),
				startupQualities,
			],
			{
				y: [100, 0],
				opacity: [0.7, 1],
			},
			{
				delay: stagger(0.15, {
					from: "first",
					startDelay: 0.15 + 0.5,
				}),
				type: "spring",
				damping: 140,
				stiffness: 900,
				mass: 0.2,
			},
		).then(() => {
			split.revert();

			setShowContactButton(true);
		});

		return () => {
			// Revert SplitText DOM mutations on unmount
			split.revert();
		};
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
			y: "100%",
		},
		animate: {
			opacity: 1,
			filter: "blur(0px)",
			y: 0,
		},
		exit: {
			opacity: 0,
			filter: "blur(5px)",
			y: "-100%",
		},
	};

	return (
		<section className="w-full h-full relative flex items-center">
			<motion.div
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: 1,
				}}
				transition={{
					delay: 0.15,
					duration: 0.01,
				}}
				className="flex flex-col gap-8"
			>
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
									layout
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

				<div className="flex flex-col gap-1">
					<div className="flex flex-row items-center gap-5 overflow-clip">
						<h1 className="text-8xl font-normal overflow-clip split-lines leading-[1.2]">
							I Build{" "}
						</h1>
						<h1 className="text-8xl font-normal product-qualities-text leading-[1.2]">
							<AnimatePresence mode="wait" initial={false}>
								{productQualities[productIndex].split("").map((ch, index) => (
									<motion.span
										layout
										variants={letterVariants}
										initial="initial"
										animate="animate"
										exit="exit"
										transition={{
											delay: index * 0.03,
											...spring,
										}}
										className={cn(
											"font-serif whitespace-nowrap inline-block italic ",
											ch === " " && "w-4",
										)}
										key={`${ch}-${index}-${productIndex}`}
									>
										{ch}
									</motion.span>
								))}
							</AnimatePresence>
						</h1>
					</div>
					<h1 className="text-8xl font-normal leading-[1.2] overflow-clip split-lines h-fit">
						Products for Startups <br />
						that care how
					</h1>
					<div className="flex flex-row items-center gap-5 overflow-clip ">
						<h1 className="text-8xl font-normal leading-[1.2] overflow-clip split-lines h-fit">
							it
						</h1>
						<h1 className="font-serif startup-quality-text text-8xl h-fit leading-[1.2]">
							<AnimatePresence mode="wait" initial={false}>
								{startupQualities[startupQualityIndex]
									.split("")
									.map((ch, index) => (
										<motion.span
											layout
											variants={letterVariants}
											initial="initial"
											animate="animate"
											exit="exit"
											transition={{
												delay: index * 0.03,
												...spring,
											}}
											className={cn(
												"font-serif whitespace-nowrap inline-block italic ",
												ch === " " && "w-4",
											)}
											key={`${ch}-${index}-${startupQualityIndex}`}
										>
											{ch}
										</motion.span>
									))}
							</AnimatePresence>
						</h1>
					</div>
				</div>

				<motion.div
					ref={contactButtonRef}
					initial={{
						scale: 0.9,
						opacity: 0,
						filter: "blur(15px)",
					}}
					animate={{
						scale: showContactButton && isInView ? 1 : 0.7,
						opacity: showContactButton && isInView ? 1 : 0,
						// y: showContactButton && isInView ? 0 : 25,
						filter: showContactButton && isInView ? "blur(0px)" : "blur(15px)",
					}}
					transition={{
						...spring,
					}}
					className="w-2/12 max-w-[150px] px-6 py-3 bg-foreground rounded-full text-background text-lg font-semibold tracking-wide text-center flex justify-center items-center contact-button"
				>
					Contact
				</motion.div>
			</motion.div>

			<motion.div
				initial={{
					width: 0,
					height: 0,
					opacity: 0,
					filter: "blur(10px)",
					borderRadius: "150px",
					x: "-60%",
				}}
				animate={{
					width: 660,
					height: 660,
					opacity: 1,
					filter: "blur(0px)",
					borderRadius: "24px",
					x: 0,
				}}
				transition={{
					delay: 0.15,
					...spring,
				}}
				className="absolute bottom-0 right-0 w-[660px] h-[660px] rounded-3xl overflow-hidden origin-center"
			>
				<Image
					src={"/images/me3.png"}
					width={660}
					height={660}
					alt="Kaloyan Stoyanov, Kaloyanes, Software Engineer, Designer, Freelancer"
					className="w-full h-full object-cover object-[50%_40%] saturate-[0.8] brightness-[0.75] scale-[1.2]"
				/>

				{/* <div
					className="w-full h-full absolute inset-0 opacity-50"
					style={{
						backgroundImage: "url(/texture2.svg)",
					}}
				/> */}
				{/* Texture overlay */}

				<div
					className="absolute inset-0"
					style={{
						backgroundImage:
							"radial-gradient(circle farthest-side at center, hsl(0, 0%, 100%, 0) 75%, hsl(0, 0%, 0%, 0.7) 130%)",
					}}
				/>
				{/* Blur gradient overlay */}
				<div className="absolute inset-0 mask-t-from-0% mask-t-to-80% backdrop-blur-[10px]" />
			</motion.div>
		</section>
	);
}
