<template>
  <div class="satellite">
    <div class="circle-line one" />
    <div class="circle-line two" />
    <!-- <div class="circle-line three" /> -->
  </div>
</template>
<script setup lang="ts">
defineOptions({
  name: 'VSatellite',
})
</script>
<style scope lang="scss">
.satellite {
  width: 200px;
  height: 200px;
  margin: 0;
  border-radius: 50%;
  position: relative;
  // background: #e6be74;
  perspective: 1200px;
  perspective-origin: 50% 50%;

  // &:before {
  //   content: '';
  //   position: absolute;
  //   top: 0%;
  //   left: 0%;
  //   width: 100%;
  //   height: 100%;
  //   border-radius: 50%;
  //   box-shadow: -40px 10px 70px 10px rgba(0, 0, 0, 0.5) inset;
  //   z-index: 2;
  // }
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0%;
    left: 0%;
    background: url('https://picdm.sunbangyan.cn/2023/10/03/xcym92.png')
      repeat-x;
    background-size: cover;
    border-radius: 50%;
    animation: img-rotate 30s infinite linear;
    box-shadow: -80px -15px 80px 10px rgba(0, 0, 0, 0.2) inset,
      -10px 0px 15px -7px #f0df1759;
    z-index: 2;
  }

  // &:after {
  //   content: '';
  //   position: absolute;
  //   width: 100%;
  //   height: 100%;
  //   background: radial-gradient(
  //     circle at 50% 50%,
  //     rgba(0, 0, 0, 0.4),
  //     rgba(0, 0, 0, 0.1) 40%,
  //     rgba(0, 0, 0, 0) 50%
  //   );
  //   -webkit-transform: translateX(64px) rotateX(90deg) translateZ(-113px)
  //     rotateY(-30deg);
  //   -moz-transform: translateX(64px) rotateX(90deg) translateZ(-113px)
  //     rotateY(-30deg);
  //   -ms-transform: translateX(64px) rotateX(90deg) translateZ(-113px)
  //     rotateY(-30deg);
  //   -o-transform: translateX(64px) rotateX(90deg) translateZ(-113px)
  //     rotateY(-30deg);
  //   transform: translateX(64px) rotateX(90deg) translateZ(-113px)
  //     rotateY(-30deg);
  //   z-index: -1;
  // }
  @keyframes img-rotate {
    0% {
      background-position: 0px 0px;
    }
    100% {
      background-position: 1200px 0px;
    }
  }

  &,
  .circle-line {
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
  }
  .circle-line {
    border-radius: 50%;
    position: absolute;
    border: 3px solid #13c2c2;
    transform: rotateZ(60deg) rotateY(105deg);
    -webkit-transform: rotateZ(60deg) rotateY(105deg);

    &::before,
    &::after {
      border-radius: 50%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }
  }

  .one {
    width: 120%;
    height: 120%;
    left: 0%;
    top: 0%;
    margin-left: -10%;
    margin-top: -10%;
    &::before {
      content: '';
      width: 10px;
      height: 10px;
      background: var(--vi-color-primary);
      filter: drop-shadow(10px 10px 10px var(--vi-color-primary));
      animation: move 20s linear infinite;
      transform: rotateZ(0deg) translateX(120px) rotateZ(0deg) rotateY(-105deg);
    }
    &::after {
      content: '';
      width: 10px;
      height: 10px;
      background: var(--vi-color-success);
      filter: drop-shadow(10px 10px 10px var(--vi-color-success));
      animation: move4 20s linear infinite;
      transform: rotateZ(180deg) translateX(120px) rotateZ(-180deg)
        rotateY(-105deg);
    }
    @keyframes move {
      from {
        transform: rotateZ(0deg) translateX(120px) rotateZ(0deg)
          rotateY(-105deg);
      }

      to {
        transform: rotateZ(360deg) translateX(120px) rotateZ(-360deg)
          rotateY(-105deg);
      }
    }
    @keyframes move4 {
      from {
        transform: rotateZ(-180deg) translateX(120px) rotateZ(180deg)
          rotateY(-105deg);
      }

      to {
        transform: rotateZ(180deg) translateX(120px) rotateZ(-180deg)
          rotateY(-105deg);
      }
    }
  }
  .two {
    width: 140%;
    height: 140%;
    left: 0%;
    top: 0%;
    margin-left: -20%;
    margin-top: -20%;

    &::before {
      content: '';
      width: 10px;
      height: 10px;
      background: var(--vi-color-warning);
      filter: drop-shadow(10px 10px 10px var(--vi-color-warning));
      animation: move-two-1 20s linear infinite;
      transform: rotateZ(0deg) translateX(150px) rotateZ(0deg) rotateY(-105deg);
    }
    &::after {
      content: '';
      width: 10px;
      height: 10px;
      background: var(--vi-color-danger);
      filter: drop-shadow(10px 10px 10px var(--vi-color-danger));
      animation: move-two-2 20s linear infinite;
      transform: rotateZ(180deg) translateX(140px) rotateZ(-180deg)
        rotateY(-105deg);
    }
    @keyframes move-two-1 {
      from {
        transform: rotateZ(0deg) translateX(140px) rotateZ(0deg)
          rotateY(-105deg);
      }

      to {
        transform: rotateZ(360deg) translateX(140px) rotateZ(-360deg)
          rotateY(-105deg);
      }
    }
    @keyframes move-two-2 {
      from {
        transform: rotateZ(-180deg) translateX(140px) rotateZ(180deg)
          rotateY(-105deg);
      }

      to {
        transform: rotateZ(180deg) translateX(140px) rotateZ(-180deg)
          rotateY(-105deg);
      }
    }
  }
}
</style>
