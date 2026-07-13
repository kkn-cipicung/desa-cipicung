import { json, error } from '@sveltejs/kit';
import { potensiDesa } from '$lib/data/potensi';
import type { RequestHandler } from './$types';

// GET /api/potential/find?slug=...
export const GET: RequestHandler = async ({ url }) => {
	const slug = url.searchParams.get('slug');
	if (!slug) {
		throw error(400, 'Parameter slug wajib diisi');
	}
	const item = potensiDesa.find((p) => p.slug === slug);
	if (!item) {
		throw error(404, 'Item tidak ditemukan');
	}
	return json({ data: item });
};
