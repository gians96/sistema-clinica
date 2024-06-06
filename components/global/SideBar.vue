<script setup lang="ts">
import { useStore } from '@/store/index'
import { useDisplay } from 'vuetify'
import type { Company } from '~/interfaces/Company.interface';
import type { Login } from '~/interfaces/Login.Interface';
const store = useStore()
const { mobile } = useDisplay()
const userLogin = useCookie<Login>("user");
const company = useCookie<Company>("company")
</script>
<template>
  <v-navigation-drawer expand-on-hover v-model="store.drawer" :temporary="mobile" :rail="!mobile ? store.rail : false"
    theme="dark">
    <v-list-item class="align-center justify-center" nav>
      <v-avatar color="white" size="default" v-if="store.rail">
        <span class="text-h5">{{ company.name.charAt(0) }}</span>
      </v-avatar>
      <div v-else class="text-center">
        <span class="text-h5 ">{{ company.name }}</span>
      </div>
    </v-list-item>
    <v-divider></v-divider>

    <v-list nav v-if="userLogin">
      <div v-for="menu in userLogin.modules" :key="menu.path">
        <v-list-item v-if="!menu.module_levels && menu.checked" :prepend-icon="menu.icon" :title="menu.title"
          :value="menu.value" :to="menu.path"></v-list-item>
        <v-list-group v-if="menu.module_levels && menu.checked" :value="menu.title" class="v-list-group__items">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" :prepend-icon="menu.icon" :title="menu.title"></v-list-item>
          </template>
          <div v-for="subMenu in menu.module_levels" :key="subMenu.path">
            <v-list-item v-if="subMenu.checked" height="12px" prepend-icon="mdi-vector-point" :title="subMenu.title"
              :value="subMenu.value" :to="subMenu.path">
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