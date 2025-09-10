<template>
  <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" :id="id">
    <BentoGrid class="grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-4 lg:grid-rows-3">
      <BentoGridCard
        v-for="(feature, index) in features"
        :key="index"
        v-bind="feature"
        :class="feature.class"
      >
        <template v-if="feature.image" #background>
          <div
            class="absolute right-0 top-0 size-full bg-cover bg-center opacity-60 transition duration-150 ease-in-out group-hover:opacity-20"
            :style="`background-image: url('${feature.image}')`"
          ></div>
        </template>
      </BentoGridCard>
    </BentoGrid>
  </section>
  
</template>

<script lang="ts" setup>
import BentoGrid from "./ui/BentoGrid.vue";
import BentoGridCard from "./ui/BentoGridCard.vue";

defineProps({
  id: {
    type: String,
    default: 'features'
  }
});

interface Feature {
  name: string;
  description: string;
  href: string;
  image?: string;
  class?: string;
}

const features: Feature[] = [
  {
    name: "Mock Interviews that Work",
    description: "Practice with AI-driven mock interviews that simulate real technical questions and recruiter follow-ups.",
    href: "/",
    image:
      "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    class: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    name: "Safe and Supportive",
    description: "A guided environment that reduces stress and helps you build confidence without the fear of failure.",
    href: "/",
    image:
      "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    class: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    name: "Smart Practice",
    description: "Interactive coding challenges and instant AI feedback help you sharpen your problem-solving skills faster.",
    href: "/",
    class: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    name: "Personalized Pathways",
    description: "AI tailors your practice journey with interview questions, coding tasks, and feedback aligned to your target role.",
    href: "/",

    class: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
  },
  {
    name: "Career Insights",
    description: "Get real-time analytics on your performance, improvement areas, and job readiness scores.",
    href: "/",
    image: "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    class: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4",
  },
];
</script>


