<script lang="ts">
	import CipicungMap from '../components/CipicungMap.svelte';
	import { dusun as defaultDusun } from '$lib/data/village';
	import { reveal } from '$lib/actions/reveal';
	import type { MapResponse } from '../_model/response';

	let { data }: { data?: { mapData?: MapResponse | null } } = $props();
	const mapInfo = $derived(data?.mapData);

	const elevation = $derived(mapInfo?.elevation || '218–394 mdpl');
	const coordinate = $derived(mapInfo?.coordinate || '6°36\'37" LS, 107°22\'39" BT');

	const dusunList = $derived.by(() => {
		if (mapInfo) {
			return [
				{
					nama: defaultDusun[0]?.nama || 'Dusun 01',
					rt: defaultDusun[0]?.rt || 'RT 01–06',
					jumlah: mapInfo.hamlet_one ?? defaultDusun[0]?.jumlah ?? 0
				},
				{
					nama: defaultDusun[1]?.nama || 'Dusun 02',
					rt: defaultDusun[1]?.rt || 'RT 07–10',
					jumlah: mapInfo.hamlet_two ?? defaultDusun[1]?.jumlah ?? 0
				}
			];
		}
		return defaultDusun;
	});

	const googleMapsUrl = $derived(
		mapInfo?.coordinate
			? `https://www.google.com/maps?q=${encodeURIComponent(mapInfo.coordinate)}`
			: 'https://www.google.com/maps?q=-6.6102544,107.3774396'
	);
</script>

<svelte:head>
	<title>Peta Desa Cipicung - Kec. Sukatani, Kab. Purwakarta</title>
	<meta
		name="description"
		content="Peta batas wilayah dan titik penting Desa Cipicung, Kecamatan Sukatani, Kabupaten Purwakarta, Jawa Barat."
	/>
</svelte:head>

<section class="w-full px-6 pt-24 pb-20 md:px-16 md:pt-28 md:pb-28 lg:px-24">
	<div class="mx-auto max-w-6xl">
		<div use:reveal class="reveal-up">
			<p class="font-mono text-[11px] tracking-[0.2em] text-clay uppercase">Wilayah</p>
			<h1 class="mt-3 max-w-2xl font-serif text-5xl italic leading-tight md:text-6xl">
				Peta Cipicung.
			</h1>
			<p class="mt-6 max-w-xl text-sm leading-relaxed text-ink-soft md:text-base">
				Batas administratif Desa Cipicung berdasarkan data Badan Informasi Geospasial (BIG), beserta
				titik-titik penting di wilayah desa.
			</p>
		</div>

		<div class="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
			<div
				use:reveal={{ delay: 100 }}
				class="reveal-scale overflow-hidden rounded-sm border border-ink/15 lg:col-span-8"
			>
				<CipicungMap />
			</div>

			<!-- Informasi lokasi -->
			<div class="flex flex-col gap-3 lg:col-span-4">
				<div
					use:reveal={{ delay: 160 }}
					class="reveal-up rounded-lg border border-ink/12 bg-paper-dim/40 p-5 transition-colors hover:border-clay/50"
				>
					<dt class="font-mono text-[10px] tracking-[0.15em] text-ink-soft uppercase">
						Ketinggian
					</dt>
					<dd class="mt-1 font-serif text-xl text-ink italic">{elevation}</dd>
				</div>
				<div
					use:reveal={{ delay: 220 }}
					class="reveal-up rounded-lg border border-ink/12 bg-paper-dim/40 p-5 transition-colors hover:border-clay/50"
				>
					<dt class="font-mono text-[10px] tracking-[0.15em] text-ink-soft uppercase">
						Koordinat Pusat
					</dt>
					<dd class="mt-1 font-serif text-xl text-ink italic">
						{coordinate}
					</dd>
				</div>
				{#each dusunList as d, i (d.nama)}
					<div
						use:reveal={{ delay: 280 + i * 60 }}
						class="reveal-up rounded-lg border border-ink/12 bg-paper-dim/40 p-5 transition-colors hover:border-clay/50"
					>
						<dt class="font-mono text-[10px] tracking-[0.15em] text-ink-soft uppercase">
							{d.nama} &middot; {d.rt}
						</dt>
						<dd class="mt-1 font-serif text-xl text-ink italic">
							{d.jumlah.toLocaleString('id-ID')} jiwa
						</dd>
					</div>
				{/each}
			</div>
		</div>

		<div
			use:reveal
			class="reveal-up mt-8 flex flex-col items-start gap-4 border-t border-ink/15 pt-8 sm:flex-row sm:items-center sm:justify-between"
		>
			<p class="max-w-md text-sm leading-relaxed text-ink-soft">
				Untuk navigasi dan rute menuju lokasi, buka posisi Desa Cipicung langsung di Google Maps.
			</p>
			<a
				href={googleMapsUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="shrink-0 rounded-full border border-ink/20 px-6 py-3 font-mono text-[11px] tracking-[0.15em] text-ink uppercase transition-all hover:scale-105 hover:border-clay hover:text-clay"
			>
				Buka di Google Maps &rarr;
			</a>
		</div>
	</div>
</section>
