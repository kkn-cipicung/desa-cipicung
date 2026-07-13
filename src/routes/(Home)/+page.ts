import type { PageLoad } from './$types';
import type { BeritaItem } from '$lib/data/berita';
import type { PotensiItem } from '$lib/data/potensi';

export const load: PageLoad = async ({ fetch }) => {
	const [newsRes, dashboardRes, potentialRes] = await Promise.all([
		fetch('/api/news/list'),
		fetch('/api/dashboard'),
		fetch('/api/potential/list')
	]);

	const berita: Omit<BeritaItem, 'isi'>[] = newsRes.ok ? (await newsRes.json()).data : [];
	const stats = dashboardRes.ok ? (await dashboardRes.json()).data : null;
	const items: PotensiItem[] = potentialRes.ok ? (await potentialRes.json()).data : [];

	return { berita: berita.slice(0, 6), stats, items };
};
