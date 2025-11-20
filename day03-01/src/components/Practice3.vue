<script setup>
import { ref, computed } from 'vue';

const searchText = ref('');

const warningMessage = computed(() => {
  if (searchText.value.length > 10) {
    return '10자를 초과하였습니다';
  }
  return '';
});
</script>

<template>
  <div>
    <input type="text" v-model="searchText" placeholder="검색어를 입력하세요" />
    <p>{{ warningMessage }}</p>
  </div>
</template>
