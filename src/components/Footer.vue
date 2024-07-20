<script setup>
import {FwbFooter, FwbFooterCopyright, FwbFooterLink, FwbFooterLinkGroup} from "flowbite-vue";
</script>

<template>
  <fwb-footer >
    <fwb-footer-copyright
        class="flex justify-center"
        copyright-message="LA FERME"
    />
    <fwb-footer-link-group class="flex justify-center">
      <fwb-footer-link>
        <RouterLink to="/">Accueil</RouterLink>
      </fwb-footer-link>
      <fwb-footer-link>
        <RouterLink to="/contact">Contact</RouterLink>
      </fwb-footer-link>
    </fwb-footer-link-group>
  </fwb-footer>
</template>

<style scoped>
</style>
