<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { reveal } from '$lib/actions/reveal';
	import type { ContactResponse } from '../_model/response';

	let { data }: { data: { contact: ContactResponse | null } } = $props();
	const contactInfo = $derived(data.contact);

	let name = $state('');
	let message = $state('');
	let sent = $state(false);

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		sent = true;
	}

	const socials = $derived.by(() => {
		if (contactInfo?.social_media && contactInfo.social_media.length) {
			return contactInfo.social_media.map((s) => ({
				label: s.platform,
				handle: s.handle,
				href: s.url
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

<section class="w-full px-6 pt-24 pb-20 md:px-16 md:pt-28 md:pb-28 lg:px-24">
	<div class="mx-auto max-w-5xl">
		<div use:reveal class="reveal-up">
			<p class="font-mono text-[11px] tracking-[0.2em] text-clay uppercase">Hubungi Kami</p>
			<h1 class="mt-3 max-w-2xl font-serif text-5xl italic leading-tight md:text-6xl">
				Ngobrol dengan desa.
			</h1>
		</div>

		<div class="mt-16 grid grid-cols-1 gap-16 md:grid-cols-12">
			<!-- Info -->
			<div use:reveal class="reveal-up flex flex-col gap-10 md:col-span-5">
				<div>
					<p class="font-mono text-[11px] tracking-[0.15em] text-ink-soft uppercase">Kantor</p>
					{#if contactInfo?.office}
						<p class="mt-2 text-sm leading-relaxed text-ink md:text-base">
							{contactInfo.office.name || ''}<br />
							Kecamatan {contactInfo.office.district || ''}, Kabupaten {contactInfo.office
								.regency || ''}<br />
							{contactInfo.office.province || ''}, {contactInfo.office.postal_code || ''}
						</p>
					{:else}
						<p class="mt-2 text-sm leading-relaxed text-ink md:text-base"></p>
					{/if}
				</div>

				<div>
					<p class="font-mono text-[11px] tracking-[0.15em] text-ink-soft uppercase">Kontak</p>
					<a
						href="mailto:{contactInfo?.contact?.email || ''}"
						class="mt-2 block text-sm text-ink underline decoration-ink/20 underline-offset-4 hover:text-clay hover:decoration-clay md:text-base"
					>
						{contactInfo?.contact?.email || ''}
					</a>
					<a
						href="tel:{contactInfo?.contact?.phone || ''}"
						class="mt-1 block text-sm text-ink underline decoration-ink/20 underline-offset-4 hover:text-clay hover:decoration-clay md:text-base"
					>
						{contactInfo?.contact?.phone || ''}
					</a>
				</div>

				<div>
					<p class="font-mono text-[11px] tracking-[0.15em] text-ink-soft uppercase">
						Media Sosial
					</p>
					<div class="mt-2 flex flex-col divide-y divide-ink/15 border-t border-ink/15">
						{#each socials as s (s.label)}
							<a
								href={s.href}
								target="_blank"
								rel="noopener noreferrer"
								class="group flex items-center justify-between py-3"
							>
								<span class="text-sm text-ink group-hover:text-clay">{s.label}</span>
								<span class="font-mono text-xs text-ink-soft">{s.handle}</span>
							</a>
						{/each}
					</div>
				</div>

				<div>
					<p class="font-mono text-[11px] tracking-[0.15em] text-ink-soft uppercase">Jam Layanan</p>
					<ul class="mt-2 space-y-1 text-sm text-ink-soft">
						{#each hours as h (h.day)}
							<li class="flex justify-between gap-6">
								<span>{h.day}</span><span>{h.time}</span>
							</li>
						{/each}
					</ul>
				</div>
			</div>

			<!-- Form -->
			<div use:reveal={{ delay: 150 }} class="reveal-up md:col-span-6 md:col-start-7">
				<p class="font-mono text-[11px] tracking-[0.15em] text-ink-soft uppercase">
					Kirim Pesan / Pengaduan
				</p>
				{#if sent}
					<div in:fly={{ y: 12, duration: 400 }} class="mt-6 border-t border-ink/15 pt-6">
						<p class="font-serif text-2xl italic">Pesan tercatat.</p>
						<p class="mt-2 text-sm text-ink-soft">
							Terima kasih, {name || 'warga'}. Form ini masih contoh tampilan &mdash; hubungkan ke
							email atau layanan formulir agar pesan benar-benar terkirim.
						</p>
					</div>
				{:else}
					<form
						onsubmit={handleSubmit}
						in:fade={{ duration: 250 }}
						class="mt-6 flex flex-col gap-6 border-t border-ink/15 pt-6"
					>
						<label class="flex flex-col gap-2">
							<span class="font-mono text-[11px] tracking-[0.1em] text-ink-soft uppercase"
								>Nama</span
							>
							<input
								bind:value={name}
								type="text"
								required
								class="border-b border-ink/25 bg-transparent py-2 text-sm text-ink outline-none transition-colors focus:border-clay"
								placeholder="Nama Anda"
							/>
						</label>
						<label class="flex flex-col gap-2">
							<span class="font-mono text-[11px] tracking-[0.1em] text-ink-soft uppercase"
								>Pesan</span
							>
							<textarea
								bind:value={message}
								required
								rows="4"
								class="resize-none border-b border-ink/25 bg-transparent py-2 text-sm text-ink outline-none transition-colors focus:border-clay"
								placeholder="Tulis pesan atau pengaduan..."></textarea>
						</label>
						<button
							type="submit"
							class="mt-2 self-start rounded-full border border-ink bg-ink px-6 py-3 font-mono text-[11px] tracking-[0.15em] text-paper uppercase transition-all hover:scale-105 hover:border-clay hover:bg-clay active:scale-95"
						>
							Kirim &rarr;
						</button>
					</form>
				{/if}
			</div>
		</div>

		<!-- Peta -->
		<div use:reveal class="reveal-up mt-16 border-t border-ink/15 pt-10">
			<p class="font-mono text-[11px] tracking-[0.15em] text-ink-soft uppercase">Lokasi</p>
			<div class="mt-4 overflow-hidden rounded-sm border border-ink/15">
				<iframe
					title="Peta Lokasi Kantor Desa Cipicung"
					src="https://www.google.com/maps?q={contactInfo?.office
						? encodeURIComponent(contactInfo.office.name + ' ' + contactInfo.office.address)
						: ''}&z=14&output=embed"
					class="h-80 w-full md:h-96"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</div>
	</div>
</section>
