<script lang="ts" setup>
import { useSnackbarStore } from '@/store/index';
import type { Warehouse } from "~/interfaces/Warehouse.interface";
const snackbarStore = useSnackbarStore()
const apiURL = useCookie("apiURL");
import { useDisplay } from 'vuetify'
import type { Establishment } from '~/interfaces/Establishments.interface';
const { mobile } = useDisplay()
const { data: establishmentsFetch, refresh: establishmentsRefresh } = await useFetch<Establishment[]>(`${apiURL.value}/establishments`, { method: 'GET' });

const headers = ref([
    // { align: 'start', key: 'name', sortable: true, title: 'Especialidad', },
    { key: 'n', title: 'N°' },
    // { key: 'id', title: 'ID' },
    { key: 'description', title: 'Descripción' },
    { key: 'code', title: 'Código' },
    { key: 'actions', title: 'Acciones' },
])

const page = ref(1)
const itemsPerPage = ref(10)
const search = ref('')
const selected = ref([])
const dialog = ref(false)
const dialogDelete = ref(false)
const editedItem = ref<Establishment>({
    id: 0,
    description: '',
    country_id: "PE",
    department_id: null,
    province_id: null,
    district_id: null,
    country: {
        id: "PE",
        description: "PERU",
        active: true
    },
    department: null,
    province: null,
    district: null,
    address: null,
    email: null,
    telephone: null,
    code: null,
    aditional_information: null,
    web_address: null,
    trade_address: null,
    warehouse: null,
})

const defaultItem = ref<Establishment>({
    id: 0,
    description: '',
    country_id: "PE",
    department_id: null,
    province_id: null,
    district_id: null,
    country: {
        id: "PE",
        description: "PERU",
        active: true
    },
    department: null,
    province: null,
    district: null,
    address: null,
    email: null,
    telephone: null,
    code: null,
    aditional_information: null,
    web_address: null,
    trade_address: null,
    warehouse: null,
})
let editedIndex = ref(-1)

const pageCount = computed(() => {
    if (!establishmentsFetch.value) return 1
    return Math.ceil(establishmentsFetch.value.length / itemsPerPage.value)
})

const nameTitleDialog = ref("")
const openDialogNewItem = () => {
    dialog.value = true
    editedIndex.value = -1
    nameTitleDialog.value = "Nueva Establecimiento"
    editedItem.value = JSON.parse(JSON.stringify(defaultItem.value))
}

const openDialogEditItem = (item: Establishment) => {
    if (!establishmentsFetch.value) return null
    dialog.value = true
    nameTitleDialog.value = "Editar Establecimiento"
    editedItem.value = JSON.parse(JSON.stringify(item))
    editedIndex.value = establishmentsFetch.value.indexOf(item)
    provincesFilter.value = provincesData.value.filter(data => editedItem.value.department ? data.department_id === editedItem.value.department?.id : null)
    districtsFilter.value = districtsData.value.filter(data => editedItem.value.province ? data.province_id === editedItem.value.province?.id : null)
}

const openDialogDeleteItem = (item: Establishment) => {
    if (!establishmentsFetch.value) return null
    dialogDelete.value = true
    nameTitleDialog.value = "Eliminar Establecimiento"
    // editedIndex.value = itemsFetch.value.indexOf(item)
    editedItem.value = item
}

const closeDialogItem = () => {
    dialog.value = false
    nextTick(() => {
        editedItem.value = JSON.parse(JSON.stringify(defaultItem.value))
        editedIndex.value = -1
    })
}
const closeDialogDeleteItem = () => {
    dialogDelete.value = false
    nextTick(() => {
        editedItem.value = JSON.parse(JSON.stringify(defaultItem.value))
        editedIndex.value = -1
    })
}
const sendEstablishment = (item: Establishment) => {
    return {
        id: item.id,
        description: item.description,
        country_id: item.country?.id ?? null, // Usa encadenamiento opcional y coalescencia nula
        department_id: item.department?.id ?? null,
        province_id: item.province?.id ?? null,
        district_id: item.district?.id ?? null,
        address: item.address,
        email: item.email,
        telephone: item.telephone,
        code: item.code,
        aditional_information: item.aditional_information,
        web_address: item.web_address,
        trade_address: item.trade_address
    }
}
const registerItemFetch = async (item: Establishment) => {
    const response = await fetch(
        `${apiURL.value}/establishments`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // Authorization: `Bearer ${userCookie.value.token}`,
            },
            body: JSON.stringify(sendEstablishment(item))
        }
    )
    if (response.ok) {
        snackbarStore.setStatus("success", "Guardado correctamente")
        await establishmentsRefresh()
    } else {
        snackbarStore.setStatus("error", "Error", String(response))
    }
}

const updateItemFetch = async (item: Establishment) => {
    const response = await fetch(
        `${apiURL.value}/establishments`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                // Authorization: `Bearer ${userCookie.value.token}`,
            },
            body: JSON.stringify(sendEstablishment(item))
        }
    )
    if (response.ok) {
        snackbarStore.setStatus("success", "Editado correctamente")
        await establishmentsRefresh()
    } else {
        snackbarStore.setStatus("error", "Error", String(response))
    }
}

