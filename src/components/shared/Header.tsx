"use client";
import { motion, type Transition } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTransitionRouter } from "next-view-transitions";
import React from "react";
import AnimatedLink from "./AnimatedLink";

const padding = 150;

const spring: Transition = {
	type: "spring",
	damping: 100,
	stiffness: 900,
	mass: 0.6,
};

const links = [
	{
		label: "About",
		href: "/",
	},
	{
		label: "Services",
		href: "/",
	},
	{
		label: "Work",
		href: "/",
	},
	{
		label: "Blog",
		href: "/blog",
	},
];

export default function Header() {
	const router = useTransitionRouter();
	const path = usePathname();

	return (
		<motion.header
			initial={{
				opacity: 0.7,
				y: "-150%",
				filter: "blur(10px)",
				paddingLeft: `${padding}px`,
				paddingRight: `${padding}px`,
				paddingTop: `${padding / 2}px`,
				paddingBottom: `${padding}px`,
			}}
			animate={{
				opacity: 1,
				y: 0,
				filter: "blur(0px)",
				paddingLeft: "24px",
				paddingRight: "12px",
				paddingTop: "12px",
				paddingBottom: "12px",
			}}
			transition={{
				y: {
					delay: 0.1,
					...spring,
				},

				...spring,
			}}
			className="fixed top-4 left-1/2 -translate-x-1/2 flex items-center justify-between z-50 backdrop-blur-md rounded-full w-[55%] border border-primary/10 bg-foreground/25 dark:bg-foreground/5"
		>
			<AnimatedLink href="/" className="flex items-center gap-2 flex-1">
				<Image
					src="/moon-bl.svg"
					alt="logo"
					width={25}
					height={25}
					className="dark:invert"
				/>
				<span className="text-3xl font-bold">Kaloyanes</span>
			</AnimatedLink>

			<div className="flex items-center gap-4 justify-center flex-[2]">
				{links.map((link) => (
					<AnimatedLink
						key={link.label}
						href={link.href}
						className="text-lg font-medium"
					>
						{link.label}
					</AnimatedLink>
				))}
			</div>

			<div className="flex-1 flex justify-end">
				<Link
					href="/contact"
					className="bg-white text-black px-6 py-2 rounded-full w-2/3 text-center text-lg font-semibold tracking-wide"
				>
					Contact
				</Link>
			</div>
		</motion.header>
	);
}
