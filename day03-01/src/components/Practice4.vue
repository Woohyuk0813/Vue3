<script setup>
import { reactive, computed } from 'vue';

const cart = reactive({
  item1: { price: 3000, count: 1 },
  item2: { price: 5000, count: 2 },
});

const totalPrice = computed(() => {
  return (
    cart.item1.price * cart.item1.count + cart.item2.price * cart.item2.count
  );
});
</script>

<template>
  <div>
    <h2>장바구니</h2>
    <p>상품1 : {{ cart.item1.price }}원 × {{ cart.item1.count }}개</p>
    <p>상품2 : {{ cart.item2.price }}원 × {{ cart.item2.count }}개</p>
    <h3>총 합계 : {{ totalPrice }}원</h3>
  </div>
</template>
