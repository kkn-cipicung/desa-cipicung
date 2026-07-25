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

	const headmenHistory = $derived(
		profile?.headmen && profile.headmen.length
			? profile.headmen.map((h) => ({
					nama: h.name,
					periode: `${h.start_date}${h.finish_date ? ' — ' + h.finish_date : ' — sekarang'}`
				}))
			: []
	);
</script>

<svelte:head>
	<title>Profil Desa - Desa Cipicung</title>
	<meta
		name="description"
		content="Profil, sejarah, visi misi, dan struktur pemerintahan Desa Cipicung."
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
			class="reveal-up mt-14 grid grid-cols-2 gap-x-8 gap-y-8 border-y border-ink/15 py-8 font-mono sm:grid-cols-5"
		>
			<div>
				<dt class="text-[11px] tracking-[0.15em] text-ink-soft uppercase">Kode Desa</dt>
				<dd class="mt-1 text-sm text-ink">{profile?.postal_code || ''}</dd>
			</div>
			<div>
				<dt class="text-[11px] tracking-[0.15em] text-ink-soft uppercase">Luas Wilayah</dt>
				<dd class="mt-1 text-sm text-ink">{boundary?.area || ''}</dd>
			</div>
			<div>
				<dt class="text-[11px] tracking-[0.15em] text-ink-soft uppercase">Jumlah RT</dt>
				<dd class="mt-1 text-sm text-ink">{profile?.total_rt || boundary?.total_rt || 0}</dd>
			</div>
			<div>
				<dt class="text-[11px] tracking-[0.15em] text-ink-soft uppercase">Jumlah RW</dt>
				<dd class="mt-1 text-sm text-ink">{profile?.total_rw || boundary?.total_rw || 0}</dd>
			</div>
			<div>
				<dt class="text-[11px] tracking-[0.15em] text-ink-soft uppercase">Jumlah KK</dt>
				<dd class="mt-1 text-sm text-ink">
					{profile?.total_family || boundary?.total_family || 0}
				</dd>
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
					<p class="text-sm leading-relaxed text-ink-soft md:text-base"></p>
				{/if}

				{#if headmenHistory.length}
					<div class="mt-8 flex flex-col divide-y divide-ink/15 border-t border-ink/15">
						{#each headmenHistory as k, i (i)}
							<div
								use:reveal={{ delay: i * 60 }}
								class="reveal-up flex items-center justify-between py-3"
							>
								<span class="text-sm text-ink md:text-base">{k.nama}</span>
								<span class="font-mono text-xs text-ink-soft uppercase">{k.periode}</span>
							</div>
						{/each}
					</div>
					<p class="mt-3 text-xs text-ink-soft/70">
						Daftar Kepala Desa Cipicung dari masa ke masa.
					</p>
				{/if}
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
						{boundary?.region || ''}
					</p>
					<ul class="mt-4 space-y-2 text-sm leading-relaxed text-ink-soft md:text-base">
						<li>
							<span class="text-ink">RT / RW Dusun I</span> &mdash; {boundary?.rt_hamlet_one || 0} /
							{boundary?.rw_hamlet_one || 0}
						</li>
						<li>
							<span class="text-ink">RT / RW Dusun II</span> &mdash; {boundary?.rt_hamlet_two || 0} /
							{boundary?.rw_hamlet_two || 0}
						</li>
						<li>
							<span class="text-ink">Jumlah KK</span> &mdash; {boundary?.total_family || 0}
						</li>
					</ul>

					<dl class="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 border-t border-ink/15 pt-6 font-mono">
						<div>
							<dt class="text-[11px] tracking-[0.15em] text-ink-soft uppercase">Utara</dt>
							<dd class="mt-1 text-sm text-ink">
								{boundary?.north_border || ''}
							</dd>
						</div>
						<div>
							<dt class="text-[11px] tracking-[0.15em] text-ink-soft uppercase">Timur</dt>
							<dd class="mt-1 text-sm text-ink">{boundary?.east_border || ''}</dd>
						</div>
						<div>
							<dt class="text-[11px] tracking-[0.15em] text-ink-soft uppercase">Selatan</dt>
							<dd class="mt-1 text-sm text-ink">
								{boundary?.south_border || ''}
							</dd>
						</div>
						<div>
							<dt class="text-[11px] tracking-[0.15em] text-ink-soft uppercase">Barat</dt>
							<dd class="mt-1 text-sm text-ink">
								{boundary?.west_border || ''}
							</dd>
						</div>
					</dl>

					<dl class="mt-6 grid grid-cols-2 gap-x-8 gap-y-4 border-t border-ink/15 pt-6 font-mono">
						<div>
							<dt class="text-[11px] tracking-[0.15em] text-ink-soft uppercase">Luas Desa</dt>
							<dd class="mt-1 text-sm text-ink">{boundary?.area || ''}</dd>
						</div>
						<div>
							<dt class="text-[11px] tracking-[0.15em] text-ink-soft uppercase">Total RT / RW</dt>
							<dd class="mt-1 text-sm text-ink">
								{boundary?.total_rt || 0} / {boundary?.total_rw || 0}
							</dd>
						</div>
					</dl>
				</div>

				<!-- Kanan: peta -->
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
			</div>
			<div class="md:col-span-8">
				{#if visionMission?.vision}
					<h2 class="font-serif text-2xl leading-snug italic md:text-3xl">
						&ldquo;{visionMission.vision}&rdquo;
					</h2>
				{/if}
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
				{#if structure.length}
					<div class="grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-ink/10 sm:grid-cols-2">
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
					</div>
				{/if}
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
				{#if resources?.description}
					<p class="text-sm leading-relaxed text-ink-soft md:text-base">
						{resources.description}
					</p>
				{/if}
				{#if resources?.detail}
					<p class="mt-2 text-sm leading-relaxed text-ink-soft md:text-base font-semibold">
						{resources.detail}
					</p>
				{/if}
			</div>
		</div>
	</div>
</section>
