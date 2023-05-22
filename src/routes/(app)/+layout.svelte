<script lang="ts">
	import { browser } from '$app/environment';

	import { dialogue, netsatData, settings, theme } from '$lib/stores';
	import Footer from '$lib/ui/Footer.svelte';
	import Navbar from '$lib/ui/navbar/Navbar.svelte';

	import '../../app.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	settings.set(data.settings);
	theme.set(data.theme);
	netsatData.set(data.netsatApi.netsat);

	$: if (browser) document.body.style.overflow = $dialogue != 'NONE' ? 'hidden' : 'auto';
</script>

<Navbar />
<main class="relative py-6 top-16 lg:gap-10 lg:py-10 dark:bg-[#121212] dark:text-slate-100">
	<slot />
	<Footer />
</main>
