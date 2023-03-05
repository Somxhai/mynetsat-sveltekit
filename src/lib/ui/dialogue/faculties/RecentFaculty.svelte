<script lang="ts">
	import { browser } from '$app/environment';
	import MediumContainer from '$lib/component/container/MediumContainer.svelte';
</script>

{#if browser && localStorage.getItem('recent')}
	<p class="py-3 border-b-1">ล่าสุด</p>
{:else}
	<MediumContainer class="flex justify-center items-center">
		<p class="text-slate-400 text-sm text-center">ค้นหาคณะเลย</p>
	</MediumContainer>
{/if}
