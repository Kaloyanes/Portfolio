<script lang="ts">
	import type { Project } from '$lib/models/project.type';
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	export let project: Project;

	let projectWrapper: HTMLElement;
	let logo: HTMLElement;
	let content: HTMLElement;
	let imagesDiv: HTMLElement;

	onMount(() => {
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: projectWrapper,
				start: '-300 center',
				end: 'center center',
				markers: false,
				scrub: 1
			}
		});

		tl.fromTo(
			logo,
			{ opacity: 0, x: -500, rotateZ: 5 },
			{ opacity: 1, x: 0, duration: 1, rotateZ: 0, ease: 'power2.out' },
			0
		);
		tl.fromTo(
			content,
			{ opacity: 0, y: 500 },
			{ opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
			0
		);

		let images = imagesDiv.getElementsByClassName('img');

		tl.fromTo(
			images,
			{ stagger: 5, x: 700, y: 250, opacity: 0, ease: 'power2.out' },
			{ x: 0, y: 0, opacity: 1, duration: 1 },
			0
		);
	});
</script>

<div class="project" bind:this={projectWrapper}>
	<div class="logo-wrapper" bind:this={logo}>
		<img class="logo" src={project.imageUrl} alt={project.name} />
		<h1 class="title">{project.name}</h1>
	</div>

	<div class="content" bind:this={content}>
		<p class="description">{project.description}</p>
		<a class="link" href={project.github} target="_blank">View Project</a>
	</div>

	<div class="images" bind:this={imagesDiv}>
		{#each [project.images[0], project.images[1]] as picture}
			<div class="image" class:position={project.images.length != 1}>
				<img src={picture} alt={project.name} class="img" />
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	@import '$lib/variables.scss';

	.project {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.logo {
		width: 150px;
		height: 150px;
	}

	.logo-wrapper {
		text-align: center;
		flex: 1;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-right: 1px solid white;
		margin-inline: 2rem;
		padding-right: 1.5rem;

		* {
			transition: all 600ms cubic-bezier(0.165, 0.84, 0.44, 1);
		}

		h1 {
			font-size: 2rem;
			letter-spacing: 1px;
		}

		&:hover {
			h1 {
				letter-spacing: 5px;
			}
			img {
				scale: 1.3;
			}
		}
	}

	.content {
		flex: 2.5;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.description {
		width: 90%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 1.5rem;
		letter-spacing: 0.8px;
		line-height: 1.5;
	}

	.link {
		width: 25%;
		font-size: 1.2rem;
		letter-spacing: 0.5px;
		margin-bottom: 2rem;
		border-radius: 10px;

		color: white;
		background-color: $color-primary-container-dark;
		text-decoration: none;
		transition: all 600ms cubic-bezier(0.165, 0.84, 0.44, 1);

		box-shadow: 0px 0px 20px $color-primary-container-dark;
		padding: 0.5rem 1rem;
		text-align: center;

		&:hover {
			border-radius: 20px;
			box-shadow: 0px 0px 50px $color-primary-container-dark;
			width: 50%;
			color: #f5f5f5;
			scale: 1.1;
		}
	}

	.images {
		img {
			width: 100%;
			border-radius: 20px;
			box-shadow: 0px 15px 40px $color-primary-container-dark;
		}
		flex: 2;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-right: 50px;

		.image {
			width: 50%;
			height: auto;
			margin: 1rem;
			position: relative;
			left: 0px;
		}
	}

	.position {
		transition: all 600ms cubic-bezier(0.165, 0.84, 0.44, 1);

		&:hover {
			transform: rotateZ(0) !important;
			scale: 1.1 !important;
		}
	}

	.position:nth-child(1) {
		left: 0px;
		transform: rotateZ(-10deg);
		z-index: 2;
	}

	.position:nth-child(2) {
		left: 0;
		transform: rotateZ(10deg);
	}
</style>
