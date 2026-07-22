<script lang="ts">
	import ProfileView from '../../module/profile/view/ProfileView.svelte';

	let { data } = $props();
</script>

<ProfileView {data} />
