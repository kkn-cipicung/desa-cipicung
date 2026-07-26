<script lang="ts">
	import { page } from '$app/state';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	let isOpen = $state(false);

	const entries = [
		{ name: 'Beranda', href: '/' },
		{ name: 'Profil', href: '/profile' },
		{ name: 'Peta', href: '/map' },
		{ name: 'Potensi Desa', href: '/potensi' },
		{ name: 'Galeri', href: '/galeri' },
		{ name: 'Berita', href: '/berita' },
		{ name: 'Kontak', href: '/contact' }
	];

	function isActive(href: string) {
		if (href.startsWith('/#')) return false;
		if (href === '/') return page.url.pathname === '/';
		return page.url.pathname.startsWith(href);
	}

	function close() {
		isOpen = false;
	}

	function handleWindowClick(e: MouseEvent) {
		if (!isOpen) return;
		const target = e.target as HTMLElement;
		if (!target.closest('#nav-toggle') && !target.closest('#nav-panel')) {
			isOpen = false;
		}
	}
</script>

<svelte:window onclick={handleWindowClick} />

<!-- Mobile Logo: top left pill -->
<a
	href="/"
	class="group fixed top-4 left-4 z-50 flex items-center gap-2 rounded-full border border-ink/15 bg-paper/20 py-1.5 pr-4 pl-1.5 shadow-[0_4px_16px_-6px_rgba(38,51,32,0.25)] backdrop-blur-md md:hidden"
	aria-label="Desa Cipicung - Beranda"
>
	<img src="/logo-cipicung.png" alt="Logo Desa Cipicung" class="h-7 w-7 shrink-0 object-contain" />
	<span
		class="font-sans text-xs font-semibold tracking-wide text-ink uppercase transition-colors group-hover:text-clay"
	>
		Desa Cipicung
	</span>
</a>

<!-- Desktop Header Navbar: full width attached at top with integrated logo -->
<header
	class="fixed top-0 left-0 right-0 z-50 hidden border-b border-ink/15 bg-paper/20 px-6 py-3.5 shadow-sm backdrop-blur-md md:flex md:items-center md:justify-between md:px-12 lg:px-20"
>
	<a href="/" class="group flex items-center gap-3" aria-label="Desa Cipicung - Beranda">
		<img
			src="/logo-cipicung.png"
			alt="Logo Desa Cipicung"
			class="h-8 w-8 shrink-0 object-contain"
		/>
		<span
			class="font-sans text-sm font-semibold tracking-wide text-ink uppercase transition-colors group-hover:text-clay"
		>
			Desa Cipicung
		</span>
	</a>

	<nav aria-label="Navigasi utama" class="flex items-center gap-1">
		{#each entries as entry (entry.href)}
			<a
				href={entry.href}
				class="relative rounded-full px-4 py-1.5 font-sans text-sm transition-colors {isActive(
					entry.href
				)
					? 'bg-clay/10 font-semibold text-clay'
					: 'text-ink hover:bg-ink/5 hover:text-clay'}"
			>
				<span>{entry.name}</span>
			</a>
		{/each}
	</nav>
</header>

<!-- Mobile: hamburger opens a full-width sheet, styled distinctly from desktop -->
<button
	id="nav-toggle"
	type="button"
	onclick={() => (isOpen = !isOpen)}
	class="fixed top-4 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-paper/20 shadow-[0_4px_16px_-6px_rgba(38,51,32,0.25)] backdrop-blur-md transition-colors hover:border-clay hover:text-clay md:hidden"
	aria-expanded={isOpen}
	aria-controls="nav-panel"
	aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
>
	<span class="relative flex h-3.5 w-5 flex-col justify-between">
		<span
			class="h-[1.5px] w-full origin-center rounded-full bg-current transition-transform duration-300 {isOpen
				? 'translate-y-[6.5px] rotate-45'
				: ''}"
		></span>
		<span
			class="h-[1.5px] w-full rounded-full bg-current transition-opacity duration-200 {isOpen
				? 'opacity-0'
				: ''}"
		></span>
		<span
			class="h-[1.5px] w-full origin-center rounded-full bg-current transition-transform duration-300 {isOpen
				? '-translate-y-[6.5px] -rotate-45'
				: ''}"
		></span>
	</span>
</button>

{#if isOpen}
	<!-- Backdrop -->
	<div
		class="fixed inset-0 z-30 bg-ink/40 backdrop-blur-[2px] md:hidden"
		transition:fly={{ duration: 180, easing: cubicOut, opacity: 0 }}
		onclick={close}
		aria-hidden="true"
	></div>

	<!-- Slide-down sheet, compact width, right-aligned under the toggle -->
	<div
		id="nav-panel"
		transition:fly={{ y: -12, duration: 200, easing: cubicOut }}
		class="fixed top-[4.25rem] right-4 z-40 w-48 overflow-hidden rounded-2xl border border-ink/15 bg-paper/90 backdrop-blur-md shadow-[0_16px_36px_-12px_rgba(38,51,32,0.4)] md:hidden"
	>
		<p
			class="border-b border-ink/10 px-3.5 pt-2.5 pb-1.5 font-mono text-[9px] tracking-[0.15em] text-ink-soft/70 uppercase"
		>
			Menu
		</p>
		<nav class="flex flex-col divide-y divide-ink/10 py-0.5">
			{#each entries as entry (entry.href)}
				<a
					href={entry.href}
					onclick={close}
					class="flex items-center justify-between px-3.5 py-2 font-sans text-sm transition-colors {isActive(
						entry.href
					)
						? 'font-semibold text-clay'
						: 'text-ink active:text-clay'}"
				>
					{entry.name}
					{#if isActive(entry.href)}
						<span class="h-1 w-1 rounded-full bg-clay"></span>
					{/if}
				</a>
			{/each}
		</nav>
		<p
			class="border-t border-ink/10 px-3.5 py-2 font-mono text-[8px] tracking-[0.1em] text-ink-soft/70 uppercase"
		>
			Kec. Sukatani &middot; Purwakarta
		</p>
	</div>
{/if}
