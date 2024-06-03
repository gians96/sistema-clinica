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
import type { SaleNoteFetch, StateType, Customer, SaleNoteItem, SaleNotePayment } from '~/interfaces/SaleNotesFetch.interace';
const { data: saleNotesFetch, refresh: saleNotesRefresh } = await useFetch<SaleNoteFetch[]>(`${apiURL.value}/sales_notes`, { method: 'GET' });
const { data: warehousesFetch } = await useFetch<Warehouse[]>(`${apiURL.value}/warehouses`, { method: 'GET' });
import type { paymentPOS } from '~/interfaces/Item.interface';
const companyFetch = ref<Companies>()
const companyStoreObj = companyStore()
onMounted(async () => {
    companyFetch.value = companyStore().$state
})
const headers = ref([
    // { align: 'start', key: 'name', sortable: true, title: 'Especialidad', },
    { key: 'customer.number', title: 'N°' },
    { key: 'date_of_issue', title: 'Fecha Emsión' },
    { key: 'customer', title: 'Cliente', value: (item: any) => `${item.customer.name} - ${item.customer.number}` },
    { key: 'series', title: 'Nota de venta', value: (item: any) => `${item.series} - ${item.number}` },
    { key: 'has_total_canceled', title: 'Estado Pago' },
    { key: 'total', title: 'Total' },
    { key: 'total_prepayment', title: 'Monto abonado' },
    { key: 'pending_amount', title: 'Saldo' },
    { key: 'actions', title: 'Acciones', value: "" },
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


const dateNow = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Agrega cero a la izquierda si es necesario
    const day = String(currentDate.getDate()).padStart(2, '0'); // Agrega cero a la izquierda si es necesario
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate
}

const formatDate = (date: string) => {
    const currentDate = new Date(date);
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Agrega cero a la izquierda si es necesario
    const day = String(currentDate.getDate()).padStart(2, '0'); // Agrega cero a la izquierda si es necesario
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

const saveMethodsPayments = async () => {
    // console.log("ENTRA");
    if (!getSaleNote.value) throw Error("")
    getSaleNote.value.sale_note_payments.forEach(payment => {
        if (!payment.date_of_payment) return
        payment.date_of_payment = new Date(payment.date_of_payment).toISOString().split('T')[0];

    })
    const response = await fetch(`${apiURL.value}/sales_notes/payments`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // Authorization: `Bearer ${userCookie.value.token}`,
            },
            body: JSON.stringify(getSaleNote.value)
        }
    ).finally(async () => {
        // await dialogListPaymentSaleNote(getSaleNote.value?.id ?? 0)
    });
    if (response.ok) {
        snackbarStore.setStatus("success", "Se ha guardado correctamente:")
        dialogListPayments.value = false
        saleNotesRefresh()
        return response.ok
    } else {
        snackbarStore.setStatus("error", "Error al guardar",)
        console.error('Error al obtener los datos:', response);
    }
}

