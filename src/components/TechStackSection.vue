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
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <!-- Vue.js -->
            <div
              class="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow group">
              <div
                class="w-20 h-20 mx-auto mb-6 bg-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <img src="/src/assets/tech-icons/vue.svg" alt="Vue.js" class="w-10 h-10 brightness-0 invert" />
              </div>
              <h4 class="text-lg font-bold text-gray-900 mb-2">Vue.js</h4>
              <p class="text-sm text-gray-600">Progressive JavaScript framework for building user interfaces</p>
            </div>

            <!-- Nuxt.js -->
            <div
              class="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow group">
              <div
                class="w-20 h-20 mx-auto mb-6 bg-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <img src="/src/assets/tech-icons/nuxt.svg" alt="Nuxt.js" class="w-10 h-10 brightness-0 invert" />
              </div>
              <h4 class="text-lg font-bold text-gray-900 mb-2">Nuxt.js</h4>
              <p class="text-sm text-gray-600">Full-stack Vue framework for production-ready applications</p>
            </div>

            <!-- Tailwind CSS -->
            <div
              class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow group">
              <div
                class="w-20 h-20 mx-auto mb-6 bg-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <img src="/src/assets/tech-icons/tailwind.svg" alt="Tailwind CSS"
                  class="w-10 h-10 brightness-0 invert" />
              </div>
              <h4 class="text-lg font-bold text-gray-900 mb-2">Tailwind CSS</h4>
              <p class="text-sm text-gray-600">Utility-first CSS framework for rapid UI development</p>
            </div>
          </div>
        </div>

        <!-- Backend -->
        <div>
          <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">Backend & Infrastructure</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <!-- Appwrite -->
            <div
              class="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow group">
              <div
                class="w-20 h-20 mx-auto mb-6 bg-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <img src="/src/assets/tech-icons/appwrite.svg" alt="Appwrite" class="w-10 h-10 brightness-0 invert" />
              </div>
              <h4 class="text-lg font-bold text-gray-900 mb-2">Appwrite</h4>
              <p class="text-sm text-gray-600">Open-source backend server for web and mobile developers</p>
            </div>

            <!-- Node.js -->
            <div
              class="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow group">
              <div
                class="w-20 h-20 mx-auto mb-6 bg-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <img src="/src/assets/tech-icons/node.svg" alt="Node.js" class="w-10 h-10 brightness-0 invert" />
              </div>
              <h4 class="text-lg font-bold text-gray-900 mb-2">Node.js</h4>
              <p class="text-sm text-gray-600">JavaScript runtime for server-side development</p>
            </div>
          </div>
        </div>

        <!-- AI/ML -->
        <div>
          <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">AI & Machine Learning</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <!-- Hugging Face -->
            <div
              class="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow group">
              <div
                class="w-20 h-20 mx-auto mb-6 bg-yellow-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg class="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.19 0 2.34-.21 3.41-.6.3-.11.49-.4.49-.72 0-.43-.35-.78-.78-.78-.18 0-.35.06-.49.16-.85.3-1.76.46-2.63.46-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6c0 .87-.16 1.78-.46 2.63-.1.14-.16.31-.16.49 0 .43.35.78.78.78.32 0 .61-.19.72-.49.39-1.07.6-2.22.6-3.41C22 6.48 17.52 2 12 2z" />
                </svg>
              </div>
              <h4 class="text-lg font-bold text-gray-900 mb-2">Hugging Face</h4>
              <p class="text-sm text-gray-600">AI models and transformers for natural language processing</p>
            </div>

            <!-- TensorFlow.js -->
            <div
              class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow group">
              <div
                class="w-20 h-20 mx-auto mb-6 bg-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <img src="/src/assets/tech-icons/tensorflow.svg" alt="TensorFlow.js"
                  class="w-10 h-10 brightness-0 invert" />
              </div>
              <h4 class="text-lg font-bold text-gray-900 mb-2">TensorFlow.js</h4>
              <p class="text-sm text-gray-600">Machine learning library for JavaScript applications</p>
            </div>
          </div>
        </div>

        <!-- Deployment -->
        <div>
          <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">Deployment & Hosting</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <!-- Vercel -->
            <div
              class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow group">
              <div
                class="w-20 h-20 mx-auto mb-6 bg-gray-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg class="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 22.525H0l12-21.05 12 21.05z" />
                </svg>
              </div>
              <h4 class="text-lg font-bold text-gray-900 mb-2">Vercel</h4>
              <p class="text-sm text-gray-600">Frontend deployment platform with global CDN</p>
            </div>

            <!-- Appwrite Hosting -->
            <div
              class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow group">
              <div
                class="w-20 h-20 mx-auto mb-6 bg-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <img src="/src/assets/tech-icons/appwrite.svg" alt="Appwrite Hosting"
                  class="w-10 h-10 brightness-0 invert" />
              </div>
              <h4 class="text-lg font-bold text-gray-900 mb-2">Appwrite Hosting</h4>
              <p class="text-sm text-gray-600">Backend services and database hosting solution</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Why This Stack -->
      <div class="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-12 text-center">
        <h3 class="text-3xl font-bold text-gray-900 mb-6">Why This Tech Stack?</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div>
            <div class="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z">
                </path>
              </svg>
            </div>
            <h4 class="text-xl font-bold text-gray-900 mb-2">Performance</h4>
            <p class="text-gray-600">Lightning-fast load times and smooth interactions for the best user experience</p>
          </div>
          <div>
            <div class="w-16 h-16 bg-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4">
                </path>
              </svg>
            </div>
            <h4 class="text-xl font-bold text-gray-900 mb-2">Scalability</h4>
            <p class="text-gray-600">Built to handle millions of users and thousands of concurrent interviews</p>
          </div>
          <div>
            <div class="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z">
                </path>
              </svg>
            </div>
            <h4 class="text-xl font-bold text-gray-900 mb-2">AI-Powered</h4>
            <p class="text-gray-600">Advanced AI and ML capabilities for intelligent interview preparation</p>
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