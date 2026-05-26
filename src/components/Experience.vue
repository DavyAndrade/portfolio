<script setup lang="ts">
import Typography from "./ui/Typography.vue";
import content from "../data/experience.json";
</script>

<template>
  <section
    id="experiencia"
    data-component="experience"
    class="flex w-full justify-center bg-surface px-6 py-20"
  >
    <div class="flex w-full max-w-6xl flex-col gap-10">
      <div class="flex flex-col gap-3">
        <Typography variant="sectionLabel">Experiência</Typography>
        <Typography variant="h2" as="h2">{{ content.title }}</Typography>
      </div>

      <div class="relative pl-8">
        <div
          class="absolute left-[11px] top-2 h-[calc(100%-1rem)] w-px bg-border-gray"
        ></div>

        <article
          v-for="item in content.items"
          :key="item.role"
          class="relative pb-8 last:pb-0"
        >
          <div
            class="absolute -left-8 top-1.5 h-[9px] w-[9px] rounded-full border-2 border-surface bg-green"
          ></div>
          <div
            class="rounded-lg border border-border-gray bg-surface-mid p-5 shadow-medium"
          >
            <div
              class="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between"
            >
              <div>
                <Typography variant="h3" as="h3">{{ item.role }}</Typography>
                <div class="flex items-center gap-2">
                <Typography variant="muted" class="text-sm">{{
                  item.company
                }}</Typography>
                  <span
                    v-if="item.type"
                    class="rounded-full bg-card-dark px-2 py-0.5 text-[0.55rem] font-semibold uppercase tracking-[0.15em] text-muted"
                  >
                    {{ item.type }}
                  </span>
                </div>

              </div>
              <Typography
                variant="badge"
                class="mt-1 shrink-0 text-green sm:mt-0"
              >
                {{ item.period }}
              </Typography>
            </div>
            <Typography
              variant="body"
              class="mt-3 leading-relaxed text-near-white"
            >
              {{ item.summary }}
            </Typography>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
