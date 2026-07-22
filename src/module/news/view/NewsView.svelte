<script lang="ts">
	import type { NewsResponse } from '../_model/response';
	import { reveal } from '$lib/actions/reveal';
	import { getMediaUrl } from '../../../utils/media';

	let { data }: { data: { berita: NewsResponse[] } } = $props();
	const berita = $derived(data.berita);

	const formatDate = (dateStr?: string) => {
		if (!dateStr) return '';
		return new Date(dateStr).toLocaleDateString('id-ID', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		});
	};
</script>

<svelte:head>
	<title>Berita - Desa Cipicung</title>
	<meta
		name="description"
		content="Kronologi resmi penyusunan dan penetapan RPJM Desa Cipicung Perubahan 2025–2029, Kecamatan Sukatani, Kabupaten Purwakarta."
	/>
</svelte:head>

<section class="w-full px-6 pt-24 pb-20 md:px-16 md:pt-28 md:pb-28 lg:px-24">
	<div class="mx-auto max-w-3xl">
		<div use:reveal class="reveal-up">
			<p class="font-mono text-[11px] tracking-[0.2em] text-clay uppercase">Kabar Desa</p>
			<h1 class="mt-3 max-w-2xl font-serif text-5xl italic leading-tight md:text-6xl">
				Berita Cipicung.
			</h1>
			<p class="mt-6 max-w-xl text-sm leading-relaxed text-ink-soft md:text-base">
				Kronologi resmi penyusunan dan penetapan Rencana Pembangunan Jangka Menengah (RPJM) Desa
				Cipicung Perubahan 2025&ndash;2029.
			</p>
		</div>

		{#if berita.length === 0}
			<div class="mt-14 rounded-sm border border-dashed border-ink/20 px-6 py-14 text-center">
				<p class="text-sm text-ink-soft">Belum ada berita yang diterbitkan.</p>
			</div>
		{:else}
			<ol class="mt-14 flex flex-col border-t border-ink/15">
				{#each berita as item, i (item.id)}
					<li use:reveal={{ delay: i * 70 }} class="reveal-up border-b border-ink/15">
						<a
							href="/berita/{item.id}"
							class="group flex flex-col gap-5 py-8 transition-colors md:flex-row md:gap-8"
						>
							{#if item.media || item.media_id}
								<div
									class="aspect-[4/3] w-full shrink-0 overflow-hidden rounded-sm bg-ink/5 md:w-40"
								>
									<img
										src={getMediaUrl(item.media || item.media_id)}
										alt={item.title}
										loading="lazy"
										class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
									/>
								</div>
							{/if}
							<div class="flex-1">
								<span class="font-mono text-[11px] tracking-[0.15em] text-clay uppercase">
									{formatDate(item.created_at)}
								</span>
								<h2
									class="mt-2 font-serif text-xl leading-snug text-ink italic transition-colors group-hover:text-clay md:text-2xl"
								>
									{item.title}
								</h2>
								<p class="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">
									{item.description.length > 150
										? item.description.slice(0, 150) + '...'
										: item.description}
								</p>
								<span
									class="mt-3 inline-block font-mono text-[11px] tracking-[0.1em] text-ink-soft uppercase transition-colors group-hover:text-clay"
								>
									Baca selengkapnya &rarr;
								</span>
							</div>
						</a>
					</li>
				{/each}
			</ol>
		{/if}

		<p class="mt-8 text-xs text-ink-soft/70">
			Sumber: Peraturan Desa Cipicung Nomor 6 Tahun 2025 tentang RPJM Desa Perubahan
			2025&ndash;2029.
		</p>
	</div>
</section>
