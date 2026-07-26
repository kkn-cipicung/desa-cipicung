<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import CountUp from '$lib/components/CountUp.svelte';
	import type { DashboardOverviewResponse } from '../_model/response';
	import { getMediaUrl } from '../../../utils/media';

	let { overview }: { overview: DashboardOverviewResponse | null } = $props();

	const cards = $derived(
		overview
			? [
					{ label: 'Luas Wilayah', value: overview.area || '', num: null },
					{
						label: 'Penduduk',
						value: overview.population ? 'jiwa' : '',
						num: overview.population || null
					},
					{
						label: 'Kepala Keluarga',
						value: overview.total_family ? 'KK' : '',
						num: overview.total_family || null
					},
					{
						label: 'Dusun',
						value: overview.total_hamlet ? 'dusun' : '',
						num: overview.total_hamlet || null
					}
				]
			: []
	);
</script>

<section class="w-full border-t border-ink/15 px-4 py-16 sm:px-6 md:px-16 md:py-28 lg:px-24">
	<div class="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-12 md:gap-8">
		<div use:reveal class="reveal-up md:col-span-4">
			<p class="font-mono text-[11px] tracking-[0.2em] text-clay uppercase">Sekilas Desa</p>
			<h2 class="mobile-subtitle mt-3 font-serif text-4xl leading-tight italic md:text-5xl">
				{overview?.title || ''}
			</h2>
		</div>

		<div use:reveal={{ delay: 120 }} class="reveal-scale md:col-span-3 md:col-start-6">
			<div class="aspect-[16/11] w-full overflow-hidden rounded-sm md:aspect-[4/5]">
				<img
					src={getMediaUrl(overview?.media)}
					alt="Sekilas Desa Cipicung"
					class="h-full w-full object-cover grayscale-[15%]"
				/>
			</div>
		</div>

		<div
			use:reveal={{ delay: 200 }}
			class="reveal-up flex flex-col gap-6 md:col-span-4 md:col-start-9"
		>
			{#if overview?.description}
				<p class="text-sm leading-relaxed text-ink-soft md:text-base">
					{overview.description}
				</p>
			{:else}
				<p class="text-sm leading-relaxed text-ink-soft md:text-base"></p>
			{/if}
		</div>

		<!-- Statistik dalam kartu -->
		<div class="md:col-span-12">
			<div class="mt-2 grid grid-cols-1 gap-3 border-t border-ink/15 pt-6 min-[420px]:grid-cols-2 sm:grid-cols-4 md:mt-4 md:pt-8">
				{#each cards as card, i (card.label)}
					<div
						use:reveal={{ delay: i * 90 }}
						class="reveal-up flex flex-col gap-2 rounded-lg border border-ink/12 bg-paper-dim/40 p-4 transition-colors hover:border-clay/60 hover:shadow-md sm:p-5"
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
