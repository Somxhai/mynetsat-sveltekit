<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { dialogue } from '$lib/stores';
	export let className = '';
	export { className as class };
	export let open = false;
</script>

{#if open}
	<button
		on:click={() => {
			dialogue.set('NONE');
			open = !open;
		}}
		class="fixed top-0 left-0 z-50 h-full w-full bg-slate-900/[.4]  cursor-default"
	/>

	<div
		class={twMerge(
			'fixed left-1/2 top-10 w-[90%] md:w-auto -translate-x-1/2 bg-white border z-50 rounded-md shadow-md p-2 md:p-6 dark:shadow-gray-800 dark:bg-black dark:border-gray-900',
			className
		)}
	>
		<slot />
	</div>
{/if}
