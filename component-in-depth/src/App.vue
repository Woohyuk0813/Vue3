<script setup></script>

<template>
  <div class="container">
    <TheHeading />
    <div class="menu">
      <button :class="{ active: view === 'literal' }" @click="view = 'literal'">
        Props Literal
      </button>

      <button :class="{ active: view === 'object' }" @click="view = 'object'">
        Props object
      </button>

      <button
        :class="{ active: view === 'template' }"
        @click="view = 'template'"
      >
        Component Events(template)
      </button>

      <button :class="{ active: view === 'script' }" @click="view = 'script'">
        component Events (script setup)
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
}
.menu {
  margin: 0.3rem 0;
}
button {
  margin: 0.2rem;
  padding: 0.5rem;
}
.active {
  background-color: steelblue;
  color: aliceblue;
  border: 0;
  border-radius: 5px;
}
</style>
