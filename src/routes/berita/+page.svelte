<script lang="ts">
	import NewsView from '../../module/news/view/NewsView.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<NewsView {data} />
