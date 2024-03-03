<script>
	import { page } from '$app/stores';

	$: {
		if (typeof gtag !== 'undefined') {
			gtag('config', 'G-JKVC6KGJ3P', {
				page_title: document.title,
				page_path: $page.url.pathname,
			});
		};
  };
</script>

<svelte:head>
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-JKVC6KGJ3P"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', 'G-JKVC6KGJ3P');
	</script>
</svelte:head>