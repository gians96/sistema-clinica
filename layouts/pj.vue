<script setup lang="ts">
import { routeLinks, subRouteLinks } from '~/components/shared/link-routes';


</script>

<template >
  <v-app>
    <v-layout>
      <SideBar></SideBar>
      <NavBar :links="subRouteLinks"></NavBar>
      <VMain>
        <slot />
      </VMain>
    </v-layout>



    <!-- <NuxtLink to="/"> Back to home </NuxtLink> -->
  </v-app>
</template>
<style>
body {
  /* font-family: "Poppins", sans-serif; */
}
</style>