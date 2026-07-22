<script lang="ts">
	import type { PotentialResponse } from '../_model/response';
	import { reveal } from '$lib/actions/reveal';
	import { getMediaUrl } from '../../../utils/media';

	let { data }: { data: { items: PotentialResponse[] } } = $props();
	const items = $derived(data.items);
</script>

<svelte:head>
	<title>Potensi Desa - Desa Cipicung</title>
	<meta
		name="description"
		content="Potensi desa Cipicung: hasil bumi, kerajinan, dan usaha milik desa yang menggerakkan kehidupan warga Desa Cipicung, Kecamatan Sukatani, Kabupaten Purwakarta."
	/>
</svelte:head>

<section class="w-full px-6 pt-24 pb-20 md:px-16 md:pt-28 md:pb-28 lg:px-24">
	<div class="mx-auto max-w-6xl">
		<div use:reveal class="reveal-up">
			<p class="font-mono text-[11px] tracking-[0.2em] text-clay uppercase">Denyut Desa</p>
			<h1 class="mt-3 max-w-2xl font-serif text-5xl italic leading-tight md:text-6xl">
				Potensi Cipicung.
			</h1>
			<p class="mt-6 max-w-xl text-sm leading-relaxed text-ink-soft md:text-base">
				Gambaran apa saja yang ada dan digerakkan warga sehari-hari &mdash; dari hasil bumi,
				kerajinan tangan, sampai unit usaha milik desa.
			</p>
		</div>

		{#if items.length === 0}
			<div class="mt-14 rounded-sm border border-dashed border-ink/20 px-6 py-14 text-center">
				<p class="text-sm text-ink-soft">Belum ada data potensi desa yang tersedia.</p>
			</div>
		{:else}
			<div
				class="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-ink/10 sm:grid-cols-2 lg:grid-cols-3"
			>
				{#each items as item, i (item.id)}
					<a
						href="/potensi/{item.id}"
						use:reveal={{ delay: i * 90 }}
						class="reveal-up group flex flex-col justify-between bg-paper transition-colors hover:bg-ink/[0.03]"
					>
						{#if item.media || item.media_id}
							<div class="aspect-[4/3] w-full overflow-hidden bg-ink/5">
								<img
									src={getMediaUrl(item.media || item.media_id)}
									alt={item.title}
									loading="lazy"
									class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
							</div>
						{/if}
						<div class="flex flex-1 flex-col gap-3 p-7">
							<span class="font-mono text-[10px] tracking-[0.15em] text-clay uppercase">
								{item.category?.name || 'Potensi'}
							</span>
							<h2 class="font-serif text-2xl text-ink italic">{item.title}</h2>
							<p class="text-sm leading-relaxed text-ink-soft">
								{item.description.length > 120
									? item.description.slice(0, 120) + '...'
									: item.description}
							</p>
							{#if item.subtitle}
								<div class="mt-1 flex flex-wrap gap-2">
									<span
										class="rounded-full border border-ink/15 px-3 py-1 font-mono text-[10px] tracking-[0.05em] text-ink-soft uppercase transition-colors"
									>
										{item.subtitle}
									</span>
								</div>
							{/if}
							<span class="mt-auto pt-2 font-mono text-[11px] tracking-[0.1em] text-clay uppercase">
								Selengkapnya &rarr;
							</span>
						</div>
					</a>
				{/each}
			</div>
		{/if}
	</div>
</section>
