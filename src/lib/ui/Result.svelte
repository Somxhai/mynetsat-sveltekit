<script lang="ts">
	import ScoreCard from '$lib/component/card/ScoreCard.svelte';
	import Trash from '$lib/component/icons/Trash.svelte';
	import Warning from '$lib/component/icons/Warning.svelte';
	import { selectFaculty } from '$lib/stores';
</script>

<section class="py-6">
	<h1 class="text-center text-2xl">ผลคะแนน</h1>

	<div class="relative h-[32rem] bg-slate-100 mx-4 my-2 rounded-md">
		{#if $selectFaculty.size > 0}
			<div class="p-2 space-y-2 max-h-[32rem] overflow-y-auto">
				{#each Array.from($selectFaculty) as data}
					<ScoreCard {data} />
				{/each}
			</div>
		{:else}
			<div class="flex items-center justify-center h-[inherit] space-x-2">
				<Warning class="text-yellow-500" />
				<span class="text-sm">เลือกคณะก่อน</span>
			</div>
		{/if}
	</div>
</section>
