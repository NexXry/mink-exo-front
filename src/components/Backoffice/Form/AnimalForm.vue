<template>
  <form @submit.prevent="handleSubmit">
    <div class="mb-4">
      <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
      <fwb-input v-model="form.name" type="text" id="name"
                 class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></fwb-input>
    </div>
    <div class="mb-4">
      <label for="age" class="block text-sm font-medium text-gray-700">Age</label>
      <fwb-input v-model="form.age" type="number" id="age"
                 class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></fwb-input>
    </div>
    <div class="mb-4">
      <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
      <fwb-textarea v-model="form.description" id="description"
                    class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></fwb-textarea>
    </div>
    <div class="mb-4">
      <label for="priceHT" class="block text-sm font-medium text-gray-700">Price HT</label>
      <fwb-input v-model="form.priceHT" type="number" id="priceHT"
                 class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></fwb-input>
    </div>
    <div class="mb-4">
      <label for="priceTTC" class="block text-sm font-medium text-gray-700">Price TTC</label>
      <fwb-input v-model="form.priceTTC" type="number" id="priceTTC"
                 class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></fwb-input>
    </div>
    <div class="mb-4">
      <label for="species" class="block text-sm font-medium text-gray-700">Species</label>
      <fwb-input v-model="form.species" type="text" id="species"
                 class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></fwb-input>
    </div>
    <div class="mb-4">
      <label for="race" class="block text-sm font-medium text-gray-700">Race</label>
      <fwb-input v-model="form.race" type="text" id="race"
                 class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></fwb-input>
    </div>
    <div class="mb-4">
      <label for="status" class="block text-sm font-medium text-gray-700">Status</label>
      <fwb-select v-model="form.status" id="status"
                  class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
        <option value="NOT_READY">Not Ready</option>
        <option value="READY">Ready</option>
        <option value="SOLD">Sold</option>
      </fwb-select>
    </div>
    <div>
      <fwb-button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded">Save</fwb-button>
    </div>
  </form>
</template>

<script setup>
import {reactive} from 'vue';
import api from '@/Api/api.js';
import {FwbButton, FwbInput, FwbSelect, FwbTextarea} from "flowbite-vue";

const props = defineProps({
  animal: {
    type: Object,
    default: () => ({
      name: '',
      age: null,
      description: '',
      priceHT: null,
      priceTTC: null,
      species: '',
      race: '',
      status: 'NOT_READY',
    })
  },
  isEdit: {
    type: Boolean,
    default: false
  }
});

const form = reactive({...props.animal});

const handleSubmit = async () => {
  if (props.isEdit) {
    await api.patch(`/animals/${form.id}`, form);
  } else {
    await api.post('/animals', form);
  }
};
</script>
