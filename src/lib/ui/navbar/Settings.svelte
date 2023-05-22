<script lang="ts">
	import Subtle from '$lib/component/button/Subtle.svelte';
	import DropdownContent from '$lib/component/dropdown/DropdownContent.svelte';
	import DropdownGroup from '$lib/component/dropdown/DropdownGroup.svelte';
	import DropdownMenu from '$lib/component/dropdown/DropdownMenu.svelte';
	import DropdownSeparator from '$lib/component/dropdown/DropdownSeparator.svelte';
	import DropdownTitle from '$lib/component/dropdown/DropdownTitle.svelte';
	import DropdownTrigger from '$lib/component/dropdown/DropdownTrigger.svelte';
	import Cog from '$lib/component/icons/Cog.svelte';
	import ThemeSwitcher from './Settings/ThemeSwitcher.svelte';
	import LeftHandSwither from './Settings/LeftHandSwither.svelte';
</script>

<DropdownMenu let:active>
	<DropdownTrigger {active}>
		<Subtle>
			<Cog class="w-5 h-5 text-black dark:text-slate-100" />
		</Subtle>
	</DropdownTrigger>
	<DropdownContent {active} class="right-2 w-48 md:w-64 py-2 ">
		<DropdownTitle>ตั้งค่า</DropdownTitle>
		<DropdownSeparator />
		<DropdownGroup>
			<LeftHandSwither />
			<ThemeSwitcher />
		</DropdownGroup>
	</DropdownContent>
</DropdownMenu>
