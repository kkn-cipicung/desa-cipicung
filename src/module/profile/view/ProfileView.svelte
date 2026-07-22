<script lang="ts">
	import CipicungMap from '../../map/components/CipicungMap.svelte';
	import { reveal } from '$lib/actions/reveal';
	import type {
		ProfileResponse,
		RegionBoundaryResponse,
		VisionMissionResponse,
		GovernmentStructureResponse,
		ResourcePotentialResponse
	} from '../_model/response';

	let {
		data
	}: {
		data: {
			profile: ProfileResponse | null;
			boundary: RegionBoundaryResponse | null;
			visionMission: VisionMissionResponse | null;
			structure: GovernmentStructureResponse;
			resources: ResourcePotentialResponse | null;
		};
	} = $props();

	const profile = $derived(data.profile);
	const boundary = $derived(data.boundary || profile);
	const visionMission = $derived(data.visionMission || profile);
	const structure = $derived(data.structure || []);
	const resources = $derived(data.resources);

	// Fallback data for leaders history
	const defaultKadesHistory = [
		{ periode: '2013 — sekarang', nama: 'Lili Sadili' },
		{ periode: '2007 — 2013', nama: 'Edi Supriadi' },
		{ periode: '2000 — 2007', nama: 'Muhidin' },
		{ periode: '1987 — 1999', nama: 'Asep Hidayat' },
		{ periode: '1983 — 1987', nama: 'Mahpudin' }
	];
</script>

<svelte:head>
	<title>Profil Desa - Desa Cipicung</title>
	<meta
		name="description"
		content="Profil, sejarah, visi misi, dan struktur pemerintahan Desa Cipicung, Kecamatan Sukatani, Kabupaten Purwakarta, berdasarkan RPJM Desa Perubahan 2025-2029."
	/>
</svelte:head>

