<script lang="ts">
	import GalleryView from '../../module/gallery/view/GalleryView.svelte';

	let { data } = $props();
</script>

<GalleryView {data} />
