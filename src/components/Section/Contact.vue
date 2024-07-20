<script setup>

</script>

<template>
  <section class="flex">
    <div class="flex flex-col md:flex-row-reverse justify-between gap-6 p-10 w-10/12 m-auto bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
      <div>
        <h1 class="text-2xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
          Vous voulez nous contacter ?
        </h1>
        <p class="text-sm text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
          Nous sommes disponibles pour répondre à toutes vos questions.
        </p>

        <div class="flex items-center mt-8 text-gray-600 dark:text-gray-400">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          <div class="ml-4 text-md tracking-wide font-semibold w-40">
            1234 Rue de la Ferme, 33000 Bordeaux
          </div>
        </div>

        <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          <div class="ml-4 text-md tracking-wide font-semibold w-40">
            1234567890
          </div>
        </div>

        <div class="flex items-center mt-2 text-gray-600 dark:text-gray-400">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          <div class="ml-4 text-md tracking-wide font-semibold w-40">
            contact@laferme.com
          </div>
        </div>
      </div>
      <div class="w-full md:w-fit">
          <img
              src="../../assets/img/maps.jpg"
              class="object-cover rounded-lg max-h-64 sm:max-h-96 btn- w-full h-full"/>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
