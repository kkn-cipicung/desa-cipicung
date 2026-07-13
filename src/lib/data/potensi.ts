// Potensi Desa Cipicung — gambaran umum apa saja yang ada dan digerakkan
// oleh warga, bukan katalog jual-beli. Tidak ada info kontak/harga di sini
// karena bukan listing produk per pelaku usaha.

export interface PotensiItem {
	slug: string;
	gambar: string;
	category: string;
	name: string;
	desc: string;
	detail: string;
	layanan?: string[];
}

export const potensiDesa: PotensiItem[] = [
	{
		slug: 'gula-aren',
		gambar: '/gallery/kegiatan-1.jpg',
		category: 'Hasil Bumi',
		name: 'Gula Aren',
		desc: 'Gula cetak dari nira pohon aren, diolah warga secara tradisional di atas tungku kayu, menjadi salah satu hasil bumi andalan desa.',
		detail:
			'Nira disadap setiap pagi dan sore dari pohon aren di sekitar desa, lalu dimasak perlahan di atas tungku kayu hingga mengental dan dicetak menjadi gula batok. Proses ini dikerjakan turun-temurun oleh warga sebagai salah satu sumber penghasilan utama di luar musim tani.'
	},
	{
		slug: 'tusuk-sate',
		gambar: '/gallery/kegiatan-2.jpg',
		category: 'Kerajinan',
		name: 'Tusuk Sate',
		desc: 'Kerajinan tusuk sate dari bambu, diraut manual oleh warga dari kebun bambu di sekitar desa.',
		detail:
			'Bambu dibelah, dijemur, lalu diraut satu per satu secara manual oleh pengrajin rumahan. Hasilnya berupa tusuk sate yang dipasok ke pasar dan pedagang di luar desa, menjadi kegiatan usaha rumahan yang cukup banyak digeluti warga.'
	},
	{
		slug: 'bumi-desa',
		gambar: '/gallery/kegiatan-3.jpg',
		category: 'Usaha Desa',
		name: 'Bumi Desa',
		desc: 'Unit usaha milik desa yang melayani kebutuhan sehari-hari warga, dari pangan sampai layanan keuangan.',
		detail:
			'Bumi Desa menaungi beberapa unit usaha yang melayani kebutuhan harian warga Cipicung — mulai dari penyediaan pangan, air bersih, kebutuhan rumah tangga, sampai akses layanan keuangan tanpa harus keluar desa.',
		layanan: ['Ayam Broiler', 'Depot Air Minum', 'Gas LPG', 'Agen BRI Link']
	}
];
