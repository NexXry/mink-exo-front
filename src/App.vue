<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Header/>
  <main class="mt-10 w-10/12 mx-auto">
    <RouterView/>
  </main>
  <Footer/>
</template>

<style scoped>
</style>
