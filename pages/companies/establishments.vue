<script lang="ts" setup>
import { useSnackbarStore } from '@/store/index';
import type { Items, Item, ItemLotsGroup } from "@/interfaces/Item.interface";
import type { Warehouse } from "~/interfaces/Warehouse.interface";
const snackbarStore = useSnackbarStore()
const apiURL = useCookie("apiURL");
import { useDisplay } from 'vuetify'
const { mobile } = useDisplay()
const { data: itemsFetch, refresh: itemsRefresh } = await useFetch<Item[]>(`${apiURL.value}/items`, { method: 'GET' });
const { data: warehousesFetch } = await useFetch<Warehouse[]>(`${apiURL.value}/warehouses`, { method: 'GET' });

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
    item_lots_group: [] as ItemLotsGroup[],
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
    item_lots_group: [] as ItemLotsGroup[],
    warehouses: { id: 1, description: "" },
    sale_unit_price: 1,
    purchase_unit_price: 1,
    type_commission: "",
    commission: 0
})
let editedIndex = ref(-1)

const pageCount = computed(() => {
    if (!itemsFetch.value) return 1
    return Math.ceil(itemsFetch.value.length / itemsPerPage.value)
})

const nameTitleDialog = ref("")
const openDialogNewItem = () => {
    dialog.value = true
    nameTitleDialog.value = "Nueva Producto"
    editedItem.value = JSON.parse(JSON.stringify(defaultItem.value))
}

const openDialogEditItem = (item: Item) => {
    if (!itemsFetch.value) return null
    dialog.value = true
    nameTitleDialog.value = "Editar Producto"
    if (item.lots_enabled && item.item_lots_group) {
        item.item_lots_group.forEach(lot => {
            if (!lot.date_of_due) return
            let fechaOriginal = new Date(lot.date_of_due);
            lot.date_of_due = fechaOriginal.toISOString().split('T')[0]
        })
    }
    editedItem.value = JSON.parse(JSON.stringify(item))
    editedIndex.value = itemsFetch.value.indexOf(item)
}

const openDialogDeleteItem = (item: Item) => {
    if (!itemsFetch.value) return null
    dialogDelete.value = true
    nameTitleDialog.value = "Eliminar Especialidad"
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
export interface ItemSend {
    id?: number;
    name: string;
    description: string;
    second_name: string;
    model: string;
    barcode: string;
    internal_id: string;
    stock: number;
    stock_min: number;
    active: boolean;
    status: boolean;
    lots_enabled: boolean;
    unit_type_id: string;
    category_id?: number | null;
    warehouse_id: number;
    sale_unit_price: number;
    purchase_unit_price: number;
    type_commission: string | null;
    commission: number | null;
    lots: Lot[];
}

export interface Lot {
    id?: number;
    item_id?: number;
    code: string;
    quantity: number;
    old_quantity?: number;
    date_of_due: string | null;
    create_at?: Date;
    update_at?: Date;
}

const itemSend = (item: Item) => {
    if (!item.warehouses) return
    return {
        id: item.id,
        name: item.name,
        description: item.description,
        second_name: item.second_name,
        model: item.model,
        barcode: item.barcode,
        internal_id: item.internal_id,
        stock: item.stock,
        stock_min: item.stock_min,
        active: item.active,
        status: item.status,
        lots_enabled: item.lots_enabled,
        unit_type_id: item.unit_type_id,
        category_id: item.category_id,
        warehouse_id: item.warehouses.id,
        sale_unit_price: item.sale_unit_price,
        purchase_unit_price: item.purchase_unit_price,
        type_commission: item.type_commission,
        commission: item.commission,
        lots: item.item_lots_group,
    }
}

const registerItemFetch = async (item: Item) => await fetch(
    `${apiURL.value}/items`,
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
});

