<script lang="ts" setup>
import { computed } from 'vue'
import { useSnackbarStore } from '@/store/index';
import type { TransferFetch, Transfer, Warehouse } from "@/interfaces/Transfers.interface";
import type { Warehouses } from "~/interfaces/Warehouse.interface";
import type { Items, Item, ItemLotsGroup } from "@/interfaces/Item.interface";

const snackbarStore = useSnackbarStore()
const apiURL = useCookie("apiURL");
import { useDisplay } from 'vuetify'
const { mobile } = useDisplay()
const { data: transferFetch, refresh: transferRefresh } = await useFetch<TransferFetch>(`${apiURL.value}/inventory/transfers`, { method: 'GET' });
const { data: warehousesFetch } = await useFetch<Warehouses>(`${apiURL.value}/warehouses`, { method: 'GET' });
const { data: itemsFetch, refresh: itemsRefresh } = await useFetch<Items>(`${apiURL.value}/items`, { method: 'GET' });


const headers = ref([
    // { align: 'start', key: 'name', sortable: true, title: 'Especialidad', },
    { key: 'n', title: 'N°' },
    { key: 'id', title: 'ID' },
    { key: 'series', title: 'Serie' },
    { key: 'number', title: 'Numeración' },
    { key: 'warehouse_origin.description', title: 'Oficina Origen' },
    { key: 'warehouse_destination.description', title: 'Oficina Destino' },
    { key: 'quantity', title: 'Cant. Productos' },
    { key: 'actions', title: 'Acciones' },
])


const page = ref(1)
const itemsPerPage = ref(10)
const search = ref('')
const selected = ref([])
const dialog = ref(false)
const dialogDelete = ref(false)
const editedItem = ref<Transfer>({
    id: 0,
    series: '',
    number: 0,
    description: '',
    quantity: 0,
    details: "",
    warehouse_origin: { id: 1 } as Warehouse,
    warehouse_destination: { id: 1 } as Warehouse,
    inventory_transfer_items: []
})

const defaultItem = ref<Transfer>({
    id: 0,
    series: '',
    number: 0,
    description: '',
    quantity: 0,
    details: "",
    warehouse_origin: { id: 1 } as Warehouse,
    warehouse_destination: { id: 1 } as Warehouse,
    inventory_transfer_items: []
})


const idItem = ref<number | null>()
const idLote = ref<number | null>()
const cantTransfer = ref<number>(0)
const itemSelected = computed<Item | null>(() => {
    if (!idItem.value) return null
    return itemsFetch.value?.response.filter(item => item.id === idItem.value)[0] as Item
})

const lotSelected = computed<ItemLotsGroup | null>(() => {
    if (!itemSelected.value?.item_lots_group) return null
    if (!idLote.value || !itemSelected.value?.lots_enabled) return null
    return itemSelected.value?.item_lots_group.filter(item => item.id === idLote.value)[0] as ItemLotsGroup
})
const stockSelected = computed<number | 0>(() => {
    if (!itemSelected.value) return 0
    if (itemSelected.value.lots_enabled) {
        if (!lotSelected.value) return 0
        return lotSelected.value.quantity
    } else {
        return itemSelected.value.stock
    }
    return 0
})


let editedIndex = ref(-1)

const pageCount = computed(() => {
    if (!transferFetch.value) return 1
    return Math.ceil(transferFetch.value.response.length / itemsPerPage.value)
})

const nameTitleDialog = ref("")
const openDialogNewItem = () => {
    dialog.value = true
    nameTitleDialog.value = "Nueva Transferencia"
    cantTransfer.value = 0
    idItem.value = null
    idLote.value = null
    editedItem.value = JSON.parse(JSON.stringify(defaultItem.value))
}

