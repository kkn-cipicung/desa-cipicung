import { json } from '@sveltejs/kit';
import { potensiDesa } from '$lib/data/potensi';
import type { RequestHandler } from './$types';

// Mock endpoint — ganti isi handler ini dengan query ke database potensi
// desa sungguhan. Bentuk respons (data: PotensiItem[]) dipertahankan sama.
export const GET: RequestHandler = async () => {
	return json({ data: potensiDesa });
};
