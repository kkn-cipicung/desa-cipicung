import type { PageLoad } from './$types';
import { NewsDetailRequest, NewsListRequest } from '../../../module/news/_request/request';
import type { NewsResponse } from '../../../module/news/_model/response';

export const load: PageLoad = async ({ params }) => {
	const idNum = Number(params.id);
	if (isNaN(idNum)) {
		return { item: null, lainnya: [] };
	}

	try {
		const [item, list] = await Promise.all([
			NewsDetailRequest({ id: idNum }),
			NewsListRequest({ limit: 10, index: 0 }).catch((err) => {
				console.error('Error fetching news list inside detail:', err);
				return [];
			})
		]);

		const lainnya = (list || []).filter((b: NewsResponse) => b.id !== idNum).slice(0, 3);

		return { item, lainnya };
	} catch (err) {
		console.error('Error fetching news detail:', err);
		return { item: null, lainnya: [] };
	}
};
