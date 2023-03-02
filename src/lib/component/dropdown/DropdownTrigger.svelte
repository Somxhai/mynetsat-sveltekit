<script lang="ts">
	import type { Writable } from 'svelte/store';

	export let active: Writable<boolean>;
</script>

<button class="relative" on:click={() => active.set(!$active)}>
	<slot />
</button>
