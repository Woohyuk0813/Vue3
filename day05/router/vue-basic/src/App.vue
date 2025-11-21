<script setup>
import TheHeadingNavbar from './components/layout/TheHeadingNavbar.vue';
</script>

<template>
  <div>
    <TheHeadingNavbar />
    <!-- 현재 라우트에 맞는 Component가 렌더링 -->
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
