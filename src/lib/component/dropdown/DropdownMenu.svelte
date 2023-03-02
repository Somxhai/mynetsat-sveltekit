<script lang="ts">
	import { writable } from 'svelte/store';
	import { twMerge } from 'tailwind-merge';
	export let className = '';
	export { className as class };
	let active = writable<boolean>(false);
</script>

<div class={twMerge('relative dark:text-slate-100', className)}>
	<slot {active} />
</div>
