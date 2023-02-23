<script lang="ts">
	import { selectFaculty } from '$lib/stores';
	import { getAllRequiredNetsatScoreId } from '$lib/utils/score';
	import TextBox from '../TextBox.svelte';
	const generalIntelligence = [
		{ subject: 'ไทย', name: 'thai' },
		{ subject: 'อังกฤษ', name: 'english' },
		{ subject: 'คณิตศาสตร์', name: 'math' }
	];
	const specificIntelligence = [
		{ subject: 'วิทยาศาสตร์และเทคโนโลยี', name: 'science' },
		{ subject: 'เคมี', name: 'chemistry' },
		{ subject: 'ชีววิทยา', name: 'biology' },
		{ subject: 'ฟิสิกส์', name: 'physics' }
	];

	$: requiredNetsatScore = Array.from(getAllRequiredNetsatScoreId(Array.from($selectFaculty)));
</script>

<section class="flex flex-col gap-4 mb-4">
	<div class="space-y-2 grid place-content-center">
		<h1 class="font-extrabold text-2xl">ความฉลาดรู้ทั่วไป</h1>
		{#each generalIntelligence as { subject, name }}
			<TextBox
				highlight={requiredNetsatScore.includes(name)}
				type="number"
				{name}
				placeholder={subject}
				title={subject}
			/>
		{/each}
	</div>

	<div class="space-y-2 grid place-content-center">
		<h1 class="font-extrabold text-2xl">ความฉลาดรู้เฉพาะ</h1>
		{#each specificIntelligence as { subject, name }}
			<TextBox
				highlight={requiredNetsatScore.includes(name)}
				type="number"
				{name}
				placeholder={subject}
				title={subject}
			/>
		{/each}
	</div>
</section>
