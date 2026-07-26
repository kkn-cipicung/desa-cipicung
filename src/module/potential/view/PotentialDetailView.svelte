<script lang="ts">
	import type { PotentialResponse } from '../_model/response';
	import { reveal } from '$lib/actions/reveal';
	import { getMediaUrl } from '../../../utils/media';

	let { data }: { data: { item: PotentialResponse | null } } = $props();
	const item = $derived(data.item);
</script>

<svelte:head>
	<title>{item ? `${item.title} - Potensi Desa Cipicung` : 'Potensi Desa - Desa Cipicung'}</title>
</svelte:head>

{#if item}
	<section class="mobile-page-section w-full px-4 pt-24 pb-16 sm:px-6 md:px-16 md:pt-28 md:pb-32 lg:px-24">
		<div class="mx-auto max-w-4xl">
			<a
				href="/potensi"
				class="font-mono text-[11px] tracking-[0.15em] text-ink-soft uppercase hover:text-clay"
			>
				&larr; Semua Potensi Desa
			</a>

			<div
				class="mt-8 flex flex-col gap-10 border-t border-ink/15 pt-10 md:flex-row md:items-start"
			>
				{#if item.media || item.media_id}
					<div use:reveal class="reveal-scale w-full shrink-0 md:w-64">
						<div class="aspect-square w-full overflow-hidden rounded-sm bg-ink/5">
							<img
								src={getMediaUrl(item.media || item.media_id)}
								alt={item.title}
								class="h-full w-full object-cover"
							/>
						</div>
					</div>
				{/if}

				<div use:reveal={{ delay: 140 }} class="reveal-up flex-1">
					<p class="font-mono text-[11px] tracking-[0.2em] text-clay uppercase">
						{item.category?.name || 'Potensi'}
					</p>
					<h1 class="mt-2 font-serif text-4xl italic md:text-5xl">{item.title}</h1>

					{#if item.subtitle}
						<p class="mt-2 font-mono text-xs text-ink-soft uppercase">{item.subtitle}</p>
					{/if}

					<p class="mt-6 max-w-xl text-sm leading-relaxed text-ink-soft md:text-base">
						{item.description}
					</p>

					<p
						class="mt-8 border-t border-ink/15 pt-6 font-mono text-[11px] tracking-[0.15em] text-ink-soft uppercase"
					>
						Lokasi &mdash; Desa Cipicung, Kec. Sukatani
					</p>
				</div>
			</div>
		</div>
	</section>
{:else}
	<section
		class="flex min-h-[60vh] w-full flex-col items-center justify-center px-6 pt-24 text-center"
	>
		<p class="font-mono text-[11px] tracking-[0.2em] text-clay uppercase">404</p>
		<h1 class="mt-3 font-serif text-4xl italic">Data tidak ditemukan.</h1>
		<a
			href="/potensi"
			class="mt-8 font-mono text-[11px] tracking-[0.15em] text-ink-soft uppercase hover:text-clay"
		>
			&larr; Kembali ke Potensi Desa
		</a>
	</section>
{/if}
