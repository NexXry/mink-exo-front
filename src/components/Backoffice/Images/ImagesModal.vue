<script setup>
import {inject, onMounted, ref} from 'vue';
import {FwbButton, FwbInput, FwbModal} from 'flowbite-vue';
import api from "@/Api/api.js";
import {getState} from "@/Store/store.js";

const showModal = inject('showModal');
const imageFile = ref(null);
const images = ref([]);
const imgDir = import.meta.env.VITE_IMAGES_API_URL;
const animalId = inject('animalId');
const closeModal = () => {
  showModal.value = false;
};

const handleImageUpload = (event) => {
  imageFile.value = event.target.files[0];
  console.log(imageFile.value)
};

const confirmUpload = () => {
  closeModal();
};

const getAllImages = () => {
  const token = getState().token
  api.get('images', token).then((res) => {
    images.value = res.data['hydra:member'].filter((image) => image.animal.id === animalId.value)
  })
};

onMounted(() => {
  getAllImages();
});
</script>

<template>
  <div>
    <fwb-modal v-if="showModal" @close="closeModal">
      <template #header>
        <div class="flex items-center text-lg">
          Gestion des images
        </div>
      </template>
      <template #body>
        <fwb-input type="file" label="Upload Image" @change="handleImageUpload"/>
        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          Fichier: {{ imageFile ? imageFile.name : 'aucun fichier choisi' }}
        </p>
        <div class="flex flex-wrap gap-4 mt-4">
          <div v-for="image in images" :key="image.id">
            <img :src="imgDir+ image.filePath" alt="image" class="w-20 h-20 object-cover"/>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex justify-between">
          <fwb-button @click="closeModal" color="alternative">
            Cancel
          </fwb-button>
          <fwb-button @click="confirmUpload" color="green">
            Sauvegarder
          </fwb-button>
        </div>
      </template>
    </fwb-modal>
  </div>
</template>

<style scoped>
</style>
