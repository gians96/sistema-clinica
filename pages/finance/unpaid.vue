<script lang="ts" setup>
import { useSnackbarStore } from '@/store/index'
const snackbarStore = useSnackbarStore()
import type { Warehouse } from '~/interfaces/Warehouse.interface'
const apiURL = useCookie('apiURL')
import { useDisplay } from 'vuetify'
const { mobile } = useDisplay()
import { companyStore } from '@/store/company'
import type { Companies } from '~/interfaces/Company.interface'
import type { Unpaid, StateType, SaleNote } from '~/interfaces/Unpaid.interface'
import type { SaleNoteItem, SaleNotePayment } from '~/interfaces/SaleNotesFetch.interace';
const { data: unpaidFetch, refresh: unpaidRefresh } = await useFetch<
    Unpaid[]
>(`${apiURL.value}/finance/unpaid`, { method: 'GET' })
const companyFetch = ref<Companies>()
onMounted(async () => {
    companyFetch.value = companyStore().$state
})
const headers = ref([
    // { align: 'start', key: 'name', sortable: true, title: 'Especialidad', },
    { key: 'customer.number', title: 'N°' },
    {
        key: 'customer',
        title: 'Cliente',
        value: (item: any) => `${item.customer.name} - ${item.customer.number}`
    },
    // { key: 'series', title: 'Nota de venta', value: (item: any) => `${item.series} - ${item.number}` },
    { key: 'pending_amount', title: 'Por pagar' },
    { key: 'total', title: 'Total' },
    { key: 'actions', title: 'Acciones', value: '' }
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
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month = String(currentDate.getMonth() + 1).padStart(2, '0') // Agrega cero a la izquierda si es necesario
    const day = String(currentDate.getDate()).padStart(2, '0') // Agrega cero a la izquierda si es necesario
    const formattedDate = `${year}-${month}-${day}`
    return formattedDate
}

const formatDate = (date: string) => {
    const currentDate = new Date(date)
    const year = currentDate.getFullYear()
    const month = String(currentDate.getMonth() + 1).padStart(2, '0') // Agrega cero a la izquierda si es necesario
    const day = String(currentDate.getDate()).padStart(2, '0') // Agrega cero a la izquierda si es necesario
    // Formatear la fecha en el formato DD/MM/YYYY
    let formattedDate = `${day}/${month}/${year}`
    return formattedDate
}

const formatTime = (date: string) => {
    const fechaOriginal = new Date(date)
    const horas = fechaOriginal.getHours()
    const minutos = fechaOriginal.getMinutes()
    const segundos = fechaOriginal.getSeconds()
    // Obtener la cadena "a.m." o "p.m." según la hora
    const periodo = horas >= 12 ? 'p.m.' : 'a.m.'
    // Convertir la hora al formato de 12 horas
    const horas12 = horas % 12 || 12 // Si son las 0 horas, convertirlas a 12
    const formattedHour = `${horas12}:${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''
        }${segundos} ${periodo}`
    return formattedHour
}

const saveMethodsPayments = async () => {
    if (!customerSelected.value) throw Error('')
    if (!addMethodsPayment.value) throw Error('')
    if (distributePayments().sale_notes.length === 0) throw Error("")

    if (sumOfAmountPaid(addMethodsPayment.value) > customerSelected.value.pending_amount) {
        snackbarStore.setStatus('error', 'El suma total del monto a pagar no debe ser mayor al saldo', "PAGAR: " + sumOfAmountPaid(addMethodsPayment.value) + " SALDO: " + moneyDecimal(String(customerSelected.value.pending_amount)))
        return
    }
    const response = await fetch(`${apiURL.value}/finance/unpaid/payments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // Authorization: `Bearer ${userCookie.value.token}`,
        },
        body: JSON.stringify(distributePayments().sale_notes)
    })
    if (response.ok) {
        snackbarStore.setStatus('success', 'Se ha guardado correctamente:')
        onClickCloseDialogListPayments()
        unpaidRefresh()
        return response.ok
    } else {
        snackbarStore.setStatus('error', 'Error al guardar')
        console.error('Error al obtener los datos:', response)
    }
}


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
    return Number.parseFloat(x).toFixed(2)
}

const formatPrintItemType = (item: SaleNoteItem) => {
    let description = item.item.description.toString()
    let itemTypeId = item.item_type_id
    let allDescription = {}
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


const dialogListPayments = ref(false)
const customerSelected = ref<Unpaid>()

const dialogListPaymentSaleNote = async (item: Unpaid) => {
    if (!item) throw Error('Datos del cliente esta vacio:')

    dialogListPayments.value = true
    customerSelected.value = item
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
    {
        key: 'series',
        title: 'Nota de venta',
        value: (item: any) => `${item.serie} - ${item.number}`
    },
    { key: 'pending_amount', title: 'Saldo' },
    { key: 'total', title: 'Total' }
])
const colorStateType: Record<StateType['id'], string> = {
    '1': 'default', //Registrado
    '2': 'blue', //Enviado
    '3': 'success', //Aceptado
    '4': 'purple', //Observado
    '5': 'secondary', //rechzado
    '6': 'red', //Anulado
    '7': 'orange' //Por anular
}
const process = ref([
    {
        // id: 1,
        name: 'NOTAS DE VENTAS',
        icon: 'mdi-sale',
        color: 'blue-accent-4',
        show: false
    },
    {
        id: 2,
        name: 'GENERAR PAGOS',
        icon: 'mdi-cash',
        color: 'red-accent-4',
        show: false
    },
    {
        id: 3,
        name: 'PAGOS GENERADOS',
        icon: 'mdi-cash-multiple',
        color: 'yellow-accent-4',
        show: false
    }
    // {
    //     id: 4,
    //     name: 'ENTREGADO',
    //     icon: 'mdi-upload-circle',
    //     color: 'yellow-accent-4',
    //     show: true
    // }
])

const addMethodsPayment = ref<SaleNotePayment[]>([{
    id: 0,
    sale_note_id: 0,
    date_of_payment: dateNow(),
    payment_method_type_id: 1,
    reference: "",
    payment: 0,
    change: null
}])
const onClickAddPaymentMethods = () => {
    if (!addMethodsPayment.value) throw Error("Sale note vacio")
    addMethodsPayment.value.push(
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
const onClickDeletePaymentMethods = async (index: number) => {
    if (!addMethodsPayment) throw Error("No hay que borrar")
    if (!addMethodsPayment.value[index].id) {
        addMethodsPayment.value.splice(index, 1);
    }
}

const sumOfAmountPaid = (addMethodsPayment: SaleNotePayment[]) => {
    if (!addMethodsPayment) return 0
    return addMethodsPayment.reduce((acumulador, data) => {
        return acumulador + Number(data.payment)
    }, 0)
}

const onClickCloseDialogListPayments = () => {
    dialogListPayments.value = false
    addMethodsPayment.value = [{
        id: 0,
        sale_note_id: 0,
        date_of_payment: dateNow(),
        payment_method_type_id: 1,
        reference: "",
        payment: 0,
        change: null
    }]
}

const page_generate_payments = ref(1)

const pageCount_generate_payments = computed(() => {
    if (!distributePayments) return 1
    return Math.ceil(distributePayments.length / itemsPerPage.value)
})
const headers_generate_payments = ref([
    // { align: 'start', key: 'name', sortable: true, title: 'Especialidad', },
    { key: 'customer.number', title: 'N°' },
    { key: 'date_of_issue', title: 'Fecha Emisión' },
    {
        key: 'series',
        title: 'Nota de venta',
        value: (item: any) => `${item.serie} - ${item.number}`
    },
    { key: 'pending_amount_after', title: 'Pendiente' },
    {
        key: 'method_payment',
        title: 'Metodo de pago',
        value: (item: any) => `${item.payment.payment} - ${item.payment.payment_method_type.description}`
    },
])

const distributePayments = () => {
    if (!customerSelected.value) throw Error("No se ha selecionado al cliente");

    let result: Unpaid = {
        id: customerSelected.value.id,
        customer: customerSelected.value.customer,
        total: customerSelected.value.total,
        pending_amount: customerSelected.value.pending_amount,
        sale_notes: []
    };

    let paymentIndex = 0;
    let currentPayment = addMethodsPayment.value[paymentIndex];
    let remainingPaymentAmount = currentPayment.payment;

    customerSelected.value.sale_notes.forEach(note => {
        let pendingAmount = note.pending_amount;
        while (pendingAmount > 0 && paymentIndex < addMethodsPayment.value.length) {
            if (remainingPaymentAmount > 0) {
                let paymentAmount = Math.min(remainingPaymentAmount, pendingAmount);
                let pendingAmountBefore = pendingAmount;
                let pendingAmountAfter = pendingAmountBefore - paymentAmount;
                if (!companyFetch.value) throw Error("Error al obtener company");
                let method_payment = companyFetch.value.payment_method_types.filter(method => currentPayment.payment_method_type_id === method.id)[0]
                result.sale_notes.push({
                    id: note.id,
                    total: note.total,
                    series: note.series,
                    number: note.number,
                    currency_type_id: note.currency_type_id,
                    pending_amount: pendingAmount,
                    pending_amount_before: pendingAmountBefore,
                    pending_amount_after: pendingAmountAfter,
                    create_at: note.create_at,
                    payment: {
                        id: currentPayment.id,
                        sale_note_id: currentPayment.sale_note_id,
                        date_of_payment: currentPayment.date_of_payment,
                        payment_method_type_id: currentPayment.payment_method_type_id,
                        payment_method_type: {
                            id: method_payment.id,
                            charge: null,
                            description: method_payment.description,
                            has_card: method_payment.has_card,
                            number_days: null,
                            is_credit: method_payment.is_credit,
                            is_cash: method_payment.is_cash,
                        },
                        reference: currentPayment.reference,
                        payment: Number(moneyDecimal(String(paymentAmount))),
                        change: currentPayment.change
                    },
                    date_of_issue: note.date_of_issue,
                    state_type: note.state_type
                });

                pendingAmount = pendingAmountAfter;
                remainingPaymentAmount -= paymentAmount;

                if (remainingPaymentAmount === 0 && paymentIndex < addMethodsPayment.value.length - 1) {
                    paymentIndex++;
                    currentPayment = addMethodsPayment.value[paymentIndex];
                    remainingPaymentAmount = currentPayment.payment;
                }
            } else {
                paymentIndex++;
                if (paymentIndex < addMethodsPayment.value.length) {
                    currentPayment = addMethodsPayment.value[paymentIndex];
                    remainingPaymentAmount = currentPayment.payment;
                }
            }
        }
    });
    return result;
};

//PRINT



const printSaleNotes = (sale_notes: SaleNote[]) => {
    let formatSaleNotes = []; // Define the variable as an array

    for (let i = 0; i < sale_notes.length; i++) {
        const saleNoteItems = sale_notes[i].sale_note_items ?? [];

        let fecha =
            formatDate(sale_notes[i].create_at.toString()) +
            ' ' +
            formatTime(sale_notes[i].create_at.toString());

        formatSaleNotes.push(
            {
                text: 'NOTA DE VENTA ' + sale_notes[i].series + ' - ' + sale_notes[i].number,
                style: { fontSize: 14, bold: true, alignment: 'left' },
                margin: [0, 35, 0, 0]
            },
            {
                text: `FECHA: ${fecha}`,
                margin: [0, 0, 0, 10],
                style: { fontSize: 12, bold: true, alignment: 'left' }
            },
            {
                // layout: "custom",
                table: {
                    heights: 1,
                    widths: [200, '*', '*', '*', '*'],
                    margin: [50, 0, 0, 50],
                    alignment: "center",
                    body: [
                        [
                            { text: 'DESCRIPCIÓN', style: { fontSize: 12, bold: true, alignment: 'center' } },
                            { text: 'UNIDAD', style: { fontSize: 12, bold: true, alignment: 'center' } },
                            { text: 'CANTIDAD', style: { fontSize: 12, bold: true, alignment: 'center' } },
                            { text: 'P. UNI', style: { fontSize: 12, bold: true, alignment: 'center' } },
                            { text: 'TOTAL', style: { fontSize: 12, bold: true, alignment: 'center' } }
                        ],
                        ...saleNoteItems.map(item => {
                            return [
                                formatPrintItemType(item),
                                { text: item.unit_type_id.toString(), style: { fontSize: 11, alignment: "center" } },
                                { text: item.quantity.toString(), style: { fontSize: 11, alignment: "center" } },
                                { text: moneyDecimal(item.unit_price.toString()), style: { fontSize: 11, alignment: "center" } },
                                { text: "S/." + moneyDecimal(item.total.toString()), style: { fontSize: 11, bold: true, alignment: "center" } }
                            ];
                        })
                    ]
                }
            },
            {
                text: `PAGADO: ${moneyDecimal(String(sale_notes[i].total - sale_notes[i].pending_amount))}`,
                margin: [0, 10, 0, 0],
                style: { fontSize: 12, bold: true, alignment: 'left' }
            },
            {
                text: `SALDO: ${moneyDecimal(String(sale_notes[i].pending_amount))}`,
                margin: [0, 0, 0, 0],
                style: { fontSize: 12, bold: true, alignment: 'left' }
            },
            {
                text: `TOTAL: ${moneyDecimal(String(sale_notes[i].total))}`,
                margin: [0, 0, 0, 0],
                style: { fontSize: 12, bold: true, alignment: 'left' }
            },
        );
    }

    console.log({ form: formatSaleNotes });

    return formatSaleNotes;
};

const print = async (unpaidRaw: Unpaid) => {
    if (!unpaidRaw) throw Error('El id no es vacio:')
    let unpaid = JSON.parse(JSON.stringify({ ...unpaidRaw })) as Unpaid
    // console.log(unpaid);

    const pdfMake = usePDFMake()
    pdfMake.tableLayouts = {
        custom: {
            paddingLeft: function () {
                return 5
            },
            paddingRight: function () {
                return 5
            }
        }
    }

    pdfMake
        .createPdf({
            pageSize: 'A4',
            pageMargins: [35, 50, 35, 50],
            content: [
                // saleNotes.state_type_id === 6 ? isVoided : {},
                {
                    columns: [
                        {
                            text: ''
                        },
                        // {
                        //     // image: logo,
                        //     width: 100,
                        //     alignment: "center"
                        // },
                        {
                            text: ''
                        },
                        [
                            {
                                text: 'R.U.C. ' + companyFetch.value?.companies.number,
                                style: { fontSize: 14, bold: true, alignment: 'center' },
                                margin: [0, 0, 0, 5]
                            },
                            {
                                text: companyFetch.value?.companies.name,
                                style: { fontSize: 10, bold: true, alignment: 'center' },
                                margin: [0, 0, 0, 2]
                            }
                        ]
                    ]
                },
                {
                    text: `Cliente: ${unpaid.customer.name}`,
                    margin: [0, 0, 0, 5],
                    style: { fontSize: 12, bold: true, alignment: 'left' }
                },
                {
                    text: `DNI/RUC: ${unpaid.customer.number}`,
                    margin: [0, 0, 0, 5],
                    style: { fontSize: 12, bold: true, alignment: 'left' }
                },
                printSaleNotes(unpaid.sale_notes),

                {
                    text: "",
                    margin: [0, 15, 0, 15],
                },
                {
                    // layout: "custom",
                    table: {
                        heights: 1,
                        widths: ['*'],
                        margin: [50, 40, 0, 50],
                        style: 'tableHeader',
                        alignment: "center",
                        body: [
                            [
                                { text: `TOTAL SALDO A PAGAR: ${moneyDecimal(String(unpaid.pending_amount))}`, style: { fontSize: 16, bold: true, alignment: 'center' } },

                            ],

                        ]
                    }
                }
            ]
        })
        .print()
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
                    <v-col cols="12" class="d-flex justify-center align-center">
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
                                <p>{{ item.raw.customer.name }}</p>
                                <div class="text-caption">{{ item.raw.customer.number }}</div>
                            </span>
                        </template>
                        <template v-slot:item.pending_amount="{ item }">
                            <v-tooltip>
                                <template v-slot:activator="{ props }">
                                    <v-chip v-bind="props" color="warning" class="font-weight-bold"
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
                                        @click="print(item.raw)">
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
                        <v-toolbar-title>Cuentas por pagar del cliente
                            <!-- <v-btn variant="flat" icon="mdi-add" color="success" @click="onClickAddPaymentMethods()">
                            </v-btn> -->
                        </v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn icon="mdi-close" variant="elevated" @click="onClickCloseDialogListPayments"></v-btn>
                    </v-toolbar>
                    <v-card>
                        <v-card-title>
                            <p>
                                {{ customerSelected.customer.name }} -
                                {{ customerSelected.customer.number }}
                            </p>
                        </v-card-title>
                        <!--DESPLEGABLE NOTAS de ventas -->
                        <v-col cols="12" lg="12">
                            <v-card color="indigo">
                                <v-card-actions>
                                    <v-list width="100%" class="py-0" bg-color="transparent">
                                        <v-list-item link :prepend-icon="process[0].icon"
                                            @click="process[0].show = !process[0].show">
                                            <template v-slot:prepend>
                                                <v-icon>{{ process[0].icon }}</v-icon>
                                            </template>
                                            <template v-slot:title>
                                                <span>{{ process[0].name }}</span>
                                                <p class="text-body-2 font-weight-bold">
                                                    SALDO: {{ moneyDecimal(String(customerSelected.pending_amount)) }}
                                                </p>
                                            </template>
                                            <template v-slot:append>
                                                <v-badge color="indigo" :content="customerSelected.sale_notes.length"
                                                    inline></v-badge>
                                            </template>
                                        </v-list-item>
                                    </v-list>
                                </v-card-actions>
                                <v-divider></v-divider>
                                <v-expand-transition>
                                    <div v-if="process[0].show">
                                        <!-- {{ customerSelected.sale_notes }} -->
                                        <v-data-table v-model:page="page_customer_sale_notes"
                                            :headers="headers_customer_sale_notes" :items="customerSelected.sale_notes"
                                            :items-per-page="itemsPerPage" class="elevation-1">
                                            <template v-slot:item.customer.number="{ index }">
                                                {{ index + 1 + itemsPerPage * (page - 1) }}
                                            </template>
                                            <template v-slot:item.date_of_issue="{ item }">
                                                <p>{{ formatDate(item.raw.date_of_issue) }}</p>
                                                <div class="text-caption">
                                                    {{ formatTime(item.raw.date_of_issue) }}
                                                </div>
                                            </template>
                                            <template v-slot:item.series="{ item }">
                                                <p>{{ item.raw.series }} - {{ item.raw.number }}</p>
                                                <v-chip size="x-small" :color="colorStateType[item.raw.state_type.id]">
                                                    {{ item.raw.state_type.description }}
                                                </v-chip>
                                            </template>
                                            <template v-slot:item.pending_amount="{ item }">
                                                <p>{{ moneyDecimal(item.raw.pending_amount) }}</p>
                                                <div class="text-caption">
                                                    {{ item.raw.currency_type_id }}
                                                </div>
                                            </template>
                                            <template v-slot:item.total="{ item }">
                                                <p>{{ moneyDecimal(item.raw.total) }}</p>
                                                <div class="text-caption">
                                                    {{ item.raw.currency_type_id }}
                                                </div>
                                            </template>
                                            <template v-slot:bottom>
                                                <div class="text-center pt-2">
                                                    <v-pagination v-model="page"
                                                        :length="pageCount_customer_sale_notes"></v-pagination>
                                                </div>
                                            </template>
                                        </v-data-table>
                                    </div>
                                </v-expand-transition>
                            </v-card>
                        </v-col>
                        <!--DESPLEGABLE NOTAS de ventas  -->
                        <!--DESPLEGABLE PAGOS -->

                        <v-col cols="12" lg="12">
                            <v-card color="teal">
                                <v-card-actions>
                                    <v-list width="100%" class="py-0" bg-color="transparent">
                                        <v-list-item link :prepend-icon="process[1].icon"
                                            @click="process[1].show = !process[1].show">
                                            <template v-slot:prepend>
                                                <v-icon>{{ process[1].icon }}</v-icon>
                                            </template>
                                            <template v-slot:title>
                                                <span>{{ process[1].name }}</span>
                                                <p class="text-body-2 font-weight-bold">
                                                    PAGANDO: {{ moneyDecimal(String(sumOfAmountPaid(addMethodsPayment)))
                                                    }}
                                                </p>
                                            </template>
                                            <template v-slot:append>
                                                <v-badge color="teal" :content="addMethodsPayment.length"
                                                    inline></v-badge>
                                            </template>
                                        </v-list-item>
                                    </v-list>
                                </v-card-actions>
                                <v-divider></v-divider>
                                <v-expand-transition>
                                    <div v-if="process[1].show">
                                        <v-card>
                                            <v-card-title>
                                                <v-col class="d-flex px-2">
                                                    <span>Añadir pagos </span>
                                                    <v-btn variant="flat" icon="mdi-add" color="success"
                                                        @click="onClickAddPaymentMethods()"></v-btn>
                                                    <!-- <v-spacer></v-spacer> -->
                                                    <!-- <v-tooltip v-if="!mobile">
                                                        <template v-slot:activator="{ props }">
                                                            <v-btn v-bind="props" class="me-2" rounded color="primary"
                                                                @click="onClickGeneratePayments()">
                                                                Generar pagos
                                                            </v-btn>
                                                        </template>
                                                        <span>Generar pagos</span>
                                                    </v-tooltip>
                                                    <v-tooltip v-if="mobile">
                                                        <template v-slot:activator="{ props }">
                                                            <v-btn v-bind="props" class="me-2" icon="mdi-cash-multiple"
                                                                color="primary" @click="onClickGeneratePayments()">
                                                            </v-btn>
                                                        </template>
                                                        <span>Generar pagos</span>
                                                    </v-tooltip> -->
                                                </v-col>
                                            </v-card-title>
                                            <v-card-text v-if="companyFetch">
                                                <!-- {{ addMethodsPayment }} -->
                                                <div v-if="addMethodsPayment.length !== 0"
                                                    v-for="(payment, index) in addMethodsPayment" :key="index"
                                                    :class="mobile ? 'py-4' : ''">
                                                    <v-row justify="center" class="d-flex"
                                                        :class="mobile ? 'bg-blue-grey-lighten-5' : ''">
                                                        <v-col cols="12" xs="12" md="3" lg="3"
                                                            :class="mobile ? 'pb-0' : ''">
                                                            <v-select class="inline select-box"
                                                                :items="companyFetch.payment_method_types"
                                                                v-model="payment.payment_method_type_id"
                                                                label="Método de pago" variant="outlined"
                                                                item-title="description" item-value="id">
                                                            </v-select>
                                                        </v-col>
                                                        <v-col cols="12" xs="12" md="2" lg="2"
                                                            :class="mobile ? 'py-0' : ''">
                                                            <v-text-field label="Ingrese monto" placeholder="0.00"
                                                                v-model="payment.payment" type="number">
                                                            </v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" xs="12" md="3" lg="3"
                                                            :class="mobile ? 'py-0' : ''">
                                                            <v-text-field type="date" label="Fecha de pago"
                                                                v-model="payment.date_of_payment"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" xs="12" md="3" lg="3"
                                                            :class="mobile ? 'py-0' : ''">
                                                            <v-text-field label="Referencia"
                                                                v-model="payment.reference">
                                                            </v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" xs="12" md="1" lg="1"
                                                            class="d-flex aling-center justify-center"
                                                            :class="mobile ? 'py-0' : ''">
                                                            <v-btn @click="onClickDeletePaymentMethods(index)"
                                                                variant="flat" icon="mdi-delete" color="red">
                                                            </v-btn>
                                                        </v-col>
                                                    </v-row>
                                                </div>
                                            </v-card-text>
                                        </v-card>
                                    </div>
                                </v-expand-transition>
                            </v-card>
                        </v-col>
                        <!--DESPLEGABLE PAGOS -->

                        <!--DESPLEGABLE GENERACION DE PAGOS -->
                        <v-col cols="12" lg="12">
                            <v-card color="indigo">
                                <v-card-actions>
                                    <v-list width="100%" class="py-0" bg-color="transparent">
                                        <v-list-item link :prepend-icon="process[2].icon"
                                            @click="process[2].show = !process[2].show">
                                            <template v-slot:prepend>
                                                <v-icon>{{ process[2].icon }}</v-icon>
                                            </template>
                                            <template v-slot:title>
                                                <span>{{ process[2].name }}</span>
                                                <p class="text-body-2 font-weight-bold">
                                                    PENDIENTE A PAGAR: {{
                                                        moneyDecimal(String(customerSelected.pending_amount -
                                                            sumOfAmountPaid(addMethodsPayment)))
                                                    }}
                                                </p>
                                            </template>
                                            <template v-slot:append>
                                                <v-badge color="indigo"
                                                    :content="distributePayments().sale_notes.length" inline></v-badge>
                                            </template>
                                        </v-list-item>
                                    </v-list>
                                </v-card-actions>
                                <v-divider></v-divider>
                                <v-expand-transition>
                                    <div v-if="process[2].show">
                                        <!-- {{ distributePayments().sale_notes }} -->
                                        <v-data-table v-model:page="page_generate_payments"
                                            :headers="headers_generate_payments"
                                            :items="distributePayments().sale_notes" :items-per-page="itemsPerPage"
                                            class="elevation-1">
                                            <template v-slot:item.customer.number="{ index }">
                                                {{ index + 1 + itemsPerPage * (page - 1) }}
                                            </template>
                                            <template v-slot:item.date_of_issue="{ item }">
                                                <p>{{ formatDate(item.raw.date_of_issue) }}</p>
                                                <div class="text-caption">
                                                    {{ formatTime(item.raw.date_of_issue) }}
                                                </div>
                                            </template>
                                            <template v-slot:item.series="{ item }">
                                                <p>{{ item.raw.series }} - {{ item.raw.number }}</p>
                                                <v-chip size="x-small" :color="colorStateType[item.raw.state_type.id]">
                                                    {{ item.raw.state_type.description }}
                                                </v-chip>
                                            </template>
                                            <template v-slot:item.pending_amount_after="{ item }">
                                                <p>{{ moneyDecimal(item.raw.pending_amount_after) }}</p>
                                                <div class="text-caption">
                                                    {{ item.raw.currency_type_id }}
                                                </div>
                                            </template>
                                            <template v-slot:item.method_payment="{ item }">
                                                <p>{{ moneyDecimal(item.raw.payment.payment) }}</p>
                                                <div class="text-caption">
                                                    {{ item.raw.payment.payment_method_type.description }}
                                                </div>
                                            </template>
                                            <template v-slot:bottom>
                                                <div class="text-center pt-2">
                                                    <v-pagination v-model="page"
                                                        :length="pageCount_generate_payments"></v-pagination>
                                                </div>
                                            </template>
                                        </v-data-table>
                                    </div>
                                </v-expand-transition>
                            </v-card>
                        </v-col>
                        <!--DESPLEGABLE NOTAS de ventas  -->
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="success" variant="elevated" @click="saveMethodsPayments()">Guardar
                            </v-btn>
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
