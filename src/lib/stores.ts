import { writable } from 'svelte/store';
import type { Dialogues, NetsatType, Weight } from './types';

export const dialogue = writable<Dialogues>('NONE');

export const selectFaculty = writable<Set<NetsatType>>(new Set());

export const scores = writable<Weight>(<Weight>{});

export const calculate = writable(false);
