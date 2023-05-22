<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { twMerge } from 'tailwind-merge';
	export let active: Writable<boolean>;
	export let className = '';
	export { className as class };
</script>

{#if $active}
	<button
		on:click={() => active.set(!$active)}
		class="fixed top-0 left-0 z-50 h-full w-full  cursor-default"
	/>
	<div
		class={twMerge(
			'absolute z-50 bg-white shadow-md rounded-md  border-1 border-slate-100 dark:shadow-zinc-800 dark:bg-[#121212] dark:border-zinc-800',
			className
		)}
	>
		<slot />
	</div>
{/if}
