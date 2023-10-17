<script lang="ts" setup>
import { Specialty } from "@/pages/items/speciality/speciality.interface"
import specialities from '@/pages/items/speciality/specialityData';
const specialistsData: Specialty[] = specialities.especialityData
const headers = ref([
  { align: 'start', key: 'name', sortable: true, title: 'Especialidad', },
  { key: 'description', title: 'Descripción' },
  { key: 'category', title: 'Categoria' },
  { key: 'price', title: 'Precio' },
  { key: 'type_commission', title: 'Tipo de comisión' },
  { key: 'commission', title: 'Comisión' },
  { key: 'status', title: 'Habilitado' },
  { key: 'actions', title: 'Acciones' },
])
const statusColorCommission: Record<Specialty['type_commission'], string> = {
  percentage: 'purple',
  money: 'green',
}

const symbolCommission: Record<Specialty['type_commission'], string> = {
  percentage: '%',
  money: 'S/.',
}

const nameCommission: Record<Specialty['type_commission'], string> = {
  percentage: 'Porcentaje',
  money: 'Dinero',
}

const page = ref(1)
const itemsPerPage = ref(15)
const search = ref('')
const selected = ref([])

import { computed } from 'vue'
const pageCount = computed(() => {
  return Math.ceil(data.value.length / itemsPerPage.value)
})

const editar = async (id: String) => {
  try {

    console.log(id)

  } catch (error) {
    console.log("error")
  }
};

const eliminar = async (id: String) => {
  try {

    console.log(id)

  } catch (error) {
    console.log("error")
  }
};
const data = ref(specialistsData)

</script>

<template>
  <v-container fluid>
    <v-app-bar class="justify-center " flat append>
      <div class="justify-center mx-4">
        <v-icon class="me-1" icon="mdi-pill-multiple"></v-icon>
        <span class="subheading me-2">Especialidades</span>
      </div>
      <v-spacer></v-spacer>
      <v-btn append-icon="mdi-plus-circle" color="primary" variant="flat">Nuevo</v-btn>
    </v-app-bar>
    <v-card class="justify-self-end mx-4" elevation="0">
      <v-container fluid>
        <v-row>
          <v-col cols="12" lg="4" md="4" sm="12" xs="12">
            <v-text-field v-model="search" append-inner-icon="mdi-magnify" label="Buscar"></v-text-field>
          </v-col>
        </v-row>
        <v-row dense>
          <v-data-table v-model:page="page" v-model="selected" :headers="headers" :items="data"
            :items-per-page="itemsPerPage" item-value=name :search="search" show-select class="elevation-1">
            <template v-slot:item.type_commission="{ item }">
              <v-chip :color="statusColorCommission[item.raw.type_commission]">
                {{ nameCommission[item.raw.type_commission] }}
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
                <v-btn class="me-2" rounded icon="mdi-pencil" color="yellow" @click="editar(item.raw.id)"> </v-btn>
                <v-btn color="red" rounded icon="mdi-delete" @click="eliminar(item.raw.id)"> </v-btn>
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
