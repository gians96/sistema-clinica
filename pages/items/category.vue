<script lang="ts" setup>
import { Category } from "@/interfaces/Category.interface"
import CategoryFetch from '@/api/categoryData';
const Categories: Category[] = CategoryFetch.data
const data = ref(Categories)

const headers = ref([
  { key: 'name', title: 'Nombre' },
  { key: 'actions', title: 'Acciones' },
])


const page = ref(1)
const itemsPerPage = ref(15)
const search = ref('')
const selected = ref([])
const dialog = ref(false)
const dialogDelete = ref(false)
const editedItem = ref<Category>({
  id: 0,
  name: ""
})
const defaultItem = ref<Category>({
  id: 0,
  name: ""
})

let editedIndex = ref(-1)
import { computed } from 'vue'
const pageCount = computed(() => {
  return Math.ceil(data.value.length / itemsPerPage.value)
})

const nameTitleDialog = ref("")
const openDialogNewItem = () => {
  dialog.value = true
  nameTitleDialog.value = "Nueva Categoría"
  editedItem.value = Object.assign({}, defaultItem.value)
}

const openDialogEditItem = (item: Category) => {
  dialog.value = true
  nameTitleDialog.value = "Editar Categoría"
  editedItem.value = Object.assign({}, item)
  editedIndex.value = data.value.indexOf(item)
}

const openDialogDeleteItem = (item: Category) => {
  dialogDelete.value = true
  nameTitleDialog.value = "Eliminar Categoría"
  editedIndex.value = data.value.indexOf(item)
}

const closeDialogItem = () => {
  dialog.value = false
  nextTick(() => {
    editedItem.value = Object.assign({}, defaultItem.value)
    editedIndex.value = -1
  })
}
const closeDialogDeleteItem = () => {
  dialogDelete.value = false
  nextTick(() => {
    editedItem.value = Object.assign({}, defaultItem.value)
    editedIndex.value = -1
  })
}
const save = () => {
  if (editedIndex.value > -1) {
    Object.assign(data.value[editedIndex.value], editedItem.value)
  } else {
    data.value.push(editedItem.value)
  }
  closeDialogItem()
}
const deleteItemConfirm = () => {
  data.value.splice(editedIndex.value, 1)
  closeDialogDeleteItem()
  nextTick(() => {
    editedItem.value = Object.assign({}, defaultItem.value)
    editedIndex.value = -1
  })
}
</script>
<template>
  <v-container fluid>
    <v-app-bar class="justify-center" flat append>
      <div class="justify-center mx-4">
        <v-icon class="me-1" icon="mdi-pill-multiple"></v-icon>
        <span class="subheading">Categoría</span>
      </div>
      <v-spacer></v-spacer>
      <v-btn append-icon="mdi-plus-circle" color="primary" variant="flat" @click="openDialogNewItem()">Nuevo</v-btn>
    </v-app-bar>
    <v-card class="justify-self-end mx-4" elevation="0">
      <v-container fluid>
        <v-row>
          <v-col cols="12" lg="4" md="4" sm="12" xs="12">
            <v-text-field v-model="search" append-inner-icon="mdi-magnify" label="Buscar"></v-text-field>
          </v-col>
        </v-row>
        <!-- CUADRO DIALOGO -->
        <v-dialog v-model="dialog" max-width="800px" transition="dialog-bottom-transition" persistent>
          <v-card>
            <v-toolbar color="primary" :title="nameTitleDialog">
            </v-toolbar>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field v-model="editedItem.name" label="Nombre(*)"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions class="mb-2">
              <v-spacer></v-spacer>
              <v-btn class="mx-2" color="blue-darken-1" variant="text" @click="closeDialogItem()">
                Cancelar
              </v-btn>
              <v-btn color="blue-darken-1" variant="elevated" @click="save()">
                Guardar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!-- DIALOG NEW , EDIT -->
        <!-- DIALGO DELETE -->
        <v-dialog v-model="dialogDelete" max-width="500px" persistent>
          <v-card>
            <v-card class="text-h5 px-4 py-4 text-center">¿Está seguro de que desea eliminar este elemento?</v-card>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDialogDeleteItem">Cancelar</v-btn>
              <v-btn color="red-darken-1" variant="flat" @click="deleteItemConfirm">Eliminar</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!-- DIALOG -->
        <v-row dense>
          <v-data-table v-model:page="page" v-model="selected" :headers="headers" :items="data"
            :items-per-page="itemsPerPage" item-value=name :search="search" show-select class="elevation-1">
            <template v-slot:item.actions="{ item }">
              <div class="justify-center ">
                <v-btn class="me-2" rounded icon="mdi-pencil" color="yellow" @click="openDialogEditItem(item.raw)">
                </v-btn>
                <v-btn color="red" rounded icon="mdi-delete" @click="openDialogDeleteItem(item.raw)"> </v-btn>
              </div>
            </template>
            <template v-slot:bottom>
              <div class="text-center pt-2">
                <v-pagination v-model="page" :length="pageCount"></v-pagination>
                <!-- <v-text-field :model-value="itemsPerPage" class="pa-2" label="Items per page" type="number" min="-1"
                max="15" hide-details @update:model-value="itemsPerPage = parseInt($event, 10)"></v-text-field> -->
              </div>
            </template>
          </v-data-table>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>