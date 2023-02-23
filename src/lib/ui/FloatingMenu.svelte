<script lang="ts">
	import Subtle from '$lib/component/button/Subtle.svelte';
	import Calculator from '$lib/component/icons/Calculator.svelte';
	import MagnifyGlass from '$lib/component/icons/MagnifyGlass.svelte';
	import { calculate, dialogue } from '$lib/stores';
</script>

<div class="fixed right-10 bottom-4 z-40 ">
	<div class="relative gap-4 flex flex-col justify-center items-center">
		<Subtle
			onClick={() => {
				calculate.set(!$calculate);
			}}
			type="submit"
			class="absolute opacity-75 bottom-20 bg-black hover:opacity-100 rounded-full p-4"
		>
			<Calculator class="w-6 h-6 text-white" />
		</Subtle>

		<Subtle
			onClick={() => dialogue.set('FACULTIES')}
			class="absolute opacity-75 bottom-2 p-4 rounded-full bg-blue-500 hover:opacity-100 text-white"
		>
			<MagnifyGlass class="w-6 h-6" />
		</Subtle>
	</div>
</div>
