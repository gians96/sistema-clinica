<script setup lang="ts">
import { RouterLink, routeLinks } from '../shared/link-routes';

interface Props{
  title?:String;
  links: RouterLink[];
}
const props = defineProps<Props>();
const authBtn = ref([
  {
    name: "Inciar Sesion",
    active: true,
    to: "",
    color: "green-accent-4",
    variant: "text",
  },
  {
    name: "Cerrar Sesion",
    active: false,
    to: "",
    color: "default",
    variant: "text",
  },
  {
    name: "Resgistro",
    active: true,
    to: "",
    color: "green-accent-4",
    colorText: "text-white",
    variant: "text",
  },
]);
</script>

<template>
  <v-app-bar class="px-3" color="transparent" flat density="compact" append>
    <v-avatar color="grey-darken-1" size="32"></v-avatar>

    <v-spacer></v-spacer>

    <v-tabs centered color="grey-darken-2">
      <v-tab v-for="link in props.links" :key="link.path" :to="link.path">
        {{ link.title }}
      </v-tab>
    </v-tabs>
    <v-spacer></v-spacer>
    <div v-for="btn in authBtn" :key="btn.to">
      <v-btn
        :variant?="btn.variant"
        v-if="btn.active"
        :color?="btn.color"
        :class?="btn.colorText"
      >
        {{ btn.name }}
      </v-btn>
    </div>

    <v-avatar
      class="hidden-sm-and-down"
      color="grey-darken-1"
      size="32"
      v-if="false"
    ></v-avatar>
  </v-app-bar>
</template>

