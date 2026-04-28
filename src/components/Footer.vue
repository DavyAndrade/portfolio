<script setup lang="ts">
import { Github, Linkedin, Mail } from "lucide-vue-next";
</script>

<template>
  <footer
    class="flex flex-col w-full items-center py-8 bg-surface mx-auto gap-6"
  >
    <div class="flex w-full items-center justify-between max-w-7xl">
      <h2 class="text-2xl font-bold text-primary font-display">DAVY ANDRADE</h2>

      <div class="flex gap-4">
        <a href="https://github.com/davy-andrade">
          <Github
            class="text-on-surface w-6 h-6 hover:text-secondary transition-colors"
          />
        </a>
        <a href="https://www.linkedin.com/in/davy-andrade/">
          <Linkedin
            class="text-on-surface w-6 h-6 hover:text-secondary transition-colors"
          />
        </a>
        <a href="mailto:davyandrade.dev@gmail.com">
          <Mail
            class="text-on-surface w-6 h-6 hover:text-secondary transition-colors"
          />
        </a>
      </div>
    </div>

    <div class="border-t border-on-surface/10 flex w-full items-center justify-center pt-6 max-w-7xl">
      <p class="text-on-surface/50">© 2026 Davy Andrade. All rights reserved.</p>
    </div>
  </footer>
</template>
