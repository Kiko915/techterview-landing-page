<script setup>
// Import team member images
import francisImg from '../assets/team/francis.jpg';
import kyleImg from '../assets/team/kyle.jpg';
import yuanImg from '../assets/team/yuan.jpg';
import kithImg from '../assets/team/kith.jpg';
</script>

<template>
  <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Meet Our
          <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Team
          </span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          A passionate group of engineers, designers, and educators dedicated to transforming tech careers
        </p>
      </div>

      <!-- Team Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
        <!-- Francis -->
        <div
          class="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
          <!-- Francis Image -->
          <div
            class="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-2xl group-hover:scale-105 transition-transform duration-300">
            <img :src="francisImg" alt="Francis" class="w-full h-full object-cover" />
          </div>

          <div class="text-center">
            <h3 class="text-xl font-bold text-gray-900 mb-1">Francis</h3>
            <p class="text-blue-600 font-medium mb-3">Co-Founder & CEO</p>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              Visionary leader passionate about revolutionizing tech interview preparation and helping developers
              succeed.
            </p>

            <!-- Social Links -->
            <div class="flex justify-center space-x-3">
              <a href="#"
                class="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clip-rule="evenodd"></path>
                </svg>
              </a>
              <a href="#"
                class="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Kyle -->
        <div
          class="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-indigo-200">
          <!-- Kyle Image -->
          <div
            class="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-2xl group-hover:scale-105 transition-transform duration-300">
            <img :src="kyleImg" alt="Kyle" class="w-full h-full object-cover" />
          </div>

          <div class="text-center">
            <h3 class="text-xl font-bold text-gray-900 mb-1">Kyle</h3>
            <p class="text-indigo-600 font-medium mb-3">Co-Founder & CTO</p>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              Technical architect and AI specialist driving innovation in interview preparation technology.
            </p>

            <!-- Social Links -->
            <div class="flex justify-center space-x-3">
              <a href="#"
                class="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clip-rule="evenodd"></path>
                </svg>
              </a>
              <a href="#"
                class="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Yuan -->
        <div
          class="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
          <!-- Yuan Image -->
          <div
            class="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-2xl group-hover:scale-105 transition-transform duration-300">
            <img :src="yuanImg" alt="Yuan" class="w-full h-full object-cover" />
          </div>

          <div class="text-center">
            <h3 class="text-xl font-bold text-gray-900 mb-1">Yuan</h3>
            <p class="text-purple-600 font-medium mb-3">Head of Product</p>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              Product strategist focused on creating exceptional user experiences and driving product innovation.
            </p>

            <!-- Social Links -->
            <div class="flex justify-center space-x-3">
              <a href="#"
                class="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-600 hover:bg-purple-50 transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clip-rule="evenodd"></path>
                </svg>
              </a>
              <a href="#"
                class="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-600 hover:bg-purple-50 transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84">
                  </path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- James -->
        <div
          class="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200">
          <!-- James Image Placeholder -->
          <div
            class="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl mx-auto mb-6 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
            <svg class="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd">
              </path>
            </svg>
          </div>

          <div class="text-center">
            <h3 class="text-xl font-bold text-gray-900 mb-1">James</h3>
            <p class="text-green-600 font-medium mb-3">Lead Designer</p>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              Creative designer crafting intuitive and beautiful user interfaces that enhance the learning experience.
            </p>

            <!-- Social Links -->
            <div class="flex justify-center space-x-3">
              <a href="#"
                class="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 hover:text-green-600 hover:bg-green-50 transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clip-rule="evenodd"></path>
                </svg>
              </a>
              <a href="#"
                class="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 hover:text-green-600 hover:bg-green-50 transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.083.402-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 19.982 10.763 20.017 12.017 20.017c6.624 0 11.99-5.367 11.99-11.90C24.007 1.347 18.641.001 12.017.001z"
                    clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Kith -->
        <div
          class="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-200">
          <!-- Kith Image -->
          <div
            class="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-2xl group-hover:scale-105 transition-transform duration-300">
            <img :src="kithImg" alt="Kith" class="w-full h-full object-cover" />
          </div>

          <div class="text-center">
            <h3 class="text-xl font-bold text-gray-900 mb-1">Kith</h3>
            <p class="text-orange-600 font-medium mb-3">Senior Engineer</p>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              Full-stack engineer building scalable systems and ensuring platform reliability and performance.
            </p>

            <!-- Social Links -->
            <div class="flex justify-center space-x-3">
              <a href="#"
                class="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 hover:text-orange-600 hover:bg-orange-50 transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clip-rule="evenodd"></path>
                </svg>
              </a>
              <a href="#"
                class="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 hover:text-orange-600 hover:bg-orange-50 transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

