import { useGSAP } from "@gsap/react";
import { gsap, SplitText } from "gsap/all";
import {
  AnimatePresence,
  type AnimationSequence,
  animate,
  motion,
  stagger,
  type TimelineWithFallback,
  type Transition,
  useInView,
  type Variants,
} from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { useHeroStore } from "@/stores/heroStore";
import AnimatedLink from "../shared/AnimatedLink";
import { Particles } from "../shared/Particles";
import { Button } from "../ui/button";

export default function Hero() {
  const [showContactButton, setShowContactButton] = useState(false);
  const roles = ["Designer", "Freelancer", "Software Engineer"];
  const productQualities = ["Beautiful", "Polished", "Snappy"];
  const startupQualities = ["looks", "feels", "performs"];

  // const [productIndex, setProductIndex] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  // const [startupQualityIndex, setStartupQualityIndex] = useState(0);
  const { hasVisited, setHasVisited } = useHeroStore();

  useEffect(() => {
    const interval = setInterval(() => {
      // setProductIndex((prev) => (prev + 1) % productQualities.length);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      // setStartupQualityIndex((prev) => (prev + 1) % startupQualities.length);
    }, 4000);
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
      const remSize = desiredSize / 75; // Convert px to rem (assuming 60px = 1rem)
      setFontSize(`${remSize}rem`);
    };

    calculateFontSize();
    window.addEventListener("resize", calculateFontSize);

    return () => window.removeEventListener("resize", calculateFontSize);
  }, []);

  const imageRef = useRef<HTMLImageElement>(null);
  const cutoutRef = useRef<HTMLImageElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (hasVisited) {
      return;
    }

    const headlineSplit = SplitText.create(headlineRef.current);
    const descriptionSplit = SplitText.create(descriptionRef.current, {
      type: "lines",
      mask: "lines",
    });

    gsap
      .timeline()
      .fromTo(
        [imageRef.current, cutoutRef.current],
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.3,
          delay: 0.2,
          ease: "expo.inOut",
        },
      )
      .fromTo(
        [imageRef.current, cutoutRef.current],
        {
          width: "40px",
          height: "40px",
          borderRadius: "500px",
          transform: "translate(50%, 50%)",
        },
        {
          width: "100%",
          height: "100%",
          borderRadius: "24px",
          transform: "translate(0%, 0%)",
          duration: 1.5,
          ease: "expo.out",
          stagger: {
            amount: 0.035,
            from: "end",
          },
        },
        "<+1.1",
      )
      .fromTo(
        headlineSplit.chars,
        {
          opacity: 0,
          y: "-150%",
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          stagger: {
            amount: 0.08,
            from: "center",
          },
          duration: 1,
          ease: "expo.inOut",
          filter: "blur(0px)",
        },
        "<+0.5",
      )
      .fromTo(
        roleRef.current,
        {
          opacity: 0,
          y: "-100%",
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "expo.inOut",
        },
        "<+0.3",
      )
      .fromTo(
        descriptionSplit.lines,
        {
          opacity: 0,
          y: "-100%",
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          stagger: {
            amount: 0.1,
            from: "start",
          },
          filter: "blur(0px)",
          duration: 1,
          ease: "expo.inOut",
        },
        "<+0.1",
      );
    // .fromTo(
    //   buttonRef.current,
    //   {
    //     opacity: 0,
    //     y: "-100%",
    //     filter: "blur(10px)",
    //   },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     filter: "blur(0px)",
    //     duration: 1,
    //     ease: "expo.out",
    //   },
    //   "<+0.7",
    // );

    setHasVisited(true);
  }, []);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-4 relative  ">
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image
          ref={imageRef}
          src={"/images/Background.png"}
          alt="background"
          width={2584}
          height={1723}
          className="object-cover object-[66%_50%] absolute inset-0"
          priority
        />
        <h1
          ref={headlineRef}
          className="font-bold absolute inset-0 flex items-center justify-center -top-[12.5%] lg:-top-[16%]  h-full kaloyanes"
          style={{
            fontSize: fontSize,
          }}
        >
          Kaloyanes
        </h1>
        <Image
          ref={cutoutRef}
          src={"/images/Cutout.png"}
          alt="me cutout"
          width={2584}
          height={1723}
          className="absolute inset-0 object-cover object-[66%_50%] z-[150] brightness-[1.25]"
          priority
        />
      </div>
      <div className="flex flex-col items-center justify-end gap-4 *:text-center flex-1 font-semibold py-12">
        <div className="overflow-hidden py-1.5">
          <h1 ref={roleRef} className="text-5xl role-text  h-fit">
            <AnimatePresence mode="wait" initial={false}>
              {roles[roleIndex].split("").map((ch, index) => (
                <motion.span
                  className={cn("whitespace-nowrap inline-block", ch === " " && "w-4")}
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

        <h1
          ref={descriptionRef}
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-normal overflow-clip split-lines leading-[1.2]"
        >
          I Build <span className="font-serif italic font-semibold">Polished</span> Products <br />
          for Startups that care how it <span className="font-serif italic font-semibold">feels</span>
        </h1>

        {/* <div ref={buttonRef} className="flex items-center justify-center gap-4">
          <AnimatedLink href="/blog">
            <Button className="h-12 rounded-full !px-32">
              <span>Start a Project</span>
            </Button>
          </AnimatedLink>
        </div> */}
      </div>
    </div>
  );
}
