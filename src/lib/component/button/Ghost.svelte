<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	export let className: string = '';
	export let onClick = () => {};
	export let type: 'button' | 'submit' | 'reset' | null | undefined = 'button';
	export { className as class };
</script>

<button
	{type}
	on:click={onClick}
	class={twMerge('hover:bg-slate-100 dark:hover:bg-zinc-900 rounded-md', className)}
>
	<slot />
</button>
