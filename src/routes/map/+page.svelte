<script lang="ts">
	import MapView from '../../module/map/view/MapView.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<MapView {data} />
