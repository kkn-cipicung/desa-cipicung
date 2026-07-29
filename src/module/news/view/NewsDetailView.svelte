<script lang="ts">
	import type { NewsResponse } from '../_model/response';
	import { reveal } from '$lib/actions/reveal';
	import { getMediaUrl } from '../../../utils/media';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';

	let { data }: { data: { item: NewsResponse | null; lainnya: NewsResponse[] } } = $props();
	const item = $derived(data.item);
	const paragraphs = $derived(item?.description.split('\n\n') ?? []);
	const lainnya = $derived(data.lainnya);

	const formatDate = (dateStr?: string) => {
		if (!dateStr) return '';
		return new Date(dateStr).toLocaleDateString('id-ID', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		});
	};

	function handleBack() {
		if (browser) {
			const backUrl = sessionStorage.getItem(`newsDetailBackUrl:${window.location.pathname}`);

			if (backUrl && backUrl !== `${window.location.pathname}${window.location.search}`) {
				goto(backUrl);
				return;
			}
		}

		goto('/berita');
	}
</script>

<svelte:head>
	<title>{item ? `${item.title} - Desa Cipicung` : 'Berita - Desa Cipicung'}</title>
	<meta name="description" content={item?.description ?? 'Berita Desa Cipicung'} />
</svelte:head>

{#if item}
	<article class="w-full px-6 pt-24 pb-20 md:px-16 md:pt-28 md:pb-28 lg:px-24">
		<div class="mx-auto max-w-2xl">
			<button
				type="button"
				onclick={handleBack}
				class="font-mono text-[11px] tracking-[0.15em] text-ink-soft uppercase hover:text-clay"
			>
				&larr; Kembali
			</button>

			<div use:reveal class="reveal-up">
				<div class="mt-6 flex items-center gap-2">
					{#if item.category_name || item.category?.name}
						<span
							class="rounded-full bg-clay/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-clay uppercase"
						>
							{item.category_name || item.category?.name}
						</span>
					{/if}
					<span class="font-mono text-[11px] tracking-[0.2em] text-clay uppercase">
						{formatDate(item.created_at)}
					</span>
				</div>
				<h1 class="mt-3 font-serif text-3xl leading-tight text-ink italic md:text-5xl">
					{item.title}
				</h1>
			</div>

			{#if item.media || item.media_id}
				<div
					use:reveal={{ delay: 120 }}
					class="reveal-scale mt-8 aspect-[16/9] w-full overflow-hidden rounded-sm"
				>
					<img
						src={getMediaUrl(item.media || item.media_id)}
						alt={item.title}
						class="h-full w-full object-cover"
					/>
				</div>
			{/if}

			<div
				use:reveal={{ delay: 200 }}
				class="reveal-up mt-10 flex flex-col gap-5 border-t border-ink/15 pt-10"
			>
				{#each paragraphs as p, i (i)}
					<p class="text-sm leading-relaxed text-ink-soft md:text-base">{p}</p>
				{/each}
			</div>

			{#if item.source}
				<p class="mt-10 text-xs text-ink-soft/70">
					Sumber: {item.source}
				</p>
			{/if}

			{#if lainnya.length}
				<div use:reveal class="reveal-up mt-16 border-t border-ink/15 pt-10">
					<p class="font-mono text-[11px] tracking-[0.2em] text-clay uppercase">Berita lainnya</p>
					<ul class="mt-6 flex flex-col divide-y divide-ink/10">
						{#each lainnya as b (b.id)}
							<li>
								<a href="/berita/{b.id}" class="group flex flex-col gap-1 py-4">
									<span class="font-mono text-[10px] tracking-[0.1em] text-ink-soft uppercase">
										{formatDate(b.created_at)}
									</span>
									<span
										class="font-serif text-lg text-ink italic transition-colors group-hover:text-clay"
									>
										{b.title}
									</span>
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/if}
		</div>
	</article>
{:else}
	<section
		class="flex min-h-[60vh] w-full flex-col items-center justify-center px-6 pt-24 text-center"
	>
		<p class="font-mono text-[11px] tracking-[0.2em] text-clay uppercase">404</p>
		<h1 class="mt-3 font-serif text-3xl italic md:text-4xl">Berita tidak ditemukan.</h1>
		<a href="/berita" class="mt-6 font-mono text-[11px] tracking-[0.15em] text-clay uppercase">
			&larr; Kembali ke berita
		</a>
	</section>
{/if}
