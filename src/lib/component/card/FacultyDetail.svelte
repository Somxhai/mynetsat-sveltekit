<script lang="ts">
	import type { NetsatType } from '$lib/types';
	import FacultyNetsatTable from '$lib/ui/table/FacultyNetsatTable.svelte';
	import FacultySpecificCapablityTable from '$lib/ui/table/FacultySpecificCapablityTable.svelte';

	export let isActive = false;
	export let data: NetsatType;
</script>

<div class="{isActive ? 'block' : 'hidden'} relative -top-2 w-full bg-white dark:bg-black pb-4 rounded-b-md">
	<section class="border-y-1 mx-2 py-2">
		<p class="text-center">ความฉลาดรู้</p>
		<FacultyNetsatTable weight={data.weight} minimum={data.minimum_score} />
	</section>
	{#if data.specific_capability}
		<section class="border-y-1 mx-2 py-2">
			<p class="text-center">สมรรถนะเฉพาะด้าน</p>
			<FacultySpecificCapablityTable weight={data.specific_capability} />
		</section>
	{/if}
</div>
