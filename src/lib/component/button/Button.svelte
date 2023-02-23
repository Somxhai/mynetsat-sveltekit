<script lang="ts">
	export let className: string = '';
	export let type: 'button' | 'submit' | 'reset' | null | undefined = 'button';
	export let onClick = () => {};
	export { className as class };
</script>

<button
	{type}
	on:click={onClick}
	class="bg-slate-900 hover:bg-slate-700 text-white p-2 rounded-md {className}"
>
	<slot />
</button>
