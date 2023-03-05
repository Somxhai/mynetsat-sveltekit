<script lang="ts">
	import SearchCard from '$lib/component/card/SearchCard.svelte';
	import MediumContainer from '$lib/component/container/MediumContainer.svelte';
	import { netsatData } from '$lib/stores';
	export let search: string;

	import type { NetsatType } from '$lib/types';

	$: searchResult = $netsatData
		.filter((data) => {
			const SEARCH_IS_RELATIVE = (data.faculty + ' ' + data.syllabus).includes(search.trim());
			if (SEARCH_IS_RELATIVE) {
				return data;
			}
		})
		.map((relativeData) => {
			return { component: SearchCard, value: relativeData as NetsatType };
		});
</script>

{#if searchResult.length > 0}
	<section
		class="[&>*]:border-b-2 first:border-black max-h-[30rem] overflow-y-auto dark:[&>*]:border-black"
	>
		{#each searchResult as result}
			<svelte:component this={result.component} data={result.value} />
		{/each}
	</section>
{:else}
	<MediumContainer class="flex justify-center items-center">
		<p class="text-sm text-red-500 text-center">ไม่เจอคณะหรือสาขานี้</p>
	</MediumContainer>
{/if}
