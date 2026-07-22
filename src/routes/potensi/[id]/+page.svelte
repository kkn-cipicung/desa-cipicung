<script lang="ts">
	import PotentialDetailView from '../../../module/potential/view/PotentialDetailView.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<PotentialDetailView {data} />
