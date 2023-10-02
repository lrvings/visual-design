<template>
  <i :class="ns.b()" :style="style" v-bind="$attrs">
    <slot />
  </i>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useNamespace } from '@visual-design/hooks'
import { addUnit, isUndefined } from '@visual-design/utils'
import { iconProps } from './icon'
import type { CSSProperties } from 'vue'

defineOptions({
  name: 'VIcon',
  inheritAttrs: false,
})
const ns = useNamespace('icon')
const props = defineProps(iconProps)

const style = computed<CSSProperties>(() => {
  if (!props.size && !props.color) return {}

  return {
    fontSize: isUndefined(props.size) ? undefined : addUnit(props.size),
    '--color': props.color,
  }
})
</script>
