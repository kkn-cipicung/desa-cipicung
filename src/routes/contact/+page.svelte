<script lang="ts">
	import ContactView from '../../module/contact/view/ContactView.svelte';

	let { data } = $props();
</script>

<ContactView {data} />
