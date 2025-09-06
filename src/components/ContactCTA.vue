<template>
	<section id="contact" class="py-20 md:py-28">
		<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
			<div
				class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 p-8 md:p-12 text-white shadow-xl">
				<!-- Decorative gradient rings -->
				<div class="pointer-events-none absolute -left-10 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl">
				</div>
				<div
					class="pointer-events-none absolute -right-16 -bottom-24 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl">
				</div>

				<div class="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
					<div>
						<h2 class="text-2xl md:text-5xl font-extrabold leading-tight">
							Are you ready to engage your candidates more effectively?
						</h2>
						<p class="mt-4 text-white/80 max-w-xl">
							Interview smarter with guided practice, instant feedback, and modern tools that help you
							prepare with confidence.
						</p>
						<div class="mt-8">
							<a href="/contact"
								class="inline-flex items-center rounded-full bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-white/90 transition">
								Contact Us
							</a>
						</div>
					</div>

					<!-- Right: brand logo -->
					<div class="relative flex items-center justify-center">
						<img :src="logoUrl" alt="TechTerview logo"
							class="h-64 w-64 md:h-72 md:w-72 object-contain drop-shadow-2xl" />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import logo from '../assets/logo/techterview_symbol_colored.webp';

// Extract the src string from ImageMetadata
const logoUrl: string = typeof logo === 'string' ? logo : logo.src;
</script>
