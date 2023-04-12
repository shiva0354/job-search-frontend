<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import HeaderComponent from './components/layouts/HeaderComponent.vue'
import FooterComponent from '../src/components/layouts/FooterComponent.vue'
import LoaderComponent from './components/layouts/LoaderComponent.vue'

onMounted(() => {

})

</script>

<template>
  <!-- <LoaderComponent /> -->
  <header>
    <HeaderComponent />
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <FooterComponent />
  </footer>
</template>
