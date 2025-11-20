<script setup>
// import WatchEx1 from './components/WatchEx1.vue';
// import WatchEx2 from './components/WatchEx2.vue';
// import WatchEx3 from './components/WatchEx3.vue';
// import WatchEx4 from './components/WatchEx4.vue';
// import WatchEffectEx1 from './components/WatchEffectEx1.vue';
// import WatchPostEffect from './components/WatchPostEffectEx1.vue';
import { reactive, ref } from 'vue';
const count = ref(0);
const state = reactive({
  count: 0,
});
</script>

<template>
  <!-- <WatchEx1 />
  <WatchEx2 />
  <WatchEx3 />
  <WatchEx4 />
  <WatchEffectEx1 />
  <WatchPostEffect /> -->
  <DefineProps :count="count" :state="state" />
</template>
