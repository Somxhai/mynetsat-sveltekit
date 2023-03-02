import { scores } from '$lib/stores';
import type {
	NetsatType,
	ScoreReport,
	SpecificCapability,
	Weight,
	MinimumScore,
	Scores
} from '$lib/types';
import { foreign, fineArts, engineer, architect, education, medicalVision } from './capabilitykeys';

export const getScore: svelte.JSX.EventHandler<SubmitEvent, HTMLFormElement> = ({
	currentTarget
}) => {
	const formData = new FormData(currentTarget);
	const scores = Object.fromEntries(formData);

	const result = Object.keys(scores).map((key) => {
		const score = formData.get(key) as string;

		return [key, parseFloat(score)];
	});

	return Object.fromEntries(result);
};

export const calculateNetsatScore = (score: Scores, weight: Weight): ScoreReport => {
	let sum = 0;

	for (const subject of Object.keys(weight)) {
		const SCORE_NOT_FOUND = !!weight[subject] && isNaN(score[subject]);
		if (SCORE_NOT_FOUND) {
			return { error: 'INCOMPLETE', score: 0 } as ScoreReport;
		}

		sum += (weight[subject] / 100) * score[subject];
	}
	return { error: 'NONE', score: sum };
};

export const filterSpecificCapability = (scores: Scores) => {
	const specificCapabilities = [
		...foreign,
		...fineArts,
		engineer,
		...architect,
		...education,
		...medicalVision
	];
	const specificCapabilityScore = Object.entries(scores).filter(([key]) =>
		specificCapabilities.includes(key)
	);
	return Object.fromEntries(specificCapabilityScore);
};

export const calculateSpecificCapablityScore = (
	capabilityScores: Record<string, number>,
	weight: SpecificCapability
): ScoreReport => {
	let sum = 0;

	for (const capablity of Object.keys(weight)) {
		const sub = weight[capablity];
		const IS_OBJECT = typeof sub == 'object';

		if (IS_OBJECT) {
			const result = calculateSubSpecificCapability(sub, capabilityScores);
			if (result.error != 'NONE') return result;
			sum += result.score;
			continue;
		}
		const CAPABILITY_NOT_FOUND = !!weight && isNaN(capabilityScores[capablity] ?? NaN);
		if (CAPABILITY_NOT_FOUND) return { error: 'INCOMPLETE', score: 0 };
		const capabilityScore = capabilityScores[capablity] as number;
		const capabilityWeight = weight[capablity] as number;
		sum += (capabilityScore * capabilityWeight) / 100;
	}
	return { error: 'NONE', score: sum };
};

const calculateSubSpecificCapability = (
	sub: Record<string, number>,
	score: Record<string, number>
): ScoreReport => {
	let sum = 0;
	for (const key of Object.keys(sub)) {
		const NESTED_CAPABILITY_NOT_FOUND = !!sub && isNaN(score[key] ?? NaN);
		if (NESTED_CAPABILITY_NOT_FOUND) return { error: 'INCOMPLETE', score: 0 };
		const capabilityScore = score[key] as number;
		const capabilityWeight = sub[key] as number;
		sum += (capabilityScore * capabilityWeight) / 100;
	}
	return { error: 'NONE', score: sum };
};

export const getAllRequiredCapablityScoreId = (selectedFaculties: NetsatType[]) => {
	const titles = new Set();
	for (const faculty of selectedFaculties) {
		const specificCapability = faculty.specific_capability;
		if (specificCapability) {
			getCapabilityTitle(specificCapability).forEach((title) => titles.add(title));
		}
	}

	return titles;
};

export const getAllRequiredNetsatScoreId = (selectedFaculties: NetsatType[]) => {
	const titles = new Set();
	for (const faculty of selectedFaculties) {
		const netsat = faculty.weight;
		Object.keys(netsat).forEach((title) => titles.add(title));
	}

	return titles;
};

const getCapabilityTitle = (specificCapability: SpecificCapability) => {
	const titles: string[] = [];
	Object.entries(specificCapability).forEach(([key, value]) => {
		const isObject = typeof value === 'object';
		titles.push(key);
		if (isObject) {
			Object.keys(value).forEach((title) => titles.push(title));
		}
	});
	return titles;
};

export const getCapabilities = (specificCapability: SpecificCapability) => {
	const capablities = [];
	for (const key of Object.keys(specificCapability)) {
		const capablity = specificCapability[key];
		const IS_OBJECT = typeof capablity == 'object';

		if (IS_OBJECT) {
			for (const key of Object.keys(capablity)) {
				capablities.push({ capablity: key, score: capablity[key] });
			}
			continue;
		}
		capablities.push({ capablity: key, score: capablity });
	}
	return capablities;
};

export const isPassMinimumScore = (score: Scores, minimumScore: MinimumScore) => {
	if (!minimumScore) {
		return false;
	}

	for (const subject of Object.keys(minimumScore)) {
		const SCORE_NOT_FOUND = minimumScore[subject] && isNaN(score[subject]);
		const SCORE_LOWER_THAN_MINIMUM = score[subject] < minimumScore[subject];
		if (SCORE_NOT_FOUND || SCORE_LOWER_THAN_MINIMUM) return false;
	}
	return true;
};

export const isPassMinimumSum = (sumScore: number, minimumSum: number) => {
	return sumScore > minimumSum;
};
