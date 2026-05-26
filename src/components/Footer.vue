<script setup lang="ts">
import { Github, Linkedin, Mail } from "lucide-vue-next";
import Typography from "./ui/Typography.vue";
import content from "../data/footer.json";
</script>

<template>
  <footer
    data-component="footer"
    id="footer"
    class="flex w-full justify-center border-t border-border-gray bg-crust px-6 py-16"
  >
    <div class="flex w-full max-w-6xl flex-col gap-10">
      <div
        class="flex flex-col gap-6 pb-8 sm:flex-row sm:items-center sm:justify-between"
      >
        <div class="flex flex-col gap-3">
          <Typography variant="h2" as="h2" class="text-xl uppercase tracking-[0.3em]">
            {{ content.title }}
          </Typography>
          <Typography variant="body" class="text-muted">
            {{ content.cta }}
          </Typography>
          <a
            class="text-sm font-semibold text-green transition-colors hover:brightness-110"
            :href="`mailto:${content.email}`"
          >
            {{ content.email }}
          </a>
        </div>
        <div class="flex gap-3">
          <a
            class="rounded-full border border-border-gray p-2.5 text-muted transition-all hover:border-border-light hover:text-text"
            href="https://github.com/davy-andrade"
            aria-label="GitHub"
          >
            <Github class="h-5 w-5" />
          </a>
          <a
            class="rounded-full border border-border-gray p-2.5 text-muted transition-all hover:border-border-light hover:text-text"
            href="https://www.linkedin.com/in/davy-andrade/"
            aria-label="LinkedIn"
          >
            <Linkedin class="h-5 w-5" />
          </a>
          <a
            class="rounded-full border border-border-gray p-2.5 text-muted transition-all hover:border-border-light hover:text-text"
            href="mailto:davyandrade.dev@gmail.com"
            aria-label="Email"
          >
            <Mail class="h-5 w-5" />
          </a>
        </div>
      </div>
      <div
        class="flex w-full items-center justify-between text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-overlay2"
      >
        <p>© 2026 {{ content.title }}.</p>
        <span>Feito no Brasil</span>
      </div>
    </div>
  </footer>
</template>
