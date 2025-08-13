"use client";
import { Menu } from "lucide-react";
import { motion, type Transition } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTransitionRouter } from "next-view-transitions";
import React from "react";
import { Button } from "../ui/button";
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
		<>
			{new Array(3).fill(0).map((_, index) => (
				<div
					key={`header-${index}`}
					className="fixed top-0 backdrop-blur-lg mask-to-t z-10 w-full h-24  "
				/>
			))}
			<motion.header
				initial={{
					opacity: 0,
					scaleX: 0.8,
					filter: "blur(10px)",
				}}
				animate={{
					opacity: 1,
					scaleX: 1,
					filter: "blur(0px)",
				}}
				transition={{
					type: "spring",
					damping: 120,
					stiffness: 900,
					mass: 0.6,
				}}
				className="fixed top-0 w-full z-50 flex items-center justify-between p-6 "
			>
				<AnimatedLink href="/" className="flex items-center gap-2 size-12 ">
					<Image
						src="/moon.svg"
						alt="logo"
						width={48}
						height={48}
						className="mix-blend-difference w-full h-full"
					/>
					{/* <span className="text-3xl font-bold">Kaloyanes</span> */}
				</AnimatedLink>

				{/* 
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
			</div> */}

				{/* <div className="flex-[0.1] flex justify-end">
				<Link
					href="/contact"
					className="bg-white text-black px-6 py-2 rounded-full w-2/3 text-center text-lg font-semibold tracking-wide"
				>
					Contact
				</Link>
			</div> */}
				<motion.div
					initial={{
						scale: 1,
					}}
					whileHover={{
						scale: 1.2,
						rotate: 90,
					}}
					transition={{
						type: "spring",
						damping: 140,
						stiffness: 900,
						mass: 0.6,
					}}
					className="flex items-center justify-center rounded-full bg-primary size-12 p-2  "
				>
					<Menu className="text-primary-foreground size-12" strokeWidth={1.5} />
				</motion.div>
			</motion.header>
		</>
	);
}
