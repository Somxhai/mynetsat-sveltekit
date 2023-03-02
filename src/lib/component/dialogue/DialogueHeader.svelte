<script lang="ts">
	import { dialogue } from '$lib/stores';
	import Ghost from '../button/Ghost.svelte';
	import Xmark from '../icons/Xmark.svelte';
</script>

<div class="p-2">
	<Ghost
		onClick={() => dialogue.set('NONE')}
		class="rounded-lg absolute top-2 right-2 p-2 text-slate-700 dark:text-slate-100  hover:text-slate-900"
		><Xmark class="w-4 h-4" /></Ghost
	>
	<h1 class="text-base md:text-xl font-medium text-center md:text-left"><slot /></h1>
</div>
