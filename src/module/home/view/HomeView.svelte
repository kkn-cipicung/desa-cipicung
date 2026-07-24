<script lang="ts">
	import Overview from '../tabs/Overview.svelte';
	import BeritaScroll from '../tabs/BeritaScroll.svelte';
	import Explore from '../tabs/Explore.svelte';
	import Potensi from '../tabs/Potensi.svelte';
	import StempelDesa from '$lib/components/StempelDesa.svelte';
	import ContourLines from '$lib/components/ContourLines.svelte';
	import { reveal } from '$lib/actions/reveal';
	import type { DashboardResponse, DashboardOverviewResponse } from '../_model/response';
	import type { NewsResponse } from '../../news/_model/response';
	import type { PotentialResponse } from '../../potential/_model/response';
	import { getMediaUrl } from '../../../utils/media';

	let {
		data
	}: {
		data: {
			activeDashboard: DashboardResponse | null;
			overview: DashboardOverviewResponse | null;
			newsList: NewsResponse[];
			potentialList: PotentialResponse[];
		};
	} = $props();
</script>

<svelte:head>
	<title>Desa Cipicung - Portal Resmi</title>
	<meta name="description" content="Portal resmi Desa Cipicung." />
</svelte:head>

<div class="flex w-full flex-col">
	<!-- Hero -->
	<section class="relative flex min-h-screen w-full shrink-0 flex-col overflow-hidden bg-ink">
		<img
			src={getMediaUrl(data.activeDashboard?.media)}
			alt={data.activeDashboard?.title || ''}
			class="absolute inset-0 h-full w-full object-cover opacity-55 grayscale-[10%]"
		/>
		<div class="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/25"></div>
		<div class="absolute inset-0 bg-clay/10 mix-blend-multiply"></div>
		<ContourLines class="absolute inset-x-0 bottom-0 h-2/5 w-full text-paper/[0.08]" />

		<!-- Cap resmi: signature element -->
		<div
			use:reveal={{ delay: 500 }}
			class="reveal-scale absolute top-20 right-6 -rotate-6 text-paper/70 md:top-24 md:right-14"
		>
			<StempelDesa size={104} />
		</div>

		<!-- Survey readout: real elevation data, not decoration -->
		<div
			use:reveal={{ delay: 650 }}
			class="reveal-fade absolute top-6 left-6 flex items-center gap-3 font-mono text-[10px] tracking-[0.15em] text-paper/50 uppercase md:top-8 md:left-16"
		>
			<span>06&deg;36'37"S 107&deg;22'39"E</span>
			<span class="h-3 w-px bg-paper/30"></span>
			<span>218&ndash;394 MDPL</span>
		</div>

		<div
			class="relative z-10 flex flex-grow flex-col justify-end px-6 pb-16 md:px-16 md:pb-20 lg:px-24"
		>
			<p
				use:reveal
				class="reveal-up font-mono text-[11px] tracking-[0.25em] text-paper/60 uppercase"
			>
				Kecamatan Sukatani &middot; Kabupaten Purwakarta &middot; Jawa Barat
			</p>
			<h1
				use:reveal={{ delay: 120 }}
				class="reveal-up mt-4 max-w-3xl font-serif text-6xl leading-[0.95] font-light text-paper italic sm:text-7xl md:text-8xl lg:text-9xl"
			>
				{data.activeDashboard?.title || ''}
			</h1>
			<p
				use:reveal={{ delay: 260 }}
				class="reveal-up mt-6 max-w-md text-sm leading-relaxed text-paper/70 md:text-base"
			>
				{data.activeDashboard?.description || ''}
			</p>
			<div use:reveal={{ delay: 380 }} class="reveal-up mt-10 flex items-center gap-6">
				<a
					href="#potensi"
					class="rounded-full border border-paper/70 bg-paper px-6 py-3 font-mono text-[11px] tracking-[0.15em] text-ink uppercase transition-all hover:scale-105 hover:bg-clay hover:text-paper"
				>
					Jelajahi Desa
				</a>
				<a
					href="/profile"
					class="font-mono text-[11px] tracking-[0.15em] text-paper/70 uppercase underline decoration-paper/30 underline-offset-4 transition-colors hover:text-paper hover:decoration-clay"
				>
					Lihat Profil &rarr;
				</a>
			</div>
		</div>
	</section>

	<BeritaScroll berita={data.newsList} />
	<Overview overview={data.overview} />
	<Explore />
	<Potensi items={data.potentialList} />
</div>
