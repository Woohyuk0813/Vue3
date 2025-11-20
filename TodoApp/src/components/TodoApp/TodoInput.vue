<script>
export default {
  data: () => ({
    inputMsg: '',
  }),
  emits: ['add-todo', 'alldelete'],
  methods: {
    addTodo() {
      const trimMsg = this.inputMsg.trim(); // 양쪽 공백 제거 inputMsg에 저장
      if (trimMsg) {
        this.$emit('add-todo', trimMsg);
        this.inputMsg = '';
      } else {
        alert('할 일을 입력하세요.');
      }
    },
    alldelete() {
      this.$emit('alldelete');
    },
  },
};
</script>
<template>
  <div class="todo__input">
    <input
      v-model="inputMsg"
      type="text"
      class="todo__input-text"
      placeholder="할 일을 입력하세요."
      @keyup.enter.prevent="addTodo"
    />
    <button class="todo__input-btn" @click.prevent="addTodo">등록</button>
    <button class="todo__input-btn" @click="alldelete">전체 삭제</button>
  </div>
</template>
