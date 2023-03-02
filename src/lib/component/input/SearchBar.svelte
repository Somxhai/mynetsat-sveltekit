<script lang="ts">
	import { onMount } from 'svelte';
	import MagnifyGlass from '../icons/MagnifyGlass.svelte';

	export let placeholder = '';
	export let result: string = '';
	export let name: string;
	onMount(() => {
		result = '';
	});
</script>

<div
	class="flex items-center px-2 my-4 rounded-md ring-2 ring-slate-300 border-slate-300 dark:border-black dark:bg-black focus-within:ring-slate-400 focus-within:outline-none"
>
	<label for={name}><MagnifyGlass class="w-4 h-4 cursor-text" /></label>

	<input
		bind:value={result}
		{name}
		id={name}
		type="text"
		{placeholder}
		class="py-2 px-3 outline-none w-full dark:bg-black dark:placeholder:text-gray-400"
	/>
</div>
