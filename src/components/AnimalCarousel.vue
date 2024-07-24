<script setup>
import {inject, ref} from 'vue';
import {FwbButton} from "flowbite-vue";

const animalImages = inject('animalImages');
const currentImage = ref(0);

const next = () => {
  currentImage.value = (currentImage.value + 1) % animalImages.value.length;
}

const prev = () => {
  currentImage.value = (currentImage.value - 1 + animalImages.value.length) % animalImages.value.length;
}
</script>

<template>
  <div class="flex flex-col items-center gap-6 w-full">
    <div v-for="(image, index) in animalImages"
         :key="index">
      <img
          v-if="currentImage === index"
          :src="image.src"
          :alt="image.alt"
          :class="currentImage === index ? 'object-cover w-full md:w-[600px] h-96' : 'hidden'"
      />
    </div>
    <div class="flex gap-6">
      <fwb-button @click="prev" class="h-fit rotate-180" color="default" pill square>
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                fill-rule="evenodd"/>
        </svg>
      </fwb-button>
      <fwb-button @click="next" class="h-fit" color="default" pill square>
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                fill-rule="evenodd"/>
        </svg>
      </fwb-button>
    </div>
  </div>
</template>

<style scoped>
</style>
