import { json } from '@sveltejs/kit';
import { ringkasan, dusun } from '$lib/data/village';
import { berita } from '$lib/data/berita';
import { potensiDesa } from '$lib/data/potensi';
import type { RequestHandler } from './$types';

// Mock endpoint untuk ringkasan/statistik yang tampil di kartu Home.
// Nanti tinggal diganti sumber datanya ke database desa/RPJM yang live.
export const GET: RequestHandler = async () => {
	return json({
		data: {
			luasWilayah: '420 Ha',
			penduduk: ringkasan.penduduk,
			kk: ringkasan.kk,
			lakiLaki: ringkasan.lakiLaki,
			perempuan: ringkasan.perempuan,
			dusun: dusun.length,
			jumlahBerita: berita.length,
			jumlahPotensi: potensiDesa.length
		}
	});
};
