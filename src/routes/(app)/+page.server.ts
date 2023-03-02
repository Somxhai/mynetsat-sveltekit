import { dev } from '$app/environment';
import type { Theme } from '$lib/types';
import type { Actions } from './$types';

export const actions: Actions = {
	theme: async ({ cookies, request }) => {
		const formData = await request.formData();
		const theme = formData.get('theme') as string;
		console.log(theme);
		cookies.set('theme', theme, {
			secure: !dev,
			path: '/'
		});
	}
};
