<script lang="ts">
	import InfografisView from '../../module/infografis/view/InfografisView.svelte';
	let { data } = $props();
</script>

<InfografisView {data} />
