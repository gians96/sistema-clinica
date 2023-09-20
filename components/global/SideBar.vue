<script setup lang="ts">
import { useStore } from '@/store/index'
import { useDisplay } from 'vuetify'
const store = useStore()
const { mobile } = useDisplay()

const menus = ref([
  { icon: "mdi-monitor", title: "Escritorio", value: "escritorio", to: "/desktop", toSub: null },
  { icon: "mdi-account-injury", title: "Paciente", value: "paciente", to: "/patient", toSub: null },
  {
    icon: "mdi-cog-outline", title: "Empresa", value: "empresa", to: "/companies",
    toSub: [
      { title: "Configuración", value: "configuracion", to: "/companies/create" },
      { title: "Servicios", value: "configuracion", to: "/companies/create" },
      { title: "Personal", value: "configuracion", to: "/companies/create" },
      { title: "Diagnósticos", value: "configuracion", to: "/companies/create" }
    ]
  },
  { icon: "mdi-cog-outline", title: "Atención", value: "empresa", to: "/companies",toSub: null},
  { icon: "mdi-cog-outline", title: "Triaje", value: "empresa", to: "/companies",toSub: null},
  { icon: "mdi-cog-outline", title: "Atención", value: "empresa", to: "/companies",toSub: null}
])

</script>
<template>
  <v-navigation-drawer expand-on-hover v-model="store.drawer" :temporary="mobile" :rail="!mobile ? store.rail : false"
    theme="dark">
    <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="John Leider" nav>

    </v-list-item>
    <v-divider></v-divider>

    <v-list nav>
      <div v-for="menu in menus" :key="menu.to">
        <v-list-item v-if="!menu.toSub" :prepend-icon="menu.icon" :title="menu.title" :value="menu.value"
          :to="menu.to"></v-list-item>
        <v-list-group v-if="menu.toSub" :value="menu.title">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" :prepend-icon="menu.icon" :title="menu.title"></v-list-item>
          </template>

          <v-list-item v-for="subMenu in menu.toSub" :key="subMenu.to" :title="subMenu.title"
            :value="subMenu.value"></v-list-item>
        </v-list-group>
      </div>
    </v-list>
  </v-navigation-drawer></template>