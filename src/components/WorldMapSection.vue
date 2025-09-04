<template>
	<section id="worldwide" class="py-20 md:py-28">
		<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="max-w-3xl mb-10">
				<h2 class="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
					Worldwide
					Access
				</h2>
				<p class="mt-4 text-gray-600">
					TechTerview provide job seeking help around the world. Practice anywhere, at the comfort of your own home.
				</p>
			</div>

			<WorldMap
				class="rounded-2xl border border-gray-200/60 shadow-sm"
				:map-color="mapColor"
				:map-bg-color="mapBgColor"
				:line-color="lineColor"
				:dots="routes"
			/>
		</div>
	</section>
</template>

<script setup lang="ts">
import WorldMap from './ui/WorldMap.vue';
import { Motion } from 'motion-v';

// Manila, Philippines as origin
const ph = { lat: -2.6042, lng: 121.0218, label: 'Manila' };

// Sample destinations around the world
const routes = [
	{ start: ph, end: { lat: 35.6895, lng: 139.6917, label: 'Tokyo' } },
	{ start: ph, end: { lat: 1.3521, lng: 103.8198, label: 'Singapore' } },
	{ start: ph, end: { lat: 13.7563, lng: 100.5018, label: 'Bangkok' } },
	{ start: ph, end: { lat: 28.6139, lng: 77.2090, label: 'New Delhi' } },
	{ start: ph, end: { lat: 51.5074, lng: -0.1278, label: 'London' } },
	{ start: ph, end: { lat: 40.7128, lng: -74.0060, label: 'New York' } },
	{ start: ph, end: { lat: -33.8688, lng: 151.2093, label: 'Sydney' } },
	{ start: ph, end: { lat: 48.8566, lng: 2.3522, label: 'Paris' } },
];

// Force light theme colors to match the site's light design
const mapColor = '#00000040';
const mapBgColor = '#FFFFFF';
const lineColor = '#3B82F6';
</script>

<style scoped>
</style>


