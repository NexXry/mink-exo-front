<script setup>
import {onMounted, reactive, ref} from 'vue';
import api from '@/Api/api.js';
import {FwbButton, FwbInput, FwbSelect, FwbTextarea} from "flowbite-vue";
import {getState} from "@/Store/store.js";

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
const display = ref(false);
const speciesData = ref([]);
const raceData = ref([]);
const statusData = [
  {'value':'pas encore prêt','name':'pas encore prêt'},
  {'value':'en vente', 'name':'en vente'},
  {'value':'VENDU', 'name':'VENDU'}
]

onMounted(()=>{
  api.get('species').then((res) =>{
    speciesData.value = res.data['hydra:member'].map((res)=> {
      return {'value':`/api/species/${res.id}`, 'name':res.name}
    })
  })
  api.get('races').then((res) =>{
    raceData.value = res.data['hydra:member'].map((res)=> {
      return {'value':`/api/races/${res.id}`, 'name':res.name}
    })
  })
})

const handleSubmit = async () => {
  const token = getState().token
  if (token){
    if (props.isEdit) {
      await api.patch(`/animals/${form.id}`, form,token);
    } else {
      await api.post('/animals', form,token);
    }
  }
};
</script>

<template>
  <div class="flex justify-center items-center gap-6 flex-wrap">
    <fwb-button @click="display = !display " class="bg-green-500 hover:bg-green-400 text-white py-2 px-4 rounded">{{!display ? 'Ouvrir' : 'Fermer'}}</fwb-button>
  </div>
  <form v-if="display" @submit.prevent="handleSubmit" class="flex flex-col justify-center items-center gap-6 flex-wrap">
      <div class="mb-4 w-full md:w-[430px]">
        <fwb-input v-model="form.name" type="text" id="name" label="Nom"
                   class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></fwb-input>
      </div>
      <div class="mb-4  w-full md:w-[430px]">
        <fwb-input v-model="form.age" type="number" id="age" label="Age"
                   class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></fwb-input>
      </div>
    <div class="mb-4 w-full md:w-[430px]">
      <fwb-textarea v-model="form.description" id="description" label="Description"
                    placeholder="petite créature toute douce"
                    class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></fwb-textarea>
    </div>

     <div class="mb-4  w-full md:w-[430px]">
       <fwb-input v-model="form.priceHT" type="number" id="priceHT" label="Prix HT"
                  class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></fwb-input>
     </div>
     <div class="mb-4  w-full md:w-[430px]">
       <fwb-input v-model="form.priceTTC" type="number" id="priceTTC" label="Prix TTC"
                  class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></fwb-input>
     </div>

      <div class="mb-4  w-full md:w-[430px]">
        <fwb-select
            v-model="form.species"
            :options="speciesData"
            label="Choisir une espèce"
        />
      </div>
      <div class="mb-4  w-full md:w-[430px]">
        <fwb-select
            v-model="form.race"
            :options="raceData"
            label="Choisir une race"
        />
      </div>

      <div class="mb-4  w-full md:w-[430px]">
        <fwb-select v-model="form.status" id="status"
                    label="Status"
                    :options="statusData"
                    class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
      </div>
    <div class="flex justify-center items-center gap-6 flex-wrap">
      <fwb-button type="submit" class="bg-green-500 text-white py-2 px-4 rounded">Enregistrer</fwb-button>
    </div>
  </form>
</template>
