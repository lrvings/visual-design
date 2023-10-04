.
<template>
  <div class="wifi">
    <div class="line" style="--i: 0" />
    <div class="line" style="--i: 1" />
    <div class="line" style="--i: 2" />
    <div class="dot" />
  </div>
</template>
<script setup lang="ts">
defineOptions({
  name: 'VWifi',
})
</script>
<style scope lang="scss">
:root {
  --bg: #000;
  --dot: 20px;
  --w: 240px;
  --gap: 35px;
}
.wifi {
  width: var(--w);
  height: calc(var(--gap) * 3 + var(--dot));
  position: relative;
}
.line {
  position: absolute;
  --width: calc(var(--w) - var(--gap) * 2 * var(--i));
  width: var(--width);
  height: var(--width);
  /* 水平居中 */
  left: calc(50% - var(--width) / 2);
  /* 距离顶部的距离，根据gap来定 */
  top: calc(var(--gap) * var(--i));
  border-radius: 50%;
  background: conic-gradient(var(--bg) 35%, transparent 35%);
  -webkit-mask: radial-gradient(
    transparent calc(var(--width) / 2 - var(--dot) - 1px),
    #000 calc(var(--width) / 2 - var(--dot))
  );
  transform: rotate(-60deg);
}
.line::before,
.line::after {
  content: '';
  position: absolute;
  width: var(--dot);
  height: var(--dot);
  border-radius: 50%;
  left: calc(var(--width) / 2 - var(--dot) / 2);
  top: calc(var(--width) / 2 - var(--dot) / 2);
  background: var(--bg);
}
.line::before {
  transform: translate(0, calc(var(--dot) / 2 - var(--width) / 2));
}
.line::after {
  transform: rotate(calc(360deg * 0.35))
    translate(0, calc(var(--dot) / 2 - var(--width) / 2));
}
.dot {
  position: absolute;
  width: var(--dot);
  height: var(--dot);
  border-radius: 50%;
  top: calc(var(--gap) * 3);
  background: var(--bg);
  left: calc(50% - var(--dot) / 2);
}
</style>
