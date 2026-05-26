<script setup lang="ts">
import Typography from "./ui/Typography.vue";
import content from "../data/projects.json";
</script>

<template>
  <section
    id="projects"
    data-component="projects"
    class="flex w-full justify-center bg-crust px-6 py-20"
  >
    <div class="flex w-full max-w-6xl flex-col gap-10">
      <div class="flex flex-col gap-3">
        <Typography variant="sectionLabel">Projetos</Typography>
        <Typography variant="h2" as="h2">{{ content.title }}</Typography>
      </div>

      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="project in content.items"
          :key="project.name"
          class="group flex flex-col overflow-hidden rounded-lg bg-card-dark shadow-medium transition-all duration-200 hover:shadow-heavy"
        >
          <div
            class="h-40 bg-gradient-to-br from-surface-mid to-surface0"
          ></div>
          <div class="flex flex-1 flex-col gap-3 p-5">
            <div class="flex items-center justify-between">
              <Typography variant="h3" as="h3">{{ project.name }}</Typography>
              <span
                class="text-[0.55rem] font-semibold uppercase tracking-[0.25em] text-green"
              >
                Novo
              </span>
            </div>
            <Typography variant="muted" class="flex-1 text-sm">
              {{ project.description }}
            </Typography>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="rounded-full border border-border-gray px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-muted"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
