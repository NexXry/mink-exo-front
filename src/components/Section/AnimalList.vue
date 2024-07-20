<script setup>
import {FwbHeading, FwbPagination} from "flowbite-vue";
import AnimalCard from "@/components/AnimalCard.vue";
import {ref} from "vue";

const currentPage = ref(1)
</script>

<template>
  <section class="my-10 w-f">
    <fwb-heading class="text-center" tag="h2">Toutes les bêtes</fwb-heading>
    <div class="my-10 flex flex-wrap justify-center gap-6">
      <AnimalCard
          image="https://flowbite.com/docs/images/blog/image-1.jpg"
          name="sqdqss"
          description="qsqsdqsdq qsd qs dqds qs dqsd qs dqsd qs dqsd qsd qs dqs d"
          age="5"
          price="54"
          species="lapin"
          race="angora"
      />
    </div>
    <fwb-pagination class="flex justify-center" v-model="currentPage" show-icons previous-label="" next-label=""
                    :total-items="100" :slice-length="1" :per-page="9"></fwb-pagination>
  </section>
</template>

<style scoped>

</style>