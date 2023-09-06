<script lang="ts">
	import Skills from './../lib/sections/Skills.svelte';
	import AboutShort from '$lib/components/AboutShort.svelte';
	import { onMount } from 'svelte';
	import Education from '$lib/sections/Education.svelte';
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import Projects from '$lib/sections/Projects.svelte';
	import Awards from '$lib/sections/Awards.svelte';
	import ContactMe from '$lib/sections/ContactMe.svelte';
	gsap.registerPlugin(ScrollTrigger);

	let currentFavicon = '/light-favicon.png';

	onMount(() => {
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
		<div class="section" id="skills">
			<Skills />
		</div>
		<div class="section" id="projects">
			<Projects />
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
