<script lang="ts">
	import Dialogue from '$lib/component/dialogue/Dialogue.svelte';
	import DialogueContent from '$lib/component/dialogue/DialogueContent.svelte';
	import DialogueHeader from '$lib/component/dialogue/DialogueHeader.svelte';
	import SearchBar from '$lib/component/input/SearchBar.svelte';
	import { dialogue } from '$lib/stores';

	import RecentFaculty from './faculties/RecentFaculty.svelte';
	import SearchFaculty from './faculties/SearchFaculty.svelte';

	let result = '';
	$: SEARCHING = result.length > 0;
</script>

<Dialogue open={$dialogue == 'FACULTIES'} class="min-w-[80%] md:min-w-[50%]">
	<DialogueHeader>เลือกคณะ/สาขา</DialogueHeader>
	<DialogueContent>
		<SearchBar bind:result name="search" placeholder="อยากเข้าคณะอะไร?" />
		{#if SEARCHING}
			<SearchFaculty search={result} />
		{:else}
			<RecentFaculty />
		{/if}
	</DialogueContent>
</Dialogue>
