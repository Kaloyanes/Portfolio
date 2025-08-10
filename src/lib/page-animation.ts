export default function pageAnimation() {
	const timing = {
		duration: 1000,
		easing: "cubic-bezier(0.76, 0, 0.24, 1)",
    fill: "forwards",
	};

	document.documentElement.animate(
		[
			{
				opacity: 1,
				scale: 1,
				transform: "translateY(0)",
				filter: "blur(0px)",
			},
			{
				opacity: 0.2,
				scale: 0.8,
				transform: "translateY(-150px)",
				filter: "blur(10px)",
			},
		],
		{
			...(timing as any),
      pseudoElement: "::view-transition-old(root)",
		},
	);

	document.documentElement.animate(
		[
			{
				transform: "translateY(100%)",
				filter: "blur(10px)",
			},
			{
				transform: "translateY(0)",
				filter: "blur(0px)",
			},
		],
		{
			...(timing as any),
			pseudoElement: "::view-transition-new(root)",
		},
	);
};
