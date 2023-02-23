<script lang='ts'>
export let className:string = ''
    export let onClick = () => {};
    export {className as class}
</script>




<button on:click={onClick} class="hover:bg-slate-100 rounded-md {className}">
    <slot />
</button>