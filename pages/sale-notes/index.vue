<script lang="ts" setup>
import { useSnackbarStore } from '@/store/index';
const snackbarStore = useSnackbarStore()
// import type { Item, ItemLotsGroup } from "@/interfaces/Item.interface";
import type { Warehouse } from "~/interfaces/Warehouse.interface";
const apiURL = useCookie("apiURL");
import { useDisplay } from 'vuetify'
const { mobile } = useDisplay()
import { companyStore } from '@/store/company'
import type { Companies } from '~/interfaces/Company.interface';
import type { SaleNoteFetch, StateType } from '~/interfaces/SaleNotesFetch.interace';
const { data: saleNotesFetch, refresh: itemsRefresh } = await useFetch<SaleNoteFetch[]>(`${apiURL.value}/sales_notes`, { method: 'GET' });
const { data: warehousesFetch } = await useFetch<Warehouse[]>(`${apiURL.value}/warehouses`, { method: 'GET' });

const headers = ref([
    // { align: 'start', key: 'name', sortable: true, title: 'Especialidad', },
    { key: 'n', title: 'N°' },
    { key: 'date_of_issue', title: 'Fecha Emsión' },
    { key: 'customer_id', title: 'Cliente' },
    { key: 'series', title: 'Nota de venta' },
    { key: 'has_total_canceled', title: 'Estado Pago' },
    { key: 'total', title: 'Total' },
    { key: 'total_prepayment', title: 'Monto abonado' },
    { key: 'pending_amount', title: 'Saldo' },
    // { key: 'actions', title: 'Acciones' },
])

const page = ref(1)
const itemsPerPage = ref(10)
const search = ref('')
const selected = ref([])
const dialog = ref(false)
const dialogDelete = ref(false)
const editedItem = ref<SaleNoteFetch>()

const defaultItem = ref<SaleNoteFetch>()
let editedIndex = ref(-1)

const pageCount = computed(() => {
    if (!saleNotesFetch.value) return 1
    return Math.ceil(saleNotesFetch.value.length / itemsPerPage.value)
})

const nameTitleDialog = ref("")
const openDialogNewItem = () => {
    dialog.value = true
    nameTitleDialog.value = "Nueva nota de venta"
    editedItem.value = JSON.parse(JSON.stringify(defaultItem.value))
}

const openDialogEditItem = (item: SaleNoteFetch) => {
    if (!saleNotesFetch.value) return null
    dialog.value = true
    nameTitleDialog.value = "Editar nota de venta"
    // if (item.lots_enabled && item.item_lots_group) {
    //     item.item_lots_group.forEach(lot => {
    //         if (!lot.date_of_due) return
    //         let fechaOriginal = new Date(lot.date_of_due);
    //         lot.date_of_due = fechaOriginal.toISOString().split('T')[0]
    //     })
    // }
    editedItem.value = JSON.parse(JSON.stringify(item))
    editedIndex.value = saleNotesFetch.value.indexOf(item)
}

