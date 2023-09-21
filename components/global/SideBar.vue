<script setup lang="ts">
import { useStore } from '@/store/index'
import { useDisplay } from 'vuetify'
const store = useStore()
const { mobile } = useDisplay()

const menus = ref([
  { icon: "mdi-view-dashboard", title: "Dasboard", value: "dashboard", to: "/dashboard", toSub: null, view: true },
  { icon: "mdi-monitor", title: "Escritorio", value: "escritorio", to: "/desktop", toSub: null, view: true },
  { icon: "mdi-account-plus", title: "Reg. Atención", value: "careRecord", to: "/care_record", toSub: null, view: true },
  { icon: "mdi-thermometer", title: "Triaje", value: "triage", to: "/triage", toSub: null, view: true },
  { icon: "mdi-medical-bag", title: "Atención Médica", value: "medicalAttention", to: "/medical_attention", toSub: null, view: true },
  {
    icon: "mdi-pill-multiple", title: "Productos/Servicios", value: "items", to: "#", view: true,
    toSub: [
      { title: "Especialidad", value: "specialty", to: "/items/specialty", view: true },
      { title: "Productos", value: "productos", to: "/items/products", view: true }
    ]
  },
  {
    icon: "mdi-account-injury", title: "Clientes", value: "customers", to: "#", view: true,
    toSub: [
      { title: "Clientes", value: "customers", to: "/customers", view: true },
      { title: "Tipos de Clientes", value: "typesCustomers", to: "/customers/types", view: true },
    ]
  },
  {
    icon: "mdi-cog-outline", title: "Empresa", value: "companies", to: "/companies", view: true,
    toSub: [
      { title: "Configuración", value: "configuracion", to: "/companies", view: true },
      { title: "Usuarios", value: "users", to: "/companies/users", view: true },
      { title: "Lista de diagnósticos", value: "diagnosticList", to: "/companies/diagnostic_list", view: true }
    ]
  },
])

</script>
<template>
  <v-navigation-drawer expand-on-hover v-model="store.drawer" :temporary="mobile" :rail="!mobile ? store.rail : false"
    theme="dark">
    <v-list-item class="align-center justify-center"
      prepend-avatar="https://cmecocasma.nt-suite.one/storage/uploads/logos/logo_20541751832.jpg" nav>

    </v-list-item>
    <v-divider></v-divider>

    <v-list nav>
      <div v-for="menu in menus" :key="menu.to">
        <v-list-item v-if="!menu.toSub && menu.view" :prepend-icon="menu.icon" :title="menu.title" :value="menu.value"
          :to="menu.to"></v-list-item>
        <v-list-group v-if="menu.toSub && menu.view" :value="menu.title" class="v-list-group__items">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" :prepend-icon="menu.icon" :title="menu.title"></v-list-item>
          </template>
          <div v-for="subMenu in menu.toSub" :key="subMenu.to">
            <v-list-item v-if="subMenu.view" height="12px" prepend-icon="mdi-vector-point" :title="subMenu.title"
              :value="subMenu.value" :to="subMenu.to">
            </v-list-item>
          </div>

        </v-list-group>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<style>
.v-list-group__items {
  --indent-padding: -0.50rem !important;
}
</style>