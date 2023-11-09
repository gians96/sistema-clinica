<script setup lang="ts">
import { useSnackbarStore } from '@/store/index';
const snackbarStore = useSnackbarStore()


</script>
<template>
    <v-snackbar v-model="snackbarStore.show" :color="snackbarStore.color" location="bottom right">

        <div class="d-flex justify-center align-center">

            <v-alert :type="snackbarStore.color" :title="snackbarStore.title" :text="snackbarStore.text"></v-alert>
            <v-btn variant="text" @click="snackbarStore.show = false" icon="mdi-close-circle"> </v-btn>
        </div>
    </v-snackbar>
</template>