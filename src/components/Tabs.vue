<script setup>
import {provide, ref} from 'vue'
import {FwbTab, FwbTabs} from 'flowbite-vue'
import AnimalTable from "@/components/Backoffice/AnimalTable.vue";
import SpeciesTable from "@/components/Backoffice/SpeciesTable.vue";
import RaceTable from "@/components/Backoffice/RaceTable.vue";
import AnimalForm from "@/components/Backoffice/Form/AnimalForm.vue";
import SpeciesForm from "@/components/Backoffice/Form/SpeciesForm.vue";
import RaceForm from "@/components/Backoffice/Form/RaceForm.vue";

const activeTab = ref('animal')
const animals = ref([])
const speciesData = ref([])
const raceData = ref([])
const animalId = ref(0)
const showModal = ref(false);

const editableAnimal = ref({
  id: '',
  name: '',
  age: null,
  description: '',
  priceHT: null,
  priceTTC: null,
  species: '',
  race: '',
  status: '',
});
const editableSpecies = ref({
  id: '',
  name: '',
});
const editableRace = ref({
  id: '',
  name: '',
});

const isEdit = ref(false);

provide('editableAnimal', editableAnimal);
provide('editableSpecies', editableSpecies);
provide('editableRace', editableRace);
provide('isEdit', isEdit);
provide('animals', animals);
provide('speciesData', speciesData);
provide('raceData', raceData);
provide('showModal', showModal);
provide('animalId', animalId);
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
      <SpeciesForm/>
      <SpeciesTable/>
    </fwb-tab>
    <fwb-tab name="race" title="Race">
      <RaceForm/>
      <RaceTable/>
    </fwb-tab>
  </fwb-tabs>
</template>

<style scoped>

</style>
