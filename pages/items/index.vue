<script lang="ts" setup>
import type { Specialty } from "@/interfaces/Speciality.interface"
import type { Category } from "@/interfaces/Category.interface";
import SpecialityFetch from '@/api/specialityData';
import CategoryFetch from '@/api/categoryData';
import { computed } from 'vue'
import { useSnackbarStore } from '@/store/index';
import type { Items, Item } from "~/interfaces/Item.interface";
import type { Warehouses } from "~/interfaces/Warehouse.interface";
const snackbarStore = useSnackbarStore()
const apiURL = useCookie("apiURL");

const { data: itemsFetch } = await useFetch<Items>(`${apiURL.value}/items`, { method: 'GET' });
const { data: warehousesFetch } = await useFetch<Warehouses>(`${apiURL.value}/warehouses`, { method: 'GET' });
const responseRegisterItem = await fetch(
    `${apiURL.value}/items/`,
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${userCookie.value.token}`,
        },
        // body: JSON.stringify(table)
    }
);
const Specialites: Specialty[] = SpecialityFetch.data
const data = ref(Specialites)
const categoryData = ref<Category[]>(CategoryFetch.data)

const headers = ref([
    // { align: 'start', key: 'name', sortable: true, title: 'Especialidad', },
    { key: 'n', title: 'N°' },
    { key: 'id', title: 'ID' },
    { key: 'internal_id', title: 'Cód. Interno' },
    { key: 'description', title: 'Nombre' },
    { key: 'unit_type_id', title: 'Uni. Medi.' },
    { key: 'stock', title: 'Stock' },
    { key: 'sale_unit_price', title: 'P.Unitario (Venta)' },
    { key: 'purchase_unit_price', title: 'P.Unitario (Compra)' },
    { key: 'active', title: 'Habilitado' },
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
const itemsPerPage = ref(10)
const search = ref('')
const selected = ref([])
const dialog = ref(false)
const dialogDelete = ref(false)
const editedItem = ref<Item>({
    id: 0,
    name: "",
    description: "",
    second_name: "",
    model: "",
    barcode: "",
    internal_id: "",
    stock: 0,
    stock_min: 0,
    active: true,
    status: true,
    lots_enabled: false,
    unit_type_id: "NIU",
    category_id: null,
    warehouses: { id: 1, description: "" },
    sale_unit_price: 1,
    purchase_unit_price: 1,
    type_commission: "",
    commission: 0
})
const defaultItem = ref<Item>({
    id: 0,
    name: "",
    description: "",
    second_name: "",
    model: "",
    barcode: "",
    internal_id: "",
    stock: 0,
    stock_min: 0,
    active: true,
    status: true,
    lots_enabled: false,
    unit_type_id: "NIU",
    category_id: null,
    warehouses: { id: 1, description: "" },
    sale_unit_price: 1,
    purchase_unit_price: 1,
    type_commission: "",
    commission: 0
})

let editedIndex = ref(-1)

const pageCount = computed(() => {
    if (!itemsFetch.value) return 1
    return Math.ceil(itemsFetch.value.response.length / itemsPerPage.value)
})

const nameTitleDialog = ref("")
const openDialogNewItem = () => {
    dialog.value = true
    nameTitleDialog.value = "Nueva Especialidad"
    editedItem.value = Object.assign({}, defaultItem.value)
}

const openDialogEditItem = (item: Item) => {
    if (!itemsFetch.value) return null
    dialog.value = true
    nameTitleDialog.value = "Editar Especialidad"
    editedItem.value = Object.assign({}, item)
    editedIndex.value = itemsFetch.value.response.indexOf(item)
}

const openDialogDeleteItem = (item: Item) => {
    if (!itemsFetch.value) return null

    dialogDelete.value = true
    nameTitleDialog.value = "Eliminar Especialidad"
    editedIndex.value = itemsFetch.value.response.indexOf(item)
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
    try {
        if (!itemsFetch.value) return null
        if (editedIndex.value > -1) {
            Object.assign(itemsFetch.value.response[editedIndex.value], editedItem.value)
        } else {
            itemsFetch.value.response.push(editedItem.value)
        }
        closeDialogItem()
    } catch (error) {
        snackbarStore.setStatus("error", "Error", error)
    } finally {
        snackbarStore.setStatus("success", "Guardado correctamente")
    }
}
const deleteItemConfirm = () => {
    try {
        if (!itemsFetch.value) return null

        itemsFetch.value.response.splice(editedIndex.value, 1)
        closeDialogDeleteItem()
        nextTick(() => {
            editedItem.value = Object.assign({}, defaultItem.value)
            editedIndex.value = -1
        })
    } catch (error) {
        snackbarStore.setStatus("error", "Error", error)
    } finally {
        snackbarStore.setStatus("success", "Eliminado correctamente")
    }

}
</script>

<template>
    <v-container fluid>
        <v-app-bar class="justify-center" flat append>
            <div class="justify-center mx-4">
                <v-icon class="me-1" icon="mdi-pill-multiple"></v-icon>
                <span class="subheading">Productos</span>
            </div>
            <v-spacer></v-spacer>
            <v-btn append-icon="mdi-plus-circle" color="primary" variant="flat"
                @click="openDialogNewItem()">Nuevo</v-btn>
        </v-app-bar>
        <!-- {{ apiURL }}asds -->
        <!-- {{ itemsFetch }} -->
        <v-card class="justify-self-end mx-4" elevation="0">
            <v-container fluid>
                <v-row>
                    <v-col cols="12" lg="4" md="4" sm="12" xs="12">
                        <v-text-field v-model="search" append-inner-icon="mdi-magnify" label="Buscar"></v-text-field>
                    </v-col>
                </v-row>
                <v-row dense>
                    <v-data-table v-model:page="page" v-model="selected" :headers="headers"
                        :items="itemsFetch?.response" :items-per-page="itemsPerPage" :search="search"
                        class="elevation-1">
                        <template v-slot:item.n="{ item, index }">
                            {{ index + 1 + itemsPerPage * (page - 1) }}
                        </template>
                        <!-- <template v-slot:item.type_commission="{ item }">
                            {{ item }}
                            <v-chip :color="statusColorCommission[item.type_commission]">
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
 -->
                        <template v-slot:item.active="{ item }">
                            <v-checkbox-btn v-model="item.raw.active" disabled></v-checkbox-btn>
                        </template>
                        <template v-slot:item.actions="{ item }">
                            <div class="justify-center ">
                                <v-btn class="me-2" rounded icon="mdi-pencil" color="yellow"
                                    @click="openDialogEditItem(item.raw)">
                                </v-btn>
                                <v-btn color="red" rounded icon="mdi-delete" @click="openDialogDeleteItem(item.raw)">
                                </v-btn>
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
                <!-- CUADRO DIALOGO -->
                <v-dialog v-model="dialog" max-width="70%" transition="dialog-bottom-transition" persistent>
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
                                        <v-text-field v-model="editedItem.sale_unit_price"
                                            label="Precio(*)"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.purchase_unit_price"
                                            label="Precio(*)"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="8">
                                        <v-text-field v-model="editedItem.description"
                                            label="Descripción"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-combobox v-model="editedItem.warehouses" :items="warehousesFetch?.response"
                                            :item-title="'description'" item-value="id" label="Oficina">
                                            
                                        </v-combobox>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-combobox v-model="editedItem.type_commission"
                                            :items="['Dinero', 'Porcentaje']" label="Tipo de comisión"></v-combobox>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.commission" label="Comisión"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-switch v-model="editedItem.active" color="success"
                                            label="Habilitado"></v-switch>
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
                        <v-card class="text-h5 px-4 py-4 text-center">¿Está seguro de que desea eliminar este
                            elemento?</v-card>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue-darken-1" variant="text" @click="closeDialogDeleteItem">Cancelar</v-btn>
                            <v-btn color="red-darken-1" variant="flat" @click="deleteItemConfirm">Eliminar</v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <!-- DIALOG -->
            </v-container>
        </v-card>
    </v-container>
</template>