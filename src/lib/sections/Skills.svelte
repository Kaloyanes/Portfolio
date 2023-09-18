<script lang="ts">
	import { Skill } from '$lib/models/skill.type';
	import SplitType from 'split-type';
	import { onMount } from 'svelte';

	let frontendSkills: Skill[] = [
		new Skill('Angular', 8, 'https://angular.io/assets/images/logos/angular/angular.svg'),
		new Skill(
			'Javascript',
			5.5,
			'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'
		),
		new Skill(
			'Typescript',
			6,
			'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'
		),
		new Skill(
			'HTML',
			6,
			'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg'
		),
		new Skill(
			'CSS',
			6,
			'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg'
		),
		new Skill('Git', 8, 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg')
	];

	let backendSkills: Skill[] = [
		new Skill(
			'C#',
			9.5,
			'https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png'
		),
		new Skill(
			'Javascript',
			5.5,
			'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'
		),
		new Skill(
			'Typescript',
			6,
			'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'
		),
		new Skill(
			'Firebase',
			9,
			'https://firebase.google.com/static/downloads/brand-guidelines/SVG/logo-logomark.svg'
		),
		new Skill(
			'Python',
			5.5,
			'https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg'
		)
	];

	let mobileSkills: Skill[] = [
		new Skill(
			'Flutter',
			10,
			'https://storage.googleapis.com/cms-storage-bucket/4fd5520fe28ebf839174.svg'
		),
		new Skill('Dart', 10, 'https://upload.wikimedia.org/wikipedia/commons/9/91/Dart-logo-icon.svg')
	];

	let title: HTMLElement;

	onMount(() => {
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: '#skill-wrapper',
				start: 'top center',
				end: 'center center',
				scrub: 1,
				markers: false
			}
		});

		let titleWords = new SplitType(title, { types: 'chars' });

		tl.fromTo(
			titleWords.chars,
			{ opacity: 0, duration: 1, y: 40 },
			{ opacity: 1, duration: 1, y: 0, stagger: 0.1 },
			0
		);
		var skillGroups = gsap.utils.toArray('.skill-group');
		tl.fromTo(
			skillGroups,
			{
				opacity: 0,
				y: 500
			},
			{ opacity: 1, duration: 1, y: 0, ease: 'power2.out', stagger: 1 },
			0
		);
	});
</script>

<div class="wrapper" id="skill-wrapper">
	<h1 class="title-text" bind:this={title}>Skills</h1>

	<div class="layout">
		<div class="skill-group">
			<h2>Frontend</h2>
			<div class="skills">
				{#each frontendSkills as item}
					<div class="skill">
						<img src={item.imageUrl} alt="skill icon" />
						<p>{item.name}</p>
					</div>
				{/each}
			</div>
		</div>
		<div class="skill-group">
			<h2>Backend</h2>
			<div class="skills">
				{#each backendSkills as item}
					<div class="skill">
						<img src={item.imageUrl} alt="skill icon" />
						<p>{item.name}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
	<div class="skill-group">
		<h2>Mobile</h2>
		<div class="skills">
			{#each mobileSkills as item}
				<div class="skill">
					<img src={item.imageUrl} alt="skill icon" />
					<p>{item.name}</p>
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	@import '$lib/variables.scss';

	.wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.layout {
		// Layout that makes the 2 first items appear on the same row and the 3rd on the next centered\
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-wrap: wrap;
		width: 100%;
		margin-inline: 2rem;
	}

	.skill-group {
		width: 30%;
		padding: 20px 50px;
		border-radius: 20px;
		border: 2px solid $primary30;
		margin-bottom: 2rem;

		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		box-shadow: 0 0 10px 0 $primary30;
		background-color: rgba($primary30, 0.1);
		transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
		transition-property: scale, background-color;

		h2 {
			font-size: 1.5rem;
			font-weight: 500;
			letter-spacing: 1px;
			text-align: center;
			margin-bottom: 1rem;
		}

		&:hover {
			box-shadow: 0 0 10px 0 $primary30;
			background-color: rgba($primary30, 0.2);
			scale: 1.05 !important;
		}
	}

	.skills {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		justify-content: space-evenly;
		align-items: center;

		& > * {
			margin: 1.5rem;
		}
	}

	.skill {
		$duration: 400ms;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		transition: all $duration cubic-bezier(0.165, 0.84, 0.44, 1);

		img {
			width: 3rem;
			height: 4rem;
			aspect-ratio: 1;
			object-fit: scale-down;
		}

		p {
			text-align: center;
			font-size: 1.2rem;
			letter-spacing: 1px;
			transition: all $duration cubic-bezier(0.165, 0.84, 0.44, 1);
		}

		&:hover {
			transform: scale(1.2);

			p {
				letter-spacing: 2px;
			}
		}
	}

	@media (width <= 1000px) {
		.skill-group {
			width: 50%;
			min-width: 300px;
			margin-bottom: 2rem;
			margin-inline: 2rem !important;
		}
	}

	@media (width <= 1600px) {
		.layout {
			display: flex;
			flex-direction: row;
			justify-content: space-evenly;
			align-content: center;
			width: 100%;
		}

		.skill-group {
			width: 50%;

			min-width: 300px;
			margin-bottom: 2rem;
		}
	}
</style>
