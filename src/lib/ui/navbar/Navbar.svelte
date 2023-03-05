<script lang="ts">
	import { dialogue } from '$lib/stores';
	import Settings from './Settings.svelte';
</script>

<nav
	class="fixed w-full top-0 z-40 bg-white flex border-b-1 border-slate-300 px-6 py-4 items-center justify-between dark:bg-black dark:border-gray-600"
>
	<section class="flex items-center gap-4">
		<a
			href="/"
			class="font-semibold text-sm md:text-lg text-blue-500 hover:text-blue-300 dark:hover:text-blue-300 dark:text-blue-400"
			>MyNetsat</a
		>

		<div class="text-xs md:text-sm text-slate-700 dark:text-slate-300">
			<button
				class=" hover:bg-slate-100 rounded-md p-2 dark:hover:bg-zinc-900"
				on:click={() => {
					dialogue.set('PAYMENT_QR');
				}}>สนับสนุน</button
			>
			<a
				class=" hover:bg-slate-100 rounded-md p-2 dark:hover:bg-zinc-900"
				target="_blank"
				rel="noreferrer"
				href="https://admissions.kku.ac.th/kkuquota66/">เกณฑ์คะแนน</a
			>
		</div>
	</section>
	<Settings />
</nav>