<section class="w-full px-6 pt-24 pb-20 md:px-16 md:pt-28 md:pb-28 lg:px-24">
	<div class="mx-auto max-w-5xl">
		<div use:reveal class="reveal-up">
			<p class="font-mono text-[11px] tracking-[0.2em] text-clay uppercase">Berkas Desa</p>
			<h1 class="mt-3 max-w-2xl font-serif text-5xl italic leading-tight md:text-6xl">
				Profil Cipicung.
			</h1>
		</div>

		<!-- Data ringkas -->
		<dl
			use:reveal={{ delay: 120 }}
			class="reveal-up mt-14 grid grid-cols-2 gap-x-8 gap-y-8 border-y border-ink/15 py-8 font-mono sm:grid-cols-4"
		>
			<div>
				<dt class="text-[11px] tracking-[0.15em] text-ink-soft uppercase">Kode Desa</dt>
				<dd class="mt-1 text-sm text-ink">32.14.05.2005</dd>
			</div>
			<div>
				<dt class="text-[11px] tracking-[0.15em] text-ink-soft uppercase">Luas Wilayah</dt>
				<dd class="mt-1 text-sm text-ink">{boundary?.area || '420 Ha (4,2 km²)'}</dd>
			</div>
			<div>
				<dt class="text-[11px] tracking-[0.15em] text-ink-soft uppercase">Jumlah Penduduk</dt>
				<dd class="mt-1 text-sm text-ink">{boundary?.population || '3.265 jiwa'}</dd>
			</div>
			<div>
				<dt class="text-[11px] tracking-[0.15em] text-ink-soft uppercase">Jumlah KK</dt>
				<dd class="mt-1 text-sm text-ink">{profile?.postal_code ? '1.107 KK' : '1.107 KK'}</dd>
			</div>
		</dl>

		<!-- Sejarah -->
		<div use:reveal class="reveal-up mt-16 grid grid-cols-1 gap-10 md:grid-cols-12">
			<div class="md:col-span-3">
				<p class="font-mono text-[11px] tracking-[0.2em] text-clay uppercase">Sejarah</p>
			</div>
			<div class="md:col-span-8">
				{#if profile?.history}
					<p class="text-sm leading-relaxed text-ink-soft md:text-base">
						{profile.history}
					</p>
				{:else}
					<p class="text-sm leading-relaxed text-ink-soft md:text-base">
						Desa Cipicung pada awalnya merupakan bagian dari Desa Sukamaju. Seiring pemekaran
						wilayah, Cipicung berdiri sebagai desa tersendiri dengan Sukamaju sebagai desa induk.
					</p>
					<p class="mt-4 text-sm leading-relaxed text-ink-soft md:text-base">
						Nama "Cipicung" dipercaya berasal dari gabungan kata <em>"Ci"</em> (air) dan
						<em>"Picung"</em> (nama pohon). Menurut cerita para tetua, wilayah ini dulunya kawasan pegunungan
						dengan banyak mata air dan pohon picung tumbuh di sekitarnya.
					</p>
				{/if}

				<div class="mt-8 flex flex-col divide-y divide-ink/15 border-t border-ink/15">
					{#each defaultKadesHistory as k, i (i)}
						<div
							use:reveal={{ delay: i * 60 }}
							class="reveal-up flex items-center justify-between py-3"
						>
							<span class="text-sm text-ink md:text-base">{k.nama}</span>
							<span class="font-mono text-xs text-ink-soft uppercase">{k.periode}</span>
						</div>
					{/each}
				</div>
				<p class="mt-3 text-xs text-ink-soft/70">Daftar Kepala Desa Cipicung dari masa ke masa.</p>
			</div>
		</div>

		<!-- Geografis -->
		<div use:reveal class="reveal-up mt-16 border-t border-ink/15 pt-16">
			<p class="font-mono text-[11px] tracking-[0.2em] text-clay uppercase">Wilayah &amp; Batas</p>
			<h2 class="mt-3 font-serif text-2xl italic md:text-3xl">Letak &amp; batas wilayah.</h2>

			<div class="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
				<!-- Kiri: info batas, luas, penduduk -->
				<div class="lg:col-span-5">
					<p class="text-sm leading-relaxed text-ink-soft md:text-base">
						{boundary?.region ||
							'Desa Cipicung berada di sisi barat Kecamatan Sukatani, berjarak sekitar 5 km dari kantor kecamatan dan 15 km dari pusat Kabupaten Purwakarta. Wilayahnya berupa perbukitan pada ketinggian 218–394 mdpl, terbagi menjadi dua dusun:'}
					</p>
					<ul class="mt-4 space-y-2 text-sm leading-relaxed text-ink-soft md:text-base">
						<li>
							<span class="text-ink">Dusun I</span> &mdash; {boundary?.hamlet_one ||
								'214,05 Ha, 2 RW / 5 RT.'}
						</li>
						<li>
							<span class="text-ink">Dusun II</span> &mdash; {boundary?.hamlet_two ||
								'205,95 Ha, 2 RW / 6 RT.'}
						</li>
					</ul>

					<dl class="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 border-t border-ink/15 pt-6 font-mono">
						<div>
							<dt class="text-[11px] tracking-[0.15em] text-ink-soft uppercase">Utara</dt>
							<dd class="mt-1 text-sm text-ink">
								{boundary?.north_border || 'Tajur Sindang, Sukamaju'}
							</dd>
						</div>
						<div>
							<dt class="text-[11px] tracking-[0.15em] text-ink-soft uppercase">Timur</dt>
							<dd class="mt-1 text-sm text-ink">{boundary?.east_border || 'Cilalawi, Sukamaju'}</dd>
						</div>
						<div>
							<dt class="text-[11px] tracking-[0.15em] text-ink-soft uppercase">Selatan</dt>
							<dd class="mt-1 text-sm text-ink">
								{boundary?.south_border || 'Linggunung, Pamoyanan'}
							</dd>
						</div>
						<div>
							<dt class="text-[11px] tracking-[0.15em] text-ink-soft uppercase">Barat</dt>
							<dd class="mt-1 text-sm text-ink">
								{boundary?.west_border || 'Sukamulya, Sindanglaya'}
							</dd>
						</div>
					</dl>

					<dl class="mt-6 grid grid-cols-2 gap-x-8 gap-y-4 border-t border-ink/15 pt-6 font-mono">
						<div>
							<dt class="text-[11px] tracking-[0.15em] text-ink-soft uppercase">Luas Desa</dt>
							<dd class="mt-1 text-sm text-ink">{boundary?.area || '420 Ha (4,2 km²)'}</dd>
						</div>
						<div>
							<dt class="text-[11px] tracking-[0.15em] text-ink-soft uppercase">Jumlah Penduduk</dt>
							<dd class="mt-1 text-sm text-ink">{boundary?.population || '3.265 jiwa'}</dd>
						</div>
					</dl>
				</div>

				<!-- Kapan: peta -->
				<div use:reveal={{ delay: 160 }} class="reveal-scale lg:col-span-7">
					<CipicungMap />
				</div>
			</div>
		</div>

		<!-- Visi Misi -->
		<div
			use:reveal
			class="reveal-up mt-16 grid grid-cols-1 gap-10 border-t border-ink/15 pt-16 md:grid-cols-12"
		>
			<div class="md:col-span-3">
				<p class="font-mono text-[11px] tracking-[0.2em] text-clay uppercase">Visi &amp; Misi</p>
				<p class="mt-2 text-xs text-ink-soft/70">RPJM Desa Perubahan 2022&ndash;2029</p>
			</div>
			<div class="md:col-span-8">
				<h2 class="font-serif text-2xl leading-snug italic md:text-3xl">
					&ldquo;{visionMission?.vision ||
						'Terwujudnya Desa Cipicung yang lebih maju, berprestasi, berbudaya, dan kreatif melalui peningkatan sumber daya manusia, pengelolaan sumber daya alam, serta pemantapan pembangunan berlandaskan keagamaan, kultural, dan budaya daerah.'}&rdquo;
				</h2>
				{#if visionMission?.mission && visionMission.mission.length}
					<ol class="mt-6 space-y-4">
						{#each visionMission.mission as misi, i (i)}
							<li use:reveal={{ delay: i * 70 }} class="reveal-up flex gap-4">
								<span class="font-mono text-xs text-ink-soft/60"
									>{String(i + 1).padStart(2, '0')}</span
								>
								<p class="text-sm leading-relaxed text-ink-soft md:text-base">{misi}</p>
							</li>
						{/each}
					</ol>
				{:else}
					<ol class="mt-6 space-y-4">
						{#each ['Meningkatkan ketersediaan dan kualitas infrastruktur pemerintahan desa.', 'Menggali potensi desa dalam rangka peningkatan Pendapatan Asli Desa (PADes).', 'Meningkatkan kualitas sumber daya manusia bagi aparatur dan masyarakat desa.', 'Meningkatkan profesionalisme pelayanan publik.', 'Meningkatkan kualitas hidup masyarakat di bidang kesehatan.'] as misi, i (i)}
							<li use:reveal={{ delay: i * 70 }} class="reveal-up flex gap-4">
								<span class="font-mono text-xs text-ink-soft/60"
									>{String(i + 1).padStart(2, '0')}</span
								>
								<p class="text-sm leading-relaxed text-ink-soft md:text-base">{misi}</p>
							</li>
						{/each}
					</ol>
				{/if}
			</div>
		</div>

		<!-- Struktur -->
		<div
			use:reveal
			class="reveal-up mt-16 grid grid-cols-1 gap-10 border-t border-ink/15 pt-16 md:grid-cols-12"
		>
			<div class="md:col-span-3">
				<p class="font-mono text-[11px] tracking-[0.2em] text-clay uppercase">
					Struktur Pemerintahan
				</p>
			</div>
			<div class="md:col-span-8">
				<div class="grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-ink/10 sm:grid-cols-2">
					{#if structure.length}
						{#each structure as item, i (item.id)}
							<div
								use:reveal={{ delay: i * 50 }}
								class="reveal-up flex items-center gap-3.5 bg-paper p-4 transition-colors hover:bg-paper-dim/50"
							>
								<span
									class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/20 font-serif text-sm italic text-ink-soft"
								>
									{item.name
										.split(' ')
										.map((n) => n[0])
										.slice(0, 2)
										.join('')}
								</span>
								<div class="min-w-0">
									<p class="truncate text-sm text-ink md:text-base">{item.name}</p>
									<p class="font-mono text-[10px] tracking-[0.1em] text-ink-soft uppercase">
										{item.position}
									</p>
								</div>
							</div>
						{/each}
					{:else}
						{#each [{ role: 'Kepala Desa', name: 'Lili Sadili' }, { role: 'Sekretaris Desa', name: 'Joko Mulyono' }, { role: 'Kaur Tata Usaha & Umum', name: 'Sadari Wiharta' }, { role: 'Kaur Keuangan', name: 'Cucu Intan Sari' }, { role: 'Kaur Perencanaan', name: 'Muhamad Deni Jatnika' }, { role: 'Kasi Pemerintahan', name: 'Abdul Jalal Wiharja' }, { role: 'Kasi Kesejahteraan', name: 'Hermawan Sutisna' }, { role: 'Kasi Pelayanan', name: 'Ahmad Jaeni Tahir' }, { role: 'Kepala Dusun I', name: 'Enjang' }, { role: 'Kepala Dusun II', name: 'Asep Saepuloh' }] as item, i (i)}
							<div
								use:reveal={{ delay: i * 50 }}
								class="reveal-up flex items-center gap-3.5 bg-paper p-4 transition-colors hover:bg-paper-dim/50"
							>
								<span
									class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/20 font-serif text-sm italic text-ink-soft"
								>
									{item.name
										.split(' ')
										.map((n) => n[0])
										.slice(0, 2)
										.join('')}
								</span>
								<div class="min-w-0">
									<p class="truncate text-sm text-ink md:text-base">{item.name}</p>
									<p class="font-mono text-[10px] tracking-[0.1em] text-ink-soft uppercase">
										{item.role}
									</p>
								</div>
							</div>
						{/each}
					{/if}
				</div>
				<p class="mt-4 text-xs text-ink-soft/70">
					Sumber: RPJM Desa Perubahan Cipicung 2025&ndash;2029.
				</p>
			</div>
		</div>

		<!-- Potensi -->
		<div
			use:reveal
			class="reveal-up mt-16 grid grid-cols-1 gap-10 border-t border-ink/15 pt-16 md:grid-cols-12"
		>
			<div class="md:col-span-3">
				<p class="font-mono text-[11px] tracking-[0.2em] text-clay uppercase">
					Potensi Sumber Daya
				</p>
			</div>
			<div class="md:col-span-8">
				<p class="text-sm leading-relaxed text-ink-soft md:text-base">
					{resources?.description ||
						'Sebagian besar wilayah Cipicung berupa perbukitan, sehingga mata pencaharian warga didominasi sektor pertanian dan perkebunan.'}
				</p>
				{#if resources?.detail}
					<p class="mt-2 text-sm leading-relaxed text-ink-soft md:text-base font-semibold">
						{resources.detail}
					</p>
				{/if}
				<dl
					class="mt-6 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-ink/15 pt-6 font-mono sm:grid-cols-3"
				>
					<div>
						<dt class="text-[11px] tracking-[0.15em] text-ink-soft uppercase">Sawah</dt>
						<dd class="mt-1 text-sm text-ink">61,26 Ha</dd>
					</div>
					<div>
						<dt class="text-[11px] tracking-[0.15em] text-ink-soft uppercase">Holtikultura</dt>
						<dd class="mt-1 text-sm text-ink">43,4 Ha</dd>
					</div>
					<div>
						<dt class="text-[11px] tracking-[0.15em] text-ink-soft uppercase">Perkebunan</dt>
						<dd class="mt-1 text-sm text-ink">102,41 Ha</dd>
					</div>
					<div>
						<dt class="text-[11px] tracking-[0.15em] text-ink-soft uppercase">
							Petani &amp; Buruh Tani
						</dt>
						<dd class="mt-1 text-sm text-ink">510 orang</dd>
					</div>
					<div>
						<dt class="text-[11px] tracking-[0.15em] text-ink-soft uppercase">Pedagang</dt>
						<dd class="mt-1 text-sm text-ink">114 orang</dd>
					</div>
					<div>
						<dt class="text-[11px] tracking-[0.15em] text-ink-soft uppercase">Aliran Sungai</dt>
						<dd class="mt-1 text-sm text-ink">1 km</dd>
					</div>
				</dl>
				<p class="mt-4 text-xs text-ink-soft/70">
					Sumber: RPJM Desa Perubahan Cipicung, data 2024.
				</p>
			</div>
		</div>
	</div>
</section>
