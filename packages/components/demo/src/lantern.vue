<template>
  <div class="lantern">
    <div class="lantern-contaier">
      <!-- 添加顶部线条 -->
      <div class="head-line" />
      <!-- 中间灯笼区域 ，顶部内容旋转幅度太大，将其放入到center标签下-->
      <div class="center">
        <div class="center-line">
          <span><slot>大吉大利</slot></span>
        </div>
        <!-- 底部内容 -->
        <div class="footer-line" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineOptions({
  name: 'VLantern',
})
</script>
