<script lang="ts">
	export let className: string = '';
	export let type: 'button' | 'submit' | 'reset' | null | undefined = 'button';
	export let onClick = () => {};
	export { className as class };
</script>

<button {type} on:click={onClick} class="{className}">
	<slot />
</button>
