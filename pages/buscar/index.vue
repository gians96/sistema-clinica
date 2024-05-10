<script setup lang="ts">
import type { SaleNoteFetch, StateType } from '~/interfaces/SaleNotesFetch.interace';

const route = useRoute()
const apiURL = useCookie("apiURL");
// When accessing /posts/1, route.params.id will be 1
const number = ref(route.params.number)
const itemsPerPage = ref(10)
const search = ref('')
const moneyDecimal = (x: string) => {
    return Number.parseFloat(x).toFixed(2);
}
const page = ref(1)
const selected = ref([])
const pageCount = computed(() => {
    if (!saleNotesFetch.value) return 1
    return Math.ceil(saleNotesFetch.value.length / itemsPerPage.value)
})
const { data: saleNotesFetch, refresh: itemsRefresh } = await useFetch<SaleNoteFetch[]>(`${apiURL.value}/sales_notes`, { method: 'GET' });
const headers = ref([
    // { align: 'start', key: 'name', sortable: true, title: 'Especialidad', },
    { key: 'customer.number', title: 'N°' },
    { key: 'date_of_issue', title: 'Fecha Emsión' },
    { key: 'customer.name', title: 'Cliente' },
    { key: 'series', title: 'Nota de venta' },
    { key: 'has_total_canceled', title: 'Estado Pago' },
    { key: 'total', title: 'Total' },
    { key: 'total_prepayment', title: 'Monto abonado' },
    { key: 'pending_amount', title: 'Saldo' },
    // { key: 'actions', title: 'Acciones' },
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
const searchDataCustomers = () => {
}
definePageMeta({
    layout: "search",
});
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
                    <v-chip :color="item.raw.has_total_canceled ? 'success' : 'warning'" class="font-weight-bold">
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
    </v-container>

</template>