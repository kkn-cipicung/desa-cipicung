<script lang="ts">
	import type { PotentialResponse } from '../../potential/_model/response';
	import { reveal } from '$lib/actions/reveal';
	import { env } from '$env/dynamic/public';

	let { items }: { items: PotentialResponse[] } = $props();

	function getImageUrl(mediaPath?: string | null) {
		if (!mediaPath) return '/placeholder-potential.jpg';
		if (mediaPath.startsWith('http://') || mediaPath.startsWith('https://')) return mediaPath;
		const baseUrl = env.PUBLIC_API_URL || 'http://localhost:8080';
		return `${baseUrl.replace(/\/api\/?$/, '')}/${mediaPath.replace(/^\//, '')}`;
	}
</script>

<section
	id="potensi"
	class="w-full scroll-mt-24 border-t border-ink/15 px-6 py-20 md:px-16 md:py-28 lg:px-24"
>
	<div class="mx-auto max-w-6xl">
		<div use:reveal class="reveal-up flex flex-wrap items-end justify-between gap-6">
			<div>
				<p class="font-mono text-[11px] tracking-[0.2em] text-clay uppercase">Potensi</p>
				<h2 class="mt-3 max-w-lg font-serif text-4xl italic leading-tight md:text-5xl">
					Potensi unggulan desa.
				</h2>
			</div>
			<a
				href="/potensi"
				class="font-mono text-[11px] tracking-[0.15em] text-clay uppercase underline underline-offset-4 hover:text-clay-dark"
			>
				Lihat semua potensi desa &rarr;
			</a>
		</div>

		{#if items.length === 0}
			<p class="mt-14 text-sm text-ink-soft">Belum ada data potensi desa yang tersedia saat ini.</p>
		{:else}
			<div class="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
				{#each items as item, i (item.id)}
					<a
						href="/potensi/{item.id}"
						use:reveal={{ delay: i * 110 }}
						class="reveal-up group flex flex-col"
					>
						<div class="aspect-[4/3] w-full overflow-hidden rounded-sm bg-ink/5">
							<img
								src={getImageUrl(item.media)}
								alt={item.title}
								loading="lazy"
								class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
						</div>
						<span class="mt-4 font-mono text-[10px] tracking-[0.15em] text-clay uppercase">
							{item.category?.name || ''}
						</span>
						<h3
							class="mt-1 font-serif text-2xl text-ink italic transition-colors group-hover:text-clay"
						>
							{item.title}
						</h3>
						<p class="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-soft md:text-base">
							{item.subtitle || item.description || ''}
						</p>
					</a>
				{/each}
			</div>
		{/if}
	</div>
</section>
