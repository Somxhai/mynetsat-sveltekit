<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let onClick = () => {};
	export let className: string = '';
	export let type: 'button' | 'submit' | 'reset' | null | undefined = 'button';
	export { className as class };
</script>

<button
	on:click={onClick}
	{type}
	class={twMerge(
		'hover:bg-slate-100 w-full  text-sm md:text-base py-2 px-1 text-slate-700 dark:hover:bg-zinc-900 rounded-sm flex items-center gap-1 dark:text-slate-100',
		className
	)}
>
	<slot />
</button>
