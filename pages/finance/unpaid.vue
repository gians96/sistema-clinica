<script lang="ts" setup>
import { useSnackbarStore } from '@/store/index';
const snackbarStore = useSnackbarStore()
import type { Warehouse } from "~/interfaces/Warehouse.interface";
const apiURL = useCookie("apiURL");
import { useDisplay } from 'vuetify'
const { mobile } = useDisplay()
import { companyStore } from '@/store/company'
import type { Companies } from '~/interfaces/Company.interface';
import type { Unpaid, SaleNote, StateType } from '~/interfaces/Unpaid.interface';
const { data: unpaidFetch, refresh: saleNotesRefresh } = await useFetch<Unpaid[]>(`${apiURL.value}/finance/unpaid`, { method: 'GET' });
const companyFetch = ref<Companies>()
onMounted(async () => {
    companyFetch.value = companyStore().$state
})
const headers = ref([
    // { align: 'start', key: 'name', sortable: true, title: 'Especialidad', },
    { key: 'customer.number', title: 'N°' },
    { key: 'customer', title: 'Cliente', value: (item: any) => `${item.customer.name} - ${item.customer.number}` },
    // { key: 'series', title: 'Nota de venta', value: (item: any) => `${item.series} - ${item.number}` },
    { key: 'pending_amount', title: 'Por pagar' },
    { key: 'total', title: 'Total' },
    { key: 'actions', title: 'Acciones', value: "" },
])

const page = ref(1)
const itemsPerPage = ref(10)
const search = ref('')
const selected = ref([])
const dialogDelete = ref(false)
const editedItem = ref<Unpaid>()

const defaultItem = ref<Unpaid>()
let editedIndex = ref(-1)

const pageCount = computed(() => {
    if (!unpaidFetch.value) return 1
    return Math.ceil(unpaidFetch.value.length / itemsPerPage.value)
})



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


const saveMethodsPayments = async () => {
    if (!customerSelected.value) throw Error("")
    // customerSelected.value.sale_note_payments.forEach(payment => {
    //     if (!payment.date_of_payment) return
    //     payment.date_of_payment = new Date(payment.date_of_payment).toISOString().split('T')[0];

    // })
    const response = await fetch(`${apiURL.value}/sales_notes/payments`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // Authorization: `Bearer ${userCookie.value.token}`,
            },
            body: JSON.stringify(customerSelected.value)
        }
    )
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

const formatPrintType = (item: Unpaid) => {

    // let description = item.item.description.toString()
    // let itemTypeId = item.item_type_id
    let allDescription = {}
    // console.log(itemTypeId);
    // if (!itemTypeId) {
    //     return allDescription = {
    //         text: description,
    //         style: { fontSize: 11, alignment: "left" }
    //     }
    // }
    // if (itemTypeId === 1) {
    //     allDescription = {
    //         text: description + `\nN° Pollos: ${item.quantity_chicken}\nPeso promedio: ${item.average_weight}`,
    //         style: { fontSize: 11, alignment: "left" }
    //     }
    // }
    // if (itemTypeId === 2) {
    //     allDescription = {
    //         text: description + `\nN° Pollos: ${item.quantity_chicken}\nN° Jaba: ${item.quantity_box}\nPeso bruto: ${item.gross_weight}\nTara: ${item.tare}`,
    //         style: { fontSize: 11, alignment: "left" }
    //     }
    // }
    // if (itemTypeId === 3) {
    //     allDescription = {
    //         text: description + `\nN° Pollos: ${item.quantity_chicken}`,
    //         style: { fontSize: 11, alignment: "left" }
    //     }
    // }
    return allDescription
    // return {
    //     text: `F\nAdditional Data 1: ${item.additionalData1}\nAdditional Data 2: ${item.additionalData2}\nAdditional Data 3: ${item.additionalData3}`,
    //     style: { fontSize: 11, alignment: "left" }
    // },
}

