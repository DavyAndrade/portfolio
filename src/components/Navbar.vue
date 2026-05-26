<script setup lang="ts">
import Button from "./ui/Button.vue";
import content from "../data/navbar.json";
</script>

<template>
  <header
    data-component="navbar"
    class="fixed inset-x-4 top-4 z-50 mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border border-border-gray bg-crust/70 px-5 shadow-heavy backdrop-blur md:h-16 md:px-6"
  >
    <a href="#" class="flex items-center gap-3">
      <span class="h-2.5 w-2.5 rounded-full bg-green md:h-3 md:w-3"></span>
      <h2 class="text-xs font-semibold uppercase tracking-[0.3em] text-text md:text-sm">
        {{ content.logo }}
      </h2>
    </a>
    <nav class="hidden items-center gap-6 md:flex">
      <a
        v-for="item in content.links"
        :key="item"
        :href="`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`"
        class="text-xs font-semibold uppercase tracking-[0.25em] text-muted transition-colors hover:text-text"
      >
        {{ item }}
      </a>
    </nav>
    <Button variant="green-pill" size="sm" as="a" :href="content.ctaHref">
      {{ content.cta }}
    </Button>
  </header>
</template>
