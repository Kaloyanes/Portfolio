<script lang="ts">
	import AboutShort from '$lib/components/AboutShort.svelte';
	import { onMount } from 'svelte';
	import Education from '$lib/sections/Education.svelte';
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	let currentFavicon = '/light-favicon.png';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

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
		<div id="education" class="section">
			<Education />
		</div>
		<!-- <app-skills id="skills" class="section" />
		<app-projects id="projects" class="section" />
		<app-awards id="awards" class="section" />
		<app-contact-me id="contact me" class="section" /> -->
	</div>
</div>

<style lang="scss">
	@import '$lib/variables.scss';

	.about-short {
		height: 120%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.sections {
		margin: 0;
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.layout {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
	}
</style>
