<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  "rounded-lg shadow-[rgba(0,0,0,0.3)_0px_8px_8px]",
  {
    variants: {
      variant: {
        surface: "bg-[#181818]",
        mid: "bg-[#1f1f1f]",
        outlined: "bg-[#181818] border border-[#4d4d4d]",
      },
      padding: {
        sm: "p-5",
        default: "p-6",
        lg: "p-8",
      },
      hover: {
        true: "transition hover:bg-[#1f1f1f]",
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
  class?: HTMLAttributes["class"]
}

const props = withDefaults(defineProps<Props>(), {
  variant: "surface",
  padding: "default",
  hover: false,
})
</script>

<template>
  <div :class="cn(cardVariants({ variant: props.variant, padding: props.padding, hover: props.hover }), props.class)">
    <slot />
  </div>
</template>
