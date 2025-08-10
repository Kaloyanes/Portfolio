import { useEffect, useState } from "react";

export default function useMousePosition() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [hoverElement, setHoverElement] = useState<HTMLElement | null>(null);
	const [hasMoved, setHasMoved] = useState(false);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (!hasMoved) {
				setHasMoved(true);
			}
			setMousePosition({ x: e.clientX, y: e.clientY });
		};

		const handleMouseOver = (e: MouseEvent) => {
			if (e.target instanceof HTMLDivElement) {
				setHoverElement(null);
				return;
			}

			setHoverElement(e.target as HTMLElement);
		};

		document.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseover", handleMouseOver);

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseover", handleMouseOver);
		};
	}, [hasMoved]);

	return { mousePosition, hoverElement, hasMoved };
}
