<script lang="ts">
	let { class: className = '', size = 128 }: { class?: string; size?: number } = $props();

	const id = `stempel-arc-${Math.random().toString(36).slice(2, 9)}`;
</script>

<svg
	viewBox="0 0 200 200"
	width={size}
	height={size}
	class={className}
	role="img"
	aria-label="Cap resmi Pemerintah Desa Cipicung"
>
	<defs>
		<path {id} d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
	</defs>

	<circle cx="100" cy="100" r="94" fill="none" stroke="currentColor" stroke-width="2.5" />
	<circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" stroke-width="1.4" />
	<circle cx="100" cy="100" r="52" fill="none" stroke="currentColor" stroke-width="1.4" />

	<text
		font-family="'Courier Prime', monospace"
		font-size="11.5"
		letter-spacing="3.4"
		fill="currentColor"
	>
		<textPath href="#{id}" startOffset="2%">
			PEMERINTAH DESA CIPICUNG &middot; KEC. SUKATANI &middot; KAB. PURWAKARTA &middot;
		</textPath>
	</text>

	<g font-family="'Fraunces Variable', serif" fill="currentColor" text-anchor="middle">
		<text x="100" y="88" font-size="15" font-style="italic" font-weight="600">Cipicung</text>
		<text
			x="100"
			y="112"
			font-size="9"
			letter-spacing="1.5"
			font-family="'Courier Prime', monospace"
		>
			218&ndash;394 MDPL
		</text>
		<text
			x="100"
			y="128"
			font-size="8"
			letter-spacing="1.5"
			font-family="'Courier Prime', monospace"
		>
			EST. DUSUN I &amp; II
		</text>
	</g>

	<path
		d="M 74 138 l 8 10 l 14 -16"
		fill="none"
		stroke="currentColor"
		stroke-width="3"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
