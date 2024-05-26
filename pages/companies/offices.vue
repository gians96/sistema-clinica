<script lang="ts" setup>
import { useSnackbarStore } from '@/store/index';
import type { Establishment } from '~/interfaces/Establishments.interface';
import type { Warehouse } from "~/interfaces/Warehouse.interface";
import type { User } from "~/interfaces/User";
const snackbarStore = useSnackbarStore()
const apiURL = useCookie("apiURL");
import { useDisplay } from 'vuetify'
const { mobile } = useDisplay()
const { data: establishmentsFetch, refresh: establishmentsRefresh } = await useFetch<Establishment[]>(`${apiURL.value}/establishments`, { method: 'GET' });
const { data: usersFetch, refresh: usersRefresh } = await useFetch<User[]>(`${apiURL.value}/users`, { method: 'GET' });
const { data: warehousesFetch, refresh: warehousesRefresh } = await useFetch<Warehouse[]>(`${apiURL.value}/warehouses`, { method: 'GET' });

const headers = ref([
    // { align: 'start', key: 'name', sortable: true, title: 'Especialidad', },
    { key: 'n', title: 'N°' },
    // { key: 'id', title: 'ID' },
    { key: 'description', title: 'Descripción' },
    { key: 'establishments.description', title: 'Establecimiento' },
    { key: 'actions', title: 'Acciones' },
])

const page = ref(1)
const itemsPerPage = ref(10)
const search = ref('')
const selected = ref([])
const dialog = ref(false)
const dialogDelete = ref(false)
const editedItem = ref<Warehouse>({
    id: 0,
    establishment_id: 1,
    description: "",
    user_id: null,
    establishments: null,
    users: null,
})

const defaultItem = ref<Warehouse>({
    id: 0,
    establishment_id: 1,
    description: "",
    user_id: null,
    establishments: null,
    users: null,
})
let editedIndex = ref(-1)

const pageCount = computed(() => {
    if (!warehousesFetch.value) return 1
    return Math.ceil(warehousesFetch.value.length / itemsPerPage.value)
})

const nameTitleDialog = ref("")
const openDialogNewItem = () => {
    dialog.value = true
    editedIndex.value = -1
    nameTitleDialog.value = "Nueva Oficina / Área"
    editedItem.value = JSON.parse(JSON.stringify(defaultItem.value))
}

const openDialogEditItem = (item: Warehouse) => {
    if (!warehousesFetch.value) return null
    dialog.value = true
    nameTitleDialog.value = "Editar Oficina / Área"
    editedItem.value = JSON.parse(JSON.stringify(item))
    editedIndex.value = warehousesFetch.value.indexOf(item)
}

const openDialogDeleteItem = (item: Warehouse) => {
    if (!establishmentsFetch.value) return null
    dialogDelete.value = true
    nameTitleDialog.value = "Eliminar Oficina / Área"
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
const sendWarehouse = (warehouse: Warehouse) => {
    return {
        id: warehouse.id,
        establishment_id: warehouse.establishment_id,
        description: warehouse.description,
        user_id: warehouse.users?.id
    }
}
const registerItemFetch = async (item: Warehouse) => {
    const response = await fetch(
        `${apiURL.value}/warehouses`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // Authorization: `Bearer ${userCookie.value.token}`,
            },
            body: JSON.stringify(sendWarehouse(item))
        }
    )
    if (response.ok) {
        snackbarStore.setStatus("success", "Guardado correctamente")
        await warehousesRefresh()
    } else {
        snackbarStore.setStatus("error", "Error", String(response))
    }
}

const updateItemFetch = async (item: Warehouse) => {
    const response = await fetch(
        `${apiURL.value}/warehouses`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                // Authorization: `Bearer ${userCookie.value.token}`,
            },
            body: JSON.stringify(sendWarehouse(item))
        }
    )
    if (response.ok) {
        snackbarStore.setStatus("success", "Editado correctamente")
        await warehousesRefresh()
    } else {
        snackbarStore.setStatus("error", "Error", String(response))
    }
}

const deleteItemFetch = async (id: number) => {
    const response = await fetch(
        `${apiURL.value}/warehouses/${id}`, { method: "DELETE" }
    )
    if (response.ok) {
        snackbarStore.setStatus("success", "Eliminado correctamente")
        await warehousesRefresh()
    } else {
        snackbarStore.setStatus("error", "Error", String(response))
    }
}
const save = () => {
    try {
        if (!warehousesFetch.value) return null
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
        if (!warehousesFetch.value) return null
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
</script>

<template>
    <v-container fluid v-if="warehousesFetch">
        <v-app-bar class="justify-center" flat append>
            <div class="justify-center mx-4">
                <v-icon class="me-1" icon="mdi-domain"></v-icon>
                <span class="subheading">Oficina / Áreas</span>
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
                    <v-data-table v-model:page="page" v-model="selected" :headers="headers" :items="warehousesFetch"
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
                <v-dialog v-model="dialog" :max-width="mobile ? '100%' : '50%'" transition="dialog-bottom-transition"
                    persistent>
                    <v-card>
                        <v-toolbar floating>
                            <v-toolbar-title>{{ nameTitleDialog }} </v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-btn icon="mdi-close" @click="dialog = false"></v-btn>
                        </v-toolbar>
                        <v-card-text>
                            <v-row>
                                <v-col cols="12" sm="12" md="12">
                                    <v-text-field v-model="editedItem.description"
                                        label="Descripción (*)"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="6" v-if="establishmentsFetch">
                                    <v-select v-model="editedItem.establishment_id" :items="establishmentsFetch"
                                        item-title="description" item-value="id" label="Establecimiento">
                                    </v-select>
                                </v-col>
                                <v-col cols="12" sm="6" md="6" v-if="usersFetch">
                                    <v-combobox v-model="editedItem.users" :items="usersFetch" item-title="name"
                                        item-value="id" label="Usuario">
                                    </v-combobox>
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