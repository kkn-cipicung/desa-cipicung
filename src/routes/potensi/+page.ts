import type { PageLoad } from './$types';
import type { PotensiItem } from '$lib/data/potensi';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch('/api/potential/list');
	const { data } = (await res.json()) as { data: PotensiItem[] };
	return { items: data };
};
