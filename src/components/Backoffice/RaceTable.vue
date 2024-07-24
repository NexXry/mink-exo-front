<script setup>
import {FwbButton, FwbTable, FwbTableBody, FwbTableCell, FwbTableHead, FwbTableHeadCell, FwbTableRow} from "flowbite-vue";
import {inject, onMounted} from "vue";
import api from "@/Api/api.js";
import {getState} from "@/Store/store.js";

const editableRace = inject('editableRace');
const raceData = inject('raceData');
const isEdit = inject('isEdit');

const getSpecies = () => {
  api.get('races').then((res) => {
    raceData.value = res.data['hydra:member'];
  })
}

onMounted(() => {
  getSpecies();
})

const handleEdit = (race) => {
  editableRace.value = {...race};
  isEdit.value = true;
}

const handleDelete = async (id) => {
  const token = getState().token
  await api.remove(`/races/${id}`, token).then(() => {
    raceData.value = raceData.value.filter((race) => race.id !== id)
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
      <fwb-table-row v-for="race in raceData">
        <fwb-table-cell>{{ race.id }}</fwb-table-cell>
        <fwb-table-cell>{{ race.name }}</fwb-table-cell>
        <fwb-table-cell class="flex flex-col items-end gap-3">
          <fwb-button color="alternative" class="hover:text-green-500 w-fit" @click="handleEdit(race)">
            Modifier
          </fwb-button>
          <fwb-button color="red" class="w-fit" @click="handleDelete(race.id)">
            supprimer
          </fwb-button>
        </fwb-table-cell>
      </fwb-table-row>

    </fwb-table-body>
  </fwb-table>
</template>

<style scoped>

</style>
