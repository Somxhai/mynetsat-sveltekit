<script lang="ts">
	import { calculate, scores } from '$lib/stores';
	import type { NetsatType, ScoreError, Weight } from '$lib/types';
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
	import FacultyDetail from './FacultyDetail.svelte';
	import RemoveFaculty from './RemoveFaculty.svelte';

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

<section class="flex dark:bg-black">
	<RemoveFaculty {data} {isActive} />
	<button
		on:click={() => {
			isActive = !isActive;
		}}
		class="{isActive
			? 'rounded-tr-md'
			: 'rounded-r-md'} w-full bg-white pr-2 flex relative justify-between items-center dark:bg-black"
	>
		<blockquote class="text-left p-2">
			<span class="block text-sm md:text-base text-ellipsis">{data.syllabus}</span>
			<span class="block text-xs md:text-sm font-thin text-slate-400">{data.faculty}</span>
			<div class="flex items-center gap-2">
				{#if scoreError != 'NONE'}
					<svelte:component this={icon.component} />
				{/if}
				<span class="block text-sm md:text-base ">{calculatedScore}</span>
			</div>
		</blockquote>

		<Ghost class="dark:text-slate-100">
			{#if isActive}
				<ChevronUp class="w-6 h-6" />
			{:else}
				<ChevronDown class="w-6 h-6" />
			{/if}
		</Ghost>
	</button>
</section>
<FacultyDetail {isActive} {data} />
