<script lang="ts">
	import type { PageProps } from './$types';
	import { reveal } from '$lib/actions/reveal';

	let { data }: PageProps = $props();
	const item = $derived(data.item);
	const paragraphs = $derived(item?.isi.split('\n\n') ?? []);
	const lainnya = $derived(data.lainnya);
</script>

<svelte:head>
	<title>{item ? `${item.judul} - Desa Cipicung` : 'Berita - Desa Cipicung'}</title>
	<meta name="description" content={item?.ringkasan ?? 'Berita Desa Cipicung'} />
</svelte:head>

{#if item}
	<article class="w-full px-6 pt-24 pb-20 md:px-16 md:pt-28 md:pb-28 lg:px-24">
		<div class="mx-auto max-w-2xl">
			<a
				href="/berita"
				class="font-mono text-[11px] tracking-[0.15em] text-ink-soft uppercase hover:text-clay"
			>
				&larr; Semua berita
			</a>

			<div use:reveal class="reveal-up">
				<p class="mt-6 font-mono text-[11px] tracking-[0.2em] text-clay uppercase">
					{item.tanggal}
				</p>
				<h1 class="mt-3 font-serif text-3xl leading-tight text-ink italic md:text-5xl">
					{item.judul}
				</h1>
			</div>

			<div
				use:reveal={{ delay: 120 }}
				class="reveal-scale mt-8 aspect-[16/9] w-full overflow-hidden rounded-sm"
			>
				<img src={item.gambar} alt={item.judul} class="h-full w-full object-cover" />
			</div>

			<div
				use:reveal={{ delay: 200 }}
				class="reveal-up mt-10 flex flex-col gap-5 border-t border-ink/15 pt-10"
			>
				{#each paragraphs as p, i (i)}
					<p class="text-sm leading-relaxed text-ink-soft md:text-base">{p}</p>
				{/each}
			</div>

			<p class="mt-10 text-xs text-ink-soft/70">
				Sumber: Peraturan Desa Cipicung Nomor 6 Tahun 2025 tentang RPJM Desa Perubahan
				2025&ndash;2029.
			</p>

			{#if lainnya.length}
				<div use:reveal class="reveal-up mt-16 border-t border-ink/15 pt-10">
					<p class="font-mono text-[11px] tracking-[0.2em] text-clay uppercase">Berita lainnya</p>
					<ul class="mt-6 flex flex-col divide-y divide-ink/10">
						{#each lainnya as b (b.slug)}
							<li>
								<a href="/berita/{b.slug}" class="group flex flex-col gap-1 py-4">
									<span class="font-mono text-[10px] tracking-[0.1em] text-ink-soft uppercase">
										{b.tanggal}
									</span>
									<span
										class="font-serif text-lg text-ink italic transition-colors group-hover:text-clay"
									>
										{b.judul}
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
