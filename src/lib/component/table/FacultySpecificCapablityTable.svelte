<script lang="ts">
	import type { SpecificCapability } from '$lib/types';
	import { getCapabilities } from '$lib/utils/score';
	import { translateSpecificCapablity } from '$lib/utils/translate';
	export let weight: SpecificCapability;
</script>

<table class="table-fixed w-full md:w-1/3  table mx-auto">
	<thead class="text-sm md:text-base">
		<th>สมรรถนะ</th>
		<th>%</th>
	</thead>
	<tbody class="text-sm">
		{#each getCapabilities(weight) as { capablity, score }}
			<tr class="text-center">
				<td class="truncate max-w-[8rem] text-sm md:max-w-none"
					>{translateSpecificCapablity(capablity)}</td
				>
				<td class="text-xs text-slate-700 dark:text-slate-300">{score}</td>
			</tr>
		{/each}
	</tbody>
</table>
