<script setup>
import {FwbButton, FwbTable, FwbTableBody, FwbTableCell, FwbTableHead, FwbTableHeadCell, FwbTableRow} from "flowbite-vue";
import {inject, onMounted} from "vue";
import api from "@/Api/api.js";
import {getState} from "@/Store/store.js";

const editableSpecies = inject('editableSpecies');
const speciesData = inject('speciesData');
const isEdit = inject('isEdit');


const getSpecies = () => {
  api.get('species').then((res) => {
    speciesData.value = res.data['hydra:member'];
  })
}

onMounted(() => {
  getSpecies();
})

const handleEdit = (species) => {
  editableSpecies.value = {...species};
  isEdit.value = true;
}

const handleDelete = async (id) => {
  const token = getState().token
  await api.remove(`/species/${id}`, token).then(() => {
    speciesData.value = speciesData.value.filter((species) => species.id !== id)
  })
}
</script>

<template>
  <fwb-table class="w-10/12 mx-auto">
    <fwb-table-head>
      <fwb-table-head-cell>ID</fwb-table-head-cell>
      <fwb-table-head-cell>Nom</fwb-table-head-cell>
      <fwb-table-head-cell/>
    </fwb-table-head>
    <fwb-table-body>
      <fwb-table-row v-for="species in speciesData">
        <fwb-table-cell>{{ species.id }}</fwb-table-cell>
        <fwb-table-cell>{{ species.name }}</fwb-table-cell>
        <fwb-table-cell class="flex flex-col items-end gap-3">
          <fwb-button color="alternative" class="hover:text-green-500 w-fit" @click="handleEdit(species)">
            Modifier
          </fwb-button>
          <fwb-button color="red" class="w-fit" @click="handleDelete(species.id)">
            supprimer
          </fwb-button>
        </fwb-table-cell>
      </fwb-table-row>

    </fwb-table-body>
  </fwb-table>
</template>

<style scoped>

</style>
