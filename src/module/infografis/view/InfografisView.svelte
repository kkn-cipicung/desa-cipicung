<script lang="ts">
	import DonutChart from '$lib/components/charts/DonutChart.svelte';
	import BarChart from '$lib/components/charts/BarChart.svelte';
	import CountUp from '$lib/components/CountUp.svelte';
	import { reveal } from '$lib/actions/reveal';
	const ringkasan = { penduduk: 0, kk: 0, lakiLaki: 0, perempuan: 0 };
	const dusunSlices: { label: string; value: number; color: string }[] = [];
	const agamaSlices: { label: string; value: number; color: string }[] = [];
	const agamaBars: { label: string; value: number; value2?: number }[] = [];
	const pendidikanBars: { label: string; value: number; value2?: number }[] = [];
	const pekerjaanBars: { label: string; value: number; value2?: number }[] = [];
	const usiaBars: { label: string; value: number }[] = [];
</script>

<svelte:head>
	<title>Infografis - Desa Cipicung</title>
	<meta
		name="description"
		content="Infografis kependudukan Desa Cipicung: jumlah penduduk, sebaran dusun, agama, pendidikan, pekerjaan, dan kelompok usia, berdasarkan RPJM Desa 2025."
	/>
</svelte:head>

<section class="w-full px-6 pt-24 pb-20 md:px-16 md:pt-28 md:pb-28 lg:px-24">
	<div class="mx-auto max-w-5xl">
		<div use:reveal class="reveal-up">
			<p class="font-mono text-[11px] tracking-[0.2em] text-clay uppercase">Data Desa</p>
			<h1 class="mt-3 max-w-2xl font-serif text-5xl italic leading-tight md:text-6xl">
				Infografis Cipicung.
			</h1>
			<p class="mt-6 max-w-xl text-sm leading-relaxed text-ink-soft md:text-base">
				Gambaran kependudukan Desa Cipicung berdasarkan data RPJM Desa Perubahan 2025&ndash;2029.
			</p>
		</div>

		<!-- Ringkasan -->
		<div
			use:reveal={{ delay: 100 }}
			class="reveal-up mt-14 grid grid-cols-2 gap-3 border-y border-ink/15 py-10 sm:grid-cols-4"
		>
			<div class="flex flex-col gap-2 rounded-lg border border-ink/12 bg-paper-dim/40 p-5">
				<dd class="font-serif text-2xl text-ink italic md:text-3xl">
					<CountUp value={ringkasan.penduduk} />
				</dd>
				<dt class="font-mono text-[10px] tracking-[0.15em] text-ink-soft uppercase">Jiwa</dt>
			</div>
			<div class="flex flex-col gap-2 rounded-lg border border-ink/12 bg-paper-dim/40 p-5">
				<dd class="font-serif text-2xl text-ink italic md:text-3xl">
					<CountUp value={ringkasan.kk} />
				</dd>
				<dt class="font-mono text-[10px] tracking-[0.15em] text-ink-soft uppercase">
					Kepala Keluarga
				</dt>
			</div>
			<div class="flex flex-col gap-2 rounded-lg border border-ink/12 bg-paper-dim/40 p-5">
				<dd class="font-serif text-2xl text-ink italic md:text-3xl">
					<CountUp value={ringkasan.lakiLaki} />
				</dd>
				<dt class="font-mono text-[10px] tracking-[0.15em] text-ink-soft uppercase">Laki-laki</dt>
			</div>
			<div class="flex flex-col gap-2 rounded-lg border border-ink/12 bg-paper-dim/40 p-5">
				<dd class="font-serif text-2xl text-ink italic md:text-3xl">
					<CountUp value={ringkasan.perempuan} />
				</dd>
				<dt class="font-mono text-[10px] tracking-[0.15em] text-ink-soft uppercase">Perempuan</dt>
			</div>
		</div>

		<!-- Berdasarkan Dusun -->
		<div use:reveal class="reveal-up mt-16 border-t border-ink/15 pt-12">
			<p class="font-mono text-[11px] tracking-[0.2em] text-clay uppercase">Berdasarkan Dusun</p>
			<h2 class="mt-3 font-serif text-2xl italic md:text-3xl">Sebaran penduduk per dusun.</h2>
			<p class="mt-2 font-mono text-[10px] tracking-[0.1em] text-ink-soft/70 uppercase">
				Klik segmen atau daftar untuk melihat rincian &darr;
			</p>
			<div class="mt-10">
				<DonutChart data={dusunSlices} />
			</div>
			<p class="mt-4 text-xs text-ink-soft/70">
				Agregasi dari data per-RT (Dusun I: RT 01&ndash;05, Dusun II: RT 06&ndash;11).
			</p>
		</div>

		<!-- Agama -->
		<div use:reveal class="reveal-up mt-16 border-t border-ink/15 pt-12">
			<p class="font-mono text-[11px] tracking-[0.2em] text-clay uppercase">Agama</p>
			<h2 class="mt-3 font-serif text-2xl italic md:text-3xl">Sebaran penduduk menurut agama.</h2>
			<p class="mt-2 font-mono text-[10px] tracking-[0.1em] text-ink-soft/70 uppercase">
				Klik segmen atau daftar untuk melihat rincian &darr;
			</p>
			<div class="mt-10">
				<DonutChart data={agamaSlices} />
			</div>

			<details class="group mt-10">
				<summary
					class="cursor-pointer font-mono text-[11px] tracking-[0.15em] text-ink-soft uppercase hover:text-clay"
				>
					Lihat rincian per RT &darr;
				</summary>
				<div class="mt-6">
					<BarChart data={agamaBars} labelA="Islam" labelB="Kristen" />
				</div>
			</details>
		</div>

		<!-- Pendidikan -->
		<div use:reveal class="reveal-up mt-16 border-t border-ink/15 pt-12">
			<p class="font-mono text-[11px] tracking-[0.2em] text-clay uppercase">Pendidikan</p>
			<h2 class="mt-3 font-serif text-2xl italic md:text-3xl">Tingkat pendidikan penduduk.</h2>
			<p class="mt-2 font-mono text-[10px] tracking-[0.1em] text-ink-soft/70 uppercase">
				Klik baris untuk melihat rincian &darr;
			</p>
			<div class="mt-10">
				<BarChart data={pendidikanBars} labelA="Laki-laki" labelB="Perempuan" />
			</div>
		</div>

		<!-- Pekerjaan -->
		<div use:reveal class="reveal-up mt-16 border-t border-ink/15 pt-12">
			<p class="font-mono text-[11px] tracking-[0.2em] text-clay uppercase">Pekerjaan</p>
			<h2 class="mt-3 font-serif text-2xl italic md:text-3xl">Pekerjaan utama penduduk.</h2>
			<p class="mt-2 font-mono text-[10px] tracking-[0.1em] text-ink-soft/70 uppercase">
				Klik baris untuk melihat rincian &darr;
			</p>
			<div class="mt-10">
				<BarChart data={pekerjaanBars} labelA="Laki-laki" labelB="Perempuan" />
			</div>
		</div>

		<!-- Usia -->
		<div use:reveal class="reveal-up mt-16 border-t border-ink/15 pt-12 pb-4">
			<p class="font-mono text-[11px] tracking-[0.2em] text-clay uppercase">Kelompok Usia</p>
			<h2 class="mt-3 font-serif text-2xl italic md:text-3xl">Struktur usia penduduk, 2024.</h2>
			<p class="mt-2 font-mono text-[10px] tracking-[0.1em] text-ink-soft/70 uppercase">
				Klik baris untuk melihat rincian &darr;
			</p>
			<div class="mt-10">
				<BarChart data={usiaBars} />
			</div>
		</div>

		<p class="mt-10 text-xs text-ink-soft/70">
			Sumber: RPJM Desa Cipicung Perubahan 2025&ndash;2029, data BPS &amp; Posyandu 2024.
		</p>
	</div>
</section>
