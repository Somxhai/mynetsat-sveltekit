import { dev } from '$app/environment';
import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request, cookies }) => {
	const settings = await request.json();

	cookies.set('settings', JSON.stringify(settings), {
		path: '/',
		secure: !dev
	});

	return json({});
};
