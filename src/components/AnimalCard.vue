<script setup>
import {FwbBadge, FwbButton, FwbCard} from "flowbite-vue";

const props = defineProps({
  name: String,
  image: String,
  description: String,
  age: Number,
  price: Number,
  species: String,
  race: String,
})

const imageRoot = import.meta.env.VITE_IMAGES_API_URL;
</script>

<template>
  <fwb-card
      img-alt="Desk"
      :img-src="imageRoot + image"
      variant="image"
  >
    <div class="p-5">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {{ name }}
      </h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        {{ description }}
      </p>
      <div class="mt-5 flex flex-wrap justify-center md:justify-between gap-6 ">
        <fwb-badge size="sm" type="green">{{ age }} ans</fwb-badge>
        <fwb-badge size="sm" type="green">{{ species }}</fwb-badge>
        <fwb-badge size="sm" type="green">{{ race }}</fwb-badge>
      </div>
      <div class="my-8 flex flex-wrap justify-center items-center md:justify-between gap-6">
        <p class="font-bold text-2xl">{{ price }} <i class="font-medium">€ TTC</i></p>
        <RouterLink to="/contact">
          <fwb-badge class="px-5" size="sm" type="yellow">Contactez nous !</fwb-badge>
        </RouterLink>
      </div>
      <fwb-button class="w-full" size="xl" color="green">Voir plus</fwb-button>
    </div>
  </fwb-card>
</template>

<style scoped>
</style>
