<script lang="ts">
	import type { NewsResponse } from '../../news/_model/response';
	import { reveal } from '$lib/actions/reveal';
	import { env } from '$env/dynamic/public';

	let { berita = [] }: { berita?: NewsResponse[] } = $props();

	function getImageUrl(mediaPath?: string | null) {
		if (!mediaPath) return '/hero-image.JPG';
		if (mediaPath.startsWith('http://') || mediaPath.startsWith('https://')) return mediaPath;
		const baseUrl = env.PUBLIC_API_URL || 'http://localhost:8080';
		return `${baseUrl.replace(/\/api\/?$/, '')}/${mediaPath.replace(/^\//, '')}`;
	}
</script>

<section class="w-full border-t border-ink/15 py-20 md:py-28">
	<div class="mx-auto max-w-7xl px-6 md:px-16 lg:px-24">
		<div
			use:reveal
			class="reveal-up flex flex-col items-start justify-between gap-4 md:flex-row md:items-end"
		>
			<div>
				<p class="font-mono text-[11px] tracking-[0.2em] text-clay uppercase">Kabar Desa</p>
				<h2 class="mt-3 font-serif text-4xl italic md:text-5xl">Berita terbaru.</h2>
			</div>
			<a
				href="/berita"
				class="shrink-0 font-mono text-[11px] tracking-[0.15em] text-ink-soft uppercase underline decoration-ink/20 underline-offset-4 hover:text-clay hover:decoration-clay"
			>
				Semua berita &rarr;
			</a>
		</div>
	</div>

	<!-- Horizontal scroll -->
	{#if berita.length === 0}
		<div class="mx-auto mt-12 max-w-7xl px-6 md:px-16 lg:px-24">
			<div class="rounded-sm border border-dashed border-ink/20 px-6 py-10 text-center">
				<p class="text-sm text-ink-soft">Belum ada berita yang diterbitkan.</p>
			</div>
		</div>
	{:else}
		<div class="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:px-16 lg:px-24">
			{#each berita as item, i (item.id)}
				<a
					href="/berita/{item.id}"
					use:reveal={{ delay: i * 90 }}
					class="reveal-up group flex w-[78vw] shrink-0 snap-start flex-col justify-between gap-5 rounded-sm border border-ink/15 bg-paper-dim/60 p-6 transition-colors hover:border-clay hover:shadow-lg sm:w-[340px]"
				>
					<div class="aspect-[16/10] w-full overflow-hidden rounded-sm bg-ink/5">
						<img
							src={getImageUrl(item.media)}
							alt={item.title}
							loading="lazy"
							class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						/>
					</div>
					<span class="font-mono text-[11px] tracking-[0.15em] text-clay uppercase">
						{item.created_at || ''}
					</span>
					<div>
						<h3 class="font-serif text-xl leading-snug text-ink italic md:text-2xl">
							{item.title}
						</h3>
						<p class="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-soft">
							{item.description}
						</p>
					</div>
					<span
						class="font-mono text-[11px] tracking-[0.1em] text-ink-soft uppercase transition-colors group-hover:text-clay"
					>
						Baca selengkapnya &rarr;
					</span>
				</a>
			{/each}
		</div>
	{/if}
</section>