const dialogListPayments = ref(false)
const customerSelected = ref<Unpaid>()
const onClickAddPaymentMethods = () => {
    if (!customerSelected.value) throw Error("Sale note vacio")
    // customerSelected.value.sale_note_payments.push(
    //     {
    //         id: 0,
    //         sale_note_id: 0,
    //         date_of_payment: dateNow(),
    //         payment_method_type_id: 1,
    //         reference: "",
    //         payment: 0,
    //         change: null
    //     }
    // )
}
const dialogListPaymentSaleNote = async (item: Unpaid) => {
    if (!item) throw Error("Datos del cliente esta vacio:")

    dialogListPayments.value = true
    customerSelected.value = item
    // customerSelected.value.sale_notes.forEach(sale_note => {
    //     if (!sale_note.date_of_issue) return
    //     sale_note.date_of_issue = new Date(sale_note.date_of_issue).toISOString().split('T')[0];
    // })
}

const printItems = (items: Unpaid[]) => {
    const header = [
        { text: "DESCRIPCIÓN", style: { fontSize: 12, bold: true, alignment: "center" } },
        { text: "UNIDAD", style: { fontSize: 12, bold: true, alignment: "center" } },
        { text: "CANTIDAD", style: { fontSize: 12, bold: true, alignment: "center" } },
        { text: "P. UNI", style: { fontSize: 12, bold: true, alignment: "center" } },
        { text: "TOTAL", style: { fontSize: 12, bold: true, alignment: "center" } }
    ];
    if (!items) return [header]
    return /* [header,
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
    ]*/
};

const printTransfer = async (id: number) => {
    if (!id) throw Error("El id no es vacio:")
    const response = await fetch(`${apiURL.value}/sales_notes/get/${id}`, { method: "GET" })
    if (!response.ok) return
    const saleNotes = await response.json()

    // const saleNotes: SaleNote = {}
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
    // if (!customerSelected.value) throw Error("Hubo un error al eliminar")
    // if (!customerSelected.value?.sale_note_payments) throw Error("No hay que borrar")
    // if (!customerSelected.value?.sale_note_payments[index].id) {
    //     customerSelected.value.sale_note_payments.splice(index, 1);
    //     return
    // }
    // let response = await deletePayment(customerSelected.value?.sale_note_payments[index].id)
    // if (response) {
    //     snackbarStore.setStatus("success", "Eliminado correctamente:")
    //     customerSelected.value.sale_note_payments.splice(index, 1);
    //     saleNotesRefresh()
    // } else {
    //     // La solicitud falló, maneja el error
    //     snackbarStore.setStatus("error", "Error al guardar",)
    //     console.error('Error al obtener los datos:', response);
    // }
}

const mountPay = () => {
    // if (!customerSelected.value?.sale_note_payments) return 0
    // if (customerSelected.value?.sale_note_payments.length > 0 && customerSelected.value?.total > 0) {
    //     return customerSelected.value?.sale_note_payments.reduce((acumulador, data) => {
    //         return acumulador + Number(data.payment)
    //     }, 0)
    // }
}
const accountsReceivable = () => {
    // if (!customerSelected.value?.sale_note_payments) return 0
    // if (customerSelected.value?.total <= (mountPay() ?? 0)) return 0
    // return customerSelected.value?.total - (mountPay() ?? 0)
}
const page_customer_sale_notes = ref(1)

