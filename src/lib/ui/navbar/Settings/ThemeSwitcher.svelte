<script lang="ts">
	import { enhance } from '$app/forms';
	import Ghost from '$lib/component/button/Ghost.svelte';
	import DropdownItem from '$lib/component/dropdown/DropdownItem.svelte';
	import Moon from '$lib/component/icons/Moon.svelte';
	import Sun from '$lib/component/icons/Sun.svelte';
	import { theme } from '$lib/stores';

	$: text = $theme === 'dark' ? 'โหมดสว่าง' : 'โหมดมืด';
</script>

<form
	use:enhance={() => {
		document.documentElement.setAttribute('class', $theme);
	}}
	method="POST"
	action="?/theme"
	class="w-full dark:text-slate-100 "
>
	<DropdownItem
		class="h-full"
		type="submit"
		onClick={() => {
			theme.set($theme === 'dark' ? 'light' : 'dark');
		}}
	>
		<Ghost class="flex items-center w-full gap-1">
			{#if $theme === 'dark'}
				<Sun class="w-4 h-4" />
			{:else}
				<Moon class="w-4 h-4" />
			{/if}
			<span>{text}</span>
		</Ghost>
		<input type="text" name="theme" value={$theme} hidden />
	</DropdownItem>
</form>
