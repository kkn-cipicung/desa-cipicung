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

<!-- Logo: opaque pill so it never blends into a photo behind it -->
<a
	href="/"
	class="group fixed top-4 left-4 z-50 flex items-center gap-2 rounded-full border border-ink/15 bg-paper/95 py-1.5 pr-4 pl-1.5 shadow-[0_4px_16px_-6px_rgba(38,51,32,0.25)] backdrop-blur-sm md:top-5 md:left-6"
	aria-label="Desa Cipicung - Beranda"
>
	<img
		src="/logo-cipicung.png"
		alt="Logo Desa Cipicung"
		class="h-7 w-7 shrink-0 object-contain md:h-8 md:w-8"
	/>
	<span
		class="font-sans text-xs font-semibold tracking-wide text-ink uppercase transition-colors group-hover:text-clay md:text-sm"
	>
		Desa Cipicung
	</span>
</a>

<!-- Hamburger: opens a small panel, never a fullscreen takeover -->
<button
	id="nav-toggle"
	type="button"
	onclick={() => (isOpen = !isOpen)}
	class="fixed top-4 right-4 z-50 flex items-center gap-2 rounded-full border border-ink/15 bg-paper/95 px-3.5 py-2 font-mono text-[11px] tracking-[0.15em] text-ink uppercase shadow-[0_4px_16px_-6px_rgba(38,51,32,0.25)] backdrop-blur-sm transition-colors hover:border-clay hover:text-clay md:top-5 md:right-6"
	aria-expanded={isOpen}
	aria-controls="nav-panel"
>
	<span class="relative flex h-3 w-4 flex-col justify-between">
		<span
			class="h-px w-full bg-current transition-transform duration-300 {isOpen
				? 'translate-y-[5.5px] rotate-45'
				: ''}"
		></span>
		<span class="h-px w-full bg-current transition-opacity duration-200 {isOpen ? 'opacity-0' : ''}"
		></span>
		<span
			class="h-px w-full bg-current transition-transform duration-300 {isOpen
				? '-translate-y-[5.5px] -rotate-45'
				: ''}"
		></span>
	</span>
	{isOpen ? 'Tutup' : 'Menu'}
</button>

{#if isOpen}
	<div
		id="nav-panel"
		transition:fly={{ y: -8, duration: 180, easing: cubicOut }}
		class="fixed top-16 right-4 z-40 w-56 overflow-hidden rounded-2xl border border-ink/15 bg-paper shadow-[0_16px_40px_-12px_rgba(38,51,32,0.35)] md:top-[4.5rem] md:right-6"
	>
		<nav class="flex flex-col divide-y divide-ink/10 py-1.5">
			{#each entries as entry (entry.href)}
				<a
					href={entry.href}
					onclick={close}
					class="px-4 py-2.5 font-sans text-sm transition-colors {isActive(entry.href)
						? 'font-semibold text-clay'
						: 'text-ink hover:text-clay'}"
				>
					{entry.name}
				</a>
			{/each}
		</nav>
		<p
			class="border-t border-ink/10 px-4 py-2.5 font-mono text-[10px] tracking-[0.1em] text-ink-soft/70 uppercase"
		>
			Kec. Sukatani &middot; Purwakarta
		</p>
	</div>
{/if}
