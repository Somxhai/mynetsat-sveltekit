<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	export let className: string = '';
	export let type: 'button' | 'submit' | 'reset' | null | undefined = 'button';
	export let onClick = () => {};
	export { className as class };
</script>

<button
	{type}
	on:click={onClick}
	class={twMerge('hover:bg-slate-100 rounded-md p-2 dark:hover:bg-zinc-900', className)}
>
	<slot />
</button>
