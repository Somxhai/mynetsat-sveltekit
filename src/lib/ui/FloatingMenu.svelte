<script lang="ts">
	import Subtle from '$lib/component/button/Subtle.svelte';
	import Calculator from '$lib/component/icons/Calculator.svelte';
	import MagnifyGlass from '$lib/component/icons/MagnifyGlass.svelte';

	import { calculate, dialogue, settings } from '$lib/stores';
</script>

<div class="fixed {$settings.leftHand ? 'left-10' : 'right-10'} bottom-4 z-40 ">
	<div class="relative gap-4 flex flex-col justify-center items-center">
		<Subtle
			onClick={() => {
				calculate.set(!$calculate);
			}}
			type="submit"
			class="absolute bottom-20 bg-black hover:bg-slate-800 rounded-full p-4 dark:bg-white dark:hover:bg-gray-300"
		>
			<Calculator class="w-6 h-6 text-white dark:text-black" />
		</Subtle>

		<Subtle
			onClick={() => dialogue.set('FACULTIES')}
			class="absolute text-white bottom-2 p-4 rounded-full bg-blue-500 hover:bg-blue-600 dark:hover:bg-blue-400"
		>
			<MagnifyGlass class="w-6 h-6" />
		</Subtle>
	</div>
</div>
