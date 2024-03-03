<script lang="ts">
	import * as m from "$paraglide/messages"
	import { availableLanguageTags } from "$paraglide/runtime";
	import { page } from "$app/stores";
	import { i18n } from "$lib/i18n.js";
</script>

<aside id="LanguageSwitcher" class="mb-8 md:text-right ">
	<h4 class="text-sm mb-2">{m.Language_title()}</h4>
	{#each availableLanguageTags as lang}
		<a
			class="
				inline-block
				uppercase 
				px-1
				border-2
				rounded
				border-teal-800
				text-teal-800
				mr-2
				font-semibold
				text-sm
				hover:bg-teal-800
				hover:text-white
				md:mr-0
				md:ml-2
			"
			href={i18n.route($page.url.pathname)} 
			hreflang={lang}>{lang}</a>
	{/each}
</aside>