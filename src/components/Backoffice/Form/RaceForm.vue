<script setup>
import {inject, onMounted, reactive, ref, watch} from 'vue';
import api from '@/Api/api.js';
import {FwbButton, FwbInput} from "flowbite-vue";
import {getState} from "@/Store/store.js";
import {toast} from "vue3-toastify";

const editableRace = inject('editableRace');
const raceData = inject('raceData');
const isEdit = inject('isEdit');

const form = reactive({...editableRace.value});
const display = ref(false);


onMounted(() => {
  api.get('races').then((res) => {
    raceData.value = res.data['hydra:member'].map((res) => {
      return {'value': `/api/races/${res.id}`, 'name': res.name}
    })
  })
})

const handleSubmit = async () => {
  const token = getState().token
  if (token) {
    if (isEdit.value) {
      await api.patch(`/races/${form.id}`, form, token).then((res) => {
        editableRace.value = {...res.data};
        raceData.value = raceData.value.map((race) => {
          if (race.id === res.data.id) {
            return res.data;
          }
          return race;
        });

        isEdit.value = false;
        handleRest();
        toast.success('race modifié avec succès');
      });
    } else {
      const addRace = await api.post('/races', form, token);
      raceData.value.push(addRace.data);
      toast.success('race ajouté avec succès');
    }
  }
};

const handleRest = () => {
  form.id = '';
  form.name = '';
  editableRace.value = {...form};
  isEdit.value = false;
};

watch(() => {
  if (isEdit.value) {
    form.id = editableRace.value.id;
    form.name = editableRace.value.name;
    display.value = true;
  }
}, () => {
}, {immediate: true})
</script>

<template>
  <h2 class="text-xl text-center mb-4">Race</h2>
  <div class="flex justify-center items-center gap-6 flex-wrap mb-4">
    <fwb-button @click="display = !display " class="bg-green-500 hover:bg-green-400 text-white py-2 px-4 rounded">
      {{ !display ? 'Ouvrir' : 'Fermer' }}
    </fwb-button>
  </div>
  <form v-if="display" @submit.prevent="handleSubmit" class="flex flex-col justify-center items-center gap-6 flex-wrap">
    <input v-model="form.id" type="hidden" id="id"/>
    <div class="mb-4 w-full md:w-[430px]">
      <fwb-input v-model="form.name" type="text" id="name" label="Nom"
                 class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></fwb-input>
    </div>
    <div class="flex justify-center items-center gap-6 flex-wrap mb-4">
      <fwb-button @click="handleRest" v-if="isEdit" type="submit" class="bg-red-500 text-white py-2 px-4 rounded">
        Annuler
      </fwb-button>
      <fwb-button type="submit" class="bg-green-500 hover:bg-green-400 text-white py-2 px-4 rounded">
        {{ isEdit ? 'Modifier' : 'Enregistrer' }}
      </fwb-button>
    </div>
  </form>
</template>
