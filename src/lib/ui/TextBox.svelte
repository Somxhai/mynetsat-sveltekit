<script lang="ts">
	import Input from '../component/input/Input.svelte';
	import Label from '../component/input/Label.svelte';

	export let name: string;
	export let title: string = '';
	export let placeholder: string = '';
	export let description: string = '';
	export let type: 'number' | 'text' = 'text';
	export let highlight: boolean = false;
</script>

<div class="grid w-full max-w-sm items-center gap-2 ">
	<Label htmlFor={name} text={title} />
	<Input {highlight} inputType={type} {name} {placeholder} />
	{#if description}
		<p class="text-xs text-slate-500">{description}</p>
	{/if}
</div>
