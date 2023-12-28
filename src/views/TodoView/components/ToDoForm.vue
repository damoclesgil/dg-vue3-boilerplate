<template>
  <div class="py-8">
    <form
      @submit.prevent="addItemAndClear(todo)"
      class="w-full max-w-sm bg-white p-8 rounded-md shadow-md"
    >
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Add Task</label>
        <input
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text"
          v-model="todo"
          placeholder="Add Item"
        />
      </div>
      <Button @click="addItemAndClear(todo)" type="submit"> Add </Button>
    </form>
  </div>
</template>

<script setup lang="js">
import { ref } from 'vue'
import Button from '../../../components/Button/index.vue'
import { useTodoListStore } from '../../../stores/todoListStore'

const todo = ref('')
// use Pinia store:
const store = useTodoListStore()

function addItemAndClear(item) {
  if (item.length === 0) {
    return
  }
  // invokes function in the store:
  store.addTodo(item)
  todo.value = ''
}
</script>