const openDialogDeleteItem = (item: SaleNoteFetch) => {
    if (!saleNotesFetch.value) return null
    dialogDelete.value = true
    nameTitleDialog.value = "Eliminar Especialidad"
    // editedIndex.value = saleNotesFetch.value.indexOf(item)
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

const itemSend = (item: SaleNoteFetch) => {
    // if (!item.warehouses) return
    // return {
    //     //DATA
    // }
}

const registerItemFetch = async (item: SaleNoteFetch) => await fetch(
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

const formatDate = (date: string) => {
    let fechaOriginal = new Date(date);
    // Obtener el día, mes y año por separado
    let day = fechaOriginal.getUTCDate();
    let month = fechaOriginal.getUTCMonth() + 1; // Los meses empiezan desde 0
    let year = fechaOriginal.getUTCFullYear();
    // Formatear la fecha en el formato DD/MM/YYYY
    let formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
}

const formatTime = (date: string) => {
    const fechaOriginal = new Date(date);
    const horas = fechaOriginal.getHours();
    const minutos = fechaOriginal.getMinutes();
    const segundos = fechaOriginal.getSeconds();

    // Obtener la cadena "a.m." o "p.m." según la hora
    const periodo = horas >= 12 ? 'p.m.' : 'a.m.';

    // Convertir la hora al formato de 12 horas
    const horas12 = horas % 12 || 12; // Si son las 0 horas, convertirlas a 12
    const formattedHour = `${horas12}:${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos} ${periodo}`;

    return formattedHour;
}

const updateItemFetch = async (item: SaleNoteFetch) => await fetch(
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
        if (!saleNotesFetch.value) return null

        if (editedIndex.value > -1) {
            // updateItemFetch(editedItem.value)
        } else {
            // registerItemFetch(editedItem.value)
        }
        closeDialogItem()
    } catch (error) {
        snackbarStore.setStatus("error", "Error", String(error))
    } finally {

        snackbarStore.setStatus("success", "Guardado correctamente")
    }
}
const deleteItemConfirm = () => {
    try {
        if (!saleNotesFetch.value) return null
        // deleteItemFetch(editedItem.value.id)

        closeDialogDeleteItem()
        nextTick(() => {
            editedItem.value = JSON.parse(JSON.stringify(defaultItem.value))
            editedIndex.value = -1
        })
    } catch (error) {
        snackbarStore.setStatus("error", "Error", String(error))
    } finally {
        snackbarStore.setStatus("success", "Eliminado correctamente")
    }

}
const tab = ref(null)

const exportItemsXLS = async () => {
    // try {
    //     const response = await fetch(`${apiURL.value}/export/items/`);
    //     if (!response.ok) {
    //         throw new Error('No se pudo descargar el archivo Excel');
    //     }
    //     const blob = await response.blob();
    //     const url = window.URL.createObjectURL(blob);
    //     const link = document.createElement('a');
    //     link.href = url;
    //     link.setAttribute('download', 'items.xlsx');
    //     document.body.appendChild(link);
    //     link.click();

    //     document.body.removeChild(link);
    // } catch (error) {
    //     console.error('Error al descargar el archivo Excel:', error);
    // }
}

const companyFetch = ref<Companies>()
const companyStoreObj = companyStore()
onMounted(async () => {
    companyFetch.value = companyStore().$state
    refreshData()
})
const refreshData = async () => {
    await companyStoreObj.requestItems()

}
const moneyDecimal = (x: string) => {
    return Number.parseFloat(x).toFixed(2);
}

const colorStateType: Record<StateType['id'], string> = {
    "1": 'default',//Registrado
    "2": 'blue',//Enviado
    "3": 'success',//Aceptado
    "4": 'purple',//Observado
    "5": 'secondary',//rechzado
    "6": 'red',//Anulado
    "7": 'orange',//Por anular
}
</script>

<template>
    <v-container fluid v-if="saleNotesFetch">
        <v-app-bar class="justify-center" flat append>
            <div class="justify-center mx-4">
                <v-icon class="me-1" icon="mdi-sale"></v-icon>
                <span class="subheading">Notas de ventas</span>
            </div>
            <v-spacer></v-spacer>
        </v-app-bar>
        <v-card class="justify-self-end mx-4" elevation="0">
            <v-container fluid>
                <v-row>
                    <v-col cols="12" class=" d-flex justify-center align-center">
                        <v-text-field v-model="search" append-inner-icon="mdi-magnify" label="Buscar"></v-text-field>
                        <v-spacer></v-spacer>
                        <!-- <v-btn append-icon="mdi-export" color="green" variant="flat"
                            @click="exportItemsXLS()">Exportar</v-btn>
                        <v-btn append-icon="mdi-plus-circle" color="primary" variant="flat"
                            @click="openDialogNewItem()">Nuevo</v-btn> -->
                    </v-col>
                </v-row>
                <v-row dense>
                    <v-data-table v-model:page="page" v-model="selected" :headers="headers" :items="saleNotesFetch"
                        :items-per-page="itemsPerPage" :search="search" class="elevation-1">
                        <template v-slot:item.n="{ index }">
                            {{ index + 1 + itemsPerPage * (page - 1) }}
                        </template>
                        <template v-slot:item.customer_id="{ item }">
                            <span>
                                <p> {{ item.raw.customer.name }}</p>
                                <div class="text-caption">{{ item.raw.customer.number }}</div>
                            </span>
                        </template>
                        <template v-slot:item.series="{ item }">
                            <p> {{ item.raw.series }} - {{ item.raw.number }}</p>
                            <v-chip size="x-small" :color="colorStateType[item.raw.state_type.id]">
                                {{ item.raw.state_type.description }}
                            </v-chip>
                        </template>

                        <template v-slot:item.date_of_issue="{ item }">
                            <p> {{ formatDate(item.raw.date_of_issue) }}</p>
                            <div class="text-caption"> {{ formatTime(item.raw.date_of_issue) }}</div>
                        </template>
                        <template v-slot:item.total="{ item }">
                            <p>{{ moneyDecimal(item.raw.total) }}</p>
                            <div class="text-caption">{{ item.raw.currency_type_id }}</div>
                        </template>
                        <template v-slot:item.has_total_canceled="{ item }">
                            <v-chip :color="item.raw.has_total_canceled ? 'success' : 'warning'"
                                class="font-weight-bold">
                                {{ item.raw.has_total_canceled ? "Pagado" : "Pendiente" }}
                            </v-chip>
                        </template>
                        <template v-slot:item.total_prepayment="{ item }">
                            <p>{{ moneyDecimal(item.raw.total_prepayment) }}</p>
                            <div class="text-caption">{{ item.raw.currency_type_id }}</div>
                        </template>
                        <template v-slot:item.pending_amount="{ item }">
                            <p>{{ moneyDecimal(item.raw.pending_amount) }}</p>
                            <div class="text-caption">{{ item.raw.currency_type_id }}</div>
                        </template>
                        <!-- <template v-slot:item.actions="{ item }">
                            <div class="justify-center ">
                                <v-btn class="me-2" rounded icon="mdi-pencil" color="yellow"
                                    @click="openDialogEditItem(item.raw)">
                                </v-btn>
                                <v-btn color="red" rounded icon="mdi-delete" @click="openDialogDeleteItem(item.raw)">
                                </v-btn>
                            </div>
                        </template> -->

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
                            </v-tabs>
                        </v-card-title>
                        <v-card-text>
                            <v-window v-model="tab">
                                <v-window-item value="general">
                                    <!-- <v-container>
                                        <v-row>
                                            <v-col cols="12" sm="6" md="6">
                                                <v-text-field v-model="editedItem.description"
                                                    label="Descripción (*)"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6">
                                                <v-text-field v-model="editedItem.second_name"
                                                    label="Nombre secundario"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="3">
                                                <v-text-field v-model="editedItem.model" label="Modelo"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="3">
                                                <v-select :items="companyFetch?.cat_unit_types" label="Unidad*"
                                                    :item-title="'description'" item-value="id"
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
                                            <v-col cols="12" sm="6" md="3"
                                                v-if="companyFetch && companyFetch.business_turns[0].active">
                                                <v-select :items="companyFetch?.cat_item_types"
                                                    v-model="editedItem.item_type_id" required
                                                    :item-title="'description'" item-value="id"
                                                    label="Tipo de producto">
                                                </v-select>
                                            </v-col>
                                        </v-row>
                                    </v-container> -->
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