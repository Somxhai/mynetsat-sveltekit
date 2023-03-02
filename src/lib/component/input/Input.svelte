<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let name: string;
	export let placeholder: string = '';
	export let className = '';
	export let highlight = false;
	let value: string = '';
	export { className as class };
	export let inputType: 'number' | 'text' = 'text';

	const numberInputInvalidChars = ['-', '+', 'e', 'E'];
</script>

{#if inputType == 'number'}
	<input
		type="number"
		on:keydown={(e) => {
			if (numberInputInvalidChars.includes(e.key)) {
				e.preventDefault();
			}
		}}
		step="any"
		bind:value
		class={twMerge(
			`flex h-10 w-full rounded-md border dark:border-gray-600 dark:focus:border-white ${
				highlight && 'border-blue-400'
			} bg-transparent py-2 px-3 text-sm placeholder:text-slate-400 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 dark:ring-offset-black focus:ring-offset-2 focus:ring-sky-600`,
			className
		)}
		{name}
		{placeholder}
	/>
{:else}
	<input
		type="text"
		bind:value
		class={twMerge(
			`flex h-10 w-full rounded-md border dark:border-gray-600 dark:focus:border-white  ${
				highlight && 'border-blue-400'
			} bg-transparent py-2 px-3 text-sm placeholder:text-slate-400 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 dark:ring-offset-black focus:ring-offset-2 focus:ring-sky-600`,
			className
		)}
		{name}
		{placeholder}
	/>
{/if}

<style>
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	input[type='number'] {
		-moz-appearance: textfield;
		appearance: textfield;
	}
</style>
