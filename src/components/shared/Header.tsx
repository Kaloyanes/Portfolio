"use client";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText } from "gsap/all";
import { Menu } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import AnimatedLink from "./AnimatedLink";

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap
      .timeline()
      .fromTo(
        headerRef.current,
        {
          opacity: 0,
          y: "-100%",
          width: "75%",
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "expo.out",
          delay: 0.5,
        },
      )
      .fromTo(
        [headerRef.current],
        {
          width: "75%",
        },
        {
          width: "100%",
          duration: 1,
          ease: "expo.out",
        },
      );
  }, []);

  return (
    <>
      {new Array(3).fill(0).map((_, index) => (
        <div key={index} className="fixed top-0 backdrop-blur-lg mask-to-t z-10 w-full h-24" />
      ))}

      <header
        ref={headerRef}
        // initial={{
        //   opacity: 0,
        //   width: "75%",
        //   y: "-100%",
        //   filter: "blur(10px)",
        // }}
        // animate={{
        //   opacity: 1,
        //   y: 0,
        //   width: "100%",
        //   filter: "blur(0px)",
        // }}
        // transition={{
        //   width: {
        //     delay: 1.2,
        //     type: "spring",
        //     damping: 120,
        //     stiffness: 900,
        //     mass: 0.2,
        //   },
        //   type: "spring",
        //   damping: 120,
        //   stiffness: 900,
        //   mass: 0.6,
        //   delay: 0.7,
        // }}
        className="fixed top-0 w-full left-1/2 -translate-x-1/2 z-50 flex items-center justify-between p-6 "
      >
        <AnimatedLink href="/" className="flex items-center gap-2 size-12">
          <div className="w-full h-full relative ">
            <Image
              src="/moon.svg"
              alt="Kaloyanes Logo"
              width={48}
              height={48}
              className="w-full h-full relative z-10"
            />
          </div>
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
          className="flex items-center justify-center rounded-full bg-transparent size-14 p-2"
        >
          <Menu className="text-primary size-14" strokeWidth={2} />
        </motion.div>
      </header>
    </>
  );
}