const openDialogEditItem = (item: Item) => {
    if (!itemsFetch.value) return null
    dialog.value = true
    nameTitleDialog.value = "Editar Producto"
    if (item.lots_enabled && item.item_lots_group) {
        item.item_lots_group.forEach(lot => {
            if (!lot.date_of_due) return
            var fechaOriginal = new Date(lot.date_of_due);
            lot.date_of_due = fechaOriginal.toISOString().split('T')[0]
        })
    }
    editedItem.value = JSON.parse(JSON.stringify(item))
    editedIndex.value = itemsFetch.value.response.indexOf(item)
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
export interface TransferSend {
    warehouse_origin_id: number;
    warehouse_destination_id: number;
    description: string;
    lots: Lot[];
}

export interface Lot {
    item_lots_group_id: number;
    quantity: number;
}

const itemSend = (item: Transfer) => {
    // if (!item.warehouses) return
    return {
        warehouse_origin_id: item.warehouse_origin.id,
        warehouse_destination_id: item.warehouse_destination.id,
        description: item.description,
        items: item.inventory_transfer_items

    }
}

const registerItemFetch = async (item: Transfer) => await fetch(
    `${apiURL.value}/inventory/transfers`,
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${userCookie.value.token}`,
        },
        body: JSON.stringify(itemSend(item))
    }
).finally(async () => {
    await itemsRefresh()
    await transferRefresh()
});

// const updateItemFetch = async (item: Item) => await fetch(
//     `${apiURL.value}/items`,
//     {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json",
//             // Authorization: `Bearer ${userCookie.value.token}`,
//         },
//         body: JSON.stringify(itemSend(item))
//     }
// ).finally(async () => {
//     await itemsRefresh()
// });

const deleteItemFetch = async (id: number) => await fetch(
    `${apiURL.value}/items/${id}`,
    {
        method: "DELETE",
    }
).finally(async () => {
    await itemsRefresh()
});

const save = () => {
    try {
        if (!itemsFetch.value) return null
        if (editedIndex.value > -1) {
            // itemsFetch.value = JSON.parse(JSON.stringify(editedItem.value))
            // updateItemFetch(editedItem.value)
        } else {
            registerItemFetch(editedItem.value)
            // itemsFetch.value.response.push(editedItem.value)
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
        deleteItemFetch(editedItem.value.id)
        // itemsFetch.value.response.splice(editedIndex.value, 1)
        closeDialogDeleteItem()
        nextTick(() => {
            editedItem.value = JSON.parse(JSON.stringify(defaultItem.value))
            editedIndex.value = -1
        })
    } catch (error) {
        snackbarStore.setStatus("error", "Error", error)
    } finally {
        snackbarStore.setStatus("success", "Eliminado correctamente")
    }

}
const tab = ref(null)
const addItems = () => {
    let idLote: any = null
    let date_of_due: any = null
    let description: string = ''
    if (!itemSelected.value) { return }
    description = itemSelected.value.description
    if (itemSelected.value.lots_enabled) {
        if (!lotSelected.value) return
        if (!lotSelected.value.date_of_due) return
        idLote = lotSelected.value.id
        let fechaOriginal = new Date(lotSelected.value.date_of_due);
        lotSelected.value.date_of_due = fechaOriginal.toISOString().split('T')[0]
        date_of_due = lotSelected.value.date_of_due
        description = description + ' | ' + lotSelected.value.code + ' | ' + new Date(date_of_due).toLocaleDateString('es-ES');
    }
    editedItem.value.inventory_transfer_items.push({
        lots_enabled: itemSelected.value.lots_enabled,
        item_id: itemSelected.value?.id,
        description: description,
        date_of_due: date_of_due,
        item_lots_group_id: idLote,
        quantity: cantTransfer.value
    })

}
const deleteItemOnClick = (index: number) => {
    if (!editedItem.value.inventory_transfer_items) { return }
    editedItem.value.inventory_transfer_items.splice(index, 1);
}
</script>

<template>
    <v-container fluid v-if="itemsFetch">
        <v-app-bar class="justify-center" flat append>
            <div class="justify-center mx-4">
                <v-icon class="me-1" icon="mdi-pill-multiple"></v-icon>
                <span class="subheading">Transferencia</span>
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
                    <v-data-table v-model:page="page" v-model="selected" :headers="headers"
                        :items="transferFetch?.response" :items-per-page="itemsPerPage" :search="search"
                        class="elevation-1">
                        <template v-slot:item.n="{ index }">
                            {{ index + 1 + itemsPerPage * (page - 1) }}
                        </template>

                        <template v-slot:item.active="{ item }">
                            <v-checkbox-btn v-model="item.raw.active" disabled></v-checkbox-btn>
                        </template>

                        <template v-slot:item.actions="{ item }">
                            <div class="justify-center ">

                                <v-btn class="me-2" rounded icon="mdi-file" color="blue-grey"
                                    @click="openDialogEditItem(item.raw)">
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
                <v-dialog v-model="dialog" :max-width="mobile ? '100%' : '70%'" transition="dialog-bottom-transition"
                    persistent>
                    <v-card>
                        <v-toolbar color="primary" :title="nameTitleDialog"> </v-toolbar>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="6" md="3">
                                    <v-select v-model="editedItem.warehouse_origin.id" required
                                        :items="warehousesFetch?.response" :item-title="'description'" item-value="id"
                                        label="Oficina Origen">
                                    </v-select>
                                </v-col>
                                <v-col cols="12" sm="6" md="3">
                                    <v-select v-model="editedItem.warehouse_destination.id" required
                                        :items="warehousesFetch?.response" :item-title="'description'" item-value="id"
                                        label="Oficina Destino">
                                    </v-select>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                    <v-text-field v-model="editedItem.description"
                                        label="Descripción (*)"></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12" sm="12" md="12" class="py-0">
                                    <p class="pb-0"> Producto </p>
                                </v-col>
                                <v-col cols="12" sm="6" md="3">
                                    <v-autocomplete v-model="idItem" required :items="itemsFetch?.response"
                                        :item-title="'description'" item-value="id" label="Producto">
                                    </v-autocomplete>
                                </v-col>
                                <v-col cols="12" sm="6" md="3" v-if="itemSelected?.lots_enabled">
                                    <v-autocomplete v-model="idLote" required :items="itemSelected.item_lots_group"
                                        :item-title="'code'" item-value="id" label="Lote">
                                    </v-autocomplete>
                                </v-col>
                                <v-col cols="12" sm="6" md="2" v-if="itemSelected">
                                    <v-text-field disabled v-model="stockSelected"
                                        label="Cantidad actual"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="2" v-if="itemSelected">
                                    <v-text-field v-model="cantTransfer" label="Cantidad a trasladar"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="2" v-if="itemSelected">
                                    <v-btn color="success" @click="addItems">
                                        <v-icon icon="mdi-plus-circle"></v-icon>
                                        <div v-if="!mobile"> Agregar</div>
                                    </v-btn>
                                </v-col>
                            </v-row>
                            <v-row>

                                <v-col cols="12" sm="12" md="12" class="py-0">
                                    <p class="pb-0"> Productos a transferir </p>
                                </v-col>
                            </v-row>

                            <div v-for="(item, index ) in  editedItem.inventory_transfer_items" :key="index"
                                :class="mobile ? 'py-4' : ''">
                                <v-row class="d-flex" :class="mobile ? 'bg-blue-grey-lighten-5' : ''">
                                    <v-col cols="12" xs="12" md="3" lg="5" :class="mobile ? 'pb-0' : ''">
                                        <v-text-field label="Lote" disabled placeholder="LOTE-001"
                                            v-model="item.description">
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" xs="12" md="3" lg="3" :class="mobile ? 'py-0' : ''">
                                        <v-text-field label="Cantidad" placeholder="10" v-model="item.quantity">
                                        </v-text-field>
                                    </v-col>
                                    <!-- <v-col cols="12" sm="6" md="3">
                                        <v-text-field type="date" label="Fecha de Vencimiento"
                                            v-model="item.date_of_due"></v-text-field>
                                    </v-col> -->
                                    <v-col cols="12" sm="6" md="1">
                                        <v-btn icon="mdi-delete" color="error" @click="deleteItemOnClick(index)">
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-container>

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