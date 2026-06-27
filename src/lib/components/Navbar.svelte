<script lang="ts">
	import { page } from '$app/state';
	import { slide } from 'svelte/transition';
	let isMobileMenuOpen = $state(false);

	const menuItems = [
		{ name: 'Beranda', href: '/' },
		{ name: 'Profil', href: '/profile' },
		{ name: 'Katalog', href: '/katalog' },
		{ name: 'Media Sosial', href: '/social-media'}
	];

	function isActive(href: string) {
		if (href === '/') {
			return page.url.pathname === '/';
		}
		return page.url.pathname.startsWith(href);
	}
</script>

<nav
	class="sticky top-0 z-50 w-full border-b border-[#e1f2ed] bg-[#effdf8]/90 backdrop-blur-md transition-all duration-300"
>
	<div class="w-full px-6 md:px-12">
		<div class="flex h-16 items-center justify-between">
			<div class="flex-1 flex justify-start">
				<a
					href="/"
					class="font-sans text-lg md:text-xl font-bold tracking-tight text-[#0f2d26] transition-colors duration-200 hover:text-emerald-700"
				>
					Cipicung
				</a>
			</div>

			<div class="hidden md:flex justify-center space-x-4 lg:space-x-8">
				{#each menuItems as item}
					<a
						href={item.href}
						onclick={() => (isMobileMenuOpen = false)}
						class="relative py-2 font-sans text-xs lg:text-sm font-medium transition-colors duration-200 {isActive(
							item.href
						)
							? 'text-[#0f2d26] font-semibold'
							: 'text-slate-600 hover:text-[#0f2d26]'}"
					>
						{item.name}
						{#if isActive(item.href)}
							<span
								class="absolute bottom-0 left-0 h-[2px] w-full bg-[#0f2d26] transition-all duration-300"
							></span>
						{/if}
					</a>
				{/each}
			</div>

			<div class="flex-1 flex justify-end items-center">
				<div class="hidden md:block">
					<a
						href="/hubungi-kami"
						class="rounded-[10px] bg-[#2b6cb0] px-4 py-2 lg:px-5 lg:py-2.5 font-sans text-xs lg:text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#2b6cb0]/90 active:scale-95"
					>
						Hubungi Kami
					</a>
				</div>

				<div class="flex md:hidden">
					<button
						type="button"
						onclick={() => (isMobileMenuOpen = !isMobileMenuOpen)}
						class="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-[#e1f2ed] hover:text-[#0f2d26] focus:outline-none focus:ring-2 focus:ring-[#0f2d26] focus:ring-offset-2"
						aria-controls="mobile-menu"
						aria-expanded={isMobileMenuOpen}
					>
						<span class="sr-only">Open main menu</span>
						{#if !isMobileMenuOpen}
							<svg
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>
						{:else}
							<svg
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						{/if}
					</button>
				</div>
			</div>
		</div>
	</div>

	{#if isMobileMenuOpen}
		<div
			transition:slide={{ duration: 200 }}
			class="md:hidden border-t border-[#e1f2ed] bg-[#effdf8]"
			id="mobile-menu"
		>
			<div class="space-y-1 px-4 py-3">
				{#each menuItems as item}
					<a
						href={item.href}
						onclick={() => (isMobileMenuOpen = false)}
						class="block rounded-lg px-3 py-2 font-sans text-base font-medium transition-all duration-200 {isActive(
							item.href
						)
							? 'bg-[#e1f2ed] text-[#0f2d26] font-semibold'
							: 'text-slate-600 hover:bg-[#e1f2ed] hover:text-[#0f2d26]'}"
					>
						{item.name}
					</a>
				{/each}
				<div class="pt-4 border-t border-[#e1f2ed] mt-2">
					<a
						href="/hubungi-kami"
						onclick={() => (isMobileMenuOpen = false)}
						class="block w-full text-center rounded-[10px] bg-[#2b6cb0] px-4 py-3 font-sans text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#2b6cb0]/90 active:scale-95"
					>
						Hubungi Kami
					</a>
				</div>
			</div>
		</div>
	{/if}
</nav>
