<script lang="ts">
	import NewsDetailView from '../../../module/news/view/NewsDetailView.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<NewsDetailView {data} />
