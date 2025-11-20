<script>
export default {
  props: ['item'],
  data: (vm) => ({
    isEditing: false, // 이 항목이 지금 수정 중인지 여부
    editText: vm.item.msg, // 수정 중인 내용을 임시로 저장
  }),
  methods: {
    toggleEdit() {
      this.isEditing = true; //수정
    },
    finishEdit() {
      if (this.isEditing) {
        this.$emit('edit-todo', this.item.id, this.editText); //수정요청
        this.isEditing = false;
      }
    },
    cancelEdit() {
      this.isEditing = false;
      this.editText = this.item.msg;
    },
    deleteTodo() {
      this.$emit('delete-todo', this.item.id); //삭제 요청
    },
    updateTodo() {
      this.$emit('update-todo', this.item.id); //완료 상태 요청
    },
  },
};
</script>
<template>
  <div
    class="todo__item"
    :class="{ 'todo__item--completed': item.completed }"
    @dblclick="toggleEdit"
  >
    <template v-if="isEditing">
      <input
        v-model="editText"
        type="text"
        class="todo__item-edit"
        @keyup.enter="finishEdit"
        @keyup.esc="cancelEdit"
        v-focus
      />
      <button class="todo__edit-btn" @click="finishEdit">수정 완료</button>
    </template>
    <template v-else>
      <input
        type="checkbox"
        :id="`chk${item.id.toString()}`"
        :checked="item.completed"
        @click="updateTodo"
      />
      <label
        :for="`chk${item.id.toString()}`"
        class="todo__checkbox-label"
      ></label>
      <span class="todo__item-text">{{ item.msg }}</span>
      <span
        class="material-symbols-outlined todo__delete-icon"
        @click="deleteTodo"
        >delete</span
      >
    </template>
  </div>
</template>
