import { writable } from 'svelte/store';
import type { Dialogues, NetsatType, Scores, Settings, Theme } from './types';
import { browser } from '$app/environment';

export const dialogue = writable<Dialogues>('NONE');

export const selectFaculty = writable<Set<NetsatType>>(new Set());

export const scores = writable<Scores>(<Scores>{});

export const calculate = writable(false);

export const netsatData = writable<NetsatType[]>();

export const settings = writable<Settings>(<Settings>{});
export const theme = writable<Theme>('light');
// listener
settings.subscribe(async (value) => {
	if (browser) {
		await fetch('/settings', {
			method: 'POST',
			body: JSON.stringify(value)
		});
	}
});
