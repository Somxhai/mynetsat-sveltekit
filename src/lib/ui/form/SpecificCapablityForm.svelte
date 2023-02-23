<script lang="ts">
	import { selectFaculty } from '$lib/stores';
	import { isRequiredSpecificCapablity } from '$lib/utils/faculty';
	import { getAllRequiredCapablityScoreId } from '$lib/utils/score';
	import TextBox from '../TextBox.svelte';
	const specificCapability = [
		{
			title: 'ภาษาต่างประเทศ',
			id: 'foreign',
			textbox: [
				{ lang: 'ฝรั่งเศส', name: 'french' },
				{ lang: 'เยอรมัน', name: 'german' },
				{ lang: 'จีน', name: 'chinese' },
				{ lang: 'ญี่ปุ่น', name: 'japanese' },
				{ lang: 'เกาหลี', name: 'korean' },
				{ lang: 'สเปน', name: 'spainish' }
			]
		},
		{
			title: 'ศิลปกรรมศาสตร์',
			id: 'fine_arts',
			textbox: [
				{ lang: 'การวาดเส้น', name: 'drawing' },
				{ lang: 'ประกอบศิลป์', name: 'makeup' },
				{ lang: 'วาดเส้นเพื่อการสื่อสาร', name: 'draw_communication' },
				{ lang: 'ออกแบบนิเทศศิลป์', name: 'visual_art' },
				{ lang: 'ดนตรี', name: 'music' },
				{ lang: 'นาฎศิลป์', name: 'dance' }
			]
		},
		{
			title: 'วิศวกรรมศาสตร์',
			id: 'engineer',
			textbox: [{ lang: 'วิศวกรรมศาสตร์', name: 'engineer' }]
		},
		{
			title: 'สถาปัตยกรรม',
			id: 'architect',
			textbox: [
				{ lang: 'สถาปัตยกรรม', name: 'architect' },
				{ lang: 'การออกแบบ', name: 'design' }
			]
		},
		{
			title: 'ศึกษาศาสตร์',
			id: 'education',
			textbox: [
				{ lang: 'ทางกาย', name: 'body' },
				{ lang: 'ถนัดทางศิลป์', name: 'goodatart' }
			]
		},
		{
			title: 'เวชนิทัศน์',
			id: 'medical_vision',
			textbox: [
				{ lang: 'เทคโนโลยีเวชนิทัศน์', name: 'techmed' },
				{ lang: 'ศิลป์สำหรับเวชนิทัศน์', name: 'artmed' }
			]
		}
	];
	$: hasSpecificCapablityFaculty = Array.from($selectFaculty).some((data) =>
		isRequiredSpecificCapablity(data)
	);

	$: requiredCapablityScore = Array.from(
		getAllRequiredCapablityScoreId(Array.from($selectFaculty))
	);
</script>

{#if hasSpecificCapablityFaculty}
	<section class="flex flex-col gap-4 mb-4">
		<div class="space-y-2 grid place-content-center">
			<h1 class="font-extrabold text-2xl text-center">สมรรถนะเฉพาะด้าน</h1>
			{#each specificCapability as { textbox, id }}
				{#if requiredCapablityScore.includes(id)}
					{#each textbox as { name, lang }}
						<TextBox
							highlight={requiredCapablityScore.includes(name)}
							{name}
							type="number"
							placeholder={lang}
							title={lang}
						/>
					{/each}
				{/if}
			{/each}
		</div>
	</section>
{/if}
