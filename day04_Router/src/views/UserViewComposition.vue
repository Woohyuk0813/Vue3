<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();

const name = route.query.id;
console.log(id);
</script>

<template>
  <h1>{{ id }}</h1>
</template>
