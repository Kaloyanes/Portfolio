<script lang="ts">
	import { onMount } from 'svelte';

	import { setAnalyticsCollectionEnabled, setUserId } from 'firebase/analytics';

	onMount(async () => {
		const { analytics } = await import('$lib/firebase');

		// Count the user
		setAnalyticsCollectionEnabled(analytics, true);
		setUserId(analytics, 'dev');

		document.cookie = 'yourCookieName=yourCookieValue; samesite=Lax';
	});
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-0L6X6Q5RER"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
</svelte:head>

<slot />

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap');
	@import '$lib/variables.scss';

	:root {
		--step--2: clamp(0.78rem, calc(0.77rem + 0.03vw), 0.8rem);
		--step--1: clamp(0.94rem, calc(0.92rem + 0.11vw), 1rem);
		--step-0: clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem);
		--step-1: clamp(1.35rem, calc(1.28rem + 0.37vw), 1.56rem);
		--step-2: clamp(1.62rem, calc(1.5rem + 0.58vw), 1.95rem);
		--step-3: clamp(1.94rem, calc(1.77rem + 0.87vw), 2.44rem);
		--step-4: clamp(2.33rem, calc(2.08rem + 1.25vw), 3.05rem);
		--step-5: clamp(2.8rem, calc(2.45rem + 1.77vw), 3.82rem);
	}

	:root,
	:global(html) {
		font-family: 'Poppins', sans-serif;
		color: $color-on-surface-dark;
		background-color: $color-background-dark;
		overflow-x: hidden;
	}

	// Firefox
	::global(*) {
		scrollbar-width: 0px;
		scrollbar-color: $color-primary-dark;
		font-family: 'Roboto Slab', serif;
	}

	/* Chrome, Edge, and Safari */
	::global(*)::-webkit-scrollbar {
		width: 7px;
	}

	::global(*)::-webkit-scrollbar-track {
		background: transparent;
	}

	::global(*)::-webkit-scrollbar-thumb {
		background-color: $primary30;
		border-radius: 10px;
	}

	:root,
	:global(html),
	:global(body) {
		margin: 0;
		padding: 0;
		font-size: var(--step-0);
		// overflow-x: hidden;
	}

	:global(h1) {
		font-size: var(--step-0);
	}

	:global(h2) {
		font-size: var(--step-0);
	}

	:global(h3) {
		font-size: var(--step-1);
	}

	:global(p),
	:global(li) {
		font-size: var(--step--1);
	}

	:global(.title-text) {
		text-align: center;
		font-size: 40px;
		padding-bottom: 20px;
		transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
		margin-inline: auto;

		&:hover {
			letter-spacing: 3px;
		}
	}
</style>
