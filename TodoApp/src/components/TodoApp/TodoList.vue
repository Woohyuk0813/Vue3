<script>
import TodoItem from './TodoItem.vue';

export default {
  components: {
    TodoItem,
  },
  props: ['computedTodo'],
  methods: {
    deleteTodo(id) {
      this.$emit('delete-todo', id);
    },
    updateTodo(id) {
      this.$emit('update-todo', id);
    },
    editTodo(id, newMsg) {
      this.$emit('edit-todo', id, newMsg);
    },
  },
};
</script>
<template>
  <div class="todo__list">
    <TodoItem
      v-for="item in computedTodo"
      :key="item.id"
      :item="item"
      @delete-todo="deleteTodo"
      @update-todo="updateTodo"
      @edit-todo="editTodo"
    />
    <div
      v-if="computedTodo && computedTodo.length === 0"
      ≠
      class="todo__item--no"
    >
      <p>할 일이 없습니다.</p>
    </div>
  </div>
</template>
