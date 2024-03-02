<script>
	import * as m from "$paraglide/messages"
	import BRMW from './BRMW.svelte';
</script>
<section id="SupportUs">
	<div class="bg-gray-50 border-b-2 py-24">
		<div class="mx-auto max-w-6xl px-6" data-aos="fade-up">
			<h2 class="mb-24 text-3xl font-bold text-center tracking-tight text-gray-900 sm:text-4xl">{m.Support_title()}</h2>
			<div class="mx-auto sm:mt-20 lg:mt-24">
				<dl class="grid  grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-2">
					<div class="relative py-6 pl-24 pr-6 border-2 p-8 rounded-lg bg-white">
						<dt class="text-base font-semibold leading-7 text-gray-900">
							<div class="absolute left-6 top-8 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-700">
								<svg xmlns="http://www.w3.org/2000/svg" fill="white" width="32" height="32" viewBox="0 -960 960 960"><path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143Zm-90.998 125.458 57.307-246.766L128.85-534.23l252.613-21.922L480-788.842l98.537 232.69L831.15-534.23 639.691-368.308l57.307 246.766L480-252.463 263.002-121.542ZM480-430Z"/></svg>
							</div>
							<span>{m.Support_github_star_title()}</span>
						</dt>
						<dd class="mt-2 text-base leading-7 text-gray-600">
							<span>{m.Support_github_star_content()}</span>
						</dd>
					</div>
					<div class="relative py-6 pl-24 pr-6 border-2 p-8 rounded-lg bg-white">
						<dt class="text-base font-semibold leading-7 text-gray-900">
							<div class="absolute left-6 top-8 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-700">
								<svg width="32" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m69.233-69.233 70.307-240.306q-19-40.615-29.269-83.236-10.27-42.621-10.27-87.225 0-78.85 29.92-148.199 29.92-69.35 81.21-120.65 51.291-51.3 120.629-81.225 69.337-29.925 148.173-29.925t148.204 29.92q69.369 29.92 120.682 81.21 51.314 51.291 81.247 120.629 29.933 69.337 29.933 148.173t-29.925 148.204q-29.925 69.369-81.225 120.682-51.3 51.314-120.65 81.247Q558.85-100.001 480-100.001q-44.604 0-87.225-10.27-42.621-10.269-83.236-29.269L69.233-69.233ZM158-158l128-38q14.769-4 28.5-3.385 13.731.616 27.5 7.385 32 16 67 24t71 8q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 36 8 71t24 67q7 13 7.692 27.5.693 14.5-3.692 28.5l-38 128Zm292.001-172.001h59.998v-120h120v-59.998h-120v-120h-59.998v120h-120v59.998h120v120ZM479-479Z"/></svg>
							</div>
							<span>{m.Support_suggestions_title()}</span>
						</dt>
						<dd class="mt-2 text-base leading-7 text-gray-600">
							<span>{m.Support_suggestions_content()}</span>
						</dd>
					</div>
					<div class="relative py-6 pl-24 pr-6 border-2 p-8 rounded-lg bg-white">
						<dt class="text-base font-semibold leading-7 text-gray-900">
							<div class="absolute left-6 top-8 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-700">
								<svg width="32" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-200q66 0 113-47t47-113v-160q0-66-47-113t-113-47q-66 0-113 47t-47 113v160q0 66 47 113t113 47Zm-73.846-130.001h147.692v-59.998H406.154v59.998Zm0-160h147.692v-59.998H406.154v59.998ZM480-440Zm0 299.999q-59.615 0-110.115-29.308-50.499-29.307-80.191-80.692H180.001v-59.998h87.078q-6.078-24.616-6.578-49.809-.5-25.192-.5-50.193h-80v-59.998h80q0-25.385.116-50.578.115-25.193 6.962-49.424h-87.078v-59.998h109.693q14.384-24.539 34-44.731 19.615-20.192 44.923-34.039l-67.846-69.077 41.383-41.383 85.231 85.23q25.692-7.846 52-7.846 26.307 0 51.999 7.846l87.231-85.23 41.384 41.383-69.078 69.077q25.308 13.847 45.155 33.731 19.846 19.885 34.23 45.039h109.693v59.998h-87.078q6.847 24.231 6.962 49.424.116 25.193.116 50.578h80v59.998h-80q0 25.001-.5 50.193-.5 25.193-6.578 49.809h87.078v59.998H670.306q-29.692 51.385-80.191 80.692-50.5 29.308-110.115 29.308Z"/></svg>
							</div>
							<span>{m.Support_report_bugs_title()}</span>
						</dt>
						<dd class="mt-2 text-base leading-7 text-gray-600">
							<span>{m.Support_report_bugs_content()}</span>
						</dd>
					</div>
					<div class="relative py-6 pl-24 pr-6 border-2 p-8 rounded-lg bg-white">
						<dt class="text-base font-semibold leading-7 text-gray-900">
							<div class="absolute left-6 top-8 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-700">
								<svg width="28" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z"/></svg>
							</div>
							<span>{m.Support_coding_title()}</span>
						</dt>
						<dd class="mt-2 text-base leading-7 text-gray-600">
							<span>{m.Support_coding_content()}</span>
						</dd>
					</div>
				</dl>
				<dl class="grid grid-cols-1 pt-6">
					<div class="relative py-6 pl-24 pr-6 border-2 rounded-lg border-teal-500 bg-emerald-100">
						<dt class="text-base font-semibold leading-7 text-gray-900">
							<div class="absolute left-8 top-8 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-700">
							<svg width="32" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M450.231-130.001v-83.692Q398.001-223 360.27-254.5t-55.731-88.115l55.537-23.076q16.154 46.461 46.039 71.076 29.885 24.616 79.808 24.616 43.308 0 76.423-20.616Q595.462-311.23 595.462-356q0-38.846-24.885-62.039-24.884-23.192-102.961-48.423-81.769-25.846-113.577-60.461-31.808-34.616-31.808-87.077 0-60.384 42.385-95.038 42.385-34.654 85.615-38.5v-82.461h59.999v82.461q45.769 6.077 76.923 29.769 31.153 23.692 48.461 61.615l-54.768 25.076q-13.153-28.923-36.692-44.923-23.539-16-61.923-16-45.154 0-72.578 22Q382.23-648 382.23-614q0 34.923 28.077 55.846 28.077 20.924 104.384 43.847 70.924 21.538 105.847 61.384 34.923 39.846 34.923 95.692 0 65.615-42.193 101.846-42.192 36.231-103.038 42.923v82.461h-59.999Z"/></svg>
							</div>
							<span>{m.Support_donate_title()}</span>
						</dt>
						<dd class="mt-2 text-base leading-7 text-gray-600">
							{m.Support_donate_content()}
							<a class="font-semibold text-teal-700 hover:text-teal-800" href="https://github.com/sponsors/brmodeloweb" target="_blank">{m.Banner_help_CTA()}</a>
						</dd>
					</div>
				</dl>
			</div>
		</div>
	</div>
</section>
