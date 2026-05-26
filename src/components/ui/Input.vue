<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const inputVariants = cva(
  "w-full bg-surface-mid text-sm text-white shadow-inset outline-none transition-shadow duration-300 placeholder:text-separator",
  {
    variants: {
      variant: {
        default:
          "rounded-full focus:shadow-[rgb(18,18,18)_0px_1px_0px,_var(--catppuccin-color-green)_0px_0px_0px_1px_inset]",
        error:
          "rounded-full",
        textarea:
          "rounded-lg focus:shadow-[rgb(18,18,18)_0px_1px_0px,_var(--catppuccin-color-green)_0px_0px_0px_1px_inset]",
      },
      size: {
        default: "px-4 py-3",
        sm: "px-3 py-2 text-xs",
        lg: "px-5 py-4 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type InputVariants = VariantProps<typeof inputVariants>

interface Props {
  variant?: InputVariants["variant"]
  size?: InputVariants["size"]
  class?: HTMLAttributes["class"]
}

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
  size: "default",
})
</script>

<template>
  <input
    v-if="props.variant !== 'textarea'"
    v-bind="$attrs"
    :class="cn(inputVariants({ variant: props.variant, size: props.size }), props.variant === 'error' ? 'shadow-[rgb(18,18,18)_0px_1px_0px,_var(--catppuccin-color-red)_0px_0px_0px_1px_inset]' : '', props.class)"
  />
  <textarea
    v-else
    v-bind="$attrs"
    :class="cn(inputVariants({ variant: props.variant, size: props.size }), props.class)"
  />
</template>
