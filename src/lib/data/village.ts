// Data demografi Desa Cipicung — bersumber dari RPJM Desa Perubahan 2025–2029.

export const ringkasan = {
	penduduk: 3265,
	kk: 1107,
	lakiLaki: 1703,
	perempuan: 1562
};

// Sebaran per RT (Dusun I = RT 01–05, Dusun II = RT 06–11, sesuai profil wilayah)
export const agamaPerRt = [
	{ rt: 'RT 01', islam: 263, kristen: 0 },
	{ rt: 'RT 02', islam: 350, kristen: 0 },
	{ rt: 'RT 03', islam: 360, kristen: 2 },
	{ rt: 'RT 04', islam: 192, kristen: 0 },
	{ rt: 'RT 05', islam: 358, kristen: 0 },
	{ rt: 'RT 06', islam: 316, kristen: 0 },
	{ rt: 'RT 07', islam: 237, kristen: 0 },
	{ rt: 'RT 08', islam: 421, kristen: 0 },
	{ rt: 'RT 09', islam: 265, kristen: 0 },
	{ rt: 'RT 10', islam: 221, kristen: 0 },
	{ rt: 'RT 11', islam: 286, kristen: 0 }
];

export const agamaTotal = { islam: 3265, kristen: 2 };

export const agamaKategori = [
	{ label: 'Islam', value: 3265, color: 'var(--color-clay)' },
	{ label: 'Kristen', value: 2, color: 'var(--color-brass)' },
	{ label: 'Katholik', value: 0, color: '#4b5c3a' },
	{ label: 'Hindu', value: 0, color: '#c98a3d' },
	{ label: 'Budha', value: 0, color: '#6f7d63' },
	{ label: 'Konghucu', value: 0, color: '#a65b46' },
	{ label: 'Lainnya', value: 0, color: '#8a8a75' }
];

// Agregasi dusun dari data per-RT di atas (Dusun I: RT01–05, Dusun II: RT06–11)
export const dusun = [
	{
		nama: 'Dusun I',
		rt: '5 RT / 2 RW',
		jumlah: agamaPerRt.slice(0, 5).reduce((a, r) => a + r.islam + r.kristen, 0)
	},
	{
		nama: 'Dusun II',
		rt: '6 RT / 2 RW',
		jumlah: agamaPerRt.slice(5).reduce((a, r) => a + r.islam + r.kristen, 0)
	}
];

export const pendidikan = [
	{ label: 'Belum Sekolah', l: 291, p: 568, jumlah: 859 },
	{ label: 'Tidak Tamat SD', l: 473, p: 461, jumlah: 934 },
	{ label: 'Belum/Tamat SD', l: 626, p: 335, jumlah: 961 },
	{ label: 'Tamat SLTP', l: 199, p: 200, jumlah: 399 },
	{ label: 'Tamat SLTA', l: 185, p: 153, jumlah: 338 },
	{ label: 'Diploma I/II/III', l: 4, p: 2, jumlah: 6 },
	{ label: 'Sarjana S1', l: 2, p: 6, jumlah: 8 },
	{ label: 'Sarjana S2', l: 0, p: 0, jumlah: 0 },
	{ label: 'Sarjana S3', l: 0, p: 0, jumlah: 0 }
];

export const pekerjaan = [
	{ label: 'Belum/Tidak Bekerja', l: 307, p: 151, jumlah: 458 },
	{ label: 'Petani', l: 171, p: 82, jumlah: 253 },
	{ label: 'Pedagang', l: 57, p: 57, jumlah: 114 },
	{ label: 'PNS Pemerintahan', l: 1, p: 0, jumlah: 1 },
	{ label: 'TNI/POLRI', l: 0, p: 0, jumlah: 0 },
	{ label: 'Guru', l: 1, p: 11, jumlah: 12 }
];

// Kelompok umur, data tahun 2024
export const usia2024 = [
	{ label: '0-4', jiwa: 206 },
	{ label: '5-9', jiwa: 232 },
	{ label: '10-14', jiwa: 183 },
	{ label: '15-19', jiwa: 156 },
	{ label: '20-24', jiwa: 205 },
	{ label: '25-29', jiwa: 224 },
	{ label: '30-34', jiwa: 266 },
	{ label: '35-39', jiwa: 319 },
	{ label: '40-44', jiwa: 238 },
	{ label: '45-49', jiwa: 239 },
	{ label: '50-54', jiwa: 231 },
	{ label: '55-59', jiwa: 258 },
	{ label: '60-64', jiwa: 220 },
	{ label: '65-69', jiwa: 150 },
	{ label: '70-74', jiwa: 106 },
	{ label: '>75', jiwa: 52 }
];
