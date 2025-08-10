import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTransitionRouter } from "next-view-transitions";
import type React from "react";
import { cn } from "@/lib/cn";
import pageAnimation from "@/lib/page-animation";

export default function AnimatedLink({
	href,
	children,
	className,
}: {
	href: string;
	children: React.ReactNode;
	className?: string;
}) {
	const router = useTransitionRouter();
	const path = usePathname();

	return (
		<Link
			href={href}
			className={cn(className)}
			onClick={(e) => {
				e.preventDefault();
				router.push(href, {
					onTransitionReady: () => {
						console.log("transition ready");
						if (href !== path) {
							pageAnimation();
						}
					},
				});
			}}
		>
			{children}
		</Link>
	);
}
