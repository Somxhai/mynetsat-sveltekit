<script lang="ts">
	import { dialogue } from '$lib/stores';
</script>

<nav
	class="fixed w-full top-0 z-40 bg-white flex border-b-1 border-slate-300 gap-4 px-6 py-4 items-center"
>
	<a href="/" class="font-semibold text-sm md:text-lg text-black">MyNetsat</a>

	<div class="text-xs md:text-sm text-slate-700">
		<button
			class=" hover:bg-slate-100 rounded-md p-2"
			on:click={() => {
				dialogue.set('PAYMENT_QR');
			}}>สนับสนุน</button
		>
		<a
			class=" hover:bg-slate-100 rounded-md p-2"
			target="_blank"
			rel="noreferrer"
			href="https://admissions.kku.ac.th/kkuquota66/">เกณฑ์คะแนน</a
		>
	</div>
</nav>
