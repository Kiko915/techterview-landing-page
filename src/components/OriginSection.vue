<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          The Origin of
          <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            TechTerview
          </span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Born from the frustration of unprepared interviews and the vision of democratizing tech career success
        </p>
      </div>

      <!-- Story Content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Story Text -->
        <div class="space-y-6">
          <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">The Problem We Saw</h3>
            <p class="text-gray-700 leading-relaxed">
              In August 2025, we witnessed countless talented developers struggle with tech interviews—not because they
              lacked
              skills,
              but because they weren't prepared for the unique challenges of technical interviews. Traditional
              preparation
              methods were fragmented, outdated, and didn't reflect real-world interview scenarios.
            </p>
          </div>

          <div class="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p class="text-gray-700 leading-relaxed">
              We envisioned a platform that would bridge the gap between talent and opportunity. By combining AI-powered
              practice sessions, real company interview patterns, and expert mentorship, we created TechTerview to level
              the playing field for all developers, regardless of their background.
            </p>
          </div>

          <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">The Impact</h3>
            <p class="text-gray-700 leading-relaxed">
              Today, TechTerview has helped over 10,000 developers land their dream jobs at top tech companies.
              Our platform continues to evolve, incorporating the latest interview trends and technologies to ensure
              our users stay ahead of the curve.
            </p>
          </div>
        </div>

        <!-- Clean Timeline Cards -->
        <div class="flex flex-col gap-6 space-y-12">
          <!-- 2023 - The Idea -->
          <div class="group">
            <div
              class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group-hover:shadow-xl group-hover:border-blue-200 transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <h4 class="text-2xl font-bold text-gray-900">The Idea</h4>
                <span class="px-4 py-2 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">August</span>
              </div>
              <p class="text-gray-600 leading-relaxed">
                Identified the gap in tech interview preparation and envisioned a comprehensive solution to help
                developers succeed in their career journey.
              </p>
            </div>
          </div>

          <!-- Early 2024 - MVP Launch -->
          <div class="group">
            <div
              class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group-hover:shadow-xl group-hover:border-indigo-200 transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <h4 class="text-2xl font-bold text-gray-900">MVP Launch</h4>
                <span class="px-4 py-2 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-full">October
                  2025</span>
              </div>
              <p class="text-gray-600 leading-relaxed">
                First version with basic coding challenges and interview simulation features to validate our concept and
                gather user feedback.
              </p>
            </div>
          </div>

          <!-- Mid 2024 - AI Integration -->
          <div class="group">
            <div
              class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group-hover:shadow-xl group-hover:border-purple-200 transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <h4 class="text-2xl font-bold text-gray-900">AI Integration</h4>
                <span class="px-4 py-2 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">Mid October
                  2025</span>
              </div>
              <p class="text-gray-600 leading-relaxed">
                Added AI-powered mock interviews, personalized feedback, and adaptive learning paths to revolutionize
                interview preparation.
              </p>
            </div>
          </div>

          <!-- 2025 - Platform 2.0 -->
          <div class="group">
            <div
              class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group-hover:shadow-xl group-hover:border-pink-200 transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <h4 class="text-2xl font-bold text-gray-900">Platform 2.0</h4>
                <span class="px-4 py-2 bg-pink-100 text-pink-700 text-sm font-medium rounded-full">December</span>
              </div>
              <p class="text-gray-600 leading-relaxed">
                Complete redesign with advanced features, real-time collaboration, and enterprise solutions for scalable
                interview preparation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OriginSection'
}
</script>