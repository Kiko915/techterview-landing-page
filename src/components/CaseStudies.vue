<template>
  <section id="case-studies" class="py-20 md:py-28">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Heading -->
      <div class="max-w-3xl">
        <h2 class="text-2xl md:text-4xl font-extrabold tracking-tight text-gray-900">
          A real-life example of Techterview success with real-life stories
        </h2>
        <p class="mt-4 text-gray-600 leading-relaxed">
          Embark on a journey of transformation as we uncover how our platform reshaped
          interactions, boosted efficiency, and delighted users across diverse industries.
        </p>
      </div>

      <!-- Content -->
      <div class="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Left media with overlay stat card -->
        <div class="relative">
          <img :src="heroImage.src" alt="Happy customer on call"
            class="w-full h-[420px] object-cover rounded-3xl shadow-xl" />

          <!-- Overlay stat card -->
          <div
            class="absolute -bottom-6 left-6 right-6 md:left-10 md:right-auto md:w-[70%] rounded-2xl bg-white/90 backdrop-blur-md shadow-2xl border border-white/40 p-6">
            <div class="flex items-start gap-4">
              <div>
                <p
                  class="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  +65%
                </p>
              </div>
              <div class="flex-1">
                <p class="font-semibold text-gray-900">Candidate Confidence</p>
                <p class="text-sm text-gray-600 mt-1">
                  Mock interviews on TechTerview increase candidate confidence levels by 65%, helping them perform
                  better in real interviews.
                </p>
              </div>
            </div>
            <!-- Decorative curve -->
            <svg viewBox="0 0 300 80" class="mt-3 w-full text-blue-200" fill="none">
              <path d="M10 70 C 110 10, 190 10, 290 70" stroke="currentColor" stroke-width="2" />
              <circle cx="200" cy="28" r="5" class="text-blue-500" fill="currentColor" />
            </svg>
          </div>
        </div>

        <!-- Right stacked stat cards with GlareCard -->
        <div class="grid gap-6">
          <GlareCard v-for="(item, idx) in rightCards" :key="idx"
            container-class="w-full [aspect-ratio:auto] [--radius:16px]"
            class="rounded-xl bg-gradient-to-br from-white to-slate-100">
            <div class="p-6">
              <p class="text-3xl font-extrabold text-blue-600">{{ item.delta }}</p>
              <p class="mt-2 font-semibold text-gray-900">{{ item.title }}</p>
              <p class="text-sm text-gray-600 mt-1">{{ item.description }}</p>
            </div>
          </GlareCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import heroImage from '../assets/images/success_case.jpg';
import GlareCard from './ui/GlareCard.vue';

interface RightCard {
  delta: string;
  title: string;
  description: string;
}

const rightCards: RightCard[] = [
  {
    delta: '-40%',
    title: 'Interview Anxiety',
    description: 'Structured practice sessions on TechTerview reduce interview-related stress and anxiety by 40%.',
  },
  {
    delta: '+55%',
    title: 'Coding Success Rate',
    description: 'Candidates who used TechTerview’s coding arena improved their problem-solving success rate by 55%.',
  },
  {
    delta: '+30%',
    title: 'Job Readiness',
    description: 'AI-powered feedback and personalized practice boosted overall job readiness scores by 30%.',
  },
];
</script>

<style scoped></style>
