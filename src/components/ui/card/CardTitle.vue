<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

interface Props {
  class?: HTMLAttributes["class"]
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

const props = withDefaults(defineProps<Props>(), {
  as: "h3",
})
</script>

<template>
  <component :is="props.as" :class="cn('text-sm font-bold text-white', props.class)">
    <slot />
  </component>
</template>
