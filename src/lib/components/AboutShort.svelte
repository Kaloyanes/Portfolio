<script lang="ts">
	import { onMount } from 'svelte';
	import Email from 'svelte-material-icons/Email.svelte';

	let contact: HTMLElement;
	let pfp: HTMLElement;
	let text: HTMLElement;

	onMount(() => {
		// let tl = gsap.timeline({ delay: 0.5 });
		// tl.fromTo(
		// 	pfp,
		// 	{ opacity: 0, x: 1500 },
		// 	{ opacity: 1, duration: 1, x: 0, ease: 'power2.out' },
		// 	0
		// );
		// tl.fromTo(
		// 	text,
		// 	{
		// 		x: -1500
		// 	},
		// 	{
		// 		x: 0,
		// 		duration: 1.5,
		// 		scale: 1,
		// 		ease: 'power2.out'
		// 	},
		// 	0
		// );
		// tl.fromTo(
		// 	contact.children,
		// 	{
		// 		x: -250
		// 	},
		// 	{
		// 		x: 0,
		// 		stagger: 0.3,
		// 		duration: 0.6
		// 	}
		// );
	});
</script>

<div class="contact">
	<!-- Icons with email and linkedin and facebook -->
	<div class="icons" bind:this={contact}>
		<a href="mailto:kaloyangfx@gmail.com" target="_blank" aria-label="Email me">
			<Email size="50" />
		</a>
		<a
			href="https://www.linkedin.com/in/kaloyan-stoyanov-ba2799205/"
			target="_blank"
			aria-label="Contact me on LinkedIn"
		>
			<svg
				fill="#ffffff"
				height="50px"
				width="50px"
				version="1.1"
				id="Layer_1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				viewBox="0 0 310 310"
				xml:space="preserve"
			>
				<g id="XMLID_801_">
					<path
						id="XMLID_802_"
						d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
      		C77.16,101.969,74.922,99.73,72.16,99.73z"
					/>
					<path
						id="XMLID_803_"
						d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
      		c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
					/>
					<path
						id="XMLID_804_"
						d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
      		c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
      		c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
      		C310,145.43,300.549,94.761,230.454,94.761z"
					/>
				</g>
			</svg>
		</a>
		<a href="https://www.facebook.com/kalstst/" target="_blank" aria-label="Add me on Facebook">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				viewBox="0,0,256,256"
				fill="#ffffff"
				width="50px"
				height="50px"
				fill-rule="nonzero"
			>
				<g
					fill-rule="nonzero"
					stroke="none"
					stroke-width="1"
					stroke-linecap="butt"
					stroke-linejoin="miter"
					stroke-miterlimit="10"
					stroke-dasharray=""
					stroke-dashoffset="0"
					font-family="none"
					font-weight="none"
					font-size="none"
					text-anchor="none"
					style="mix-blend-mode: normal"
				>
					<g transform="scale(5.12,5.12)">
						<path
							d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z"
						/>
					</g>
				</g>
			</svg>
		</a>
	</div>
</div>

<div class="container">
	<div class="txt-layout" id="short-txt" bind:this={text}>
		<div class="circle" />
		<div class="text">
			Let's build something
			<strong>incredible</strong>
			together.
		</div>
	</div>

	<img src="/pfp2.webp" class="pfp" alt="Kaloyan Stoyanov Selfie" bind:this={pfp} />
</div>

<style lang="scss">
	@import '$lib/variables.scss';

	.container {
		justify-content: center;
		display: flex;
		align-items: center;
		flex-direction: row;
		margin-block: 0rem;
		// width: min(90%, 70rem);
		margin-inline: auto;
		height: 100vh;
	}

	.pfp {
		position: relative;
		width: 23%;
		border-radius: 15px;
		margin: 50px;
		filter: grayscale(1) blur(5px);
		transition: all 600ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
		box-shadow: 0px 0px 5px $color-primary-container-dark;

		// transform: translateX(1500px);
		&:hover {
			filter: none;
			border-radius: 30px;
			scale: 1.1 !important;
			box-shadow: 0px 0px 100px $color-primary-container-dark;
		}
	}

	.txt-layout {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		width: 40%;
		// transform: translateX(-1500px);
	}

	.txt-layout:hover {
		.text {
			scale: 1.05;
			user-select: none;
			letter-spacing: 3px;
		}

		.circle {
			filter: blur(10px);
		}
	}

	.text {
		text-align: center;
		transform-origin: center;
		letter-spacing: -1.4px;
		line-height: 1.3;
		justify-self: flex-start;
		width: 60%;
		color: white;
		border-radius: 20px;
		transition: 600ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

		font-size: 80px;

		word-break: keep-all;
		text-align: start;
	}

	.circle {
		background-color: $color-primary-container-dark;
		filter: blur(5px);
		z-index: -1;
		aspect-ratio: 1;
		height: 120%;
		position: absolute;
		left: 40%;
		top: 50%;
		transform: translate(-50%, -50%);
		border-radius: 50%;
		transition: 600ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.icons {
		display: flex;
		flex-direction: column;
		justify-content: center;
		z-index: 150;
		position: absolute;
		// Center
		left: 50px;
		top: 50%;
		transform: translate(0, -50%);

		a {
			// transform: translateX(-250px);
			margin-block: 1rem;
			color: white;
			transition: all 600ms cubic-bezier(0.165, 0.84, 0.44, 1);

			svg {
				transition: all 600ms cubic-bezier(0.165, 0.84, 0.44, 1);
			}

			&:hover {
				color: $primary50;
				transform: translateY(-10px) scale(1.1);

				svg {
					fill: $primary50 !important;
				}
			}
		}
	}

	@media (width <= 1200px) {
		.container {
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 100%;
			padding-top: 5rem;
		}

		img {
			width: 60%;
			margin-inline: auto;
			justify-self: center;
			left: 0;
		}

		.text {
			display: block;
			position: relative;
			left: 0;
			top: 0;
			width: 70%;
			margin-inline: 20px;
			text-align: center;
			color: white;
			transition: 600ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

			font-weight: bold;
			font-size: 60px;
			white-space: pre-line;

			word-break: keep-all;
		}
	}
</style>
