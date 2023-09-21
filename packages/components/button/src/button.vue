<template>
  <component :is="'button'"><slot /></component>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'VButton',
})
</script>
