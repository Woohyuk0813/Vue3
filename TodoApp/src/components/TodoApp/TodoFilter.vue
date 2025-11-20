<script>
export default {
  props: ['current'], //필터 상태값 받기
  emits: ['update-tab'], //부모에게 보낼 이벤트 이름 선언
  methods: {
    updateTab(tab) {
      this.$emit('update-tab', tab); //탭 변경 요청
    },
  },
};
</script>

<template>
  <div class="todo__title">
    <h1 class="todo__text">Todo List</h1>
    <ul class="todo__tab">
      <li
        :class="{ 'todo__tab--active': current === 'all' }"
        @click="updateTab('all')"
      >
        전체
      </li>
      <li
        :class="{ 'todo__tab--active': current === 'completed' }"
        @click="updateTab('completed')"
      >
        완료
      </li>
    </ul>
  </div>
</template>
