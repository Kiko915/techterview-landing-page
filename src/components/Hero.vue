<template>
  <div class="relative min-h-screen -mt-20 pt-20 flex items-center justify-center overflow-hidden" :id="id">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-gradient-to-b from-blue-50 via-blue-100/30 to-blue-50"></div>
    <div class="absolute inset-0 pointer-events-none [background:radial-gradient(600px_400px_at_50%_20%,rgba(59,130,246,0.18),transparent_70%)]"></div>
    
    <!-- FlickeringGrid Background -->
    <FlickeringGrid
      class="absolute inset-0 z-0 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
      :square-size="4"
      :grid-gap="6"
      color="#60A5FA"
      :max-opacity="0.3"
      :flicker-chance="0.1"
    />
    
    <!-- Floating Elements removed for a cleaner look -->

    <!-- Main Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <!-- Badge -->
      <div class="mt-6 sm:mt-8 md:mt-10 mb-8 inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium relative">
        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
        </svg>
        {{ badgeText }}
        <BorderBeam
        :size="100"
        :duration="12"
        :delay="9"
        :border-width="2"
        />
      </div>

      <!-- Main Headline -->
      <BlurReveal>
      <h1 class="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
        <span class="block">Ace Your Next</span>
        <span class="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-800 bg-clip-text text-transparent">
          Tech Interview
        </span>
        <span class="block">with 
            <FlipWords
              :words="[
                'Confidence',
                'Preparedness',
                'Success',
                'Expertise',
                'AI',
                'TechTerview'
              ]"
              :duration="3000"
            />
        </span>
      </h1>
      </BlurReveal>
      <!-- Subheading -->
      <p class="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
        {{ description }}
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
        <ShimmerButton @click="handleGetStarted" shimmer-size="2px" class="bg-blue-500">
          <span class="mr-2">{{ primaryButtonText }}</span>
          <svg class="inline w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
        </ShimmerButton>
        
        <button 
          @click="handleWatchDemo"
          class="group relative px-8 py-2 bg-gradient-to-r text-lg from-gray-50 to-white hover:from-white hover:to-gray-50 text-gray-700 hover:text-blue-600 font-normal rounded-full border-2 border-gray-200/60 hover:border-blue-200 shadow-lg hover:shadow-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
        >
          <div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="relative flex items-center">

            {{ secondaryButtonText }}
          </div>
        </button>
      </div>

      <!-- Powered by / Logos strip -->
      <section class="mx-auto mb-10 mt-10 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="text-xs font-medium uppercase tracking-wider text-gray-500">Powered by</div>
        <div class="mt-3 rounded-2xl border border-white/30 backdrop-blur-xl p-3 sm:p-4">
          <div class="flex items-center gap-6 sm:gap-8 overflow-x-auto no-scrollbar justify-center">
            <template v-if="logos && logos.length">
              <template v-for="(logo, index) in logos" :key="index">
                <a v-if="logo.href" :href="logo.href" class="shrink-0 opacity-70 hover:opacity-100 transition">
                  <img :src="logo.src" :alt="logo.alt" class="h-8 sm:h-10 grayscale hover:grayscale-0 transition" />
                </a>
                <img v-else :src="logo.src" :alt="logo.alt" class="h-8 sm:h-10 shrink-0 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition" />
              </template>
            </template>
            <template v-else>
              <div class="h-8 w-24 rounded-md bg-gray-200/70"></div>
              <div class="h-8 w-24 rounded-md bg-gray-200/70"></div>
              <div class="h-8 w-24 rounded-md bg-gray-200/70"></div>
              <div class="h-8 w-24 rounded-md bg-gray-200/70"></div>
              <div class="h-8 w-24 rounded-md bg-gray-200/70"></div>
            </template>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import BlurReveal from './ui/BlurReveal.vue'
import BorderBeam from './ui/BorderBeam.vue'
import FlipWords from './ui/FlipWords.vue'
import FlickeringGrid from './ui/FlickeringGrid.vue'
import ShimmerButton from './ui/ShimmerButton.vue'

export default {
  name: 'Hero',
  components: {
    BlurReveal,
    BorderBeam,
    FlipWords,
    ShimmerButton,
    FlickeringGrid
  },
  props: {
    badgeText: {
      type: String,
      default: '🚀 New Platform Launch'
    },
    highlightText: {
      type: String,
      default: 'Tech Interviews'
    },
    description: {
      type: String,
      default: 'Ace your next tech interview with confidence. Practice real-world coding challenges, mock interviews, and expert insights — all in one platform designed to help you land your dream job.'
    },
    primaryButtonText: {
      type: String,
      default: 'Get Started'
    },
    secondaryButtonText: {
      type: String,
      default: 'Learn More'
    },
    stats: {
      type: Array,
      default: () => [
        { number: '10K+', label: 'Questions' },
        { number: '500+', label: 'Companies' },
        { number: '95%', label: 'Success Rate' }
      ]
    },
    id: {
      type: String,
      default: 'home'
    },
    logos: {
      type: Array,
      // Array of { src: string; alt: string; href?: string }
      default: () => [
        { src: '/powered/vue.png', alt: 'Vue.js' },
        { src: '/powered/nuxt.png', alt: 'Nuxt.js' },
        { src: '/powered/postgresql.png', alt: 'Postgresql' },
        { src: '/powered/tensorflow.png', alt: 'Tensorflow.js' },
        { src: '/powered/vercel.png', alt: 'Vercel' },
      ]
    }
  },
  methods: {
    handleGetStarted() {
      console.log('Get Started clicked')
    },
    handleWatchDemo() {
      console.log('Watch Demo clicked')
    }
  }
}
</script>

<style scoped>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
