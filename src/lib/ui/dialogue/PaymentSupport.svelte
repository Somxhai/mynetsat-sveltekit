<script lang="ts">
	import Dialogue from '$lib/component/dialogue/Dialogue.svelte';
	import DialogueContent from '$lib/component/dialogue/DialogueContent.svelte';
	import DialogueDescription from '$lib/component/dialogue/DialogueDescription.svelte';
	import DialogueHeader from '$lib/component/dialogue/DialogueHeader.svelte';
	import { dialogue } from '$lib/stores';
</script>

<Dialogue open={$dialogue == 'PAYMENT_QR'}>
	<DialogueHeader>สนับสนุน</DialogueHeader>
	<DialogueContent>
		<DialogueDescription>ช่วยให้เว็บไซต์นี้ได้รับการสนับสนุนได้นานยิ่งขึ้น!</DialogueDescription>
		<div class="md:h-[32rem]">
			<img class="h-full object-cover" src="/payment_qrcode.jpeg" alt="kbank qrcode" />
		</div>
	</DialogueContent>
</Dialogue>
