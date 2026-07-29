<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import SiteNav from '$lib/components/SiteNav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { browser } from '$app/environment';
	import { afterNavigate } from '$app/navigation';
	import { navigating } from '$app/state';

	let { children } = $props();

	afterNavigate(({ from, to }) => {
		if (!browser || !from?.url || !to?.url || !to.url.pathname.startsWith('/berita/')) {
			return;
		}

		const backUrl = `${from.url.pathname}${from.url.search}${from.url.hash}`;
		sessionStorage.setItem(`newsDetailBackUrl:${to.url.pathname}`, backUrl);
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#if navigating.to}
	<div class="fixed top-0 right-0 left-0 z-[60] h-[2.5px] overflow-hidden bg-transparent">
		<div class="h-full w-1/3 animate-[loading-bar_1s_ease-in-out_infinite] bg-clay"></div>
	</div>
{/if}

<div class="paper-noise flex min-h-screen flex-col bg-paper font-sans text-ink antialiased">
	<SiteNav />
	<main class="flex flex-grow flex-col">
		{@render children()}
	</main>
	<div class="relative z-10 mt-auto">
		<Footer />
	</div>
</div>

<style>
	@keyframes loading-bar {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(300%);
		}
	}
</style>
