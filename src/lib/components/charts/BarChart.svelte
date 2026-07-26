<script lang="ts">
	interface Bar {
		label: string;
		value: number;
		value2?: number;
	}

	let {
		data,
		colorA = 'var(--color-clay)',
		colorB = 'var(--color-brass)',
		labelA = '',
		labelB = ''
	}: {
		data: Bar[];
		colorA?: string;
		colorB?: string;
		labelA?: string;
		labelB?: string;
	} = $props();

	const max = $derived(Math.max(...data.map((d) => Math.max(d.value, d.value2 ?? 0)), 1));
	const totalA = $derived(data.reduce((a, d) => a + d.value, 0));
	const totalB = $derived(data.reduce((a, d) => a + (d.value2 ?? 0), 0));

	let grown = $state(false);
	let selected = $state<number | null>(null);

	$effect(() => {
		const t = setTimeout(() => (grown = true), 60);
		return () => clearTimeout(t);
	});

	function toggle(i: number) {
		selected = selected === i ? null : i;
	}
</script>

<div class="flex flex-col gap-3">
	{#if labelA || labelB}
		<div
			class="flex items-center gap-5 font-mono text-[10px] tracking-[0.1em] text-ink-soft uppercase"
		>
			{#if labelA}
				<span class="flex items-center gap-1.5">
					<span class="h-2 w-2 rounded-full" style="background:{colorA}"></span>{labelA}
				</span>
			{/if}
			{#if labelB}
				<span class="flex items-center gap-1.5">
					<span class="h-2 w-2 rounded-full" style="background:{colorB}"></span>{labelB}
				</span>
			{/if}
		</div>
	{/if}

	{#each data as row, i (row.label)}
		{@const shareA = totalA ? row.value / totalA : 0}
		{@const shareB = row.value2 !== undefined && totalB ? row.value2 / totalB : 0}
		<button
			type="button"
			onclick={() => toggle(i)}
			class="grid grid-cols-1 items-center gap-2 rounded-md px-2 py-2 text-left transition-colors sm:grid-cols-[9rem_1fr] sm:gap-3 sm:py-1.5 {selected ===
			i
				? 'bg-clay/10'
				: 'hover:bg-ink/[0.03]'}"
		>
			<span
				class="truncate text-xs md:text-sm {selected === i
					? 'font-semibold text-clay'
					: 'text-ink-soft'}"
			>
				{row.label}
			</span>
			<div class="flex flex-col gap-1">
				<div class="flex h-2.5 items-center rounded-full bg-ink/5">
					<div
						class="h-2.5 rounded-full transition-[width] duration-700 ease-out"
						style="width:{grown
							? (row.value / max) * 100
							: 0}%; background:{colorA}; transition-delay:{i * 45}ms"
					></div>
				</div>
				{#if row.value2 !== undefined}
					<div class="flex h-2.5 items-center rounded-full bg-ink/5">
						<div
							class="h-2.5 rounded-full transition-[width] duration-700 ease-out"
							style="width:{grown
								? (row.value2 / max) * 100
								: 0}%; background:{colorB}; transition-delay:{i * 45 + 60}ms"
						></div>
					</div>
				{/if}
			</div>
			{#if selected === i}
				<div
					class="flex flex-wrap gap-x-4 gap-y-1 pt-1 font-mono text-[10px] text-ink-soft uppercase sm:col-span-2"
				>
					<span
						>{labelA || 'Nilai'}: {row.value.toLocaleString('id-ID')} &middot; {(
							shareA * 100
						).toFixed(1)}%</span
					>
					{#if row.value2 !== undefined}
						<span
							>{labelB || 'Nilai 2'}: {row.value2.toLocaleString('id-ID')} &middot; {(
								shareB * 100
							).toFixed(1)}%</span
						>
					{/if}
				</div>
			{/if}
		</button>
	{/each}
</div>
