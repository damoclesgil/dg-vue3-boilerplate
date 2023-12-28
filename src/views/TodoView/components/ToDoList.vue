<script setup>
import { useTodoListStore } from '../../../stores/todoListStore'
import { storeToRefs } from 'pinia'
// import { computed } from 'vue'
const store = useTodoListStore()

// storeToRefs lets todoList keep reactivity:
const { todoList } = storeToRefs(store)

const isLastTodo = (index) => {
  return todoList.value.length - 1 === index
}

// destructuring action method doesn't require using storeToRefs:
const { toggleCompleted, deleteTodo } = store
</script>

<template>

  <ul>
    <template v-for="(todo, index) in todoList" :key="todo.id">
      <li
        class="flex items-center p-4 bg-white border-b border-gray-400"
        :class="{ 'border-b-2 border-gray-300': isLastTodo(todo.id) }"
        >
        <span class="mr-4 py-2 px-2 text-xs leading-none bg-blue-200 rounded">{{ index }}</span>
        <input
          type="checkbox"
          :id="todo.id"
          @change="toggleCompleted(todo.id)"
          :checked="todo.completed"
        />
        <label
          :for="todo.id"
          class="px-4 cursor-pointer"
          :class="{ 'line-through': todo.completed }"
          >{{ todo.item }}</label
        >
        <span class="text-red-500 cursor-pointer" @click="deleteTodo(todo.id)">&#10060;</span>
      </li>
    </template>
  </ul>
</template>

<style>
.completed {
  text-decoration: line-through;
}
</style>
