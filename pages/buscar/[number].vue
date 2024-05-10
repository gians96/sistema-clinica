<script setup lang="ts">
const route = useRoute()

// When accessing /posts/1, route.params.id will be 1

definePageMeta({
  layout: "search",
});
const number = ref(route.params.number)
</script>

<template>
    <h1>RUC/DNI: {{ number }}</h1>
</template>