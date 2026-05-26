<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  "rounded-lg shadow-medium transition-all duration-300",
  {
    variants: {
      variant: {
        surface: "bg-surface",
        mid: "bg-surface-mid",
        outlined: "bg-surface border border-border-gray",
        elevated: "bg-card-dark shadow-heavy",
      },
      padding: {
        none: "p-0",
        sm: "p-5",
        default: "p-6",
        lg: "p-8",
      },
      hover: {
        true: "cursor-pointer hover:-translate-y-1 hover:shadow-heavy",
        false: "",
      },
    },
    defaultVariants: {
      variant: "surface",
      padding: "default",
      hover: false,
    },
  }
)

type CardVariants = VariantProps<typeof cardVariants>

interface Props {
  variant?: CardVariants["variant"]
  padding?: CardVariants["padding"]
  hover?: CardVariants["hover"]
  as?: "div" | "article" | "section" | "aside"
  class?: HTMLAttributes["class"]
}

const props = withDefaults(defineProps<Props>(), {
  variant: "surface",
  padding: "default",
  hover: false,
  as: "div",
})
</script>

<template>
  <component :is="props.as" :class="cn(cardVariants({ variant: props.variant, padding: props.padding, hover: props.hover }), props.class)">
    <slot />
  </component>
</template>
