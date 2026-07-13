<script lang="ts">
	let { value, duration = 1200 }: { value: number; duration?: number } = $props();

	let display = $state(0);

	$effect(() => {
		const target = value;
		let raf: number;
		const start = performance.now();

		function tick(now: number) {
			const t = Math.min(1, (now - start) / duration);
			const eased = 1 - Math.pow(1 - t, 3);
			display = Math.round(target * eased);
			if (t < 1) raf = requestAnimationFrame(tick);
		}
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	});
</script>

{display.toLocaleString('id-ID')}
