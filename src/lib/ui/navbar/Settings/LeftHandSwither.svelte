<script lang="ts">
	import Ghost from '$lib/component/button/Ghost.svelte';
	import DropdownItem from '$lib/component/dropdown/DropdownItem.svelte';
	import Hand from '$lib/component/icons/Hand.svelte';
	import { settings } from '$lib/stores';
</script>

<DropdownItem
	onClick={() => {
		settings.update((previous) => {
			previous.leftHand = !previous.leftHand;
			return previous;
		});
	}}
>
	<Ghost class="flex items-center gap-1 w-full dark:text-slate-100">
		<Hand class="w-4 h-4" />
		<span
			>{#if $settings.leftHand}
				ถนัดขวา
			{:else}
				ถนัดซ้าย
			{/if}</span
		>
	</Ghost>
</DropdownItem>
