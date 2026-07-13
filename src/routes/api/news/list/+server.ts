import { json } from '@sveltejs/kit';
import { berita } from '$lib/data/berita';
import type { RequestHandler } from './$types';

// Mock endpoint — bentuk respons sudah disiapkan agar tinggal diganti
// dengan query ke database/CMS sungguhan tanpa mengubah kode frontend.
export const GET: RequestHandler = async () => {
	const list = berita.map((b) => ({
		slug: b.slug,
		tanggal: b.tanggal,
		judul: b.judul,
		ringkasan: b.ringkasan,
		gambar: b.gambar
	}));
	return json({ data: list });
};
