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
          <div
            class="h-28 w-28 rounded-circle bg-linear-to-br from-surface0 to-surface-mid md:h-36 md:w-36"
          ></div>
        </div>
        <div class="flex flex-col gap-6">
          <Typography variant="body" class="leading-relaxed text-near-white">
            {{ content.body }}
          </Typography>
          <Typography variant="muted" class="text-sm">
            {{ content.location }}
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

      <div class="grid gap-4 sm:grid-cols-3">
        <article
          v-for="(highlight, i) in content.highlights"
          :key="highlight"
          class="rounded-lg bg-surface-mid p-5 shadow-medium"
        >
          <Typography variant="badge" class="text-muted">
            Destaque {{ i + 1 }}
          </Typography>
          <Typography variant="body" class="mt-3 text-near-white">
            {{ highlight }}
          </Typography>
        </article>
      </div>
    </div>
  </section>
</template>
