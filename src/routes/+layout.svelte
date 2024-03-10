<script>
	import { onMount } from 'svelte';
	import { ParaglideJS } from '@inlang/paraglide-js-adapter-sveltekit'
	import { i18n } from '$lib/i18n'
	import Analytics from '$lib/analytics.svelte';
	import AOS from "aos";
	import 'aos/dist/aos.css';
	import '../css/app.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	onMount(() => {
		AOS.init();
	});
</script>

<Analytics />
<ParaglideJS {i18n}>
	<Header />
	<slot />
	<Footer />
</ParaglideJS>
