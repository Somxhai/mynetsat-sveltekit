<script lang="ts">
	import { browser } from '$app/environment';
	import { dialogue } from '$lib/stores';
	import Navbar from '$lib/ui/Navbar.svelte';
	import '../../app.css';

	$: if (browser) document.body.style.overflow = $dialogue != 'NONE' ? 'hidden' : 'auto';
</script>

<Navbar />
<main class="relative py-6 top-16 lg:gap-10 lg:py-10">
	<slot />
</main>
