<script lang="ts">
	import HomeView from '../../module/home/view/HomeView.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<HomeView {data} />
