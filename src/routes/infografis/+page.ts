import type { PageLoad } from './$types';
import { InfografisDetailRequest } from '../../module/infografis/_request/request';

export const load: PageLoad = async () => {
	try {
		const infografis = await InfografisDetailRequest();
		return { infografis };
	} catch (err) {
		console.error('Error fetching infografis:', err);
		return { infografis: null };
	}
};
