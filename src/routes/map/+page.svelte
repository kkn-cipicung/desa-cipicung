<script lang="ts">
	import CipicungMap from './components/CipicungMap.svelte';
	import DetailCard from './components/DetailCard.svelte';
</script>

<svelte:head>
	<title>Peta Desa Cipicung - Kec. Sukatani, Kab. Purwakarta</title>
	<meta
		name="description"
		content="Peta batas wilayah Desa Cipicung, Kecamatan Sukatani, Kabupaten Purwakarta, Jawa Barat."
	/>
</svelte:head>

<section class="flex flex-col items-center bg-[#eceae6] pt-[28px] px-4 pb-[22px] text-[#2b2b28]">
	<header class="mb-[14px] text-center">
		<h1 class="mb-1 text-[18px] font-bold tracking-[0.2px]">Desa Cipicung</h1>
		<p class="m-0 text-[#5a5750] text-[12.5px]">
			Kecamatan Sukatani &middot; Kabupaten Purwakarta &middot; Jawa Barat
		</p>
	</header>
<!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12768.968088003456!2d107.36927303256978!3d-6.609411182044234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6908a9d352a159%3A0x92480c4cd882e052!2sCipicung%2C%20Kec.%20Sukatani%2C%20Kabupaten%20Purwakarta%2C%20Jawa%20Barat!5e1!3m2!1sid!2sid!4v1782723068519!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="false" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe> -->
	<CipicungMap />
	<DetailCard title="Ilham" img="/" subtitle="dsksk" />
	<DetailCard title="Ilham" img="/" subtitle="dsksk" variant="hero" />
	<DetailCard title="Ilham" img="/" subtitle="dsksk" variant="zigzag" />
</section>
