<template>
  <v-container class="mx-5">
    <v-row cols="12" sm="2">
      <p>List Character</p>
      <v-card :height="height">
        ...asdasdasdadasdasdasd
      </v-card>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDisplay } from 'vuetify'

const { name } = useDisplay()

const height = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case 'xs': return 220
    case 'sm': return 400
    case 'md': return 500
    case 'lg': return 600
    case 'xl': return 800
    case 'xxl': return 1200
  }

  return undefined
})


</script>

<style scoped></style>