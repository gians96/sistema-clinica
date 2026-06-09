<script setup lang="ts">
import { useStore } from '@/store/index'
import { useDisplay } from 'vuetify'
import type { Company } from '~/interfaces/Company.interface';
import type { Login } from '~/interfaces/Login.Interface';
import { useCompanyLogoUrl } from '~/composables/useCompanyLogoPdf';
const store = useStore()
const { mobile } = useDisplay()
const userLogin = useCookie<Login>("user");
const company = useCookie<Company>("company")
const logoUrl = computed(() => useCompanyLogoUrl(company.value?.logo))
</script>
<template>
  <v-navigation-drawer expand-on-hover v-model="store.drawer" :temporary="mobile" :rail="!mobile ? store.rail : false"
    theme="dark">
    <v-list-item class="align-center justify-center" nav>
      <template v-if="store.rail">
        <v-avatar v-if="logoUrl" color="white" size="default">
          <v-img :src="logoUrl" :alt="company?.name" />
        </v-avatar>
        <v-avatar v-else color="white" size="default">
          <span class="text-h5">{{ company?.name?.charAt(0) }}</span>
        </v-avatar>
      </template>
      <div v-else class="text-center">
        <v-img v-if="logoUrl" :src="logoUrl" :alt="company?.name" max-height="64" contain class="mx-auto mb-1" />
        <span v-else class="text-h5 ">{{ company?.name }}</span>
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