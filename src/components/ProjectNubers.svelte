<script>
	import * as m from "$paraglide/messages"
</script>

<section id="ProjectNumbers" data-aos="fade-up">
	<div class="bg-white py-24 border-y-2">
		<div class="mx-auto max-w-6xl px-6">
			<dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 pb-16">
				<div class="mx-auto flex max-w-xs flex-col gap-y-4">
					<dt class="text-base leading-7 text-gray-600">{m.Numbers_users()}</dt>
					<dd class="order-first text-6xl font-semibold tracking-tight text-gray-800">{m.Numbers_users_value()}</dd>
				</div>
				<div class="mx-auto flex max-w-xs flex-col gap-y-4">
					<dt class="text-base leading-7 text-gray-600">{m.Numbers_models()}</dt>
					<dd class="order-first text-6xl font-semibold tracking-tight text-gray-800">{m.Numbers_models_value()}</dd>
				</div>
				<div class="mx-auto flex max-w-xs flex-col gap-y-4">
					<dt class="text-base leading-7 text-gray-600">{m.Numbers_access()}</dt>
					<dd class="order-first text-6xl font-semibold tracking-tight text-gray-800">{m.Numbers_access_value()}</dd>
				</div>
			</dl>
			<div class="flex justify-center text-center">
				<div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
					<span>{m.Banner_help_content()}</span>
					<a href="#SupportUs" class="font-semibold text-teal-700 hover:text-teal-800">
						<span>{m.Banner_help_CTA()}</span>
						<span aria-hidden="true">&rarr;</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>