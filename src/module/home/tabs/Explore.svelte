<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	const cards = [
		{
			href: '/profile',
			label: 'Profil Desa',
			desc: 'Sejarah, visi misi, struktur pemerintahan, dan peta batas wilayah Desa Cipicung.'
		},
		{
			href: '/infografis',
			label: 'Infografis',
			desc: 'Data kependudukan: jumlah warga, sebaran dusun, agama, pendidikan, pekerjaan, dan usia.'
		}
	];
</script>

<section
	class="w-full border-t border-ink/15 bg-paper-dim/50 px-4 py-16 sm:px-6 md:px-16 md:py-28 lg:px-24"
>
	<div class="mx-auto max-w-6xl">
		<div use:reveal class="reveal-up">
			<p class="font-mono text-[11px] tracking-[0.2em] text-clay uppercase">Jelajahi</p>
			<h2 class="mobile-subtitle mt-3 max-w-lg font-serif text-4xl italic leading-tight md:text-5xl">
				Jelajahi Desa.
			</h2>
		</div>

		<div class="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-ink/10 sm:mt-14 sm:grid-cols-2">
			{#each cards as card, i (card.href)}
				<a
					href={card.href}
					use:reveal={{ delay: i * 120 }}
					class="reveal-up group flex min-h-[180px] flex-col justify-between bg-paper p-5 transition-colors hover:bg-clay sm:min-h-[220px] sm:p-8 md:p-10"
				>
					<div class="flex items-start justify-end">
						<span
							class="text-ink-soft transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-paper"
							aria-hidden="true"
						>
							&#8599;
						</span>
					</div>
					<div>
						<h3
							class="font-serif text-2xl italic text-ink transition-colors group-hover:text-paper md:text-3xl"
						>
							{card.label}
						</h3>
						<p
							class="mt-3 max-w-sm text-sm leading-relaxed text-ink-soft transition-colors group-hover:text-paper/80"
						>
							{card.desc}
						</p>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
