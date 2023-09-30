<template>
  <div class="gradient-button">
    <div class="gradient-button__shadow" />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'VGradientButton',
})
</script>

<style scoped lang="scss">
.gradient-button,
.gradient-button__shadow {
  color: rgba(255, 255, 255, 0.9);
  border-radius: 50px;
  width: 300px;
  height: 100px;
  font-size: 30px;
  text-align: center;
  line-height: 100px;
  background: linear-gradient(-45deg, #ffa63d, #ff3d77, #338aff, #3cf0c5);
  background-size: 600%;
  -webkit-animation: anime 6s linear infinite;
  animation: anime 6s linear infinite;
  cursor: pointer;

  &:hover {
    transform: translateY(-6px);
  }
  transition: all 0.3s linear;
  z-index: 1;
}
.gradient-button__shadow {
  position: absolute;
  margin-top: -70px;
  z-index: -1;
  filter: blur(30px);
  opacity: 0.8;
}

@keyframes anime {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

@-webkit-keyframes anime {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>
