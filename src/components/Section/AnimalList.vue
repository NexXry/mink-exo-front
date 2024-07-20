<script setup>
import {FwbCard, FwbHeading, FwbPagination} from "flowbite-vue";
import AnimalCard from "@/components/AnimalCard.vue";
import {computed, ref} from "vue";
import AnimalFilter from "@/components/AninalFilter.vue";
const currentPage = ref(1)
const query = defineModel()
const species = ref('')
const race = ref('')
const speciesData = [
  { value: 'lapin', name: 'lapin' },
  { value: 'loutre', name: 'loutre' },
]
const raceData = [
  { value: 'angora', name: 'angora' },
]
const animalsData =  [
  {
    "id": 1,
    "image": "https://flowbite.com/docs/images/blog/image-1.jpg",
    "name": "Lili",
    "description": "qsqsdqsdq qsd qs dqds qs dqsd qs dqsd qs dqsd qsd qs dqs d",
    "age": 5,
    "price": 54,
    "species": "loutre",
    "race": "angora"
  },
  {
    "id": 2,
    "image": "https://flowbite.com/docs/images/blog/image-1.jpg",
    "name": "sqdqss",
    "description": "qsqsdqsdq qsd qs dqds qs dqsd qs dqsd qs dqsd qsd qs dqs d",
    "age": 5,
    "price": 54,
    "species": "lapin",
    "race": "angora"
  },
  {
    "id": 3,
    "image": "https://flowbite.com/docs/images/blog/image-1.jpg",
    "name": "adad",
    "description": "qsqsdqsdq qsd qs dqds qs dqsd qs dqsd qs dqsd qsd qs dqs d",
    "age": 5,
    "price": 54,
    "species": "lapin",
    "race": "angora"
  },
  {
    "id": 4,
    "image": "https://flowbite.com/docs/images/blog/image-1.jpg",
    "name": "sqdqss",
    "description": "qsqsdqsdq qsd qs dqds qs dqsd qs dqsd qs dqsd qsd qs dqs d",
    "age": 5,
    "price": 54,
    "species": "lapin",
    "race": "angora"
  },
  {
    "id": 5,
    "image": "https://flowbite.com/docs/images/blog/image-1.jpg",
    "name": "ffss",
    "description": "qsqsdqsdq qsd qs dqds qs dqsd qs dqsd qs dqsd qsd qs dqs d",
    "age": 5,
    "price": 54,
    "species": "lapin",
    "race": "angora"
  },
  {
    "id": 6,
    "image": "https://flowbite.com/docs/images/blog/image-1.jpg",
    "name": "sqdqss",
    "description": "qsqsdqsdq qsd qs dqds qs dqsd qs dqsd qs dqsd qsd qs dqs d",
    "age": 5,
    "price": 54,
    "species": "lapin",
    "race": "angora"
  },
  {
    "id": 7,
    "image": "https://flowbite.com/docs/images/blog/image-1.jpg",
    "name": "sqdqss",
    "description": "qsqsdqsdq qsd qs dqds qs dqsd qs dqsd qs dqsd qsd qs dqs d",
    "age": 5,
    "price": 54,
    "species": "lapin",
    "race": "angora"
  },
  {
    "id": 8,
    "image": "https://flowbite.com/docs/images/blog/image-1.jpg",
    "name": "sqdqss",
    "description": "qsqsdqsdq qsd qs dqds qs dqsd qs dqsd qs dqsd qsd qs dqs d",
    "age": 5,
    "price": 54,
    "species": "lapin",
    "race": "angora"
  },
  {
    "id": 9,
    "image": "https://flowbite.com/docs/images/blog/image-1.jpg",
    "name": "sqdqss",
    "description": "qsqsdqsdq qsd qs dqds qs dqsd qs dqsd qs dqsd qsd qs dqs d",
    "age": 5,
    "price": 54,
    "species": "lapin",
    "race": "angora"
  }
]

const filteredAnimals = computed(() => {
  return animalsData.filter(animal => {
    const matchesSpecies = species.value ? animal.species.includes(species.value) : true;
    const matchesRace = race.value ? animal.race.includes(race.value) : true;
    const matchesQuery = query.value ? animal.name.toLowerCase().includes(query.value.toLowerCase()) : true;
    return matchesSpecies && matchesRace && matchesQuery;
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
          :image="animal.image"
          :name="animal.name"
          :description="animal.description"
          :age="animal.age"
          :price="animal.price"
          :species="animal.species"
          :race="animal.race"
      />
    </div>
  </section>
</template>

<style scoped>

</style>
