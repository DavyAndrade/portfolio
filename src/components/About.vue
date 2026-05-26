<script setup lang="ts">
import Typography from "./ui/Typography.vue";
import content from "../data/about.json";
</script>

<template>
  <section
    id="about"
    data-component="about"
    class="flex w-full justify-center bg-surface px-6 py-20"
  >
    <div class="flex w-full max-w-6xl flex-col gap-10">
      <div class="flex flex-col gap-3">
        <Typography variant="sectionLabel">Sobre</Typography>
        <Typography variant="h2" as="h2">{{ content.title }}</Typography>
      </div>

      <div class="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
        <div class="flex shrink-0 justify-center md:block">
          <img
            :src="content.avatar"
            alt="Davy Andrade"
            class="h-28 w-28 rounded-circle border-2 border-border-gray object-cover md:h-36 md:w-36"
          />
        </div>
        <div class="flex flex-col gap-6">
          <Typography variant="body" class="leading-relaxed text-near-white">
            {{ content.body }}
          </Typography>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in content.tags"
              :key="tag"
              class="rounded-full bg-card-dark px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-muted"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
