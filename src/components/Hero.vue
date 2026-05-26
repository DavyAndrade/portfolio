<script setup lang="ts">
import { ArrowRight, Mail, Play } from "lucide-vue-next";
import Typography from "./ui/Typography.vue";
import Button from "./ui/Button.vue";
import content from "../data/hero.json";
</script>

<template>
  <section
    id="hero"
    data-component="hero"
    class="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-crust px-6"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(166,227,161,0.08),_transparent_55%),radial-gradient(circle_at_20%_20%,_rgba(205,214,244,0.04),_transparent_45%)]"
    ></div>
    <div class="relative flex w-full max-w-6xl flex-col items-center gap-8 text-center">
      <div class="flex flex-col items-center gap-5">
        <div
          class="inline-flex items-center gap-2 rounded-full bg-green/10 px-4 py-1.5"
        >
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75"></span>
            <span class="relative inline-flex h-2 w-2 rounded-full bg-green"></span>
          </span>
          <Typography variant="badge" class="text-green">Disponível para projetos</Typography>
        </div>
        <Typography variant="h1" as="h1" class="text-4xl sm:text-5xl lg:text-6xl">
          {{ content.title }}
        </Typography>
        <Typography variant="h3" as="p" class="text-lg font-medium text-near-white sm:text-xl">
          {{ content.subtitle }}
        </Typography>
      </div>
      <Typography
        variant="body"
        class="mx-auto max-w-2xl text-muted sm:text-base"
      >
        {{ content.description }}
      </Typography>
      <div class="flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button variant="green-pill" as="a" href="#projects" class="flex gap-2">
          {{ content.ctaPrimary }}
          <ArrowRight class="h-4 w-4" />
        </Button>
        <Button variant="outlined" as="a" href="mailto:davyandrade.dev@gmail.com" class="flex gap-2">
          {{ content.ctaSecondary }}
          <Mail class="h-4 w-4" />
        </Button>
      </div>
    </div>
  </section>
</template>
