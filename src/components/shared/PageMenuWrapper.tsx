import { motion } from "motion/react";
import type React from "react";

export default function PageMenuWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return <motion.div className="relative">{children}</motion.div>;
}
