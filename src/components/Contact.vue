<script setup lang="ts">
import { Github, Linkedin, Mail } from "lucide-vue-next";
import Typography from "./ui/Typography.vue";
import content from "../data/contact.json";

const iconMap: Record<string, any> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};
</script>

<template>
  <section
    id="contato"
    data-component="contact"
    class="flex w-full justify-center bg-surface px-6 py-20"
  >
    <div class="flex w-full max-w-6xl flex-col gap-10">
      <div class="flex flex-col gap-3">
        <Typography variant="sectionLabel">{{ content.title }}</Typography>
        <Typography variant="h2" as="h2">{{ content.heading }}</Typography>
      </div>

      <div
        class="flex flex-col gap-8 rounded-lg bg-surface-mid p-8 shadow-medium sm:flex-row sm:items-center sm:justify-between"
      >
        <div class="max-w-md">
          <Typography variant="body" class="text-near-white">
            {{ content.description }}
          </Typography>
        </div>

        <div class="flex flex-col items-start gap-4 sm:items-end">
          <div class="flex flex-col gap-0.5 text-left sm:text-right">
            <Typography variant="label">Email</Typography>
            <a
              :href="`mailto:${content.email}`"
              class="text-sm font-semibold text-green transition-colors hover:brightness-110"
            >
              {{ content.email }}
            </a>
          </div>

          <div class="flex gap-3">
            <a
              v-for="s in content.social"
              :key="s.name"
              :href="s.url"
              :aria-label="s.name"
              class="rounded-full border border-border-gray p-2.5 text-muted transition-all hover:border-border-light hover:text-text"
            >
              <component :is="iconMap[s.icon]" class="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
