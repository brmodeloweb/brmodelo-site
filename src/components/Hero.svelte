<script>
	import { particlesInit } from '@tsparticles/svelte';
	import { onMount } from 'svelte';
	import SupportBanner from './SupportBanner.svelte';
	import { loadSlim } from '@tsparticles/slim'; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
	import * as m from "$paraglide/messages"

	let ParticlesComponent;

	onMount(async () => {
		const module = await import('@tsparticles/svelte');

		ParticlesComponent = module.default;
	});

	let particlesConfig = {
		particles: {
			color: {
				value: '#115e59'
			},
			links: {
				enable: true,
				color: '#115e59'
			},
			move: {
				enable: true,
				speed: 0.2
			},
			number: {
				value: 80
			},
			size: {
				value: {
					min: 1,
					max: 3
				}
			}
		},
		interactivity: {
			events: {
				onClick: {
					enable: true,
					mode: 'push'
				}
			}
		},
		fullScreen: {
			enable: false,
			zIndex: 0
		}
	};

	let onParticlesLoaded = (event) => {
		const particlesContainer = event.detail.particles;
	};

	void particlesInit(async (engine) => {
		await loadSlim(engine);
	});
</script>
<section id="Hero" data-aos="fade-up">
	<div class="relative px-6 pt-24 pb-8">
		<div class="mx-auto max-w-2xl py-32">
			<div class="text-center">
				<SupportBanner class="mb-8" />
				<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{m.Hero_title()}</h1>
				<p class="mt-6 text-lg leading-8 text-gray-700">{m.Hero_tagline()}</p>
				<div class="mt-10 flex items-center justify-center gap-x-6">
					<a href="https://app.brmodeloweb.com/#!/register" class="rounded-md bg-teal-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">{m.Hero_cta_primary()}</a>
				</div>
			</div>
		</div>
	</div>
	<svelte:component
		id="tsparticles"
		this="{ParticlesComponent}"
		options="{particlesConfig}"
		on:particlesLoaded="{onParticlesLoaded}"
		style="position: absolute; inset: 0; z-index: 0; opacity: 0.5; pointer-events: none;"
	/>
</section>

<style>
	#Hero {
		position: relative;
		/* background: radial-gradient(circle at 10% 20%, rgb(161, 255, 206) 0%, rgb(250, 255, 209) 90%); */
		/* background: linear-gradient(to right, rgb(182, 244, 146), rgb(51, 139, 147)); */
		background: radial-gradient(circle at 10% 20%, rgb(116, 203, 199) 0%, rgb(220, 246, 200) 90%);
	}
</style>