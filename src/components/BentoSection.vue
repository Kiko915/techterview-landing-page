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
  cta: string;
  image?: string;
  class?: string;
}

const features: Feature[] = [
  {
    name: "Helps agents help customers",
    description: "Reduce handling time with guided responses and workflows.",
    href: "/",
    image:
      "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cta: "Learn more",
    class: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    name: "Self‑service that works",
    description: "Deflect repetitive questions with precise answers.",
    href: "/",
    image:
      "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cta: "Learn more",
    class: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    name: "Safe and effective",
    description: "Guardrails prevent hallucinations and keep answers on-brand.",
    href: "/",
    cta: "Learn more",
    class: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    name: "Speeds automation",
    description: "Spin up virtual agents and workflows in minutes, not months.",
    href: "/",
    cta: "Explore",
    class: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
  },
  {
    name: "Operational insights",
    description: "Uncover unknown unknowns with real‑time analytics.",
    href: "/",
    image:
      "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cta: "View dashboards",
    class: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4",
  },
];
</script>


