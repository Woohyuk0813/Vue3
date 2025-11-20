<script setup>
import { ref } from 'vue';

const inputRef = ref(null);
const inputValue = ref('');

const handleClick = () => {
  inputRef.value.focus();
  alert(inputValue.value);
};
</script>

<template>
  <div>
    <input
      type="text"
      ref="inputRef"
      v-model="inputValue"
      placeholder="입력하세요"
    />
    <button @click="handleClick">입력값 확인</button>
  </div>
</template>
