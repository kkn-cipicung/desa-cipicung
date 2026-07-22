import type { PageLoad } from './$types';
import { GalleryListRequest } from '../../module/gallery/_request/request';

export const load: PageLoad = async () => {
	try {
		const photos = await GalleryListRequest({ limit: 40, index: 0 });
		return { photos: photos || [] };
	} catch (err) {
		console.error('Error fetching gallery list:', err);
		return { photos: [] };
	}
};
