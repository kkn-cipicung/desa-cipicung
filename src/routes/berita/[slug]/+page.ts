import type { PageLoad } from './$types';
import type { BeritaItem } from '$lib/data/berita';

export const load: PageLoad = async ({ fetch, params }) => {
	const [itemRes, listRes] = await Promise.all([
		fetch(`/api/news/find?slug=${encodeURIComponent(params.slug)}`),
		fetch('/api/news/list')
	]);

	const item: BeritaItem | null = itemRes.ok ? (await itemRes.json()).data : null;
	const list: Omit<BeritaItem, 'isi'>[] = listRes.ok ? (await listRes.json()).data : [];
	const lainnya = list.filter((b) => b.slug !== params.slug).slice(0, 3);

	return { item, lainnya };
};
