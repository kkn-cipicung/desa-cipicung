import type { PageLoad } from './$types';
import { MapActiveRequest, MapDetailRequest } from '../../module/map/_request/request';

export const load: PageLoad = async () => {
	try {
		const mapData = await MapActiveRequest().catch(() => MapDetailRequest());
		return { mapData };
	} catch (err) {
		console.error('Error fetching active map data:', err);
		return { mapData: null };
	}
};
