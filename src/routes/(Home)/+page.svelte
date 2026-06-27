<svelte:head>
	<title>Desa Cipicung - Portal Resmi</title>
</svelte:head>

<div class="relative w-full h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-slate-900">
	<!-- Background Image with dimming overlay for readability -->
	<img
		src="/hero-image.png"
		alt="Desa Cipicung"
		class="absolute inset-0 w-full h-full object-cover opacity-75 brightness-[0.75]"
	/>
	
	<!-- Soft gradient overlay to blend layout background -->
	<div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20"></div>

	<!-- Content overlay -->
	<div class="relative z-10 text-center px-6 max-w-3xl flex flex-col items-center">
		<!-- Main Title -->
		<h1 class="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans drop-shadow-lg leading-tight select-none">
			Selamat Datang di Desa Mandiri
		</h1>
		
		<!-- Action Button -->
		<div class="mt-8">
			<a
				href="/profil"
				class="inline-flex items-center justify-center rounded-[10px] bg-[#2b6cb0] px-6 py-3.5 font-sans text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#2b6cb0]/90 hover:scale-105 active:scale-95"
			>
				Jelajahi Desa
			</a>
		</div>
	</div>
</div>