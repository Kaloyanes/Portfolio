<script lang="ts">
	import LocationEnter from 'svelte-material-icons/LocationEnter.svelte';
	import Email from 'svelte-material-icons/Email.svelte';
	import Phone from 'svelte-material-icons/Phone.svelte';
	import School from 'svelte-material-icons/School.svelte';
	import type { Social } from '$lib/models/social.type';
	import { Firestore, addDoc, collection, doc, setDoc } from 'firebase/firestore';
	import { onMount } from 'svelte';

	import SplitType from 'split-type';
	import { fade, fly } from 'svelte/transition';

	let db: Firestore;

	onMount(async () => {
		const { firestore } = await import('$lib/firebase');
		db = firestore;
	});

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

	let email: string = '';
	let message: string = '';
	let toast: HTMLElement;
	function mail() {
		email = email.trim();
		message = message.trim();

		if (email === '' || message === '') {
			alert('Please fill all the fields!');
			return;
		}

		if (email.includes('@') === false) {
			alert('Please enter a valid email!');
			return;
		}

		try {
			addDoc(collection(db, 'mail'), {
				to: ['kaloyangfx@gmail.com'],
				message: {
					subject: `New message from ${email.trim()}!`,
					html: `
          <body style="font-family: Arial, sans-serif; background-color: #f0f0f0; margin: 0; padding: 0;">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="80%" style="max-width: 600px; margin: 20px auto; padding: 20px; background-color: #ffffff; border: 1px solid #cccccc; border-radius: 5px;">
              <tr>
                <td>
                  <h1 style="font-size: 24px; color: #333333;">New Message from Visitor!</h1>
                  <p style="font-size: 16px; color: #666666;"><strong>Email from:</strong>${email}</p>
                  <div class="message" style="margin-top: 20px;">
                    <h2 style="font-size: 20px; color: #333333;">Message:</h2>
                    <p style="font-size: 16px; color: #666666;">${message}</p>
                  </div>
                </td>
              </tr>
            </table>
          </body>
                    `
				}
			});
		} catch (e) {
			console.log(e);
			type = 'failure';
			email = '';
			message = '';
			showToast();
			return;
		}
		email = '';
		message = '';
		type = 'success';
		showToast();
	}

	function showToast() {
		gsap.fromTo(
			toast,
			{ y: 50, opacity: 0, scale: 0.2 },
			{ y: 0, opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' }
		);

		setTimeout(() => {
			gsap.fromTo(
				toast,
				{ y: 0, opacity: 1, scale: 1 },
				{ y: 50, opacity: 0, scale: 0.2, duration: 0.3, ease: 'power2.out' }
			);
		}, 5000);
	}

	let type: string = 'success'; // TYPE CAN BE SUCCESS OR FAILURE

	let wrapper: HTMLElement;

	let title: HTMLElement;
	let thank: HTMLElement;
	let contact: HTMLElement;

	let form: HTMLElement;

	onMount(() => {
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: wrapper,
				start: '-100 center',
				end: '+=500',
				scrub: 2,
				markers: false
			}
		});

		let titleWords = new SplitType(title, { types: 'chars' });
		let thankWords = new SplitType(thank, { types: 'words, chars' });
		let contactWords = new SplitType(contact, { types: 'words, chars' });

		let words = [...titleWords.chars!, ...thankWords.words!, ...contactWords.words!];
		console.log(words);

		tl.fromTo(
			words,
			{ y: 50, opacity: 0 },
			{ y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'ease' },
			0
		);

		var socialCards = document.querySelectorAll('.social-card');
		tl.fromTo(
			socialCards,
			{
				y: 100,
				opacity: 0,
				scale: 0.5
			},
			{
				y: 0,
				opacity: 1,
				scale: 1,
				duration: 1,
				stagger: 0.5,
				ease: 'ease'
			},
			0
		);

		tl.fromTo(
			form.children,
			{
				y: 200,
				opacity: 0,
				scale: 0.5
			},
			{
				scale: 1,
				y: 0,
				opacity: 1,
				duration: 2,
				stagger: 0.5,
				ease: 'ease'
			},
			0
		);
	});
</script>

