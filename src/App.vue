<script lang="ts" setup>
import { RouterView } from 'vue-router'
import Menu from './components/Menu/index.vue'
import Footer from './components/Footer/index.vue'
</script>

<template>
  <Menu />

  <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
    <RouterView />
  </div>

  <Footer />
</template>

