import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	return json({
		data: {
			luasWilayah: '',
			penduduk: 0,
			kk: 0,
			lakiLaki: 0,
			perempuan: 0,
			dusun: 0,
			jumlahBerita: 0,
			jumlahPotensi: 0
		}
	});
};
