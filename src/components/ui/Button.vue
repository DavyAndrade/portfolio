<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-semibold uppercase tracking-[0.14em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97]",
  {
    variants: {
      variant: {
        "green-pill": "rounded-full bg-green text-black shadow-medium hover:brightness-110 hover:shadow-heavy",
        "dark-pill": "rounded-full bg-surface-mid text-white shadow-medium hover:brightness-110 hover:shadow-heavy",
        "browse": "rounded-pill bg-surface text-white px-[43px] shadow-medium hover:brightness-110 hover:shadow-heavy",
        "outlined": "rounded-full border border-border-light text-white hover:border-white hover:shadow-heavy",
        "play-circle": "rounded-full bg-surface-mid text-white shadow-heavy hover:brightness-110",
      },
      size: {
        default: "px-6 py-3 text-xs leading-none",
        sm: "px-4 py-2 text-[0.75rem] leading-none",
        lg: "px-8 py-3 text-[0.88rem] leading-none",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "dark-pill",
      size: "default",
    },
  }
)

type ButtonVariants = VariantProps<typeof buttonVariants>

interface Props {
  variant?: ButtonVariants["variant"]
  size?: ButtonVariants["size"]
  as?: "button" | "a"
  class?: HTMLAttributes["class"]
}

const props = withDefaults(defineProps<Props>(), {
  variant: "dark-pill",
  size: "default",
  as: "button",
})
</script>

<template>
  <component :is="props.as" v-bind="$attrs" :class="cn(buttonVariants({ variant: props.variant, size: props.size }), props.class)">
    <slot />
  </component>
</template>
