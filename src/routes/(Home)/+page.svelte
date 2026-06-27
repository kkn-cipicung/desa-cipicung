<script>
	import Overview from './tabs/Overview.svelte';
	import Highlight from './tabs/Highlight.svelte';
	import Button from '@/components/ui/button/button.svelte';
</script>

<svelte:head>
	<title>Desa Cipicung - Portal Resmi</title>
</svelte:head>

<!-- Scroll Container for Snapping -->
<div
	class="flex flex-col h-[calc(100vh-64px)] w-full overflow-y-auto snap-y snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
>
	<!-- Hero Section -->
	<div
		class="relative w-full min-h-[calc(100vh-64px)] shrink-0 flex flex-col items-center justify-center overflow-hidden bg-slate-900 snap-start"
	>
		<img
			src="/hero-image.JPG"
			alt="Desa Cipicung"
			class="absolute inset-0 w-full h-full object-cover opacity-75 brightness-[0.75] bg-fixed"
		/>

		<div
			class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20"
		></div>

		<div class="relative z-10 text-center px-6 max-w-3xl flex flex-col items-center">
			<h1
				class="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans drop-shadow-lg leading-tight select-none"
			>
				Selamat Datang di Desa Mandiri
			</h1>

			<div class="mt-8">
				<Button href="/profile" variant="secondary" size="lg" class="bg-blue-800 text-white">
					Jelajahi Desa
				</Button>
			</div>
		</div>
	</div>

	<!-- Overview Section -->
	<div
		class="w-full shrink-0 min-h-[calc(100vh-64px)] snap-start flex flex-col items-center justify-start pt-8 md:pt-0 md:justify-center bg-brand-green"
	>
		<Overview />
	</div>

	<!-- Highlight Section -->
	<div
		class="w-full shrink-0 min-h-[calc(100vh-64px)] snap-start flex flex-col items-center justify-start pt-8 md:pt-0 md:justify-center"
	>
		<Highlight />
	</div>
</div>