const deletePayment = async (id: number) => {
    const response = await fetch(`${apiURL.value}/sales_notes/payments/${id}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                // Authorization: `Bearer ${userCookie.value.token}`,
            },
        }
    )
    if (response.ok) {
        return response.ok
    } else {
        return
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

const formatPrintType = (item: SaleNoteItem) => {

    let description = item.item.description.toString()
    let itemTypeId = item.item_type_id
    let allDescription = {}
    console.log(itemTypeId);
    if (!itemTypeId) {
        return allDescription = {
            text: description,
            style: { fontSize: 11, alignment: "left" }
        }
    }
    if (itemTypeId === 1) {
        allDescription = {
            text: description + `\nN° Pollos: ${item.quantity_chicken}\nPeso promedio: ${item.average_weight}`,
            style: { fontSize: 11, alignment: "left" }
        }
    }
    if (itemTypeId === 2) {
        allDescription = {
            text: description + `\nN° Pollos: ${item.quantity_chicken}\nN° Jaba: ${item.quantity_box}\nPeso bruto: ${item.gross_weight}\nTara: ${item.tare}`,
            style: { fontSize: 11, alignment: "left" }
        }
    }
    if (itemTypeId === 3) {
        allDescription = {
            text: description + `\nN° Pollos: ${item.quantity_chicken}`,
            style: { fontSize: 11, alignment: "left" }
        }
    }
    return allDescription
    // return {
    //     text: `F\nAdditional Data 1: ${item.additionalData1}\nAdditional Data 2: ${item.additionalData2}\nAdditional Data 3: ${item.additionalData3}`,
    //     style: { fontSize: 11, alignment: "left" }
    // },
}

const printItems = (items: SaleNoteItem[]) => {
    const header = [
        { text: "DESCRIPCIÓN", style: { fontSize: 12, bold: true, alignment: "center" } },
        { text: "UNIDAD", style: { fontSize: 12, bold: true, alignment: "center" } },
        { text: "CANTIDAD", style: { fontSize: 12, bold: true, alignment: "center" } },
        { text: "P. UNI", style: { fontSize: 12, bold: true, alignment: "center" } },
        { text: "TOTAL", style: { fontSize: 12, bold: true, alignment: "center" } }
    ];
    if (!items) return [header]
    return [header,
        ...items.map(item => {
            return [
                // { text: item.item.description.toString(), style: { fontSize: 11, alignment: "center" } },
                formatPrintType(item),
                { text: item.unit_type_id.toString(), style: { fontSize: 11, alignment: "center" } },
                { text: item.quantity.toString(), style: { fontSize: 11, alignment: "center" } },
                { text: moneyDecimal(item.unit_price.toString()), style: { fontSize: 11, alignment: "center" } },
                { text: "S/." + moneyDecimal(item.total.toString()), style: { fontSize: 11, bold: true, alignment: "center" } }
            ];
        })
    ]
};


const dialogListPayments = ref(false)
const getSaleNote = ref<SaleNoteFetch>()
const onClickAddPaymentMethods = () => {
    if (!getSaleNote.value) throw Error("Sale note vacio")
    getSaleNote.value.sale_note_payments.push(
        {
            id: 0,
            sale_note_id: 0,
            date_of_payment: dateNow(),
            payment_method_type_id: 1,
            reference: "",
            payment: 0,
            change: null
        }
    )
}
const dialogListPaymentSaleNote = async (id: number) => {
    if (!id) throw Error("El id no es vacio:")
    const response = await fetch(`${apiURL.value}/sales_notes/get/${id}`, { method: "GET" })
    if (!response.ok) return
    dialogListPayments.value = true
    const saleNotes = await response.json()
    getSaleNote.value = saleNotes as SaleNoteFetch

    getSaleNote.value.sale_note_payments.forEach(payment => {
        if (!payment.date_of_payment) return
        payment.date_of_payment = new Date(payment.date_of_payment).toISOString().split('T')[0];
    })
}


const printTransfer = async (id: number) => {
    if (!id) throw Error("El id no es vacio:")
    const response = await fetch(`${apiURL.value}/sales_notes/get/${id}`, { method: "GET" })
    if (!response.ok) return
    const saleNotes = await response.json()

    // const saleNotes: SaleNoteFetch = {}
    let fecha = formatDate(saleNotes.create_at.toString()) + " " + formatTime(saleNotes.create_at.toString())
    const pdfMake = usePDFMake();
    pdfMake.tableLayouts = {
        custom: {
            paddingLeft: function () {
                return 5;
            },
            paddingRight: function () {
                return 5;
            },
        },
    };
    let isVoided = {
        text: 'ANULADO',
        absolutePosition: { x: 100, y: 300 },
        alignment: 'center', // Centrar el texto
        fontSize: 70, // Tamaño de la fuente
        color: 'red', // Color del texto
    }

    pdfMake.createPdf({
        pageSize: 'A4',
        pageMargins: [35, 50, 35, 50],
        content: [
            saleNotes.state_type_id === 6 ? isVoided : {},
            {
                columns: [
                    {
                        text: ""
                    },
                    // {
                    //     // image: logo,
                    //     width: 100,
                    //     alignment: "center"
                    // },
                    {
                        text: ""
                    },
                    [{
                        text: 'R.U.C. ' + companyFetch.value?.companies.number,
                        style: { fontSize: 14, bold: true, alignment: "center" },
                        margin: [0, 0, 0, 5],
                    }, {
                        text: companyFetch.value?.companies.name,
                        style: { fontSize: 10, bold: true, alignment: "center" },
                        margin: [0, 0, 0, 2],
                    }, {
                        text: "NOTA DE VENTA",
                        style: { fontSize: 14, bold: true, alignment: "center" },
                        margin: [0, 0, 0, 5],
                    },
                    {
                        text: saleNotes.series + " - " + saleNotes.number,
                        style: { fontSize: 14, bold: true, alignment: "center" },
                        margin: [0, 0, 0, 35],
                    },]
                ],
            },
            {
                text: `Cliente: ${saleNotes.customer.name}`,
                margin: [0, 0, 0, 5],
                style: { fontSize: 12, bold: true, alignment: "left" },
            },
            {
                text: `DNI/RUC: ${saleNotes.customer.number}`,
                margin: [0, 0, 0, 5],
                style: { fontSize: 12, bold: true, alignment: "left" },
            },
            {
                text: `FECHA: ${fecha}`,
                margin: [0, 0, 0, 20],
                style: { fontSize: 12, bold: true, alignment: "left" },
            },
            {
                // layout: "custom",
                table: {
                    heights: 1,
                    widths: [200, '*', '*', '*', '*'],
                    margin: [50, 0, 0, 50],

                    alignment: "center",
                    body: printItems(saleNotes.sale_note_items),
                },
            }, {
                text: ""
            },
            {
                columns: [
                    {
                        text: ""
                    },
                    {
                        text: ""
                    },
                    [{
                        text: "TOTAL: S/." + moneyDecimal(saleNotes.total),
                        style: { fontSize: 14, bold: true, alignment: "right" },
                        margin: [0, 20, 0, 0],
                    }]
                ],
            }
        ],
    }).print()
    // modalPrecuenta.value = true
};
// const paymentsMethodTypes = ref<paymentPOS[]>([])
const onClickDeletePaymentMethods = async (index: number) => {
    if (!getSaleNote.value) throw Error("Hubo un error al eliminar")
    if (!getSaleNote.value?.sale_note_payments) throw Error("No hay que borrar")
    if (!getSaleNote.value?.sale_note_payments[index].id) {
        getSaleNote.value.sale_note_payments.splice(index, 1);
        return
    }
    let response = await deletePayment(getSaleNote.value?.sale_note_payments[index].id)
    if (response) {
        snackbarStore.setStatus("success", "Eliminado correctamente:")
        getSaleNote.value.sale_note_payments.splice(index, 1);
        saleNotesRefresh()
    } else {
        // La solicitud falló, maneja el error
        snackbarStore.setStatus("error", "Error al guardar",)
        console.error('Error al obtener los datos:', response);
    }
}

const mountPay = () => {
    if (!getSaleNote.value?.sale_note_payments) return 0
    if (getSaleNote.value?.sale_note_payments.length > 0 && getSaleNote.value?.total > 0) {
        return getSaleNote.value?.sale_note_payments.reduce((acumulador, data) => {
            return acumulador + Number(data.payment)
        }, 0)
    }
}
const accountsReceivable = () => {
    if (!getSaleNote.value?.sale_note_payments) return 0
    if (getSaleNote.value?.total <= (mountPay() ?? 0)) return 0
    return getSaleNote.value?.total - (mountPay() ?? 0)
}
</script>

<template>
    <v-container fluid v-if="saleNotesFetch">
        <v-app-bar class="justify-center" flat append>
            <div class="justify-center mx-4">
                <v-icon class="me-1" icon="mdi-cash-sync"></v-icon>
                <span class="subheading">Cuentas por cobrar</span>
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
                    <v-data-table v.-fi v-model:page="page" v-model="selected" :headers="headers"
                        :items="saleNotesFetch" :items-per-page="itemsPerPage" :search="search" class="elevation-1">
                        <template v-slot:item.customer.number="{ index }">
                            {{ index + 1 + itemsPerPage * (page - 1) }}
                        </template>
                        <template v-slot:item.customer="{ item }">
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
                                class="font-weight-bold" @click="dialogListPaymentSaleNote(item.raw.id)">
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
                        <template v-slot:item.actions="{ item }">
                            <v-tooltip>
                                <template v-slot:activator="{ props }">
                                    <v-btn v-bind="props" class="me-2" rounded icon="mdi-file" color="blue-grey"
                                        @click="printTransfer(item.raw.id)">
                                    </v-btn>
                                </template>
                                <span>Imprimir</span>
                            </v-tooltip>
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
                <!-- DIALGO LIST PAYMENT SALE NOTES -->
                <v-dialog v-model="dialogListPayments" v-if="getSaleNote?.sale_note_payments"
                    :max-width="mobile ? '100%' : '65%'" persistent>
                    <v-toolbar color="primary" floating>
                        <v-toolbar-title>Listado de pagos:
                            <v-btn variant="flat" icon="mdi-add" color="success" @click="onClickAddPaymentMethods()">
                            </v-btn></v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn icon="mdi-close" variant="elevated" @click="dialogListPayments = false"></v-btn>
                    </v-toolbar>
                    <v-card>
                        <v-card-title>
                            <p> {{ getSaleNote.series }} - {{ getSaleNote.number }} </p>
                            <p> {{ getSaleNote.customer.number }} - {{ getSaleNote.customer.name }} </p>
                        </v-card-title>
                        <v-card-text v-if="companyFetch">
                            <div v-if="getSaleNote?.sale_note_payments.length !== 0"
                                v-for="(payment, index) in getSaleNote?.sale_note_payments" :key="index"
                                :class="mobile ? 'py-4' : ''">
                                <v-row justify="center" class="d-flex" :class="mobile ? 'bg-blue-grey-lighten-5' : ''">
                                    <v-col cols="12" xs="12" md="3" lg="3" :class="mobile ? 'pb-0' : ''">
                                        <v-select class="inline select-box" :items="companyFetch.payment_method_types"
                                            v-model="payment.payment_method_type_id" label="Método de pago"
                                            variant="outlined" item-title="description" item-value="id">
                                        </v-select>
                                    </v-col>
                                    <v-col cols="12" xs="12" md="2" lg="2" :class="mobile ? 'py-0' : ''">
                                        <v-text-field label="Ingrese monto" placeholder="0.00" v-model="payment.payment"
                                            type="number">
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" xs="12" md="3" lg="3" :class="mobile ? 'py-0' : ''">
                                        <v-text-field type="date" label="Fecha de pago"
                                            v-model="payment.date_of_payment"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" xs="12" md="3" lg="3" :class="mobile ? 'py-0' : ''">
                                        <v-text-field label="Referencia" v-model="payment.reference">
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" xs="12" md="1" lg="1" class="d-flex aling-center justify-center"
                                        :class="mobile ? 'py-0' : ''">
                                        <v-btn @click="onClickDeletePaymentMethods(index)" variant="flat"
                                            icon="mdi-delete" color="red">
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </div>
                            <v-row>
                                <v-col cols="12" class="d-flex justify-end align-end">SALDO: S/.
                                    {{ moneyDecimal(accountsReceivable().toString()) }}
                                </v-col>
                                <v-col cols="12" class="py-0 d-flex justify-end align-end">MONTO PAGADO: S/.
                                    {{ moneyDecimal(String(mountPay())) }}
                                </v-col>
                                <v-col cols="12" class="d-flex justify-end align-end">
                                    <span class="font-weight-bold">
                                        TOTAL: S/.{{ moneyDecimal(String(getSaleNote.total)) }}
                                    </span>
                                </v-col>
                            </v-row>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="success" variant="elevated" @click="saveMethodsPayments()">Guardar
                            </v-btn>
                        </v-card-actions>
                        <v-btn position="fixed" width="50px" height="50px" border location="bottom left"
                            v-if="(mobile ? 'true' : false)" variant="elevated" color="success"
                            @click="onClickAddPaymentMethods()" icon="mdi-add" id="id-btn">
                        </v-btn>
                    </v-card>
                </v-dialog>
                <!-- DIALOG -->
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

<style>
#id-btn {
    height: 38px;
    bottom: 20px !important;
    left: 20px !important;
}
</style>