const deleteItemFetch = async (id: number) => {
    const response = await fetch(
        `${apiURL.value}/establishments/${id}`, { method: "DELETE" }
    )
    if (response.ok) {
        snackbarStore.setStatus("success", "Eliminado correctamente")
        await establishmentsRefresh()
    } else {
        snackbarStore.setStatus("error", "Error", String(response))
    }
}
const save = () => {
    try {
        if (!establishmentsFetch.value) return null
        if (editedIndex.value > -1) {
            // itemsFetch.value = JSON.parse(JSON.stringify(editedItem.value))
            updateItemFetch(editedItem.value)
        } else {
            registerItemFetch(editedItem.value)
            // itemsFetch.value.push(editedItem.value)
        }
        closeDialogItem()
    } catch (error: any) {
        snackbarStore.setStatus("error", "Error", error)
    }
}
const deleteItemConfirm = () => {
    try {
        if (!establishmentsFetch.value) return null
        deleteItemFetch(editedItem.value.id)
        // itemsFetch.value.splice(editedIndex.value, 1)
        closeDialogDeleteItem()
        nextTick(() => {
            editedItem.value = JSON.parse(JSON.stringify(defaultItem.value))
            editedIndex.value = -1
        })
    } catch (error: any) {
        snackbarStore.setStatus("error", "Error", error)
    } finally {
        snackbarStore.setStatus("success", "Eliminado correctamente")
    }

}
import { countries, departments, districts, provinces } from "@/api/locationData"
import type { Country, Department, Province, District } from "@/interfaces/Location.interface";
const countriesData = ref<Country[]>([...countries])
const departmentsData = ref<Department[]>([...departments])
const provincesData = ref<Province[]>([...provinces])
const districtsData = ref<District[]>([...districts])

const provincesFilter = ref(provincesData.value.filter(data => editedItem.value.department ? data.department_id === editedItem.value.department?.id : null))
const districtsFilter = ref(districtsData.value.filter(data => editedItem.value.province ? data.province_id === editedItem.value.province?.id : null))
const filterProvinces = () => {
    editedItem.value.province = null
    editedItem.value.district = null
    provincesFilter.value = provincesData.value.filter(data => editedItem.value.department ? data.department_id === editedItem.value.department?.id : null)
}
const filterDistrits = () => {
    editedItem.value.district = null
    districtsFilter.value = districtsData.value.filter(data => editedItem.value.province ? data.province_id === editedItem.value.province?.id : null)
}
</script>

<template>
    <v-container fluid v-if="establishmentsFetch">
        <v-app-bar class="justify-center" flat append>
            <div class="justify-center mx-4">
                <v-icon class="me-1" icon="mdi-domain"></v-icon>
                <span class="subheading">Establecimiento</span>
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
                <!-- {{ editedItem }} -->
                <v-row dense>
                    <v-data-table v-model:page="page" v-model="selected" :headers="headers" :items="establishmentsFetch"
                        :items-per-page="itemsPerPage" :search="search" class="elevation-1">
                        <template v-slot:item.n="{ index }">
                            {{ index + 1 + itemsPerPage * (page - 1) }}
                        </template>

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
                <v-dialog v-model="dialog" :max-width="mobile ? '100%' : '60%'" transition="dialog-bottom-transition"
                    persistent>
                    <v-card>
                        <v-toolbar floating>
                            <v-toolbar-title>{{ nameTitleDialog }} </v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-btn icon="mdi-close" @click="dialog = false"></v-btn>
                        </v-toolbar>
                        <v-card-text>
                            <v-row>
                                <v-col cols="12" sm="8" md="8">
                                    <v-text-field v-model="editedItem.description"
                                        label="Descripción (*)"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="4" md="4">
                                    <v-text-field v-model="editedItem.code"
                                        label="Código Domicilio Fiscal (*)"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="3" md="3">
                                    <v-combobox v-model="editedItem.country" :items="countriesData"
                                        @update:modelValue="filterProvinces" item-title="description" item-value="id"
                                        label="País">
                                    </v-combobox>
                                </v-col>
                                <v-col cols="12" sm="3" md="3">
                                    <v-combobox v-model="editedItem.department" :items="departmentsData"
                                        @update:modelValue="filterProvinces" item-title="description" item-value="id"
                                        label="Departamento">
                                    </v-combobox>
                                </v-col>
                                <v-col cols="12" sm="3" md="3">
                                    <v-combobox v-model="editedItem.province" :items="provincesFilter"
                                        @update:modelValue="filterDistrits" item-title="description" item-value="id"
                                        label="Provincia">
                                    </v-combobox>
                                </v-col>
                                <v-col cols="12" sm="3" md="3">
                                    <v-combobox v-model="editedItem.district" :items="districtsFilter"
                                        item-title="description" item-value="id" label="Distrito">
                                    </v-combobox>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                    <v-text-field v-model="editedItem.address" label="Dirección fiscal"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                    <v-text-field v-model="editedItem.trade_address"
                                        label="Dirección comercial"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="3">
                                    <v-text-field v-model="editedItem.telephone" label="Teléfono"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="3">
                                    <v-text-field v-model="editedItem.email" label="Correo de contacto"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                    <v-text-field v-model="editedItem.web_address" label="Dirección Web"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-card-text>

                        <v-card-actions class="mb-2">
                            <v-spacer></v-spacer>
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