const pageCount_customer_sale_notes = computed(() => {
    if (!unpaidFetch.value) return 1
    return Math.ceil(unpaidFetch.value.length / itemsPerPage.value)
})
const headers_customer_sale_notes = ref([
    // { align: 'start', key: 'name', sortable: true, title: 'Especialidad', },
    { key: 'customer.number', title: 'N°' },
    { key: 'date_of_issue', title: 'Fecha Emisión' },
    { key: 'series', title: 'Nota de venta', value: (item: any) => `${item.serie} - ${item.number}` },
    { key: 'pending_amount', title: 'Saldo' },
    { key: 'total', title: 'Total   ' },
])
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
    <v-container fluid v-if="unpaidFetch">
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
                    <v-data-table v-model:page="page" v-model="selected" :headers="headers" :items="unpaidFetch"
                        :items-per-page="itemsPerPage" :search="search" class="elevation-1">
                        <template v-slot:item.customer.number="{ index }">
                            {{ index + 1 + itemsPerPage * (page - 1) }}
                        </template>
                        <template v-slot:item.customer="{ item }">
                            <span>
                                <p> {{ item.raw.customer.name }}</p>
                                <div class="text-caption">{{ item.raw.customer.number }}</div>
                            </span>
                        </template>
                        <template v-slot:item.pending_amount="{ item }">
                            <v-tooltip>
                                <template v-slot:activator="{ props }">
                                    <v-chip v-bind="props" color='warning' class="font-weight-bold"
                                        @click="dialogListPaymentSaleNote(item.raw)">
                                        {{ moneyDecimal(item.raw.pending_amount) }}
                                        <!-- <div class="text-caption">{{ item.raw.currency_type_id }}</div> -->
                                    </v-chip>
                                </template>
                                <span>Pagar</span>
                            </v-tooltip>

                        </template>
                        <template v-slot:item.total="{ item }">
                            {{ moneyDecimal(item.raw.total) }}
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

                <!-- DIALGO LIST PAYMENT SALE NOTES -->
                <v-dialog v-model="dialogListPayments" v-if="customerSelected" :max-width="mobile ? '100%' : '65%'"
                    persistent>
                    <v-toolbar color="primary" floating>
                        <v-toolbar-title>Listado de pagos:
                            <v-btn variant="flat" icon="mdi-add" color="success" @click="onClickAddPaymentMethods()">
                            </v-btn></v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn icon="mdi-close" variant="elevated" @click="dialogListPayments = false"></v-btn>
                    </v-toolbar>
                    <v-card>
                        <v-card-title>
                            <p> {{ customerSelected.customer.name }} - {{ customerSelected.customer.number }} </p>
                            <p class="text-body-2"> POR PAGAR: {{ moneyDecimal(String(customerSelected.pending_amount))
                                }} </p>
                            <p class="text-body-2"> TOTAL: {{ moneyDecimal(String(customerSelected.total)) }} </p>
                        </v-card-title>
                        <v-card-text v-if="customerSelected">
                            <v-data-table v-model:page="page_customer_sale_notes" :headers="headers_customer_sale_notes"
                                :items="customerSelected.sale_notes" :items-per-page="itemsPerPage" class="elevation-1">
                                <template v-slot:item.customer.number="{ index }">
                                    {{ index + 1 + itemsPerPage * (page - 1) }}
                                </template>
                                <template v-slot:item.date_of_issue="{ item }">
                                    <p> {{ formatDate(item.raw.date_of_issue) }}</p>
                                    <div class="text-caption"> {{ formatTime(item.raw.date_of_issue) }}</div>
                                </template>
                                <template v-slot:item.series="{ item }">
                                    <p> {{ item.raw.series }} - {{ item.raw.number }}</p>
                                    <v-chip size="x-small" :color="colorStateType[item.raw.state_type.id]">
                                        {{ item.raw.state_type.description }}
                                    </v-chip>
                                </template>
                                <template v-slot:item.pending_amount="{ item }">
                                    <p>{{ moneyDecimal(item.raw.pending_amount) }}</p>
                                    <div class="text-caption">{{ item.raw.currency_type_id }}</div>
                                </template>
                                <template v-slot:item.total="{ item }">
                                    <p>{{ moneyDecimal(item.raw.total) }}</p>
                                    <div class="text-caption">{{ item.raw.currency_type_id }}</div>
                                </template>
                                <template v-slot:bottom>
                                    <div class="text-center pt-2">
                                        <v-pagination v-model="page"
                                            :length="pageCount_customer_sale_notes"></v-pagination>
                                        <!-- <v-text-field :model-value="itemsPerPage" class="pa-2" label="Items per page" type="number" min="-1"
                    max="15" hide-details @update:model-value="itemsPerPage = parseInt($event, 10)"></v-text-field> -->
                                    </div>
                                </template>
                            </v-data-table>
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