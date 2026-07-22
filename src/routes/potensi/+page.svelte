<script lang="ts">
	import PotentialView from '../../module/potential/view/PotentialView.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<PotentialView {data} />
