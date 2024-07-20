<script setup>
import {FwbNavbar, FwbNavbarCollapse, FwbNavbarLink} from "flowbite-vue";
</script>

<template>
  <fwb-navbar>
    <template #logo>
      <img class="size-20" alt="Vue logo" src="../assets/img/icon.svg"/>
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
      </fwb-navbar-collapse>
    </template>
  </fwb-navbar>
</template>

<style scoped>
</style>
