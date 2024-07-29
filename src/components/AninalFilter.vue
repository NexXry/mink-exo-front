<script setup>
import {FwbButton, FwbInput, FwbSelect} from "flowbite-vue";
import {inject, ref, watch} from "vue";

const props = defineProps({
  speciesData: Array,
  raceData: Array,
  species: String,
  race: String,
  maxPrice: Number,
  minPrice: Number
});

const emit = defineEmits(['update:species', 'update:race', 'update:minPrice', 'update:maxPrice']);

const localSpecies = ref(props.species);
const localRace = ref(props.race);
const query = ref('');
const localMinPrice = ref(props.minPrice);
const localMaxPrice = ref(props.maxPrice);
const handleSearch = inject('handleSearch');

watch(localSpecies, (newVal) => emit('update:species', newVal));
watch(localRace, (newVal) => emit('update:race', newVal));
watch(query, (newVal) => handleSearch(newVal));
watch(localMinPrice, (newVal) => emit('update:minPrice', parseInt(newVal)));
watch(localMaxPrice, (newVal) => emit('update:maxPrice', parseInt(newVal)));

const reset = () => {
  localSpecies.value = '';
  localRace.value = '';
  query.value = '';
  localMinPrice.value = 0;
  localMaxPrice.value = 0;
}
</script>

<template>
  <form class="mt-5 mx-auto">
    <div class="flex justify-center items-center gap-6 flex-wrap">
      <fwb-select
          v-model="localSpecies"
          :options="speciesData"
          placeholder="Espèce"
      />
      <fwb-select
          v-model="localRace"
          :options="raceData"
          placeholder="Race"
      />
      <div class="flex flex-col gap-2">
        <fwb-input
            v-model="localMinPrice"
            label="Prix min"
            class="max-w-lg w-full"
            type="number"
        />
        <fwb-input
            v-model="localMaxPrice"
            label="Prix max"
            class="max-w-lg w-full"
            type="number"
        />
      </div>
      <fwb-input
          v-model="query"
          placeholder="Rechercher une bête"
          class="max-w-lg w-full"
          size="lg"
      >
        <template #prefix>
          <svg aria-hidden="true" class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          </svg>
        </template>
        <template #suffix>
          <fwb-button @click="reset" v-if="query || localRace || localSpecies" type="button" color="red">Effacer</fwb-button>
        </template>
      </fwb-input>
    </div>
  </form>
</template>

<style scoped>
</style>
