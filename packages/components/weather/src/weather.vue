<template>
  <div :class="ns.b()">
    <div ref="_cloud" class="cloud" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useNamespace } from '@visual-design/hooks'
// import { weatherProps } from './weather'
defineOptions({
  name: 'VWeather',
})
const ns = useNamespace('weather')
// const props = defineProps(weatherProps)
// init here
const _cloud = ref<HTMLDivElement>()

let timer = 0
let timerTwo = 0

function rain() {
  const el = document.createElement('div')
  el.classList.add('raindrop')
  _cloud.value?.appendChild(el)
  const offsetX = Math.floor(Math.random() * 230)
  const duration = Math.random() * 0.5
  const w = Math.random() * 5
  const h = Math.random() * 50
  el.style.left = `${offsetX}px`
  el.style.width = `${0.5 * w}px`
  el.style.height = `${0.5 * h}px`
  el.style.animationDuration = `${1 + duration}s`

  timer = setTimeout(() => {
    _cloud.value?.removeChild(el)
  }, 2000)
}

onMounted(() => {
  timerTwo = setInterval(rain, 20)
})
onUnmounted(() => {
  timer && clearTimeout(timer)
  timerTwo && clearInterval(timerTwo)
})
</script>