<div class="wrapper" bind:this={wrapper}>
	<div class="text">
		<h1 class="title-text" bind:this={title}>Contact me</h1>
		<h3 bind:this={thank}>Thank you for visiting my portfolio!</h3>
		<h4 bind:this={contact}>
			Feel free to contact me if you have any questions or if you want to work with me!
		</h4>
	</div>
	<div class="layout">
		<div class="col">
			<div class="socials">
				{#each socials as social, i}
					<div
						class="social-card"
						tabindex={i}
						role="button"
						aria-label="Social media link"
						on:click={() => openLink(social.link)}
						on:keypress={() => openLink(social.link)}
					>
						<img src={social.imageUrl} alt={social.name} />
						<h2 id="name">{social.name}</h2>
					</div>
				{/each}
			</div>
		</div>

		<div>
			<form on:submit|preventDefault={mail} class="contact-form" bind:this={form}>
				<div class="inputBox">
					<label for="emailField">Email</label>
					<input type="email" bind:value={email} id="emailField" required />
				</div>
				<div class="inputBox">
					<label for="messageField">Message</label>
					<textarea bind:value={message} id="messageField" required cols="50" rows="30" />
				</div>

				<button type="submit">Send mail</button>
			</form>
			<div class="toast" class:success={type === 'success'} bind:this={toast}>
				{#if type === 'success'}
					<h2>Message sent successfully!</h2>
				{:else}
					<h2>Message failed to send!</h2>
				{/if}
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@import '$lib/variables.scss';

	.text {
		width: 80%;
		margin-inline: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-bottom: 1rem;

		* {
			letter-spacing: 0.5px;
			transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);

			&:hover {
				letter-spacing: 1.5px;
			}
		}

		h3 {
			margin: 0;
		}
	}

	.wrapper {
		width: 100%;

		margin-bottom: 5rem;
		// margin-inline: 7rem;
	}

	.layout {
		display: flex;
		justify-content: space-evenly;
		flex-direction: row;
		align-items: center;
	}

	.col {
		flex: 0.5;
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
			border: 1px solid $primary30;

			margin-block: 1rem;
			max-width: 5rem;
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

			background-color: rgba($color: $color-primary-container-dark, $alpha: 0.6);
			transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
			box-shadow: 0 10px 40px $primary30;

			user-select: none;
			letter-spacing: 1px;

			img {
				width: 50px;
				transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
			}

			&:hover {
				background-color: rgba($color: $color-primary-container-dark, $alpha: 1);
				scale: 1.1 !important;
				transform: translateY(-10px) !important;
				box-shadow: 0 20px 60px $primary30;
				letter-spacing: 3px;

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

		margin-top: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.inputBox {
			display: flex;
			flex-direction: column;

			margin-block: 1rem;
			width: 100%;

			input,
			textarea {
				height: 1rem;
				padding: 0.5rem;
				border: 1px solid $primary30;

				// Change opacity of $color-primary-container-dark
				background-color: rgba($color-primary-container-dark, 0.4);

				border-radius: 10px;
				outline: none;
				color: #fff;
				font-size: 1em;
				font-weight: 400;
				letter-spacing: 1px;
				line-height: 1.5rem;
				padding: 1rem;
				transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
				box-shadow: 0 5px 20px $primary30;
				border: 1px solid $primary30;

				&:hover {
					scale: 1.05;
					background-color: rgba($color-primary-container-dark, 0.5);
					box-shadow: 0 20px 25px $primary30;
				}

				&:active,
				&:focus {
					border-radius: 20px;
					scale: 1.1;
					box-shadow: 0 20px 30px $primary30;
					background-color: rgba($color-primary-container-dark, 0.6);
				}
			}

			textarea {
				font-family: Arial, sans-serif !important;
				min-height: 7rem;
				resize: none;
				font-size: 1rem;
			}

			label {
				font-weight: 400;
				font-size: 1rem;
				margin-bottom: 10px;
				transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);

				&:hover {
					letter-spacing: 2px;
				}
			}
		}

		button {
			width: 60%;
			font-size: 1.2rem;
			letter-spacing: 0.5px;
			margin-bottom: 2rem;
			border-radius: 10px;
			border: 1px solid $primary30;

			color: white;
			background-color: rgba($color: $color-primary-container-dark, $alpha: 0.7);
			text-decoration: none;
			transition: all 600ms cubic-bezier(0.165, 0.84, 0.44, 1);
			box-shadow: 0px 0px 20px $color-primary-container-dark;
			padding: 1rem;
			margin-top: 2rem;
			text-align: center;
			cursor: pointer;

			&:hover {
				border-radius: 20px;
				box-shadow: 0px 0px 50px $color-primary-container-dark;
				background-color: rgba($color: $color-primary-container-dark, $alpha: 1);

				color: #f5f5f5;
				scale: 1.1 !important;
			}
		}
	}

	.toast {
		background-color: rgba($tertiary20, 0.5);
		text-align: center;
		border-radius: 20px;
		box-shadow: 0px 10px 20px $tertiary20;
		transition: all 600ms cubic-bezier(0.165, 0.84, 0.44, 1);

		letter-spacing: 1px;
		padding: 0.5rem 1rem;
		opacity: 0;
		scale: 0.2;
		translate: 0px 50px;

		&:hover {
			box-shadow: 0px 10px 30px $tertiary20;
			scale: 1.1 !important;
		}
	}

	.success {
		background-color: rgba(#00c853, 0.5) !important;
		box-shadow: 0px 10px 30px #00c853 !important;
	}

	@media (max-width: 1000px) {
		.wrapper {
			margin-bottom: 0;

			margin-inline: 0rem;
		}

		.layout {
			flex-direction: column;
		}

		.col {
			width: 100%;
		}

		.text {
			text-align: center;
		}

		.contact-form {
			margin-inline: auto;
			width: 80%;
		}
	}

	#messageField {
		text-align: start !important;
	}

	@media (max-width: 1100px) {
		.wrapper {
			margin-bottom: 0;

			margin-inline: 0rem;
		}
		.contact-form {
			flex-direction: column;
		}
	}

	@media (max-width: 1350px) {
		.wrapper {
			margin-bottom: 0;

			margin-inline: 0rem;
		}
		.socials {
			flex-wrap: wrap;
		}
	}
</style>
