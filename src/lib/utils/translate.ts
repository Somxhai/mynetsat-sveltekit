export const translateNetsat = (id: string) => {
	let translated = '';
	switch (id.toLowerCase()) {
		case 'thai':
			translated = 'ไทย';
			break;
		case 'english':
			translated = 'อังกฤษ';
			break;
		case 'math':
			translated = 'คณิตศาสตร์';
			break;
		case 'science':
			translated = 'วิทยาศาสตร์และเทคโนโลยี';
			break;
		case 'physics':
			translated = 'ฟิสิกส์';
			break;
		case 'chemistry':
			translated = 'เคมี';
			break;
		case 'biology':
			translated = 'ชีววิทยา';
			break;
		default:
			translated = '';
			break;
	}
	return translated;
};

export const translateSpecificCapablity = (id: string) => {
	let translated = '';
	switch (id.toLowerCase()) {
		case 'engineer':
			translated = 'วิศวกรรมศาสตร์';
			break;
		case 'spainish':
			translated = 'ฝรั่งเศส';
			break;
		case 'german':
			translated = 'เยอรมัน';
			break;
		case 'chinese':
			translated = 'จีน';
			break;
		case 'japanese':
			translated = 'ญี่ปุ่น';
			break;
		case 'korean':
			translated = 'เกาหลี';
			break;
		case 'architect':
			translated = 'สถาปัตยกรรม';
			break;
		case 'design':
			translated = 'การออกแบบ';
			break;
		case 'body':
			translated = 'ทางกาย';
			break;
		case 'goodatart':
			translated = 'ถนัดทางศิลป์';
			break;
		case 'drawing':
			translated = 'การวาดเส้น';
			break;
		case 'makeup':
			translated = 'ประกอบศิลป์';
			break;
		case 'draw_communication':
			translated = 'วาดเส้นเพื่อการสื่อสาร';
			break;
		case 'visual_art':
			translated = 'ออกแบบนิเทศศิลป์';
			break;
		case 'music':
			translated = 'ดนตรี';
			break;
		case 'dance':
			translated = 'นาฎศิลป์';
			break;
		case 'techmed':
			translated = 'เทคโนโลยีเวชนิทัศน์';
			break;
		case 'artmed':
			translated = 'ศิลป์สำหรับเวชนิทัศน์';
			break;
	}
	return translated;
};
