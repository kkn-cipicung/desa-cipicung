import type { PageLoad } from './$types';
import { PotentialListRequest } from '../../module/potential/_request/request';

export const load: PageLoad = async () => {
	try {
		const items = await PotentialListRequest({ limit: 30, index: 0 });
		return { items: items || [] };
	} catch (err) {
		console.error('Error fetching potential list:', err);
		return { items: [] };
	}
};