const updateItemFetch = async (item: Item) => await fetch(
    `${apiURL.value}/items`,
    {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${userCookie.value.token}`,
        },
        body: JSON.stringify(itemSend(item))
    }
).finally(async () => {
    await itemsRefresh()
});

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
            updateItemFetch(editedItem.value)
        } else {
            registerItemFetch(editedItem.value)
            // itemsFetch.value.push(editedItem.value)
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
        // itemsFetch.value.splice(editedIndex.value, 1)
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
const newLotsOnClick = () => {
    if (!editedItem.value.item_lots_group) { return }
    editedItem.value.item_lots_group.push({
        id: 0,
        item_id: 0,
        code: '',
        quantity: 0,
        old_quantity: 0,
        date_of_due: null,
    })

}
const deleteLotOnClick = (index: number) => {
    if (!editedItem.value.item_lots_group) { return }
    editedItem.value.item_lots_group.splice(index, 1);
}
</script>

<template>
    <v-container fluid v-if="itemsFetch">
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
                <!-- {{ editedItem }} -->
                <v-row dense>
                    <v-data-table v-model:page="page" v-model="selected" :headers="headers" :items="itemsFetch"
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
                <v-dialog v-model="dialog" :max-width="mobile ? '100%' : '70%'" transition="dialog-bottom-transition"
                    persistent>
                    <v-card>
                        <v-toolbar color="primary" :title="nameTitleDialog"> </v-toolbar>
                        <v-card-title class="px-0 py-0">
                            <v-tabs v-model="tab" bg-color="primary">
                                <v-tab value="general">General</v-tab>
                                <v-tab value="lots" v-if="editedItem.lots_enabled">Lotes</v-tab>
                            </v-tabs>
                        </v-card-title>
                        <v-card-text>
                            <v-window v-model="tab">
                                <v-window-item value="general">
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" sm="6" md="6">
                                                <v-text-field v-model="editedItem.description"
                                                    label="Descripción (*)"></v-text-field>
                                            </v-col>
                                            <!-- <v-col cols="12" sm="6" md="8">
                                                <v-text-field v-model="editedItem.name"
                                                    label="Nombre des"></v-text-field>
                                            </v-col> -->
                                            <v-col cols="12" sm="6" md="6">
                                                <v-text-field v-model="editedItem.second_name"
                                                    label="Nombre secundario"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="3">
                                                <v-text-field v-model="editedItem.model" label="Modelo"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="3">
                                                <v-select :items="['NIU']" label="Unidad*"
                                                    v-model="editedItem.unit_type_id" required></v-select>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="3">
                                                <v-text-field v-model="editedItem.sale_unit_price"
                                                    label="Precio de venta x unidad"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="3">
                                                <v-text-field v-model="editedItem.purchase_unit_price"
                                                    label="Precio de compra x unidad"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="3">
                                                <v-select v-model="editedItem.warehouses" required
                                                    :items="warehousesFetch" :item-title="'description'" item-value="id"
                                                    label="Área">
                                                </v-select>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="3">
                                                <v-text-field v-model="editedItem.stock" label="Stock Inicial"
                                                    :disabled="editedItem.lots_enabled"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="3">
                                                <v-text-field v-model="editedItem.stock_min"
                                                    label="Stock Mínimo"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="3">
                                                <v-text-field v-model="editedItem.barcode"
                                                    label="Código de barra"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="3">
                                                <v-text-field v-model="editedItem.internal_id"
                                                    label="Código Interno"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="3">
                                                <v-checkbox v-model="editedItem.lots_enabled"
                                                    label="¿Maneja lote?"></v-checkbox>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="3">
                                                <v-checkbox v-model="editedItem.active" label="Habilitado"></v-checkbox>
                                            </v-col>

                                            <!-- <v-col cols="12" sm="6" md="3">
                                                <v-text-field type="date" label="Date"></v-text-field>
                                            </v-col> -->
                                            <!-- <v-col cols="12" sm="6" md="4">
                                                <v-select v-model="editedItem.type_commission"
                                                    :items="['Dinero', 'Porcentaje']"
                                                    label="Tipo de comisión"></v-select>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.commission"
                                                    label="Comisión"></v-text-field>
                                            </v-col> -->
                                            <!-- <v-col cols="12" sm="6" md="4">
                                                <v-switch v-model="editedItem.active" color="success"
                                                    label="Habilitado"></v-switch>
                                            </v-col> -->
                                        </v-row>
                                    </v-container>
                                </v-window-item>
                                <v-window-item value="lots">
                                    <v-card-title class="d-flex">
                                        Lotes
                                        <v-spacer></v-spacer>
                                        <v-btn color="success" @click="newLotsOnClick">
                                            <v-icon icon="mdi-plus-circle"></v-icon>
                                            <div v-if="!mobile"> Nuevo</div>
                                        </v-btn>
                                    </v-card-title>
                                    <div v-for="(lot, index ) in  editedItem.item_lots_group" :key="index"
                                        :class="mobile ? 'py-4' : ''">
                                        <v-row class="d-flex" :class="mobile ? 'bg-blue-grey-lighten-5' : ''">
                                            <v-col cols="12" xs="12" md="3" lg="3" :class="mobile ? 'pb-0' : ''">
                                                <v-text-field label="Lote" placeholder="LOTE-001" v-model="lot.code">
                                                </v-text-field>
                                            </v-col>
                                            <v-col cols="12" xs="12" md="3" lg="3" :class="mobile ? 'py-0' : ''">
                                                <v-text-field label="Cantidad" placeholder="10" v-model="lot.quantity">
                                                </v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="3">
                                                <v-text-field type="date" label="Fecha de Vencimiento"
                                                    v-model="lot.date_of_due"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="3" v-if="lot.id === 0">
                                                <v-btn icon="mdi-delete" color="error" @click="deleteLotOnClick(index)">
                                                </v-btn>
                                            </v-col>
                                            <!-- {{ lot.id }},{{ lot.item_id }},{{ lot.code }} -->
                                            <!-- <v-col cols="12" xs="12" md="2" lg="2"
                                                class="d-flex aling-center justify-center"
                                                :class="mobile ? 'py-0' : ''">
                                                <v-spacer></v-spacer>
                                                <v-spacer></v-spacer>
                                                
                                                <v-spacer></v-spacer>
                                            </v-col> -->

                                        </v-row>

                                    </div>
                                    <!-- <p>{{ editedItem }}</p> -->
                                    <!-- <p>-----------------</p> -->
                                    <!-- <p>{{ editedItemLotsGroup }}</p> -->

                                </v-window-item>
                            </v-window>
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