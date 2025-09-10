<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Our 
          <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Tech Stack
          </span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Built with modern, scalable technologies to deliver the best interview preparation experience
        </p>
      </div>

      <!-- Tech Categories -->
      <div class="space-y-16">
        <!-- Frontend -->
        <div>
          <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">Frontend & User Experience</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <!-- Vue.js -->
            <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div class="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-xl flex items-center justify-center">
                <svg class="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24,1.61H0V22.39H24ZM12,3.22H1.61V20.78H12Zm10.39,0H13.61V20.78H22.39Z"/>
                </svg>
              </div>
              <h4 class="font-semibold text-gray-900">Vue.js</h4>
              <p class="text-sm text-gray-600">Progressive Framework</p>
            </div>

            <!-- Tailwind CSS -->
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div class="w-16 h-16 mx-auto mb-4 bg-blue-500 rounded-xl flex items-center justify-center">
                <svg class="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
                </svg>
              </div>
              <h4 class="font-semibold text-gray-900">Tailwind CSS</h4>
              <p class="text-sm text-gray-600">Utility-First CSS</p>
            </div>

            <!-- Astro -->
            <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div class="w-16 h-16 mx-auto mb-4 bg-purple-500 rounded-xl flex items-center justify-center">
                <svg class="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.5 9.4l-9-5.2c-.3-.2-.7-.2-1 0L3 6.7c-.3.2-.5.5-.5.9v9.7c0 .4.2.7.5.9l3.5 2.6c.3.2.7.2 1 0l9-5.2c.3-.2.5-.5.5-.9V9.8c0-.4-.2-.7-.5-.9z"/>
                </svg>
              </div>
              <h4 class="font-semibold text-gray-900">Astro</h4>
              <p class="text-sm text-gray-600">Static Site Generator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TechStackSection'
}
</script>