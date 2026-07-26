<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { reveal } from '$lib/actions/reveal';
	import type { GalleryListResponse, GalleryDetailResponse } from '../_model/response';
	import { GalleryDetailRequest } from '../_request/request';
	import { getMediaUrl } from '../../../utils/media';

	let { data }: { data: { photos: GalleryListResponse[] } } = $props();
	const photos = $derived(data.photos);

	let activeIndex = $state<number | null>(null);
	let loadingDetail = $state(false);
	let activeDetail = $state<GalleryDetailResponse | null>(null);

	async function open(i: number) {
		activeIndex = i;
		const photo = photos[i];
		if (!photo) return;

		loadingDetail = true;
		activeDetail = null;
		try {
			const detail = await GalleryDetailRequest({ id: photo.id });
			activeDetail = detail;
		} catch (err) {
			console.error('Error fetching gallery detail:', err);
		} finally {
			loadingDetail = false;
		}
	}

	function close() {
		activeIndex = null;
		activeDetail = null;
	}

	function onKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') close();
	}
</script>

<svelte:head>
	<title>Galeri - Desa Cipicung</title>
	<meta
		name="description"
		content="Dokumentasi kegiatan dan kondisi wilayah Desa Cipicung, Kecamatan Sukatani, Kabupaten Purwakarta, diambil dari arsip RPJM Desa."
	/>
</svelte:head>

<svelte:window onkeydown={onKeydown} />

<section class="mobile-page-section w-full px-4 pt-24 pb-16 sm:px-6 md:px-16 md:pt-28 md:pb-28 lg:px-24">
	<div class="mx-auto max-w-6xl">
		<div use:reveal class="reveal-up">
			<p class="font-mono text-[11px] tracking-[0.2em] text-clay uppercase">Arsip Desa</p>
			<h1 class="mobile-title mt-3 max-w-2xl font-serif text-5xl italic leading-tight md:text-6xl">
				Galeri Cipicung.
			</h1>
			<p class="mt-6 max-w-xl text-sm leading-relaxed text-ink-soft md:text-base">
				Cuplikan kondisi wilayah dan kegiatan warga, diambil dari arsip dokumentasi RPJM Desa
				Cipicung Perubahan 2025&ndash;2029. Klik foto untuk melihat keterangan.
			</p>
		</div>

		{#if photos.length === 0}
			<div class="mt-14 rounded-sm border border-dashed border-ink/20 px-6 py-14 text-center">
				<p class="text-sm text-ink-soft">Belum ada foto kegiatan di galeri.</p>
			</div>
		{:else}
			<div
				class="mt-10 grid auto-rows-[140px] grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:auto-rows-[180px] md:mt-12 md:auto-rows-[220px] md:grid-cols-4 md:gap-4"
			>
				{#each photos as photo, i (photo.id)}
					<button
						type="button"
						onclick={() => open(i)}
						use:reveal={{ delay: i * 80 }}
						class="reveal-scale group relative overflow-hidden rounded-lg bg-ink/5 text-left {i %
							5 ===
						0
							? 'sm:row-span-2'
							: ''}"
					>
						<img
							src={getMediaUrl(photo.image)}
							alt={photo.title}
							loading="lazy"
							class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						/>
						<span
							class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-3 font-mono text-[10px] tracking-[0.1em] text-paper uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						>
							{photo.title}
						</span>
					</button>
				{/each}
			</div>
		{/if}

		<p class="mt-8 text-xs text-ink-soft/70">
			Sumber: Dokumentasi Pemerintah Desa Cipicung, arsip RPJM Desa 2025.
		</p>
	</div>
</section>

{#if activeIndex !== null}
	<div
		transition:fade={{ duration: 220 }}
		class="fixed inset-0 z-[60] flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm md:p-10"
		onclick={close}
		onkeydown={onKeydown}
		role="dialog"
		aria-modal="true"
		tabindex="-1"
	>
		<div
			transition:scale={{ duration: 260, start: 0.92 }}
			class="flex max-h-full w-full max-w-md flex-col overflow-hidden rounded-xl border border-ink/10 bg-paper shadow-2xl"
			onclick={(e) => e.stopPropagation()}
			onkeydown={(e) => e.stopPropagation()}
			role="presentation"
		>
			<div class="flex items-center justify-between border-b border-ink/10 px-5 py-4">
				<h2 class="font-sans text-base font-semibold text-ink">
					{photos[activeIndex]?.title || 'Detail Foto'}
				</h2>
				<button
					type="button"
					onclick={close}
					class="flex h-7 w-7 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-ink/5 hover:text-ink"
					aria-label="Tutup"
				>
					&times;
				</button>
			</div>

			<img
				src={getMediaUrl(photos[activeIndex]?.image)}
				alt={photos[activeIndex]?.title}
				class="max-h-[45vh] w-full object-cover"
			/>

			<div class="flex flex-col gap-3 p-5">
				{#if loadingDetail}
					<div class="flex justify-center py-4">
						<span class="font-mono text-xs text-ink-soft animate-pulse">Memuat keterangan...</span>
					</div>
				{:else if activeDetail}
					<div class="flex flex-wrap items-center gap-2">
						{#if activeDetail.category}
							{#each activeDetail.category as cat (cat.id)}
								<span
									class="rounded-full bg-clay px-3 py-1 font-mono text-[10px] tracking-[0.08em] text-paper uppercase"
								>
									{cat.name}
								</span>
							{/each}
						{/if}
					</div>
					<p class="text-sm leading-relaxed text-ink-soft">{activeDetail.description}</p>
				{:else}
					<p class="text-sm leading-relaxed text-ink-soft">Tidak ada keterangan detail.</p>
				{/if}
			</div>
		</div>
	</div>
{/if}
