<script setup>
import {FwbButton, FwbInput} from "flowbite-vue";
import {ref} from "vue";
import Hero from "@/components/Section/Hero.vue";
import api from "@/Api/api.js";
import {toast} from "vue3-toastify";
import {setState} from "@/Store/store.js";
import {useRouter} from "vue-router";

const router = useRouter()
const email = ref('')
const password = ref('')

const handleSubmit = () => {
  if (!email.value || !password.value) {
    toast.error('Veuillez remplir tous les champs')
    return
  }

  api.login({
    email: email.value,
    password: password.value
  }).then((res) => {
    const token = res.data.token;

    if (!token) {
      toast.error('Erreur lors de la connexion')
      return
    }

    setState({
      token: token
    })
    toast.success('Connexion réussie', {
      duration: 700
    })
    setTimeout(() => {
      router.push('/backoffice')
    }, 2000)
  }).catch((e) => {
    toast.error('Erreur lors de la connexion')
  })
}
</script>

<template>
  <hero/>
  <div class="m1-40 mx-auto w-full md:w-6/12">
    <div class="flex gap-8 flex-col items-center">
      <fwb-input
          v-model="email"
          class="w-10/12 md:w-full"
          label="Adresse email"
          placeholder="mink@mink.com"/>
      <fwb-input
          v-model="password"
          type="password"
          class="w-10/12 md:w-full"
          label="Mot de passe"
          placeholder="********"
      />
      <fwb-button @click="handleSubmit" class="w-fit" size="xl" color="green">Se connecter</fwb-button>
    </div>
  </div>
</template>

<style scoped>

</style>
