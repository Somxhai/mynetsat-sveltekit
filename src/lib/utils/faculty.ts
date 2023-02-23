import type { NetsatType } from '$lib/types';

export const isRequiredSpecificCapablity = (data: NetsatType) => {
	return !!data.specific_capability;
};
