<script lang="ts">
	import Skills from './../lib/sections/Skills.svelte';
	import AboutShort from '$lib/components/AboutShort.svelte';
	import { onMount } from 'svelte';
	import Education from '$lib/sections/Education.svelte';
	import Projects from '$lib/sections/Projects.svelte';
	import Awards from '$lib/sections/Awards.svelte';
	import ContactMe from '$lib/sections/ContactMe.svelte';
	import Lenis from '@studio-freight/lenis';

	let currentFavicon = '/light-favicon.png';
	onMount(async () => {
		const lenis = new Lenis({
			duration: 1,
			normalizeWheel: true,
			wheelMultiplier: 1.5,
			lerp: 0.5
		});

		function raf(time: any) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			updateFavicon(true);
		} else {
			updateFavicon(false);
		}

		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
			// const newColorScheme = event.matches ? "dark" : "light";
			console.log(event.matches);

			updateFavicon(event.matches);
		});
	});

	function updateFavicon(isDark: boolean) {
		currentFavicon = !isDark ? '/dark-favicon.png' : '/light-favicon.png';
	}
</script>

<svelte:head>
	<link rel="icon" href={currentFavicon} />
	<title>Kaloyan Stoyanov</title>
</svelte:head>

<div class="layout">
	<div class="about-short">
		<AboutShort />
	</div>

	<div class="sections">
		<div class="section" id="projects">
			<Projects />
		</div>
		<div class="section" id="skills">
			<Skills />
		</div>
		<div id="education" class="section">
			<Education />
		</div>
		<div class="section" id="awards">
			<Awards />
		</div>
		<div class="section" id="contact me">
			<ContactMe />
		</div>
		<!-- <app-contact-me id="contact me" class="section" /> -->
	</div>
</div>

<style lang="scss">
	@import '$lib/variables.scss';

	.layout {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}

	.about-short {
		// margin-bottom: 10rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.section {
		margin-block: 3rem;
	}

	.sections {
		margin: 0;
		width: 100%;
		display: flex;
		flex-direction: column;
	}
</style>
