<script lang="ts">
	import { onMount } from 'svelte';
	import 'leaflet/dist/leaflet.css';
	import type { Feature, FeatureCollection, Polygon, Position } from 'geojson';
	import type { LatLngBounds, LatLngExpression, Map as LeafletMap } from 'leaflet';

	let mapElement: HTMLElement;
	let map: LeafletMap | undefined;
	let cipicungBounds: LatLngBounds | undefined;
	let cipicungMinZoom: number | undefined;

	const villageCenter: LatLngExpression = [-6.6102544, 107.3774396];
	const worldRingLonLat: Position[] = [
		[-179.9, -85],
		[179.9, -85],
		[179.9, 85],
		[-179.9, 85],
		[-179.9, -85]
	];

	const toLatLngs = (coordinates: Position[]): LatLngExpression[] =>
		coordinates.map(([longitude, latitude]) => [latitude, longitude]);

	const getCipicungFeature = (data: FeatureCollection): Feature<Polygon> => {
		const feature = data.features.find(
			(item): item is Feature<Polygon> => item.geometry?.type === 'Polygon'
		);

		if (!feature) {
			throw new Error('GeoJSON Cipicung tidak memiliki geometry Polygon.');
		}

		return feature;
	};

	onMount(() => {
		let isMounted = true;

		async function initMap() {
			const L = (await import('leaflet')).default;
			const response = await fetch('/cipicung.geojson');

			if (!response.ok) {
				throw new Error('Gagal memuat cipicung.geojson.');
			}

			const data = (await response.json()) as FeatureCollection;

			if (!isMounted) {
				return;
			}

			const cipicungFeature = getCipicungFeature(data);
			const cipicungRingLonLat = cipicungFeature.geometry.coordinates[0];
			const cipicungLatLngs = toLatLngs(cipicungRingLonLat);
			const worldLatLngs = toLatLngs(worldRingLonLat);
			cipicungBounds = L.latLngBounds(cipicungLatLngs);

			map = L.map(mapElement, {
				zoomControl: true,
				attributionControl: true,
				maxBounds: cipicungBounds.pad(0.08),
				maxBoundsViscosity: 1,
				minZoom: 4,
				maxZoom: 19
			});

			L.tileLayer(
				'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
				{
					attribution: 'Tiles &copy; Esri &mdash; Source: Esri, Maxar, Earthstar Geographics',
					maxZoom: 19
				}
			).addTo(map);

			L.polygon([worldLatLngs, cipicungLatLngs], {
				stroke: false,
				fillColor: '#d8d6d1',
				fillOpacity: 1,
				interactive: false
			}).addTo(map);

			L.polygon(cipicungLatLngs, {
				color: '#ffffff',
				weight: 2,
				opacity: 0.9,
				fill: false,
				interactive: false
			}).addTo(map);

			L.marker(villageCenter, {
				icon: L.divIcon({
					className: 'cipicung-marker',
					html: '<span></span>',
					iconSize: [20, 20],
					iconAnchor: [10, 10]
				})
			})
				.addTo(map)
				.bindPopup('<b>Desa Cipicung</b><br>Kec. Sukatani, Kab. Purwakarta');

			recenter();
			cipicungMinZoom = map.getZoom();
			map.setMinZoom(cipicungMinZoom);
			map.setMaxBounds(cipicungBounds.pad(0.08));
		}

		initMap().catch((error) => console.error('Error loading Cipicung map:', error));

		return () => {
			isMounted = false;
			map?.remove();
		};
	});

	function recenter() {
		if (!map || !cipicungBounds) {
			return;
		}

		map.fitBounds(cipicungBounds, { padding: [55, 55], maxZoom: 16 });

		if (cipicungMinZoom !== undefined && map.getZoom() < cipicungMinZoom) {
			map.setZoom(cipicungMinZoom);
		}
	}
</script>

<div class="frame-wrap">
	<div bind:this={mapElement} class="map-canvas"></div>
	<div class="grid-overlay"></div>

	<svg class="compass" width="46" height="56" viewBox="0 0 46 56" aria-hidden="true">
		<line x1="23" y1="6" x2="23" y2="44" stroke="#1f1f1f" stroke-width="1.3" />
		<polygon points="23,2 28,16 23,12 18,16" fill="#1f1f1f" />
		<line x1="6" y1="24" x2="40" y2="24" stroke="#1f1f1f" stroke-width="1" />
		<text x="23" y="55" text-anchor="middle" font-size="11" font-weight="700" fill="#1f1f1f">
			N
		</text>
	</svg>

	<div class="badge">Citra satelit &copy; Esri</div>
	<button class="recenter-btn" type="button" onclick={recenter}>Pusatkan ke Cipicung</button>
</div>

<style>
	.frame-wrap {
		position: relative;
		isolation: isolate;
		width: 100%;
		max-width: 760px;
		aspect-ratio: 760 / 600;
		background: #d8d6d1;
		border-radius: 6px;
		box-shadow:
			0 1px 3px rgb(0 0 0 / 0.18),
			0 0 0 1px rgb(0 0 0 / 0.06);
		overflow: hidden;
	}

	.map-canvas {
		position: absolute;
		inset: 0;
		background: #d8d6d1;
	}

	.grid-overlay {
		position: absolute;
		inset: 0;
		z-index: 450;
		pointer-events: none;
		background-image:
			linear-gradient(to right, rgb(20 20 18 / 0.32) 1px, transparent 1px),
			linear-gradient(to bottom, rgb(20 20 18 / 0.32) 1px, transparent 1px);
		background-size: 22px 22px;
	}

	.compass {
		position: absolute;
		right: 18px;
		bottom: 18px;
		z-index: 480;
		pointer-events: none;
		opacity: 0.85;
	}

	.badge {
		position: absolute;
		left: 14px;
		bottom: 12px;
		z-index: 480;
		border-radius: 4px;
		background: rgb(255 255 255 / 0.82);
		padding: 3px 8px;
		color: #333;
		font-size: 11px;
		box-shadow: 0 1px 2px rgb(0 0 0 / 0.15);
	}

	.recenter-btn {
		position: absolute;
		top: 10px;
		right: 10px;
		z-index: 480;
		cursor: pointer;
		border: 1px solid rgb(0 0 0 / 0.2);
		border-radius: 4px;
		background: #fff;
		padding: 6px 10px;
		color: #222;
		font-size: 12px;
		box-shadow: 0 1px 2px rgb(0 0 0 / 0.2);
	}

	.recenter-btn:hover {
		background: #f5f5f5;
	}

	:global(.leaflet-control-attribution) {
		font-size: 10px;
	}

	:global(.cipicung-marker) {
		display: grid;
		place-items: center;
		border-radius: 999px;
		background: rgb(47 111 179 / 0.24);
	}

	:global(.cipicung-marker span) {
		display: block;
		width: 10px;
		height: 10px;
		border: 2px solid #fff;
		border-radius: 999px;
		background: #2f6fb3;
		box-shadow: 0 1px 4px rgb(0 0 0 / 0.35);
	}

	@media (max-width: 640px) {
		.frame-wrap {
			aspect-ratio: 4 / 5;
		}
	}
</style>
