<template>
  <div class="pt-2">
    <Button color="" @click="add">Count++</Button>
    <p>{{ store.count  }}</p>
  </div>
</template>

<script setup lang="ts">
import Button from '../../components/Button/index.vue'
import { useCounterStore } from '../../stores/counter'

const store = useCounterStore()

let add = store.increment

</script>
