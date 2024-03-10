<script>
	import Main from '../components/Main.svelte';
	import * as m from "$paraglide/messages"
	import OgPreview from '$lib/img/og-preview.png';
</script>

<svelte:head>
	<title>BRMW - Modelagem de banco de dados online</title>
	<meta property="og:url" content="https://brmodeloweb.com"/>
	<meta property="og:image" content="{OgPreview}"/>
	<meta property="og:site_name" content="{m.BRMW()}"/>
	<meta property="og:title" content="{m.title()}"/>
	<meta property="og:description" content="{m.Og_description()}"/>
</svelte:head>

<Main />
