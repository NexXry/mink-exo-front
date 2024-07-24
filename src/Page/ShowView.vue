<script setup>
import {useRoute} from "vue-router";
import api from "@/Api/api.js";
import {onMounted, provide, ref} from "vue";
import AnimalCarousel from "@/components/AnimalCarousel.vue";
import {FwbBadge} from "flowbite-vue";

const route = useRoute();
const id = route.params.id;
const animal = ref({});
const animalImages = ref([]);

provide('animalImages', animalImages);
const imageRoute = import.meta.env.VITE_IMAGES_API_URL;

const getAnimal = async () => {
  const response = await api.get(`/animals/${id}`);
  animal.value = response.data;
  animalImages.value = response.data.images.map((image) => {
    return {
      src: imageRoute + image.filePath,
      alt: animal.value.name,
    };
  });
}

onMounted(() => {
  getAnimal();
})

</script>

<template>
  <section class="py-8 bg-white md:py-16  min-h-screen">
    <div class="px-4 mx-auto 2xl:px-0">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
        <div class="w-full lg:max-w-xl mx-auto">
          <AnimalCarousel/>
        </div>
        <div class="mt-6 sm:mt-8 lg:mt-0">
          <div class="flex items-center gap-6 flex-wrap">
            <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl ">
              {{ animal.name }}
            </h1>
            <RouterLink to="/contact">
              <fwb-badge class="px-5 py-2  w-fit" size="xs" type="yellow">Contactez nous !</fwb-badge>
            </RouterLink>
          </div>
          <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
            <p
                class="text-2xl font-extrabold text-gray-900 sm:text-3xl "
            >
              {{ animal.priceTTC }} €
            </p>
          </div>
          <div class="mt-5 flex flex-wrap justify-center md:justify-between gap-6 ">
            <fwb-badge size="sm" type="green">{{ animal?.age }} ans</fwb-badge>
            <fwb-badge size="sm" type="green">{{ animal?.species?.name }}</fwb-badge>
            <fwb-badge size="sm" type="green">{{ animal?.race?.name }}</fwb-badge>
          </div>
          <hr class="my-6 md:my-8 border-gray-200 "/>
          <p class="mb-6 text-gray-500 ">
            {{ animal.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
