<template>
  <section class="relative mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20" :id="id">
    <!-- Branded background (matches Hero) -->
    <div class="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50"></div>
    
    <!-- Decorative arcs -->
    <div class="relative h-36 sm:h-40 mb-8 sm:mb-12">
      <svg class="absolute inset-0 w-full h-full" viewBox="0 0 1200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="arc" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#3B82F6" stop-opacity="0.6" />
            <stop offset="100%" stop-color="#3B82F6" stop-opacity="0.15" />
          </linearGradient>
        </defs>
        <!-- left-most arc -->
        <path d="M120 40 C 120 140, 520 160, 600 160" stroke="url(#arc)" stroke-width="6" stroke-linecap="round" />
        <!-- left inner arc -->
        <path d="M360 40 C 360 140, 560 160, 600 160" stroke="url(#arc)" stroke-width="6" stroke-linecap="round" />
        <!-- right inner arc -->
        <path d="M840 40 C 840 140, 640 160, 600 160" stroke="url(#arc)" stroke-width="6" stroke-linecap="round" />
        <!-- right-most arc -->
        <path d="M1080 40 C 1080 140, 680 160, 600 160" stroke="url(#arc)" stroke-width="6" stroke-linecap="round" />

        <!-- endpoints -->
        <circle cx="120" cy="40" r="8" fill="#3B82F6" />
        <circle cx="360" cy="40" r="8" fill="#3B82F6" />
        <circle cx="840" cy="40" r="8" fill="#3B82F6" />
        <circle cx="1080" cy="40" r="8" fill="#3B82F6" />
      </svg>

      <!-- center badge -->
      <div class="absolute left-1/2 top-[124px] -translate-x-1/2 -translate-y-1/2">
        <div class="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-blue-500 shadow-lg flex items-center justify-center">
          <img :src="logo.src" alt="TechTerview" class="h-7 w-7 sm:h-8 sm:w-8 filter brightness-0 invert" />
        </div>
      </div>
    </div>

    <!-- Headline and subcopy -->
    <div class="text-center">
      <h2 class="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900">
        Innovations in the field of job interviews
        <span class="block">that transform the job market</span>
      </h2>
      <p class="mt-5 text-gray-600 max-w-3xl mx-auto text-base sm:text-lg">
        With our advanced job interview solutions powered by AI, you will be able to increase customer
        engagement and efficiency to a whole new level in the job market.
      </p>
    </div>
  </section>
</template>

<script setup>
import logo from '../assets/logo/techterview_symbol.webp';

defineProps({
  id: {
    type: String,
    default: 'innovation'
  }
});
</script>

<style scoped>
/* no extra styles; all tailwind */
</style>


