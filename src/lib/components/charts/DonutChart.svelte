<script lang="ts">
	interface Slice {
		label: string;
		value: number;
		color: string;
	}

	let { data, centerUnit = 'jiwa' }: { data: Slice[]; centerUnit?: string } = $props();

	const total = $derived(data.reduce((a, d) => a + d.value, 0));

	const r = 72;
	const circumference = 2 * Math.PI * r;

	const segments = $derived.by(() => {
		let cum = 0;
		return data.map((d) => {
			const offset = total ? (cum / total) * circumference : 0;
			cum += d.value;
			const len = total ? (d.value / total) * circumference : 0;
			return { ...d, offset, len, share: total ? d.value / total : 0 };
		});
	});

	let grown = $state(false);
	let selected = $state<number | null>(null);

	$effect(() => {
		const t = setTimeout(() => (grown = true), 60);
		return () => clearTimeout(t);
	});

	function toggle(i: number) {
		selected = selected === i ? null : i;
	}

	function onKey(e: KeyboardEvent, i: number) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			toggle(i);
		}
	}

	const active = $derived(selected !== null ? segments[selected] : null);
</script>

<div class="flex min-w-0 flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-8">
	<div class="relative h-48 w-48 shrink-0 sm:h-56 sm:w-56">
		<svg viewBox="0 0 200 200" class="h-full w-full -rotate-90">
			<circle
				cx="100"
				cy="100"
				{r}
				fill="none"
				stroke="var(--color-ink)"
				stroke-opacity="0.06"
				stroke-width="26"
			/>
			{#each segments as s, i (s.label)}
				<circle
					cx="100"
					cy="100"
					{r}
					fill="none"
					stroke={s.color}
					stroke-width={selected === i ? 30 : 26}
					stroke-dasharray="{grown ? s.len : 0} {circumference - (grown ? s.len : 0)}"
					stroke-dashoffset={-s.offset}
					pointer-events="stroke"
					role="button"
					tabindex="0"
					aria-label="{s.label}: {s.value.toLocaleString('id-ID')} ({(s.share * 100).toFixed(1)}%)"
					onclick={() => toggle(i)}
					onkeydown={(e) => onKey(e, i)}
					class="cursor-pointer outline-none transition-[stroke-dasharray,stroke-width,opacity] duration-700 ease-out focus-visible:opacity-80"
					style="opacity:{selected === null || selected === i ? 1 : 0.35}; transition-delay:{i *
						90}ms"
				/>
			{/each}
		</svg>

		<div
			class="absolute inset-[22%] flex flex-col items-center justify-center rounded-full bg-paper text-center"
		>
			{#if active}
				<span class="font-serif text-xl text-ink italic"
					>{active.value.toLocaleString('id-ID')}</span
				>
				<span class="mt-0.5 max-w-[7rem] text-[10px] leading-tight text-ink-soft"
					>{active.label}</span
				>
				<span class="mt-1 font-mono text-[9px] tracking-[0.1em] text-clay uppercase">
					{(active.share * 100).toFixed(1)}%
				</span>
			{:else}
				<span class="font-serif text-2xl text-ink">{total.toLocaleString('id-ID')}</span>
				<span class="font-mono text-[9px] tracking-[0.1em] text-ink-soft uppercase"
					>{centerUnit}</span
				>
			{/if}
		</div>
	</div>

	<ul class="flex min-w-0 w-full flex-col gap-1">
		{#each segments as s, i (s.label)}
			<li>
				<button
					type="button"
					onclick={() => toggle(i)}
					class="flex w-full items-center justify-between gap-3 rounded-md border-b border-ink/10 px-2 py-3 text-left transition-colors {selected ===
					i
						? 'bg-clay/10'
						: 'hover:bg-ink/[0.03]'}"
				>
					<span class="flex min-w-0 items-center gap-2.5 text-sm text-ink">
						<span class="h-2.5 w-2.5 shrink-0 rounded-full" style="background:{s.color}"></span>
						<span class="min-w-0 truncate">{s.label}</span>
					</span>
					<span class="shrink-0 font-mono text-xs text-ink-soft">
						{s.value.toLocaleString('id-ID')} &middot; {(s.share * 100).toFixed(1)}%
					</span>
				</button>
			</li>
		{/each}
	</ul>
</div>
