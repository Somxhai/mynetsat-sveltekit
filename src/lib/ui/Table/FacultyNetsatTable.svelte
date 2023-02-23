<script lang="ts">
	import type { MinimumScore, Weight } from '$lib/types';
	import { translateNetsat } from '$lib/utils/translate';
	export let minimum: MinimumScore | undefined;
	export let weight: Weight;
</script>

<table class="table-fixed w-full md:w-1/3  table mx-auto">
	<thead class="text-sm md:text-base">
		<th>วิชา</th>
		<th>%</th>
		{#if minimum}
			<th>ขั้นต่ำ</th>
		{/if}
	</thead>
	<tbody class="text-sm">
		{#each Object.keys(weight) as subject}
			<tr class="text-center">
				<td class="truncate max-w-[8rem] text-sm md:max-w-none">{translateNetsat(subject)}</td>
				<td class="text-xs text-slate-700">{weight[subject]}</td>
				{#if minimum}
					<td class="text-xs text-orange-500">{minimum[subject] ?? '--'}</td>
				{/if}
			</tr>
		{/each}
	</tbody>
</table>
