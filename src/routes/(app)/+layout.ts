import type { NetsatAPI } from '$lib/types';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch }) => {
	const netsatRequest = fetch('https://netsat-api.vercel.app/');
	const netsatApi = await (await netsatRequest).text();

	return JSON.parse(netsatApi) as NetsatAPI;
};
