<script setup lang="ts">
import type { SaleNoteFetch, SaleNoteItem, StateType } from '~/interfaces/SaleNotesFetch.interace';

import { useDisplay } from 'vuetify'
const { mobile } = useDisplay()
const route = useRoute()
const apiURL = useCookie("apiURL");
// When accessing /posts/1, route.params.id will be 1
const number = ref(route.params.number)
const itemsPerPage = ref(10)
const search = ref('')
const moneyDecimal = (x: string) => {
    return Number.parseFloat(x).toFixed(2);
}
import type { Companies } from '~/interfaces/Company.interface';
import { companyStore } from '@/store/company'
const companyFetch = ref<Companies>()
onMounted(async () => {
    companyFetch.value = companyStore().$state
})
const page = ref(1)
const selected = ref([])
const pageCount = computed(() => {
    if (!saleNotesFetch.value) return 1
    return Math.ceil(saleNotesFetch.value.length / itemsPerPage.value)
})
const getSaleNote = ref<SaleNoteFetch>()
const saleNotesFetch = ref<SaleNoteFetch[]>()
const searchDataCustomers = async () => {
    const response = await fetch(`${apiURL.value}/sales_notes/customer/${number.value}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                // Authorization: `Bearer ${userCookie.value.token}`,
            },
            body: JSON.stringify(getSaleNote.value)
        }
    )
    const saleNotes = await response.json()
    saleNotesFetch.value = saleNotes as SaleNoteFetch[]
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
const headers = ref([
    // { align: 'start', key: 'name', sortable: true, title: 'Especialidad', },
    { key: 'customer.number', title: 'N°' },
    { key: 'date_of_issue', title: 'Fecha Emsión' },
    { key: 'customer.name', title: 'Cliente' },
    { key: 'series', title: 'Nota de venta' },
    { key: 'has_total_canceled', title: 'Estado Pago' },
    { key: 'total', title: 'Total' },
    // { key: 'total_prepayment', title: 'Monto abonado' },
    { key: 'pending_amount', title: 'Saldo' },
    { key: 'actions', title: 'Acciones' },
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
const dialogListPayments = ref(false)
definePageMeta({
    layout: "search",
});
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
                { text: item.item.description.toString(), style: { fontSize: 11, alignment: "center" } },
                { text: item.unit_type_id.toString(), style: { fontSize: 11, alignment: "center" } },
                { text: item.quantity.toString(), style: { fontSize: 11, alignment: "center" } },
                { text: moneyDecimal(item.unit_price.toString()), style: { fontSize: 11, alignment: "center" } },
                { text: "S/." + moneyDecimal(item.total.toString()), style: { fontSize: 11, bold: true, alignment: "center" } }
            ];
        })
    ]
};
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
</script>

<template>
    <v-container>
        <v-row class="d-flex align-center justify-center" no-gutters>
            <v-card width="100%">
                <v-card-title>
                    Buscar
                </v-card-title>
                <!-- {{ customersSelected }} -->
                <v-card-text>
                    <v-row class="mb-2">
                        <v-col cols="12" :lg="false ? '12' : '12'" sm="12" class="pb-0">
                            <v-text-field label="Número" v-model="number">
                                <template v-slot:append>
                                    <v-btn icon variant="elevated" color="success" @click="searchDataCustomers()">
                                        <v-icon> mdi-magnify </v-icon>
                                    </v-btn>
                                </template>
                            </v-text-field>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-row>
        <v-row dense v-if="saleNotesFetch">
            <v-data-table v-model:page="page" v-model="selected" :headers="headers" :items="saleNotesFetch"
                :items-per-page="itemsPerPage" :search="search" class="elevation-1">
                <template v-slot:item.customer.number="{ index }">
                    {{ index + 1 + itemsPerPage * (page - 1) }}
                </template>
                <template v-slot:item.customer.name="{ item }">
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
                    <v-chip :color="item.raw.has_total_canceled ? 'success' : 'warning'" class="font-weight-bold"
                        @click="dialogListPaymentSaleNote(item.raw.id)">
                        {{ item.raw.has_total_canceled ? "Pagado" : "Pendiente" }}
                    </v-chip>
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
                    </div>
                </template>
            </v-data-table>
        </v-row>
        <!-- DIALGO LIST PAYMENT SALE NOTES -->
        <v-dialog v-model="dialogListPayments" v-if="getSaleNote?.sale_note_payments"
            :max-width="mobile ? '100%' : '65%'" persistent>
            <v-toolbar floating>
                <v-toolbar-title>Listado de pagos:
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon="mdi-close" @click="dialogListPayments = false"></v-btn>
            </v-toolbar>
            <v-card>
                <v-card-title>
                    <p> {{ getSaleNote.series }} - {{ getSaleNote.number }} </p>
                    <p> {{ getSaleNote.customer.number }} - {{ getSaleNote.customer.name }} </p>
                </v-card-title>
                <v-card-text>
                    <div v-if="getSaleNote?.sale_note_payments.length !== 0"
                        v-for="(payment, index) in getSaleNote?.sale_note_payments" :key="index"
                        :class="mobile ? 'py-4' : ''">
                        <v-row justify="center" class="d-flex" :class="mobile ? 'bg-blue-grey-lighten-5' : ''">
                            <v-col cols="12" xs="12" md="3" lg="3" :class="mobile ? 'pb-0' : ''"
                                v-if="payment.payment_method_type">
                                <v-text-field label="Metodo de pago" v-model="payment.payment_method_type.description">
                                </v-text-field>
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


            </v-card>
        </v-dialog>
        <!-- DIALOG -->
    </v-container>
</template>