<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import type { Project } from '$lib/models/project.type';
	import SplitType from 'split-type';
	import { onMount } from 'svelte';

	let projects: Project[] = [
		{
			name: 'ReportR',
			description:
				'ReportR is an innovative app that provides a practical solution to the everyday challenges faced by large organizations, such as schools and businesses. The app aims to simplify the process of managing and resolving issues that can arise in these organizations, making it easier for them to maintain a smooth and efficient operation by user contribution. I gained valuable skills in teamwork, coordination, and adaptability.',
			downloadFileLink: '',
			github: 'https://github.com/kaloyanstoyanov06/reportr',
			imageUrl:
				'https://github.com/KaloyanStoyanov06/reportr/blob/master/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png?raw=true',
			startToEnd: '04/2023',
			images: [
				'/projects/ReportR/1.webp',
				'/projects/ReportR/8.webp',
				'/projects/ReportR/2.webp',
				'/projects/ReportR/3.webp',
				'/projects/ReportR/4.webp',
				'/projects/ReportR/5.webp',
				'/projects/ReportR/6.webp',
				'/projects/ReportR/7.webp',
				'/projects/ReportR/9.webp',
				'/projects/ReportR/10.webp',
				'/projects/ReportR/11.webp'
			]
		},
		{
			name: 'EducateIO',
			description:
				"EducateIO is a cutting-edge mobile application built on the Flutter framework, designed to revolutionize the way individuals find teachers and learn specific subjects. Whether you're a student seeking personalized education or a private tutor who looks to advertise themselves to more students, Another notable feature of the platform is its facilitation of student collaboration and the exchange of knowledge between students. Throughout my experience, I also acquired practical expertise in utilizing Firebase, specifically its authentication and Firestore functionalities, complementing my proficiency in leveraging Android APIs and Google Maps APIs to create feature-rich mobile applications with intuitive interfaces and advanced mapping functionalities.",
			downloadFileLink: '',
			github: 'https://github.com/KaloyanStoyanov06/educate_io',
			imageUrl:
				'https://github.com/KaloyanStoyanov06/educate_io/blob/master/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png?raw=true',
			startToEnd: '12/2022 - 02/2023',
			images: [
				'/projects/EducateIO/10.webp',
				'/projects/EducateIO/7.webp',
				'/projects/EducateIO/3.webp',
				'/projects/EducateIO/4.webp',
				'/projects/EducateIO/1.webp',
				'/projects/EducateIO/2.webp',
				'/projects/EducateIO/5.webp',
				'/projects/EducateIO/6.webp',
				'/projects/EducateIO/8.webp',
				'/projects/EducateIO/9.webp',
				'/projects/EducateIO/11.webp',
				'/projects/EducateIO/12.webp',
				'/projects/EducateIO/13.webp',
				'/projects/EducateIO/14.webp'
			]
		},
		{
			name: 'School Program',
			description:
				"This mobile application is developed using the Flutter framework and utilizes local storage to store program data. It enables users to conveniently schedule recurring programs from Monday to Friday and set reminders for homework and tests. It's extremely useful for students and teachers. I developed proficiency in utilizing local storage and saving settings within the mobile application, optimizing user experience and data management.",
			downloadFileLink: '',
			github: 'https://github.com/mutenoic/CharGO',
			imageUrl:
				'https://github.com/KaloyanStoyanov06/school_program/blob/main/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png?raw=true',
			startToEnd: '09/2022',
			images: [
				'/projects/School/1.webp',
				'/projects/School/2.webp',
				'/projects/School/3.webp',
				'/projects/School/4.webp',
				'/projects/School/5.webp',
				'/projects/School/6.webp',
				'/projects/School/7.webp',
				'/projects/School/8.webp'
			]
		},
		{
			name: 'CharGO',
			description:
				'CharGO is a mobile app that aims to revolutionize the way users find and reserve electric car chargers.With a user- friendly interface, CharGO simplifies the process of locating and booking charging stations, providing a seamless experience for electric vehicle owners. I developed the ability to construct and present innovative ideas effectively.',
			downloadFileLink: '',
			github: 'https://github.com/mutenoic/CharGO',
			imageUrl:
				'https://camo.githubusercontent.com/b9b0ac02657b31fabe92e3240e8eb7278c7ade3879fdd7879eabdd16b345b42d/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f313039303434353336303835393732353836342f313131343439323333393932333230363135342f63686172676f5f6e6f5f62672e706e67',
			startToEnd: '06/2023',
			images: [
				'/projects/CharGO/6.webp',
				'/projects/CharGO/2.webp',
				'/projects/CharGO/1.webp',
				'/projects/CharGO/3.webp',
				'/projects/CharGO/4.webp',
				'/projects/CharGO/5.webp'
			]
		}
	];

	let title: HTMLElement;

	onMount(() => {
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: '#project-wrapper',
				start: 'top center',
				end: '+=300',
				scrub: 1
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

<div class="wrapper" id="project-wrapper">
	<h1 class="title-text" bind:this={title}>Projects</h1>

	<div class="layout">
		{#each projects as project}
			<div class="project">
				<ProjectCard {project} />
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	@import '$lib/variables.scss';

	.layout {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}

	.project {
		margin-block: 2rem;
	}
</style>
