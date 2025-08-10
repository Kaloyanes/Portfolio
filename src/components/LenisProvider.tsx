"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { type FC, useRef } from "react";

type LenisScrollProviderProps = {
	children: React.ReactNode;
};
const LenisScrollProvider: FC<LenisScrollProviderProps> = ({
	children,
}: LenisScrollProviderProps) => {
	const lenisRef = useRef(null);
	return (
		<ReactLenis
			ref={lenisRef}
			root
			options={{
				lerp: 0.1,
				duration: 1,
				smoothWheel: true,
				touchMultiplier: 0.01,
			}}
		>
			{children as any}
		</ReactLenis>
	);
};

export default LenisScrollProvider;
