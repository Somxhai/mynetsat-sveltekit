<script lang="ts">
	import NetsatForm from '$lib/ui/form/NetsatForm.svelte';
	import PaymentSupport from '$lib/ui/dialogue/PaymentSupport.svelte';
	import Faculties from '$lib/ui/dialogue/Faculties.svelte';
	import { scores } from '$lib/stores';
	import Result from '$lib/ui/Result.svelte';
	import { getScore } from '$lib/utils/score';
	import SpecificCapablityForm from '$lib/ui/form/SpecificCapablityForm.svelte';
	import FloatingMenu from '$lib/ui/FloatingMenu.svelte';
	import Dialogue from '$lib/component/dialogue/Dialogue.svelte';
	import DialogueHeader from '$lib/component/dialogue/DialogueHeader.svelte';
	import DialogueContent from '$lib/component/dialogue/DialogueContent.svelte';
</script>

<svelte:head>
	<link rel="preload" as="image" href="/payment_qrcode.jpeg" />
	<title>เว็บไซต์สำหรับคำนวณคะแนน Netsat | MyNetsat</title>
</svelte:head>

<PaymentSupport />
<Faculties />

<form on:submit|preventDefault={(e) => scores.set(getScore(e))}>
	<section class="md:flex md:items-start md:justify-center md:gap-8">
		<NetsatForm />
		<SpecificCapablityForm />
	</section>
	<FloatingMenu />
</form>
<Result />
