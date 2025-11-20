<script setup>
// Vue 3 컴포지션 API에서 reactive, computed 함수를 import
import { reactive, computed } from 'vue';

// 자식 컴포넌트 두 개 import
import AppPropsObjectChild from './AppPropsObjectChild.vue';
import AppPropsObjectChildDestructure from './AppPropsObjectChildDestructure.vue';

// 부모가 받을 props 타입 정의
// 부모도 상위에서 viewTitle이라는 문자열 props를 받아서 화면 제목으로 사용한다고 가정함
// defineProps는 <script setup> 안에서만 사용 가능한 매크로 함수
const props = defineProps({
  viewTitle: String, // viewTitle 이라는 문자열 타입의 props
});

// 과일 목록을 반응형 상태로 선언
// reactive()를 사용해서 배열 반응형데이터
const fruits = reactive([
  { id: 'f1', name: '사과', checked: true, price: 1200, origin: '한국' },
  { id: 'f2', name: '파인애플', checked: false, price: 3500, origin: '필리핀' },
  { id: 'f3', name: '포도', checked: false, price: 5000, origin: '미국' },
  { id: 'f4', name: '딸기', checked: true, price: 8000, origin: '한국' },
  { id: 'f5', name: '아보카도', checked: false, price: 6000, origin: '멕시코' },
  { id: 'f6', name: '메론', checked: false, price: 15000, origin: '한국' },
]);

const checkedFruitsCount = computed(() => {
  return fruits.filter((fruit) => fruit.checked).length;
});

const handleToggleCheck = (fruitId, newCheckedState) => {
  const fruitToUpdate = fruits.find((fruit) => fruit.id === fruitId);
  if (fruitToUpdate) {
    fruitToUpdate.checked = newCheckedState;
  }
};
</script>

<template>
  <div>
    <h2>{{ props.viewTitle }}</h2>
    <p>현재 선택된 과일: {{ checkedFruitsCount }}개</p>
    <div class="fruits">
      <h3>일반 props 객체로 사용</h3>
      <AppPropsObjectChild
        v-for="fruit in fruits"
        :key="fruit.id"
        :fruit="fruit"
        @toggle-check="handleToggleCheck"
      />

      <hr />

      <h3>props 구조 분해 할당 버전</h3>
      <AppPropsObjectChildDestructure
        v-for="fruit in fruits"
        :key="fruit.id"
        :fruit="fruit"
        @toggle-check="handleToggleCheck"
      />
    </div>
  </div>
</template>

<style scoped>
/* 과일 리스트 전체 박스 스타일 */
.fruits {
  display: inline-block;
  width: 250px;
  text-align: left;
}
</style>
