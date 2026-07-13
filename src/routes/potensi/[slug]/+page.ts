import type { PageLoad } from './$types';
import type { PotensiItem } from '$lib/data/potensi';

export const load: PageLoad = async ({ fetch, params }) => {
	const res = await fetch(`/api/potential/find?slug=${encodeURIComponent(params.slug)}`);
	const item: PotensiItem | null = res.ok ? (await res.json()).data : null;
	return { item };
};
