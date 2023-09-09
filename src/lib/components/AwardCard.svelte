<script lang="ts">
	import type { Award } from '$lib/models/award.type';
	import SplitType from 'split-type';
	import { onMount } from 'svelte';

	export let award: Award;
	export let reversed: boolean = false;

	let wrapper: HTMLElement;
	let content: HTMLElement;
	let image: HTMLElement;

	let title: HTMLElement;
	let description: HTMLElement;

	let date: HTMLElement;
	let location: HTMLElement;

	onMount(() => {
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: wrapper,
				start: '-300 center',
				end: 'center center',
				markers: false,
				scrub: 0.5
			}
		});

		const titleWords = new SplitType(title, { types: 'chars' });
		const descriptionWords = new SplitType(description, { types: 'words, chars, lines' });
		const dateWords = new SplitType(date, { types: 'words, chars' });
		const locationWords = new SplitType(location, { types: 'words, chars' });

		const all = [...descriptionWords.lines!, ...locationWords.words!, ...dateWords.words!];

		tl.fromTo(
			titleWords.chars,
			{ opacity: 0, y: 35 },
			{ opacity: 1, y: 0, duration: 50, stagger: 1, ease: 'power2.out' },
			0
		);

		tl.fromTo(
			all,
			{ opacity: 0, y: 35 },
			{ opacity: 1, y: 0, duration: 50, delay: 50, stagger: 10, ease: 'power2.out' },
			0
		);
		if (image) {
			tl.fromTo(
				image,
				{ opacity: 0, x: reversed ? -500 : 500 },
				{ opacity: 1, x: 0, duration: 1, ease: 'power2.out' },
				0
			);
		}
	});
</script>

<div class="award" bind:this={wrapper} class:reversed>
	<div class="txt" bind:this={content}>
		<div>
			<h1 class="title" bind:this={title}>{award.title}</h1>
			<p bind:this={description}>{award.description}</p>
		</div>

		<div class="location">
			<h4 bind:this={location}>{award.location}</h4>
			<h5 bind:this={date}>{award.date}</h5>
		</div>
	</div>
	{#if award.imageUrl}
		<div class="img">
			<img alt="award" src={award.imageUrl} bind:this={image} />
		</div>
	{/if}
</div>

<style lang="scss">
	.award {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.txt {
		flex: 2;
		margin-inline: 3rem;
		text-align: center;

		.title {
			margin: 0;
			padding-bottom: 2%;
			border-bottom: 2px solid white;
			margin-inline: auto !important;
		}

		p {
			font-weight: 400;
			letter-spacing: 1.5px;
			font-size: 1.5rem;
			line-height: 1.5;
		}
	}

	.location {
		margin-top: 2rem;

		h4,
		h5 {
			margin: 0;
		}
	}

	.reversed {
		flex-direction: row-reverse;
	}

	.img {
		flex: 1;
		margin-inline: 3rem;
	}

	img {
		width: 100%;
		height: auto;
		border-radius: 20px;
		transition: all 600ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
		box-shadow: 0px 20px 40px #381e72;

		&:hover {
			scale: 1.05 !important;
			box-shadow: 0px 20px 40px #381e72;
			border-radius: 50px;
		}
	}
</style>
