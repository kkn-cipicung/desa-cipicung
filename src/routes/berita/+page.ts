import type { PageLoad } from './$types';
import type { BeritaItem } from '$lib/data/berita';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch('/api/news/list');
	const { data } = (await res.json()) as { data: Omit<BeritaItem, 'isi'>[] };
	return { berita: data };
};
