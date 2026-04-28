<script setup lang="ts">
import { Rocket } from "lucide-vue-next";
</script>

<template>
  <section
    class="flex w-full flex-col justify-center items-center min-h-screen gap-6 bg-background text-on-surface px-4 text-center"
  >
    <Rocket
      class="animate-in fade-in zoom-in duration-1000 text-blue-500 h-24 w-24"
    />
    <h1 class="text-5xl font-bold text-white">Hero Section</h1>
  </section>
</template>
