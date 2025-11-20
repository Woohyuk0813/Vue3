//AppPropsLiteral.vue
<script setup>
import { reactive, computed } from 'vue'; // Vue의 reactive() 함수를 import — 반응형 배열/객체 생성용
import AppPropsLiteralChild from './AppPropsLiteralChild.vue'; // 자식 컴포넌트 import

// 객체 기반 Props 선언 방식 — 더 안전하고 타입 추론 가능
const props = defineProps({ viewTitle: String }); // 부모로부터 viewTitle을 문자열 형태로 받을 것이라고 선언

// reactive()를 이용해 반응형 배열 생성
const fruits = reactive([
  { id: 'f1', name: '사과', checked: true, price: 1200, origin: '한국' },
  { id: 'f2', name: '파인애플', checked: false, price: 2200, origin: '미국' },
  { id: 'f3', name: '포도', checked: false, price: 1700, origin: '미국' },
  { id: 'f4', name: '딸기', checked: true, price: 1400, origin: '한국' },
  { id: 'f5', name: '아보카도', checked: false, price: 2500, origin: '한국' },
  { id: 'f6', name: '메론', checked: false, price: 1300, origin: '미국' },
  { id: 'f7', name: '수박', checked: true, price: 3400, origin: '한국' },
]); // 과일 목록 배열 — 체크 여부 포함
// 자식 컴포넌트에서 전달한 체크 상태를 받아 fruits 배열을 업데이트하는 함수
const handleCheckUpdate = (fruitId, isChecked) => {
  const fruit = fruits.find((f) => f.id === fruitId);
  if (fruit) {
    fruit.checked = isChecked;
  }
};

// 체크된 과일 개수를 계산하는 computed 속성
const checkedFruitsCount = computed(() => {
  return fruits.filter((fruit) => fruit.checked).length;
});
</script>

<template>
  <div>
    <h2>{{ viewTitle }}</h2>
    <!-- 부모가 전달한 제목 표시 -->

    <p>현재 선택된 과일: {{ checkedFruitsCount }}개</p>

    <div class="fruits">
      <!-- 과일 리스트 전체 영역 -->
      <!-- 반복문으로 자식 컴포넌트를 여러 개 렌더링 -->
      <AppPropsLiteralChild
        v-for="fruit in fruits"
        :key="fruit.id"
        :fruit-id="fruit.id"
        :fruit-name="fruit.name"
        :is-checked="fruit.checked"
        :fruit-price="fruit.price"
        :fruit-origin="fruit.origin"
        @update:checked="handleCheckUpdate"
      />
      />
    </div>
  </div>
</template>

<style scoped>
.fruits {
  display: inline-block;
  width: 250px;
  text-align: left;
}
</style>
