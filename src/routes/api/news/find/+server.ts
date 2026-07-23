import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	const slug = url.searchParams.get('slug');
	if (!slug) {
		throw error(400, 'Parameter slug wajib diisi');
	}
	throw error(404, 'Berita tidak ditemukan');
};
