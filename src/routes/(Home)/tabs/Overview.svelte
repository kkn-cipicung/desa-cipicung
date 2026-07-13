<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import CountUp from '$lib/components/CountUp.svelte';

	interface StatsData {
		luasWilayah: string;
		penduduk: number;
		kk: number;
		lakiLaki: number;
		perempuan: number;
		dusun: number;
	}

	let { stats }: { stats: StatsData | null } = $props();

	const cards = $derived(
		stats
			? [
					{ label: 'Luas Wilayah', value: stats.luasWilayah, num: null },
					{ label: 'Penduduk', value: 'jiwa', num: stats.penduduk },
					{ label: 'Kepala Keluarga', value: 'KK', num: stats.kk },
					{ label: 'Dusun', value: 'dusun', num: stats.dusun }
				]
			: [
					{ label: 'Luas Wilayah', value: '420 Ha', num: null },
					{ label: 'Penduduk', value: 'jiwa', num: 3265 }
				]
	);
</script>

<section class="w-full border-t border-ink/15 px-6 py-20 md:px-16 md:py-28 lg:px-24">
	<div class="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
		<div use:reveal class="reveal-up md:col-span-4">
			<p class="font-mono text-[11px] tracking-[0.2em] text-clay uppercase">Sekilas Desa</p>
			<h2 class="mt-3 font-serif text-4xl leading-tight italic md:text-5xl">
				Desa yang<br />tumbuh dari<br />usaha kecil.
			</h2>
		</div>

		<div use:reveal={{ delay: 120 }} class="reveal-scale md:col-span-3 md:col-start-6">
			<div class="aspect-[4/5] w-full overflow-hidden rounded-sm">
				<img
					src="/overview.JPG"
					alt="Sekilas Desa Cipicung"
					class="h-full w-full object-cover grayscale-[15%]"
				/>
			</div>
		</div>

		<div
			use:reveal={{ delay: 200 }}
			class="reveal-up flex flex-col gap-6 md:col-span-4 md:col-start-9"
		>
			<p class="text-sm leading-relaxed text-ink-soft md:text-base">
				Desa Cipicung terletak di Kecamatan Sukatani, Kabupaten Purwakarta, Jawa Barat. Memadukan
				nilai gotong royong dengan semangat wirausaha, warga desa mengelola hasil bumi &mdash; gula
				aren, arang, dan kerajinan &mdash; menjadi produk yang dijual hingga ke luar desa.
			</p>
			<p class="text-sm leading-relaxed text-ink-soft md:text-base">
				Website ini adalah etalase kecil dari desa itu: profil wilayah, peta batas desa, dan potensi
				unggulan yang terus diperbarui.
			</p>
		</div>

		<!-- Statistik dalam kartu -->
		<div class="md:col-span-12">
			<div class="mt-4 grid grid-cols-2 gap-3 border-t border-ink/15 pt-8 sm:grid-cols-4">
				{#each cards as card, i (card.label)}
					<div
						use:reveal={{ delay: i * 90 }}
						class="reveal-up flex flex-col gap-2 rounded-lg border border-ink/12 bg-paper-dim/40 p-5 transition-colors hover:border-clay/60 hover:shadow-md"
					>
						<dt class="font-mono text-[10px] tracking-[0.15em] text-ink-soft uppercase">
							{card.label}
						</dt>
						<dd class="font-serif text-2xl text-ink italic md:text-3xl">
							{#if card.num !== null}<CountUp value={card.num} />
								{card.value}{:else}{card.value}{/if}
						</dd>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
