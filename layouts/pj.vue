<script setup lang="ts">
import { routeLinks, subRouteLinks } from '~/components/shared/link-routes';
</script>

<template >
  <v-app>
    <NavBar :links="subRouteLinks"></NavBar>
    <slot />
    <NuxtLink to="/"> Back to home </NuxtLink>
  </v-app>
</template>
<style>
body {
  font-family: "Poppins", sans-serif;
}
</style>