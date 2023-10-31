<script lang="ts" setup>
import { Specialty } from "@/interfaces/Speciality.interface"
import SpecialityFetch from '@/api/specialityData';
import CategoryFetch from '@/api/categoryData';

const Specialites: Specialty[] = SpecialityFetch.data
const data = ref(Specialites)
const categoryData = ref(CategoryFetch.data)

const headers = ref([
  { align: 'start', key: 'name', sortable: true, title: 'Especialidad', },
  { key: 'description', title: 'Descripción' },
  { key: 'category.name', title: 'Categoria' },
  { key: 'price', title: 'Precio' },
  { key: 'type_commission', title: 'Tipo de comisión' },
  { key: 'commission', title: 'Comisión' },
  { key: 'status', title: 'Habilitado' },
  { key: 'actions', title: 'Acciones' },
])

const statusColorCommission: Record<Specialty['type_commission'], string> = {
  Porcentaje: 'purple',
  Dinero: 'green',
}

const symbolCommission: Record<Specialty['type_commission'], string> = {
  Porcentaje: '%',
  Dinero: 'S/.',
}

const page = ref(1)
const itemsPerPage = ref(15)
const search = ref('')
const selected = ref([])
const dialog = ref(false)
const dialogDelete = ref(false)
const editedItem = ref<Specialty>({
  id: 0,
  name: "",
  description: "",
  category: {},
  price: 0,
  type_commission: "Dinero",
  commission: 0,
  status: true
})
const defaultItem = ref<Specialty>({
  id: 0,
  name: "",
  description: "",
  category: null,

  price: 0,
  type_commission: "Dinero",
  commission: 0,
  status: true
})

let editedIndex = ref(-1)
import { computed } from 'vue'
const pageCount = computed(() => {
  return Math.ceil(data.value.length / itemsPerPage.value)
})

const nameTitleDialog = ref("")
const openDialogNewItem = () => {
  dialog.value = true
  nameTitleDialog.value = "Nueva Especialidad"
  editedItem.value = Object.assign({}, defaultItem.value)
}

const openDialogEditItem = (item: Specialty) => {
  dialog.value = true
  nameTitleDialog.value = "Editar Especialidad"
  editedItem.value = Object.assign({}, item)
  editedIndex.value = data.value.indexOf(item)
}

const openDialogDeleteItem = (item: Specialty) => {
  dialogDelete.value = true
  nameTitleDialog.value = "Eliminar Especialidad"
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
        <span class="subheading">Especialidades</span>
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
                  <v-col cols="12" sm="6" md="8">
                    <v-text-field v-model="editedItem.name" label="Nombre(*)"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.price" label="Precio(*)"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="8">
                    <v-text-field v-model="editedItem.description" label="Descripción"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-combobox v-model="editedItem.category" :items="categoryData" item-title="name" item-value="id">
                    </v-combobox>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-combobox v-model="editedItem.type_commission" :items="['Dinero', 'Porcentaje']"
                      label="Tipo de comisión"></v-combobox>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.commission" label="Comisión"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-switch v-model="editedItem.status" color="success" label="Habilitado"></v-switch>
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

            <template v-slot:item.type_commission="{ item }">
              <v-chip :color="statusColorCommission[item.raw.type_commission]">
                {{ item.raw.type_commission }}

              </v-chip>
            </template>
            <template v-slot:item.commission="{ item }">
              <span v-if="symbolCommission[item.raw.type_commission] === 'S/.'">
                {{ symbolCommission[item.raw.type_commission] }}
              </span>
              {{ item.raw.commission }}
              <span v-if="symbolCommission[item.raw.type_commission] === '%'">
                {{ symbolCommission[item.raw.type_commission] }}
              </span>
            </template>
            <template v-slot:item.status="{ item }">
              <v-checkbox-btn v-model="item.raw.status" disabled></v-checkbox-btn>
            </template>
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
interfaces/speciality.interface