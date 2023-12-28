<script lang="ts" setup>
defineProps<{
  color: string
}>()
</script>
<template>
    <button
      class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-blue-400 text-white hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
      <i class="fa-solid fa-arrow-right-to-bracket"></i> <slot />
    </button>
</template>
