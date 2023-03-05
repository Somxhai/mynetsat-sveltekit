<script lang="ts">
	export let className = '';
	export { className as class };
</script>

<div class="h-32 {className}">
	<slot />
</div>
