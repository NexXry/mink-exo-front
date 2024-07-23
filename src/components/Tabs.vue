<script setup>
import {provide, ref} from 'vue'
import {FwbTab, FwbTabs} from 'flowbite-vue'
import AnimalTable from "@/components/Backoffice/AnimalTable.vue";
import SpeciesTable from "@/components/Backoffice/SpeciesTable.vue";
import RaceTable from "@/components/Backoffice/RaceTable.vue";
import AnimalForm from "@/components/Backoffice/Form/AnimalForm.vue";

const activeTab = ref('animal')
const editableAnimal = ref({
  name: '',
  age: null,
  description: '',
  priceHT: null,
  priceTTC: null,
  species: '',
  race: '',
  status: '',
});
const isEdit = ref(false);

provide('editableAnimal', editableAnimal);
provide('isEdit', isEdit);
</script>

<template>
  <fwb-tabs v-model="activeTab" class="p-5">
    <fwb-tab name="animal" title="Animaux">
      <h2 class="text-xl text-center mb-4">Animaux</h2>
      <div class="flex flex-col gap-6">
        <AnimalForm/>
        <AnimalTable/>
      </div>
    </fwb-tab>
    <fwb-tab name="species" title="Espèce">
      <SpeciesTable/>
    </fwb-tab>
    <fwb-tab name="race" title="Race">
      <RaceTable/>
    </fwb-tab>
  </fwb-tabs>
</template>

<style scoped>

</style>
