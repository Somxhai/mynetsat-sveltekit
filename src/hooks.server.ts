import type { Theme } from '$lib/types';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const theme = (event.cookies.get('theme') ?? 'light') as Theme;
	event.locals.theme = theme;
	if (theme) {
		return await resolve(event, {
			transformPageChunk: ({ html }) => html.replace('%theme%', theme)
		});
	}

	return await resolve(event);
};
