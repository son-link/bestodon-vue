<script setup>
import IconGhPages from "./icons/IconGhPages.vue";
</script>
<template>
	<div class="w-full pl-14 pr-2 max-w-5xl mt-2 m-4 p-2 max-w-5xl mx-auto text-neutral-500 flex-wrap gap-8 md:flex md:mx-auto md:p-0">
		<div>
			<p class="text-white font-bold mb-2">
				Bestodon
			</p>
			<p>
				Under the GNU/GPLv3 or newer license.
			</p>
		</div>
		<div>
			<p class="text-white font-bold my-2 md:mt-0">
				Powered by
			</p>
			<p>
				<IconGhPages />
			</p>
		</div>
		<div>
			<p class="text-white font-bold my-2 md:mt-0">
				Make with
			</p>
			<div class="grid grid-cols-2 gap-2 w-full md:mx-auto md:grid-cols-3 md:px-0">
				<a href="https://axios-http.com/" target="_blank" class="hover:text-white">
					Axios
				</a>
				<a href="https://heroicons.com/" target="_blank" class="hover:text-white">
					Heroicons
				</a>
				<a href="https://simpleicons.org/" target="_blank" class="hover:text-white">
					Simple Icons
				</a>
				<a href="https://tailwindcss.com/" target="_blank" class="hover:text-white">
					Tailwind CSS
				</a>
				<a href="https://vuejs.org" target="_blank" class="hover:text-white">
					Vue
				</a>
			</div>
		</div>
		<div>
			<p class="text-white font-bold my-2 md:mt-0">
				Links
			</p>
			<p>
				<ul>
					<li>
						<a href="https://github.com/son-link/bestodon" target="_blank" class="hover:text-white">
							Source code
						</a>
					</li>
					<li>
						<a href="https://joinmastodon.org/" target="_blank" class="hover:text-white">
							Join Mastodon
						</a>
					</li>
				</ul>
			</p>
		</div>
	</div>
</template>