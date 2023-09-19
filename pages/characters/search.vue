<template>
  <v-container class="mx-5">
    <v-row cols="12" sm="2">
      <p>Search</p>
    </v-row>
    <v-row cols="12" sm="2">
      <v-col>
        <v-btn @click="increase()">+1</v-btn>
        <p>{{ counter }}</p>
      </v-col>
      <LazySharedTestShared title="Hola Mundo"></LazySharedTestShared>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const counter = ref(4);
const increase = () => {
  counter.value++;
};

definePageMeta({
  layout: "pj",
});
</script>

<style scoped></style>