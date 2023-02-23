<script lang="ts">
	import { calculate, scores, selectFaculty } from '$lib/stores';
	import type { NetsatType, ScoreError, Weight } from '$lib/types';
	import FacultyNetsatTable from '$lib/ui/Table/FacultyNetsatTable.svelte';
	import FacultySpecificCapablityTable from '$lib/ui/Table/FacultySpecificCapablityTable.svelte';
	import {
		calculateNetsatScore,
		calculateSpecificCapablityScore,
		isPassMinimumScore,
		filterSpecificCapability,
		isPassMinimumSum
	} from '$lib/utils/score';
	import Ghost from '../button/Ghost.svelte';
	import ChevronDown from '../icons/ChevronDown.svelte';
	import ChevronUp from '../icons/ChevronUp.svelte';
	import Incomplete from '../icons/Incomplete.svelte';
	import Minimum from '../icons/Minimum.svelte';
	import MinimumSum from '../icons/MinimumSum.svelte';
	import Trash from '../icons/Trash.svelte';

	export let data: NetsatType;
	let isActive = false;
	let init = true;
	let calculatedScore: string = '0.000';
	let scoreError: ScoreError = 'NONE';
	let icon = { component: Incomplete, title: 'กรอกคะแนนไม่ครบ' };
	const scoreListener = (toggle: boolean, scoreListener: Weight) => {
		let sum = 0;
		const Netsat = calculateNetsatScore($scores, data.weight);

		if (Netsat.error == 'INCOMPLETE') {
			scoreError = Netsat.error;
			icon = { component: Incomplete, title: 'กรอกคะแนนไม่ครบ' };
			calculatedScore = icon.title;
			return;
		}
		sum += Netsat.score;
		if (data.specific_capability) {
			const filter = filterSpecificCapability($scores);
			const Capability = calculateSpecificCapablityScore(filter, data.specific_capability);

			if (Capability.error == 'INCOMPLETE') {
				scoreError = Capability.error;
				icon = { component: Incomplete, title: 'กรอกคะแนนไม่ครบ' };
				calculatedScore = icon.title;
				return;
			}
			sum += Capability.score;
		}
		if (sum > 100) {
			sum = 100;
		}

		if (data.minimum_score) {
			const minimumScore = isPassMinimumScore($scores, data.minimum_score);
			if (!minimumScore) {
				scoreError = 'MINIMUM';
				icon = { component: Minimum, title: `คะแนนบางวิชาไม่ถึงขั้นต่ำ (${sum.toFixed(3)})` };
				calculatedScore = icon.title;
				return;
			}
		}
		if (data.minimum_sum) {
			const minimumSum = isPassMinimumSum(sum, data.minimum_sum);
			if (!minimumSum) {
				scoreError = 'MINIMUM_SUM';
				icon = {
					component: MinimumSum,
					title: `คะแนนรวมไม่ถึงขั้นต่ำ (${sum.toFixed(3)}/${data.minimum_sum})`
				};
				calculatedScore = icon.title;
				return;
			}
		}
		scoreError = 'NONE';
		calculatedScore = sum.toFixed(3);
	};
	$: if (init) {
		init = false;
	} else {
		scoreListener($calculate, $scores);
	}
</script>

<section class="flex">
	<button
		on:click={() => {
			selectFaculty.update((previous) => {
				previous.delete(data);
				return previous;
			});
		}}
		class="hover:bg-red-500 [&>svg]:hover:text-white px-4 z-20 bg-white  {isActive
			? 'rounded-tl-md'
			: 'rounded-l-md'}"
	>
		<Trash class="h-4 w-4 text-red-500 hover:text-white" />
	</button>
	<button
		on:click={() => {
			isActive = !isActive;
		}}
		class="{isActive
			? 'rounded-tr-md'
			: 'rounded-r-md'} w-full bg-white pr-2 flex relative justify-between items-center"
	>
		<blockquote class="text-left p-2">
			<span class="block text-sm md:text-base line-clamp-2 text-ellipsis">{data.syllabus}</span>
			<span class="block text-xs md:text-sm font-thin text-slate-400">{data.faculty}</span>
			<div class="flex items-center gap-2">
				{#if scoreError != 'NONE'}
					<svelte:component this={icon.component} />
				{/if}
				<span class="block text-sm md:text-base ">{calculatedScore}</span>
			</div>
		</blockquote>

		<Ghost>
			{#if isActive}
				<ChevronUp class="w-6 h-6" />
			{:else}
				<ChevronDown class="w-6 h-6" />
			{/if}
		</Ghost>
	</button>
</section>

<div class="{isActive ? 'block' : 'hidden'} relative -top-2 w-full bg-white pb-4 rounded-b-md">
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
