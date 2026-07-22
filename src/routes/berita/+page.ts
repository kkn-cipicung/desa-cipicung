import type { PageLoad } from './$types';
import { NewsListRequest } from '../../module/news/_request/request';

export const load: PageLoad = async () => {
	try {
		const berita = await NewsListRequest({ limit: 20, index: 0 });
		return { berita: berita || [] };
	} catch (err) {
		console.error('Error fetching news list:', err);
		return { berita: [] };
	}
};
