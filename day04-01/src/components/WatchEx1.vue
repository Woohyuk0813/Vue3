<script setup>
// 기본 자료형 0을 반응형 데이터로 만들어 주세요
import { ref, watch } from 'vue';
const count = ref(0);

watch(count, (currentValue, preValue) => {
  console.log(currentValue, preValue);
});
</script>

<template>
  <h1>ref : {{ count }}</h1>
  <button @click="count++">ref++</button>
</template>
