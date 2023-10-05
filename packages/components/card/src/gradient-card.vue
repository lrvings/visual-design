<template>
  <div :class="ns.b()">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from '@visual-design/hooks'
defineOptions({
  name: 'VGradientCard',
})

defineProps({
  styleType: {
    type: String,
    default: 'default',
  },
})

const ns = useNamespace('gradient-card')
</script>
