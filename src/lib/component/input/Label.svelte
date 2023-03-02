<script lang="ts">
	export let htmlFor: string = '';
	export let text: string;
</script>

<label
	for={htmlFor}
	class="text-sm dark:text-gray-300 font-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
	>{text}</label
>
