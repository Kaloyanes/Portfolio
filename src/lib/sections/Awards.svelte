<script lang="ts">
	import AwardCard from '$lib/components/AwardCard.svelte';
	import type { Award } from '$lib/models/award.type';
	import SplitType from 'split-type';
	import { onMount } from 'svelte';

	let awards: Award[] = [
		{
			title: "1st place at ROBO DAYS'23, competition hosted by Technical University Sofia",
			description:
				'Working together with a talented classmate, our team managed to clinch the top spot in the software project category, leaving other teams behind.',
			date: '04/2023',
			location: 'Sofia',
			imageUrl: '/robodays.webp'
		},
		{
			title:
				'1st place at BurgasBlueS 2023, hackathon hosted by University prof. dr.Asen Zlatarov ',
			description:
				'Me and my friend formed a successful team that placed at first position in the junior project category, surpassing numerous competing teams emerging as the ultimate winners.',
			date: '06/2023',
			location: 'Burgas',
			imageUrl: '/burgasblues.webp'
		},
		{
			title:
				' Secured 7th place at the National Competition of IT, comprising regional and national',
			description:
				'In the regional phase, I achieved an impressive score of 93 out of 100. Moving on to the national phase, I performed exceptionally well, securing the 3rd place out of 30 participants in the test with a score of 89 out of 100. Additionally, in the presentation component of the national phase, I attained a commendable score of 77 out of 100.',
			date: '04/2023',
			location: 'Shumen',
			imageUrl: '/noit.png'
		},
		{
			title: 'Diploma Vyarnata posoka',
			description:
				"I was honored with the prestigious 'Vyarnata Posoka' diploma, awarded for my exceptional performance in the National Olympiad in Information Technology, where I secured an impressive 7th place in the 8-10th class age category.",
			date: '06/2021',
			location: 'Burgas',
			imageUrl: '/vyarnataposoka.webp'
		},
		{
			title: '2nd place at 6-th Regional IT Competition',
			description:
				"I attained the '2nd place' at the 6th Regional IT Competition in Burgas. The competition consisted of both a theoretical and practical section. I achieved a score of 98 out of 100.",
			date: '06/2021',
			location: 'Burgas',
			imageUrl: undefined
		}
	];

	let wrapper: HTMLElement;
	let title: HTMLElement;

	onMount(() => {
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: wrapper,
				start: '-200 center',
				end: '+=300',
				scrub: 1,
				markers: true
			}
		});

		let titleWords = new SplitType(title, { types: 'chars' });

		tl.fromTo(
			titleWords.chars,
			{ opacity: 0, duration: 1, y: 40 },
			{ opacity: 1, duration: 1, y: 0, stagger: 0.1 },
			0
		);
	});
</script>

<div class="wrapper" bind:this={wrapper}>
	<h1 class="title-text" bind:this={title}>Achievements</h1>

	<div class="awards">
		{#each awards as award, i}
			<div class="ach">
				<AwardCard {award} reversed={(i + 1) % 2 == 0} />
			</div>
		{/each}
		<!-- <div class="ach" *ngFor="let item of awards; let i=index">
			<app-award-card [award]="item" [reversed]="(i+1) % 2 == 0" />
		</div> -->
	</div>
</div>

<style lang="scss">
	.awards {
		display: flex;
		flex-direction: column;
		align-items: center;

		overflow: hidden;
	}

	.ach {
		margin-block: 5rem;
	}

	@media (max-width: 1100px) {
		.awards {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			display: flex;
		}
	}
</style>
