<script lang="ts">
	import { dialogue } from '$lib/stores';
	export let className = '';
	export {className as class}
	export let open = false;
</script>

{#if open}
	<button
		on:click={() => {
			dialogue.set('NONE');
			open = !open;
		}}
		class="fixed top-0 left-0 z-50 h-full w-full bg-slate-900/[.4] cursor-default"
	/>

	<div
		class="fixed left-1/2 top-10 -translate-x-1/2 bg-white z-50 rounded-md shadow-md p-2 md:p-6 {className} "
	>
		<slot />
	</div>
{/if}
