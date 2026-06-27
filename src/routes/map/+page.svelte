<script lang="ts">
	import CipicungMap from './CipicungMap.svelte';
</script>

<svelte:head>
	<title>Peta Desa Cipicung - Kec. Sukatani, Kab. Purwakarta</title>
	<meta
		name="description"
		content="Peta batas wilayah Desa Cipicung, Kecamatan Sukatani, Kabupaten Purwakarta, Jawa Barat."
	/>
</svelte:head>

<section class="location-page">
	<header class="page-header">
		<h1>Desa Cipicung</h1>
		<p>Kecamatan Sukatani &middot; Kabupaten Purwakarta &middot; Jawa Barat</p>
	</header>

	<CipicungMap />

	<p class="map-footer">
		Batas wilayah desa bersumber dari Badan Informasi Geospasial (BIG), peta RBI skala 1:10.000.<br
		/>
		Kode wilayah (Kemendagri) 32.14.05.2005 &middot; hanya area Desa Cipicung yang ditampilkan dari citra
		satelit, wilayah lain disamarkan.
	</p>
</section>

<style>
	.location-page {
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #eceae6;
		padding: 28px 16px 22px;
		color: #2b2b28;
	}

	.page-header {
		margin-bottom: 14px;
		text-align: center;
	}

	.page-header h1 {
		margin: 0 0 4px;
		font-size: 18px;
		font-weight: 700;
		letter-spacing: 0.2px;
	}

	.page-header p {
		margin: 0;
		color: #5a5750;
		font-size: 12.5px;
	}

	.map-footer {
		max-width: 760px;
		margin: 12px 0 0;
		color: #6b6760;
		font-size: 11px;
		line-height: 1.5;
		text-align: center;
	}
</style>
