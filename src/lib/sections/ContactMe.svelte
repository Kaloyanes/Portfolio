<script lang="ts">
	import type { Social } from '$lib/models/social.type';

	import Email from 'svelte-material-icons/Email.svelte';
	import Phone from 'svelte-material-icons/Phone.svelte';

	let socials: Social[] = [
		{
			name: 'Github',
			imageUrl: '/logos/github.svg',
			username: 'KaloyanStoyanov06',
			link: 'https://github.com/KaloyanStoyanov06'
		},
		{
			name: 'LinkedIn',
			imageUrl: '/logos/linkedin.svg',
			username: 'Kaloyan Stoyanov',
			link: 'https://www.linkedin.com/in/kaloyan-stoyanov-ba2799205/'
		},
		{
			name: 'Facebook',
			imageUrl: '/logos/facebook.svg',
			username: 'Калоян Стоянов',
			link: 'https://www.facebook.com/kalstst/'
		}
	];

	function openLink(link: string) {
		window.open(link, '_blank');
	}

	function launchMail() {
		window.open('mailto:kaloyangfx@gmail.com');
	}

	function call() {
		window.open('tel:+359879900137');
	}
</script>

<div class="wrapper">
	<h1 class="title-text">Contact me</h1>

	<div class="layout">
		<div class="col">
			<div class="socials">
				{#each socials as social}
					<div class="social-card" on:click={() => openLink(social.link)}>
						<img src={social.imageUrl} alt={social.name} />
						<h2 id="name">{social.name}</h2>
					</div>
				{/each}
			</div>

			<div class="info">
				<p class="info-tile"><mat-icon>location_on</mat-icon>Burgas</p>
				<p class="info-tile clickable" on:click={launchMail}>
					<Email /> kaloyangfx@gmail.com
				</p>
				<p class="info-tile clickable" on:click={call}>
					<Phone /> +359879900137
				</p>
				<p class="info-tile"><mat-icon>school</mat-icon>PGEE Burgas</p>
			</div>
		</div>

		<div class="contact-form" />
	</div>
</div>

<style lang="scss">
	@import '$lib/variables.scss';

	.wrapper {
		margin-bottom: 5rem;
	}

	.layout {
		display: flex;
		justify-content: space-evenly;
		flex-direction: row;
		align-items: center;
	}

	.col {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.socials {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-direction: row;
		flex-wrap: wrap;
		margin-block: 2rem;

		.social-card {
			cursor: pointer;
			margin-inline: 2rem;
			padding: 2rem;
			border-radius: 1rem;
			width: 5rem;

			flex: 1;
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			flex-direction: column;
			background-color: $color-primary-container-dark;
			transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
			box-shadow: 0 10px 40px $primary30;

			user-select: none;
			letter-spacing: 1px;

			img {
				width: 50px;
				transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
			}

			&:hover {
				background-color: $primary30;
				scale: 1.1;
				transform: translateY(-10px);
				box-shadow: 0 20px 60px $primary30;
				letter-spacing: 2px;

				img {
					scale: 1.1;
				}
			}

			&:active {
				transform: translateY(-5px);
				scale: 1.05;
				box-shadow: 0 10px 50px $primary30;
			}
		}
	}

	.contact-form {
		flex: 1;
	}
</style>
