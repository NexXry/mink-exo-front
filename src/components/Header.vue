<script setup>
import {FwbNavbar, FwbNavbarCollapse, FwbNavbarLink} from "flowbite-vue";
import {ref} from "vue";
import {getState, subscribe} from "@/Store/store.js";

const token = ref(getState().token);
subscribe((state) => {
  token.value = state.token;
});
</script>

<template>
  <fwb-navbar>
    <template #logo>
      <RouterLink to="/">
        <img class="size-20" alt="Vue logo" src="../assets/img/icon.svg"/>
      </RouterLink>
    </template>
    <template #default="{isShowMenu}">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <fwb-navbar-link>
          <RouterLink class="text-xl hover:text-green-500" active-class="text-green-500" to="/">
            Accueil
          </RouterLink>
        </fwb-navbar-link>
        <fwb-navbar-link>
          <RouterLink class="text-xl hover:text-green-500" active-class="text-green-500" to="/contact">
            Contact
          </RouterLink>
        </fwb-navbar-link>
        <fwb-navbar-link v-if="token">
          <RouterLink class="text-xl hover:text-green-500" active-class="text-green-500" to="/backoffice">
            Backoffice
          </RouterLink>
        </fwb-navbar-link>
        <fwb-navbar-link v-if="token">
          <RouterLink class="text-xl hover:text-green-500" to="/logout">
            Logout
          </RouterLink>
        </fwb-navbar-link>
      </fwb-navbar-collapse>
    </template>
  </fwb-navbar>
</template>

<style scoped>
</style>
