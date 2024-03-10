<script>
	import * as m from "$paraglide/messages";

	let cssClass = "";
	export {cssClass as class};
</script>

<div class="flex justify-center text-center {cssClass}">
	<div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 bg-white bg-opacity-40">
		<span>{m.Banner_help_content()}</span>
		<a href="#SupportUs" class="font-semibold text-teal-700 hover:text-teal-800">
			<span>{m.Banner_help_CTA()}</span>
			<span aria-hidden="true">&rarr;</span>
		</a>
	</div>
</div>