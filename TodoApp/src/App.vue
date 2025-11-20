<script>
import TodoFilter from './components/TodoApp/TodoFilter.vue';
import TodoList from './components/TodoApp/TodoList.vue';
import TodoInput from './components/TodoApp/TodoInput.vue';

export default {
  components: {
    TodoFilter,
    TodoList,
    TodoInput,
  },
  data: () => ({
    // localStorage에서 데이터를 바로 불러와 초기화. 데이터 없을 시 빈배열 사용
    todo: JSON.parse(localStorage.getItem('todos') || '[]'),
    current: 'all',
  }),
  computed: {
    computedTodo() {
      if (this.current === 'all') {
        return this.todo;
      }
      // 완료 탭이면 true인 항목만 필터링
      return this.todo.filter((v) => v.completed);
    },
  },
  watch: {
    todo: {
      // todo 배열이 바뀔 때마다 실행되어 localStorage에 자동 저장
      handler(newTodo) {
        localStorage.setItem('todos', JSON.stringify(newTodo));
      },
      deep: true,
    },
  },
  methods: {
    addTodo(inputMsg) {
      const trimmedMsg = inputMsg.trim();
      if (!trimmedMsg) return; // 공백만 입력되면 추가안됨

      this.todo.push({
        id: Date.now(), // 고유한 ID
        msg: trimmedMsg,
        completed: false, // 기본 상태
      });
    },

    // 필터 변경
    updateTab(tab) {
      this.current = tab; // 필터 상태를 변경
    },
    deleteTodo(id) {
      this.todo = this.todo.filter((v) => v.id !== id); // 해당 ID 항목을 목록에서 제거
    },

    // 완료 상태 탭
    updateTodo(id) {
      this.todo = this.todo.map(
        (v) => (v.id === id ? { ...v, completed: !v.completed } : v) // ID가 일치하면 상태를 반전
      );
    },

    editTodo(id, newMsg) {
      const trimMsg = newMsg.trim();
      if (!trimMsg) return this.deleteTodo(id); // 수정 내용이 공백이면 삭제

      this.todo = this.todo.map(
        (v) => (v.id === id ? { ...v, msg: trimMsg } : v) // ID가 일치하면 텍스트를 교체
      );
    },

    deleteAllTodo() {
      this.todo = []; // todo 배열을 빈 배열로 초기화
    },
  },
};
</script>
<template>
  <div class="todo">
    <TodoFilter :current="current" @update-tab="updateTab" />

    <TodoList
      :computed-todo="computedTodo"
      @delete-todo="deleteTodo"
      @update-todo="updateTodo"
      @edit-todo="editTodo"
    />

    <TodoInput @add-todo="addTodo" @alldelete="deleteAllTodo" />
  </div>
</template>
