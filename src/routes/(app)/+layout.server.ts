import { dev } from '$app/environment';
import type { NetsatAPI, Settings } from '$lib/types';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ fetch, cookies, locals }) => {
	const netsatResponse = await fetch('https://netsat-api.vercel.app/');
	const netsatApi = JSON.parse(await netsatResponse.text()) as NetsatAPI;

	const defaultSettings = <Settings>{
		leftHand: false
	};

	if (!cookies.get('settings')) {
		cookies.set('settings', JSON.stringify(defaultSettings), {
			path: '/',
			secure: !dev
		});
	}

	const theme = locals.theme;
	const settings = JSON.parse(cookies.get('settings') as string) as Settings;
	return {
		settings,
		netsatApi,
		theme
	};
};
