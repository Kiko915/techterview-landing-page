<template>
  <div>
    <FluidCursor v-if="enabled" />

    <div class="fixed bottom-4 right-4 z-[80] select-none hidden md:block">
      <label class="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/80 px-3 py-1.5 text-sm text-gray-700 shadow backdrop-blur">
        <input type="checkbox" v-model="enabled" class="h-4 w-4 accent-blue-600" />
        <span>Cursor FX</span>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import FluidCursor from './ui/FluidCursor.vue';

const enabled = ref(true);

onMounted(() => {
  const saved = localStorage.getItem('cursorFX');
  if (saved === 'off') enabled.value = false;
});

watch(enabled, (v) => {
  try {
    localStorage.setItem('cursorFX', v ? 'on' : 'off');
  } catch (e) {
    // ignore
  }
});
</script>

<style scoped>
/* purely presentational */
</style>


