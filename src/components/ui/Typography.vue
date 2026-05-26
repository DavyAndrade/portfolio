<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "font-title text-3xl font-bold text-white",
      h2: "font-title text-2xl font-bold text-white",
      h3: "font-ui text-base font-bold text-white",
      body: "font-ui text-sm text-white",
      muted: "font-ui text-sm text-muted",
      caption: "font-ui text-xs text-muted",
      badge: "font-ui text-[0.65rem] font-semibold uppercase tracking-[0.2em]",
      label: "font-ui text-xs font-bold uppercase tracking-[0.25em] text-muted",
      sectionLabel: "font-ui text-[0.6rem] font-bold uppercase tracking-[0.25em] text-muted",
    },
  },
  defaultVariants: {
    variant: "body",
  },
})

type TypographyVariants = VariantProps<typeof typographyVariants>

interface Props {
  variant?: TypographyVariants["variant"]
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
  class?: HTMLAttributes["class"]
}

const props = withDefaults(defineProps<Props>(), {
  variant: "body",
  as: "p",
})

const tagMap: Record<string, string> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body: "p",
  muted: "p",
  caption: "p",
  badge: "span",
  label: "span",
  sectionLabel: "span",
}
</script>

<template>
  <component :is="props.as || tagMap[props.variant]" v-bind="$attrs" :class="cn(typographyVariants({ variant: props.variant }), props.class)">
    <slot />
  </component>
</template>
