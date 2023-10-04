<template>
  <component :is="'div'"><slot /></component>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'VCard',
})
</script>
