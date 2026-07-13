<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { reveal } from '$lib/actions/reveal';

	const photos = [
		{
			src: '/gallery/kegiatan-8.jpg',
			title: 'Sawah dan Perbukitan Cipicung',
			category: 'Wilayah',
			tag: 'Arsip 2025',
			desc: 'Kawasan pertanian dan perbukitan di wilayah Desa Cipicung, sebagian besar merupakan sawah tadah hujan dan lahan perkebunan warga.',
			span: 'row-span-2'
		},
		{
			src: '/gallery/kegiatan-1.jpg',
			title: 'Gapura Desa Cipicung',
			category: 'Wilayah',
			tag: 'Arsip 2025',
			desc: 'Gapura dan lambang resmi Desa Cipicung, penanda batas memasuki wilayah desa.',
			span: ''
		},
		{
			src: '/gallery/kegiatan-2.jpg',
			title: 'Kegiatan Budaya Warga',
			category: 'Kegiatan Desa',
			tag: 'Arsip 2025',
			desc: 'Dokumentasi kegiatan budaya dan kesenian yang melibatkan warga Desa Cipicung.',
			span: ''
		},
		{
			src: '/gallery/kegiatan-3.jpg',
			title: 'Kegiatan Organisasi Desa',
			category: 'Kegiatan Desa',
			tag: 'Arsip 2025',
			desc: 'Dokumentasi pertemuan organisasi kepemudaan dan kelembagaan Desa Cipicung.',
			span: ''
		},
		{
			src: '/gallery/kegiatan-4.jpg',
			title: 'Kegiatan Aparat & Warga',
			category: 'Kegiatan Desa',
			tag: 'Arsip 2025',
			desc: 'Dokumentasi kegiatan aparat keamanan bersama warga di lingkungan Desa Cipicung.',
			span: 'row-span-2'
		},
		{
			src: '/gallery/kegiatan-5.jpg',
			title: 'Kegiatan Warga di Ruas Jalan Desa',
			category: 'Kegiatan Desa',
			tag: 'Arsip 2025',
			desc: 'Dokumentasi kegiatan warga di salah satu ruas jalan wilayah Desa Cipicung.',
			span: ''
		},
		{
			src: '/gallery/kegiatan-7.jpg',
			title: 'Arsip Pemerintah Desa',
			category: 'Arsip',
			tag: 'Arsip 2025',
			desc: 'Dokumentasi arsip resmi Pemerintah Desa Cipicung.',
			span: ''
		}
	];

	let active = $state<number | null>(null);

	function open(i: number) {
		active = i;
	}

	function close() {
		active = null;
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

<section class="w-full px-6 pt-24 pb-20 md:px-16 md:pt-28 md:pb-28 lg:px-24">
	<div class="mx-auto max-w-6xl">
		<div use:reveal class="reveal-up">
			<p class="font-mono text-[11px] tracking-[0.2em] text-clay uppercase">Arsip Desa</p>
			<h1 class="mt-3 max-w-2xl font-serif text-5xl italic leading-tight md:text-6xl">
				Galeri Cipicung.
			</h1>
			<p class="mt-6 max-w-xl text-sm leading-relaxed text-ink-soft md:text-base">
				Cuplikan kondisi wilayah dan kegiatan warga, diambil dari arsip dokumentasi RPJM Desa
				Cipicung Perubahan 2025&ndash;2029. Klik foto untuk melihat keterangan.
			</p>
		</div>

		<div
			class="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4 md:gap-4"
		>
			{#each photos as photo, i (photo.src)}
				<button
					type="button"
					onclick={() => open(i)}
					use:reveal={{ delay: i * 80 }}
					class="reveal-scale group relative overflow-hidden rounded-lg bg-ink/5 text-left {photo.span}"
				>
					<img
						src={photo.src}
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

		<p class="mt-8 text-xs text-ink-soft/70">
			Sumber: Dokumentasi Pemerintah Desa Cipicung, arsip RPJM Desa 2025.
		</p>
	</div>
</section>

{#if active !== null}
	<div
		transition:fade={{ duration: 220 }}
		class="fixed inset-0 z-[60] flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm md:p-10"
		onclick={close}
		role="dialog"
		aria-modal="true"
		tabindex="-1"
	>
		<div
			transition:scale={{ duration: 260, start: 0.92 }}
			class="flex max-h-full w-full max-w-md flex-col overflow-hidden rounded-xl border border-ink/10 bg-paper shadow-2xl"
			onclick={(e) => e.stopPropagation()}
		>
			<div class="flex items-center justify-between border-b border-ink/10 px-5 py-4">
				<h2 class="font-sans text-base font-semibold text-ink">{photos[active].title}</h2>
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
				src={photos[active].src}
				alt={photos[active].title}
				class="max-h-[45vh] w-full object-cover"
			/>

			<div class="flex flex-col gap-3 p-5">
				<div class="flex flex-wrap items-center gap-2">
					<span
						class="rounded-full bg-clay px-3 py-1 font-mono text-[10px] tracking-[0.08em] text-paper uppercase"
					>
						{photos[active].category}
					</span>
					<span
						class="rounded-full bg-ink/8 px-3 py-1 font-mono text-[10px] tracking-[0.08em] text-ink-soft uppercase"
					>
						{photos[active].tag}
					</span>
				</div>
				<p class="text-sm leading-relaxed text-ink-soft">{photos[active].desc}</p>
			</div>
		</div>
	</div>
{/if}
