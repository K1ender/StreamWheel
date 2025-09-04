<script setup lang="ts">
import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  ["flex", "cursor-pointer", "transition-colors", "ease-out", "gap-2"],
  {
    variants: {
      intent: {
        primary: "bg-purple-500 hover:bg-purple-600",
        secondary: "1",
      },
      size: {
        sm: "1",
        md: "px-3.5 py-2 rounded-md",
        lg: "1",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
    },
  }
);

// FIXME: Some problems with types, make issue?
const { intent = "primary", size = "md" } = defineProps<{
  intent?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}>();
</script>

<template>
  <button :class="buttonVariants({ intent, size })">
    <slot name="icon"></slot>
    <slot />
  </button>
</template>

<style></style>