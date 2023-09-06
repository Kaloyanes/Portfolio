<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	let wrapper: HTMLElement;

	onMount(() => {
		setTimeout(() => {
			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: '.wrapper',
					start: 'top center',
					end: '+=500',
					scrub: 1
				}
			});

			tl.fromTo('#educatTitle', { opacity: 0, y: 300 }, { opacity: 1, y: 0, duration: 1 });
			tl.fromTo('.img1', { opacity: 0, x: -1000 }, { opacity: 1, x: 0, duration: 1 }, 0);
			tl.fromTo('.img2', { opacity: 0, x: 1000 }, { opacity: 1, x: 0, duration: 1 }, 0);
		}, 0);
	});
</script>

<div class="wrapper" id="educatWrapper" bind:this={wrapper}>
	<h1 class="title-text" id="educatTitle">Education</h1>

	<div class="layout">
		<div class="row reversed">
			<div class="info img2">
				<h1>
					Applied programming, Vocational High School of Electrical Engineering and Electronics
					“Konstantin Fotinov”, Burgas
				</h1>
			</div>
			<img src="/pgee.webp" alt="pgee" class="img1" />
		</div>

		<div class="row">
			<div class="info img1">
				<h1>Erasmus+ programs</h1>
				<h4>EU Programme for education, training, youth and sport</h4>
				<h4>Projects that I have attended:</h4>
				<ul>
					<li>
						Project under the Erasmus+ program, KD 1, sector Vocational education training on the
						topic: "Education without borders - the world is robotics"
					</li>
				</ul>
			</div>
			<img src="/erasmus.webp " alt="erasmus" class="img2" />
		</div>
	</div>
</div>

<style lang="scss">
	@import '$lib/variables.scss';

	.wrapper {
		width: 100%;
	}

	.layout {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		align-self: center;
		margin-inline: auto;
	}

	.title-text {
		margin-top: 0;
	}

	.row {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 80vw;
		margin-block: 2rem;
	}

	.info {
		width: 40%;
	}

	img {
		display: flex;
		margin: 10px;
		border-radius: 20px;
		transition: all 600ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
		width: 50%;
		box-shadow: 0px 15px 40px $color-primary-container-dark;

		&:hover {
			scale: 1.1 !important;
			z-index: 0;
			box-shadow: 0px 15px 60px $color-primary-container-dark;

			border-radius: 50px;
		}
	}

	.reversed {
		flex-direction: row-reverse;
	}

	@media (max-width: 1100px) {
		.layout {
			width: 90%;
			margin-inline: auto;
		}

		.row {
			flex-direction: column;
			padding: 0;
			margin-inline: 0px;
			width: 100%;
		}

		.info {
			width: 89%;
		}

		img {
			width: 90%;
			margin: 0;
		}
	}
</style>
