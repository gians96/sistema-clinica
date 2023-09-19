<script setup lang="ts">
import { useStore } from '@/store/index'
import { useDisplay } from 'vuetify'
const store = useStore()
const { mobile } = useDisplay()
</script>
<template>
  <v-navigation-drawer expand-on-hover v-model="store.drawer" :temporary="mobile" :rail="!mobile ? store.rail : false"
    theme="dark">
    <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="John Leider" nav>

    </v-list-item>
    <v-divider></v-divider>
    <v-list nav>
      <v-list-item prepend-icon="mdi-home-city" title="Home" value="home" to="/characters"></v-list-item>
      <v-list-item prepend-icon="mdi-account" title="Personajes" value="account" to="/characters/list"></v-list-item>
      <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"
        to="/characters/search"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>