export interface BeritaItem {
	slug: string;
	tanggal: string;
	judul: string;
	ringkasan: string;
	isi: string;
	gambar: string;
}

export const berita: BeritaItem[] = [
	{
		slug: 'rpjm-perubahan-2025-2029-ditetapkan',
		tanggal: '26 Juni 2025',
		gambar: '/gallery/kegiatan-7.jpg',
		judul: 'Peraturan Desa RPJM Perubahan 2025–2029 Resmi Ditetapkan',
		ringkasan:
			'Kepala Desa Cipicung menetapkan Peraturan Desa Nomor 6 Tahun 2025 tentang RPJM Desa Perubahan Tahun 2025–2029.',
		isi: 'Kepala Desa Cipicung menetapkan Peraturan Desa Nomor 6 Tahun 2025 tentang Rencana Pembangunan Jangka Menengah Desa Perubahan Tahun 2025–2029, menyusul rangkaian musyawarah bersama Badan Permusyawaratan Desa (BPD) dan unsur masyarakat.\n\nPenetapan ini menjadi acuan resmi arah pembangunan desa untuk periode yang tersisa, menindaklanjuti proses musyawarah dan kesepakatan yang telah dilakukan bersama BPD pada akhir Juni 2025.'
	},
	{
		slug: 'bpd-sepakati-rancangan-rpjm',
		tanggal: '24 Juni 2025',
		gambar: '/gallery/kegiatan-3.jpg',
		judul: 'BPD Sepakati Rancangan Perubahan RPJM Desa',
		ringkasan:
			'BPD Cipicung menetapkan keputusan sepakat atas Rancangan Peraturan Desa tentang RPJM Desa Perubahan.',
		isi: 'Badan Permusyawaratan Desa (BPD) Cipicung menetapkan keputusan yang menyatakan sepakat atas Rancangan Peraturan Desa tentang RPJM Desa Perubahan, sebagai tindak lanjut dari musyawarah bersama Kepala Desa yang diselenggarakan sehari sebelumnya.\n\nKesepakatan ini menjadi dasar bagi Kepala Desa untuk menetapkan rancangan tersebut menjadi Peraturan Desa.'
	},
	{
		slug: 'musyawarah-bpd-bahas-rpjmdes',
		tanggal: '23 Juni 2025',
		gambar: '/gallery/kegiatan-2.jpg',
		judul: 'Musyawarah Bersama Kepala Desa Bahas Rancangan RPJMDes',
		ringkasan:
			'BPD bersama Kepala Desa menyelenggarakan musyawarah membahas rancangan RPJM Desa Perubahan.',
		isi: 'Badan Permusyawaratan Desa bersama Kepala Desa menyelenggarakan musyawarah untuk membahas rancangan RPJM Desa Perubahan, sebagaimana tercatat dalam Berita Acara Musyawarah BPD.\n\nMusyawarah ini menjadi tahap awal dari rangkaian proses formal penetapan RPJM Desa Perubahan 2025–2029.'
	},
	{
		slug: 'masa-jabatan-kepala-desa-diperpanjang',
		tanggal: '2024',
		gambar: '/gallery/kegiatan-4.jpg',
		judul: 'Masa Jabatan Kepala Desa Diperpanjang, RPJM Desa Menyesuaikan',
		ringkasan:
			'Perubahan UU Desa memperpanjang masa jabatan Kepala Desa Cipicung, RPJM Desa disesuaikan menjadi 2022–2029.',
		isi: 'Menyusul perubahan Undang-Undang Desa (UU No. 3 Tahun 2024) yang memperpanjang masa jabatan Kepala Desa menjadi 8 tahun, Pj. Bupati Purwakarta melantik perpanjangan masa bhakti Kepala Desa Cipicung, Lili Sadili, untuk periode 2021–2029.\n\nDokumen RPJM Desa pun disesuaikan dari periode 2022–2027 menjadi 2022–2029, dan selanjutnya diperbarui kembali melalui RPJM Desa Perubahan 2025–2029.'
	}
];
