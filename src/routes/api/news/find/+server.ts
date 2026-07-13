import { json, error } from '@sveltejs/kit';
import { berita } from '$lib/data/berita';
import type { RequestHandler } from './$types';

// GET /api/news/find?slug=...
export const GET: RequestHandler = async ({ url }) => {
	const slug = url.searchParams.get('slug');
	if (!slug) {
		throw error(400, 'Parameter slug wajib diisi');
	}
	const item = berita.find((b) => b.slug === slug);
	if (!item) {
		throw error(404, 'Berita tidak ditemukan');
	}
	return json({ data: item });
};
