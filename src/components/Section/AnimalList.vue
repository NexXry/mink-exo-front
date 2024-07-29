<script setup>
import {FwbAlert, FwbHeading, FwbSpinner} from "flowbite-vue";
import api from "@/Api/api.js";
import {computed, onMounted, provide, ref} from "vue";
import AnimalFilter from "@/components/AninalFilter.vue";
import {toast} from "vue3-toastify";
import AnimalCard from "@/components/AnimalCard.vue";

const animals = ref([])
const speciesData = ref([])
const raceData = ref([])
const species = ref('')
const race = ref('')
const maxPrice = ref(0)
const minPrice = ref(0)
const isLoading = ref(true)
const isError = ref(false)

const getData = async () => {
  try {
    const animalsData = await api.get('/animals')
    const races = await api.get('/races')
    const species = await api.get('/species')

    if (animalsData.status !== 200 || races.status !== 200 || species.status !== 200) {
      toast.error('Une erreur est survenue')
      return []
    }
    isLoading.value = false
    animals.value = animalsData.data["hydra:member"]
    speciesData.value = species.data["hydra:member"].map((specie) => {
      return {
        'value': specie.name,
        'name': specie.name
      }
    })
    raceData.value = races.data["hydra:member"].map((race) => {
      return {
        'value': race.name,
        'name': race.name
      }
    })
  } catch (error) {
    toast.error('Une erreur est survenue')
    isLoading.value = false
    isError.value = true
  }
}

onMounted(() => {
  getData()
})

const filteredAnimals = computed(() => {
  if (!animals.value) {
    return []
  }

  return animals.value.filter(animal => {
    const matchesSpecies = species.value ? animal.species.name.includes(species.value) : true;
    const matchesRace = race.value ? animal.race.name.includes(race.value) : true;
    const matchesPrice = (minPrice.value && animal.priceTTC >= minPrice.value) || (maxPrice.value && animal.priceTTC <= maxPrice.value);
    return matchesSpecies && matchesRace && matchesPrice;
  });
});

const handleSearch = async (value) => {
  if (!value) {
    const animalsData = await api.get('/animals')
    animals.value = animalsData.data["hydra:member"]
    return
  }

  const searchAnimal = await api.get('/search?q=' + value)
  if (searchAnimal.status !== 200) {
    toast.error('Une erreur est survenue')
    return []
  }

  animals.value = searchAnimal.data
}

provide("handleSearch", handleSearch)
</script>

<template>
  <section class="my-10 w-f">
    <fwb-heading class="text-center" tag="h2">Toutes les bêtes</fwb-heading>
    <AnimalFilter
        v-model:species="species"
        v-model:race="race"
        v-model:min-price="minPrice"
        v-model:max-price="maxPrice"
        :race-data="raceData"
        :species-data="speciesData"/>
    <div class="my-10 flex flex-wrap justify-center gap-6">
      <AnimalCard
          v-for="animal in filteredAnimals"
          :key="animal.id"
          :id="animal.id"
          :image="animal.images[0]?.filePath"
          :name="animal.name"
          :description="animal.description"
          :age="animal.age"
          :price="animal.priceTTC"
          :species="animal.species.name"
          :race="animal.race.name"
      />
      <div v-if="filteredAnimals.length === 0 && !isLoading && !isError" class="text-center">
        <p>Aucun animal ne correspond à votre recherche</p>
      </div>
    </div>
    <div v-if="isLoading" class="flex justify-center my-20">
      <fwb-spinner size="12"/>
    </div>
    <div v-if="isError" class="flex justify-center my-20">
      <fwb-alert type="danger">
        Une erreur est survenue
      </fwb-alert>
    </div>
  </section>
</template>

<style scoped>

</style>
