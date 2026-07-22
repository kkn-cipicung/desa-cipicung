import type { PageLoad } from './$types';
import { PotentialDetailRequest } from '../../../module/potential/_request/request';

export const load: PageLoad = async ({ params }) => {
	const idNum = Number(params.id);
	if (isNaN(idNum)) {
		return { item: null };
	}

	try {
		const item = await PotentialDetailRequest({ id: idNum });
		return { item };
	} catch (err) {
		console.error('Error fetching potential detail:', err);
		return { item: null };
	}
};
