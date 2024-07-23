<script setup>
import {FwbA, FwbButton, FwbTable, FwbTableBody, FwbTableCell, FwbTableHead, FwbTableHeadCell, FwbTableRow} from "flowbite-vue";
import {inject, onMounted, ref} from "vue";
import api from "@/Api/api.js";
import {getState} from "@/Store/store.js";

const animals = ref([])
const editableAnimal = inject('editableAnimal');
const isEdit = inject('isEdit');

onMounted(()=>{
  const token = getState().token
  if (token){
    api.get('animals',true,token).then((res)=>{
      if (res.data['hydra:member']){
        animals.value = res.data['hydra:member']
      }
    })
  }
})

const handleEdit = (animal)=>{
  editableAnimal.value = { ...animal };
  isEdit.value = true;
}
</script>

<template>
  <fwb-table>
    <fwb-table-head>
      <fwb-table-head-cell>Nom</fwb-table-head-cell>
      <fwb-table-head-cell>Age</fwb-table-head-cell>
      <fwb-table-head-cell>Prix HT / Prix TTC</fwb-table-head-cell>
      <fwb-table-head-cell>Description</fwb-table-head-cell>
      <fwb-table-head-cell>Espèce</fwb-table-head-cell>
      <fwb-table-head-cell>Race</fwb-table-head-cell>
      <fwb-table-head-cell>Status</fwb-table-head-cell>
      <fwb-table-head-cell/>
    </fwb-table-head>
    <fwb-table-body>
      <fwb-table-row v-for="animal in animals">
        <fwb-table-cell>{{animal.name}}</fwb-table-cell>
        <fwb-table-cell>{{animal.age}}</fwb-table-cell>
        <fwb-table-cell>{{ animal.priceHT }}€ / {{ animal.priceTTC }}€</fwb-table-cell>
        <fwb-table-cell>{{ animal.description }}</fwb-table-cell>
        <fwb-table-cell>{{ animal.species.name }}</fwb-table-cell>
        <fwb-table-cell>{{ animal.race.name }}</fwb-table-cell>
        <fwb-table-cell>{{ animal.status }}</fwb-table-cell>
        <fwb-table-cell>
          <fwb-button color="alternative" class="hover:text-green-500" @click="handleEdit(animal)">
            Modifier
          </fwb-button>
        </fwb-table-cell>
      </fwb-table-row>
    </fwb-table-body>
  </fwb-table>
</template>
