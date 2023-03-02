<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let className = '';
	export { className as class };
</script>

<div class={twMerge('px-1', className)}>
	<slot />
</div>
