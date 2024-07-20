<script setup>
import {FwbHeading, FwbSpinner} from "flowbite-vue";
import api from "@/Api/api.js";
import {computed, onMounted, ref} from "vue";
import AnimalFilter from "@/components/AninalFilter.vue";
import {toast} from "vue3-toastify";
import AnimalCard from "@/components/AnimalCard.vue";

const animals = ref([])
const speciesData = ref([])
const raceData = ref([])
const query = ref('')
const species = ref('')
const race = ref('')
const isLoading = ref(true)

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
    console.error(error)
  }
}

onMounted(() => {
  getData()
})

const filteredAnimals = computed(() => {
  return animals.value.filter(animal => {
    const matchesSpecies = species.value ? animal.species.name.includes(species.value) : true;
    const matchesRace = race.value ? animal.race.name.includes(race.value) : true;
    const matchesNameQuery = query.value ? animal.name.toLowerCase().includes(query.value.toLowerCase()) : true;
    const matchesDescQuery = query.value ? animal.description.toLowerCase().includes(query.value.toLowerCase()) : true;
    return matchesSpecies && matchesRace && matchesNameQuery || matchesDescQuery;
  });
});
</script>

<template>
  <section class="my-10 w-f">
    <fwb-heading class="text-center" tag="h2">Toutes les bêtes</fwb-heading>
    <AnimalFilter
        v-model:species="species"
        v-model:race="race"
        v-model:query="query"
        :race-data="raceData"
        :species-data="speciesData"/>
    <div class="my-10 flex flex-wrap justify-center gap-6">
      <AnimalCard
          v-for="animal in filteredAnimals"
          :key="animal.id"
          :image="animal.images[0].filePath"
          :name="animal.name"
          :description="animal.description"
          :age="animal.age"
          :price="animal.priceTTC"
          :species="animal.species.name"
          :race="animal.race.name"
      />
      <div v-if="filteredAnimals.length === 0 && !isLoading" class="text-center">
        <p>Aucun animal ne correspond à votre recherche</p>
      </div>
    </div>
    <div v-if="isLoading" class="flex justify-center my-20">
      <fwb-spinner size="12"/>
    </div>
  </section>
</template>

<style scoped>

</style>
