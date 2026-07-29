<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import type { ContactResponse } from '../_model/response';

	let { data }: { data: { contact: ContactResponse | null } } = $props();
	const contactInfo = $derived(data.contact);

	function socialHref(name: string, username: string) {
		const normalizedName = name.toLowerCase();
		const normalizedUsername = username.replace(/^@/, '');

		if (!normalizedUsername) return '';
		if (normalizedName.includes('instagram')) return `https://instagram.com/${normalizedUsername}`;
		if (normalizedName.includes('tiktok')) return `https://www.tiktok.com/@${normalizedUsername}`;
		if (normalizedName.includes('youtube')) return `https://www.youtube.com/@${normalizedUsername}`;

		return '';
	}

	const socials = $derived.by(() => {
		if (contactInfo?.social_media && contactInfo.social_media.length) {
			return contactInfo.social_media.map((s) => ({
				label: s.name,
				handle: s.username,
				href: socialHref(s.name, s.username)
			}));
		}
		return [];
	});

	const hours = $derived(contactInfo?.service_hour || []);
</script>

<svelte:head>
	<title>Kontak - Desa Cipicung</title>
	<meta name="description" content="Kontak, alamat, dan media sosial resmi Desa Cipicung." />
</svelte:head>

<section
	class="mobile-page-section w-full px-4 pt-24 pb-16 sm:px-6 md:px-16 md:pt-28 md:pb-28 lg:px-24"
>
	<div class="mx-auto max-w-5xl">
		<div use:reveal class="reveal-up">
			<p class="font-mono text-[11px] tracking-[0.2em] text-clay uppercase">Hubungi Kami</p>
			<h1 class="mobile-title mt-3 max-w-2xl font-serif text-5xl italic leading-tight md:text-6xl">
				Ngobrol dengan desa.
			</h1>
		</div>

		<div class="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
			<section use:reveal class="reveal-up">
				<p class="font-mono text-[11px] tracking-[0.15em] text-ink-soft uppercase">
					Kantor &amp; Kontak
				</p>
				{#if contactInfo?.office}
					<h2 class="mt-4 font-serif text-3xl leading-tight text-ink italic">
						{contactInfo.office.name || 'Kantor Desa Cipicung'}
					</h2>
					<p class="mt-4 text-sm leading-relaxed text-ink-soft md:text-base">
						{contactInfo.office.address || ''}<br />
						Kecamatan {contactInfo.office.district || ''}, Kabupaten {contactInfo.office.regency ||
							''}<br />
						{contactInfo.office.province || ''}, {contactInfo.office.postal_code || ''}
					</p>
				{/if}

				<div class="mt-8 grid grid-cols-1 gap-4 border-t border-ink/15 pt-6 sm:grid-cols-2">
					<div>
						<p class="font-mono text-[10px] tracking-[0.15em] text-ink-soft uppercase">Email</p>
						<a
							href="mailto:{contactInfo?.contact?.email || ''}"
							class="mt-2 block break-words text-sm text-ink underline decoration-ink/20 underline-offset-4 hover:text-clay hover:decoration-clay"
						>
							{contactInfo?.contact?.email || '-'}
						</a>
					</div>
					<div>
						<p class="font-mono text-[10px] tracking-[0.15em] text-ink-soft uppercase">Telepon</p>
						<a
							href="tel:{contactInfo?.contact?.phone || ''}"
							class="mt-2 block text-sm text-ink underline decoration-ink/20 underline-offset-4 hover:text-clay hover:decoration-clay"
						>
							{contactInfo?.contact?.phone || '-'}
						</a>
					</div>
				</div>

				{#if contactInfo?.contact?.website}
					<a
						href={contactInfo.contact.website}
						target="_blank"
						rel="noopener noreferrer"
						class="mt-6 inline-flex rounded-full border border-ink/20 px-5 py-3 font-mono text-[11px] tracking-[0.15em] text-ink uppercase transition-all hover:border-clay hover:text-clay"
					>
						Kunjungi Website
					</a>
				{/if}
			</section>

			<section use:reveal={{ delay: 120 }} class="reveal-up">
				<p class="font-mono text-[11px] tracking-[0.15em] text-ink-soft uppercase">
					Layanan &amp; Kanal
				</p>

				<div class="mt-5">
					<p class="font-mono text-[10px] tracking-[0.15em] text-ink-soft uppercase">Jam Layanan</p>
					<ul class="mt-3 divide-y divide-ink/15 border-y border-ink/15 text-sm">
						{#each hours as h, i (h.day || i)}
							<li class="flex justify-between gap-6 py-3">
								<span class="text-ink">{h.day}</span>
								<span class="text-right font-mono text-xs text-ink-soft">{h.time}</span>
							</li>
						{/each}
					</ul>
				</div>

				<div class="mt-8">
					<p class="font-mono text-[10px] tracking-[0.15em] text-ink-soft uppercase">
						Media Sosial
					</p>
					<div class="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
						{#each socials as s, i (s.label || i)}
							<a
								href={s.href}
								target="_blank"
								rel="noopener noreferrer"
								class="group border-t border-ink/15 py-3 transition-colors"
							>
								<span class="block text-sm text-ink group-hover:text-clay">{s.label}</span>
								<span class="mt-1 block break-words font-mono text-xs text-ink-soft"
									>{s.handle}</span
								>
							</a>
						{/each}
					</div>
				</div>
			</section>
		</div>
	</div>
</section>
