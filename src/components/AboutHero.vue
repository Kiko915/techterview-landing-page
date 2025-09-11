<template>
  <div class="relative min-h-screen -mt-20 pt-20 flex items-center justify-center overflow-hidden">
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

    <!-- Main Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <!-- Badge -->
      <div class="mt-6 sm:mt-8 md:mt-10 mb-8 inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium relative">
        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M13 2a1 1 0 011 1v6h3a1 1 0 01.707 1.707l-7 7a1 1 0 01-1.414 0l-7-7A1 1 0 013 9h3V3a1 1 0 011-1h6z" clip-rule="evenodd"></path>
        </svg>
        About TechTerview
        <BorderBeam
          :size="100"
          :duration="12"
          :delay="9"
          :border-width="2"
        />
      </div>

      <!-- Main Headline -->
      <BlurReveal v-if="isLargeDevice">
        <h1 class="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          <span class="block">Empowering</span>
          <span class="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-800 bg-clip-text text-transparent">
            Tech Careers
          </span>
          <span class="block">Through 
            <FlipWords
              :words="[
                'Innovation',
                'Excellence',
                'Preparation',
                'Success',
                'Growth',
                'Achievement'
              ]"
              :duration="3000"
            />
          </span>
        </h1>
      </BlurReveal>
      
      <!-- Fallback for mobile/tablet without blur effect -->
      <h1 v-else class="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
        <span class="block">Empowering</span>
        <span class="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-800 bg-clip-text text-transparent">
          Tech Careers
        </span>
        <span class="block">Through 
          <FlipWords
            :words="[
              'Innovation',
              'Excellence',
              'Preparation',
              'Success',
              'Growth',
              'Achievement'
            ]"
            :duration="3000"
          />
        </span>
      </h1>

      <!-- Subheading -->
      <p class="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
        We're on a mission to revolutionize tech interview preparation. Our platform combines cutting-edge AI technology with expert insights to help developers land their dream jobs with confidence.
      </p>             
    </div>
  </div>
</template>

<script>
import BlurReveal from './ui/BlurReveal.vue'
import BorderBeam from './ui/BorderBeam.vue'
import FlipWords from './ui/FlipWords.vue'
import FlickeringGrid from './ui/FlickeringGrid.vue'

export default {
  name: 'AboutHero',
  components: {
    BlurReveal,
    BorderBeam,
    FlipWords,
    FlickeringGrid
  },
  data() {
    return {
      isLargeDevice: false
    }
  },
  mounted() {
    // Check if device is large (1024px+) for blur effects
    this.checkDeviceSize()
    window.addEventListener('resize', this.checkDeviceSize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkDeviceSize)
  },
  methods: {
    checkDeviceSize() {
      // Enable blur effects only on large devices (1024px+)
      this.isLargeDevice = window.innerWidth >= 1024
    }
  }
}
</script>