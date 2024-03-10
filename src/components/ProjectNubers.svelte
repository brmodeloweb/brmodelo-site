<script>
	import * as m from "$paraglide/messages"
</script>

<section id="ProjectNumbers" data-aos="fade-up">
	<div class="bg-white py-24 border-y-2">
		<h2 class="sr-only mb-24 text-3xl font-bold text-center tracking-tight text-gray-900 sm:text-4xl">{m.Numbers_title()}</h2>
		<div class="mx-auto max-w-6xl px-6">
			<dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
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
			
		</div>
	</div>
</section>