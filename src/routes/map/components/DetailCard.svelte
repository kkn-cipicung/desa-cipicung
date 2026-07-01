<script lang="ts">
	interface DetailCardProps {
		title: string;
		subtitle: string;
		img: string;
		variant?: 'horizontal' | 'hero' | 'vertical' | 'zigzag';
	}

	let { title, subtitle, img, variant = 'horizontal' }: DetailCardProps = $props();
</script>

{#if variant === 'horizontal'}
	<!-- Varian 1: Horizontal Frosted Glass (60% image, 40% text) -->
	<div
		class="group relative flex flex-row w-full h-full overflow-hidden rounded-2xl bg-white/30 backdrop-blur-sm border border-white/40 shadow-none transition-all duration-300 hover:bg-white/50 hover:shadow-xl hover:shadow-emerald-900/5 hover:-translate-y-1"
	>
		<div class="flex flex-col justify-center w-[40%] p-4 md:p-5">
			<h2 class="mb-1.5 text-base md:text-lg font-bold tracking-tight text-slate-800 transition-colors duration-300 group-hover:text-emerald-700 line-clamp-2">
				{title}
			</h2>
			<p class="text-xs md:text-sm leading-relaxed text-slate-500 line-clamp-4">
				{subtitle}
			</p>
		</div>
		<div class="relative w-[60%] h-full overflow-hidden shrink-0">
			<div class="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent z-10"></div>
			<img
				src={img}
				alt={title}
				class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
				loading="lazy"
			/>
		</div>
	</div>
{:else if variant === 'zigzag'}
	<!-- Varian 4: Zigzag (Otomatis selang-seling kalau lebih dari 1 card) -->
	<div
		class="group relative flex flex-row even:flex-row-reverse w-full h-full overflow-hidden rounded-2xl bg-white/30 backdrop-blur-sm border border-white/40 shadow-none transition-all duration-300 hover:bg-white/50 hover:shadow-xl hover:shadow-emerald-900/5 hover:-translate-y-1"
	>
		<div class="flex flex-col justify-center w-[40%] p-4 md:p-5">
			<h2 class="mb-1.5 text-base md:text-lg font-bold tracking-tight text-slate-800 transition-colors duration-300 group-hover:text-emerald-700 line-clamp-2">
				{title}
			</h2>
			<p class="text-xs md:text-sm leading-relaxed text-slate-500 line-clamp-4">
				{subtitle}
			</p>
		</div>
		<div class="relative w-[60%] h-full overflow-hidden shrink-0">
			<div class="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent z-10"></div>
			<img
				src={img}
				alt={title}
				class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
				loading="lazy"
			/>
		</div>
	</div>
{:else if variant === 'hero'}
	<!-- Varian 2: Hero Full Page (Memenuhi hampir 1 halaman) -->
	<div
		class="group relative flex flex-col justify-end w-full min-h-[80vh] overflow-hidden rounded-[2rem] shadow-lg transition-all duration-500 hover:shadow-2xl"
	>
		<div class="absolute inset-0 z-0 overflow-hidden">
			<img
				src={img}
				alt={title}
				class="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
				loading="lazy"
			/>
		</div>
		<!-- Gradient gelap dari bawah agar teks terbaca -->
		<div class="absolute inset-0 z-10 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
		
		<div class="relative z-20 p-6 md:p-10 lg:p-12 w-full md:w-3/4">
			<h2 class="mb-4 text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
				{title}
			</h2>
			<p class="text-base md:text-lg leading-relaxed text-slate-200 drop-shadow-sm line-clamp-4">
				{subtitle}
			</p>
		</div>
	</div>
{:else if variant === 'vertical'}
	<!-- Varian 3: Vertical Standard Card -->
	<div
		class="group relative flex flex-col w-full overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
	>
		<div class="relative w-full h-56 overflow-hidden shrink-0">
			<div class="absolute inset-0 bg-slate-900/10 mix-blend-multiply z-10 transition-opacity group-hover:opacity-0"></div>
			<img
				src={img}
				alt={title}
				class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
				loading="lazy"
			/>
		</div>
		<div class="flex flex-col flex-grow p-6">
			<h2 class="mb-2 text-xl font-bold tracking-tight text-slate-800 transition-colors duration-300 group-hover:text-emerald-700">
				{title}
			</h2>
			<p class="text-sm leading-relaxed text-slate-500 line-clamp-3">
				{subtitle}
			</p>
		</div>
	</div>
{/if}
