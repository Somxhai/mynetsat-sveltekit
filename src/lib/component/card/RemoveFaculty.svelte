<script lang="ts">
	import { selectFaculty } from '$lib/stores';
	import type { NetsatType } from '$lib/types';
	import Trash from '../icons/Trash.svelte';

	export let data: NetsatType;
	export let isActive = false;
</script>

<button
	on:click={() => {
		selectFaculty.update((previous) => {
			previous.delete(data);
			return previous;
		});
	}}
	class="hover:bg-red-500 [&>svg]:hover:text-white px-4 z-20 bg-white dark:bg-black dark:hover:bg-red-500 {isActive
		? 'rounded-tl-md'
		: 'rounded-l-md'}"
>
	<Trash class="h-4 w-4 text-red-500 hover:text-white" />
</button>
