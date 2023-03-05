<script lang="ts">
	import { selectFaculty } from '$lib/stores';
	import type { NetsatType } from '$lib/types';

	export let data: NetsatType;
	$: active = $selectFaculty.has(data);
</script>

<button
	on:click={() => {
		active
			? selectFaculty.update((previous) => {
					previous.delete(data);
					return previous;
			  })
			: selectFaculty.update((previous) => {
					return previous.add(data);
			  });
	}}
	class="text-left p-2 bg-slate-100 w-full flex items-center px-2 cursor-pointer justify-between dark:bg-zinc-900"
>
	<blockquote class="text-left">
		<span class="text-sm md:text-base">{data.syllabus}</span>
		<p class="text-xs md:text-sm text-slate-500 dark:text-slate-300">{data.faculty}</p>
	</blockquote>
	<input
		checked={active}
		type="checkbox"
		class="form-checkbox rounded-lg ring-0 outline-none cursor-pointer dark:bg-zinc-800 dark:checked:bg-blue-600"
	/>
</button>
