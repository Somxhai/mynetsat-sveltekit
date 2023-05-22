<script lang="ts">
	import type { NetsatType } from '$lib/types';
	import FacultyNetsatTable from '$lib/component/table/FacultyNetsatTable.svelte';
	import FacultySpecificCapablityTable from '$lib/component/table/FacultySpecificCapablityTable.svelte';

	export let isActive = false;
	export let data: NetsatType;
</script>

<div
	class="{isActive
		? 'block'
		: 'hidden'} relative -top-2 w-full bg-white pb-4 rounded-b-md dark:bg-[#121212]"
>
	<section class="border-y-1 mx-2 py-2 dark:border-gray-600">
		<p class="text-center">ความฉลาดรู้</p>
		<FacultyNetsatTable weight={data.weight} minimum={data.minimum_score} />
	</section>
	{#if data.specific_capability}
		<section class="border-y-1 mx-2 py-2 dark:border-gray-600">
			<p class="text-center">สมรรถนะเฉพาะด้าน</p>
			<FacultySpecificCapablityTable weight={data.specific_capability} />
		</section>
	{/if}
</div>
