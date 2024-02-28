<script>
	import { onMount } from 'svelte';
	import AOS from "aos";
	import 'aos/dist/aos.css';
	import '../css/app.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	onMount(() => {
		AOS.init();
	});
</script>

<Header />
<slot />
<Footer />
