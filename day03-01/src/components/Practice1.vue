<script>
import { ref, computed, watch } from 'vue';

export default {
  setup() {
    const count = ref(0);
    const doubledCount = computed(() => count.value * 2);

    const increment = () => {
      count.value++;
    };

    watch(count, (newVal, oldVal) => {
      console.log(`Count changed from ${oldVal} to ${newVal}`);
    });

    return {
      count,
      doubledCount,
      increment,
    };
  },
};
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Doubled Count: {{ doubledCount }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>
