<script lang="ts" setup>
import { useSnackbarStore } from '@/store/index';
import type { Item, Product } from "@/interfaces/Item.interface";
const apiURL = useCookie("apiURL");
import { useDisplay } from "vuetify";
const { mobile } = useDisplay();
const snackbarStore = useSnackbarStore()
const typeMountPayments = [10, 20, 50, 100, 200]
import { series, customers, items } from "./data.ts"
const itemsFetch = ref<Item[]>(items)
// const { data: itemsFetch, refresh: itemsRefresh } = await useFetch<Item[]>(`${apiURL.value}/items`, { method: 'GET' });
const searchItems = ref<string>("");
const clearSearch = () => {
    searchItems.value = ""
}
const itemsFilter = computed<Item[]>(() => {
    if (!itemsFetch.value)
        throw new Error("Ah ocurrido un problema con el valor");
    let dataFilter = itemsFetch.value;
    // if (category_id.value != null) {
    //     dataFilter = dPlatos.value.filter(
    //         (data) => data.category_id === category_id.value
    //     );
    // }
    if (searchItems.value.length > 0) {
        dataFilter = dataFilter.filter((data) =>
            data.description
                .toLocaleLowerCase()
                .includes(searchItems.value.toLocaleLowerCase())
        );
    }
    return dataFilter;
});
const listItemsPOS = ref<Product[]>([]);
const addItemsPOS = (item: Item) => {
    if (listItemsPOS.value?.filter((data) => data.id === item.id).length === 0) {
        let ProductTemp: Product = {
            id: item.id,
            name: item.description,
            note: "",
            price: item.sale_unit_price,
            // imageUrl: item.image_url,
            // itemCode: item.item_code,
            quantity: 1,
            status: 0,
            categoryId: item.category_id,
            internalId: item.internal_id,
            unitTypeId: item.unit_type_id,
            // currencyTypeSymbol: item.currency_type_symbol,
            // sale_affectation_igv_type_id: item.sale_affectation_igv_type_id,
        };
        listItemsPOS.value.push(ProductTemp);
    } else {
        const index = listItemsPOS.value.findIndex((data) => data.id === item.id);
        incrementQuantityItemPOS(index);
    }
};

//Funcionalidades
const incrementQuantityItemPOS = (i: number) => {
    if (i !== -1) {
        listItemsPOS.value[i].quantity += 1;
    } else {
        console.error(`Producto con id ${i} no encontrado.`);
    }
};
const decrementQuantityItemPOS = (i: number) => {
    if (i !== -1) {
        if (listItemsPOS.value[i].quantity <= 1) return;
        listItemsPOS.value[i].quantity -= 1;
    } else {
        console.error(`Producto con id ${i} no encontrado.`);
    }
};
const deleteItemPOS = (id: number) => {
    listItemsPOS.value.splice(id, 1);
};
const itemSelected = ref<Item>()
const totalListPOS = () => {
    if (listItemsPOS.value.length === 0) return 0
    return listItemsPOS.value.reduce((acumulador, data) => { return acumulador + data.price * data.quantity }, 0)
}
const isShowModalComprobante = ref(false)
const mountPay = ref<number | null>(null)
const moneyDecimal = (x: string) => {
    return Number.parseFloat(x).toFixed(2);
}
const cleanDataForm = () => {
    listItemsPOS.value = []
    isShowModalComprobante.value = false
    // saleNoteResponse.value = null
    mountPay.value = null
}

const vuelto = () => {
    if (!mountPay.value) return 0
    if (mountPay.value < totalListPOS()) return 0
    return mountPay.value - totalListPOS()
}

const modifiedAmountPay = (x: number) => {
    mountPay.value = x
}
const documentSelectedOnClick = ref("80")
export interface Series {
    id: number;
    contingency: boolean;
    document_type_id: string;
    establishment_id: number;
    number: string;
    disabled: boolean;
}
export interface Customer {
    id: number;
    description: string;
    name: string;
    number: string;
    identity_document_type_id: string;
    identity_document_type_code: null;
    has_discount: boolean;
    discount_type: string;
    discount_amount: number;
}

const serieDocumentSelected = ref({})
const customersSelected = ref<Customer>({
    "id": 1,
    "description": "99999999 - Clientes - Varios",
    "name": "Clientes - Varios",
    "number": "99999999",
    "identity_document_type_id": "0",
    "identity_document_type_code": null,
    "has_discount": false,
    "discount_type": "01",
    "discount_amount": 0
})
const seriesFilterToDocumentType = computed<Series[]>(() => {
    if (!series.length) throw new Error("Algo salio mal en la serie")
    let serieSelected = series?.filter((data) => data.document_type_id === documentSelectedOnClick.value)
    serieDocumentSelected.value = serieSelected[0]
    return serieSelected
})
</script>

<template>
    <v-row no-gutters align="start" justify="center" class="bg-grey-lighten-3 fill-height " v-if="itemsFetch">
        <v-col class="d-flex align-start justify-center" cols="12" md="7" lg="8">
            <v-container fluid>
                <v-row no-gutters>
                    <v-col cols="12">
                        <v-combobox class="inline select-box" v-model="itemSelected" :items="itemsFetch"
                            variant="solo-filled" item-title="description" item-value="id"
                            @keyup.enter="addItemsPOS(itemSelected)" @update:modelValue="addItemsPOS(itemSelected)">
                        </v-combobox>
                    </v-col>
                    <v-col cols="12" sm="12" v-if="listItemsPOS.length === 0" class="text-center mt-5">
                        <img width="64" height="64" src="https://img.icons8.com/arcade/64/waterbucket.png"
                            alt="waterbucket" />
                        <p>No se han agregado productos</p>
                    </v-col>
                    <v-col cols="12" sm="12" v-if="listItemsPOS.length !== 0">
                        <v-row no-gutters v-for="(item, index) in listItemsPOS" :key="index" class="py-0">
                            <v-col cols="10">
                                <div class="text-left">{{ item.name }}</div>
                            </v-col>
                            <v-col cols="2">
                                <div class="text-left">CANT. {{ item.quantity }}</div>
                            </v-col>
                            <v-spacer></v-spacer>
                            <v-col cols="2">
                                <v-text-field clearable @click:clear="clearSearch()" persistent-clear density="compact"
                                    variant="solo" v-model="searchItems" label="# Pollos"></v-text-field>
                            </v-col>
                            <v-col cols="2">
                                <v-text-field clearable @click:clear="clearSearch()" persistent-clear density="compact"
                                    variant="solo" v-model="searchItems" label="Peso neto"></v-text-field>
                            </v-col>
                            <v-col cols="2">
                                <v-text-field clearable @click:clear="clearSearch()" persistent-clear density="compact"
                                    variant="solo" v-model="searchItems" label="Precio"></v-text-field>
                            </v-col>
                            <v-col cols="2">
                                <v-text-field clearable @click:clear="clearSearch()" persistent-clear density="compact"
                                    variant="solo" v-model="searchItems" label="Promedio"></v-text-field>
                            </v-col>
                            <v-col cols="2">
                                <v-text-field clearable @click:clear="clearSearch()" persistent-clear density="compact"
                                    variant="solo" v-model="searchItems" label="Descuento"></v-text-field>
                            </v-col>
                            <v-col cols="1" class="d-flex align-center justify-center">
                                <!-- <v-spacer></v-spacer> -->
                                <!-- <v-btn color="green" @click="mostrarModalNota(index)" icon="mdi-note-outline"> -->
                                <!-- </v-btn> -->
                                <!-- <v-spacer></v-spacer>
                                <v-btn @click="decrementQuantityItemPOS(index)" icon="mdi-minus"></v-btn>
                                <v-btn @click="incrementQuantityItemPOS(index)" icon="mdi-plus"></v-btn>
                                <v-spacer></v-spacer> -->
                                <v-btn @click="deleteItemPOS(index)" icon="mdi-delete-forever" color="red"></v-btn>
                                <!-- <v-spacer></v-spacer> -->
                            </v-col>
                            <v-divider :class="listItemsPOS.length == index + 1 ? 'pb-7' : ''"></v-divider>
                        </v-row>
                    </v-col>
                    <!-- <v-col cols="12">
                        <v-sheet elevation="0">
                            <v-tabs bg-color="grey-lighten-3" next-icon="mdi-arrow-right-bold-box-outline"
                                prev-icon="mdi-arrow-left-bold-box-outline" show-arrows>
                                <v-chip-group mandatory selected-class="text-primary">
                                    <v-chip @click="filtroCategoria(null)" color="success">Todos</v-chip>
                                    <v-chip v-for="(row, index) in dCategoria.data" :key="index"
                                        @click="filtroCategoria(row.id)" color="success">{{ row.name }}</v-chip>
                                </v-chip-group>
                            </v-tabs>
                        </v-sheet>
                        <div class="py-2"></div>

                        <v-text-field clearable @click:clear="clearSearch()" persistent-clear density="compact"
                            variant="solo" append-inner-icon="mdi-magnify" single-line v-model="searchItems"
                            label="Buscar menu"></v-text-field>
                    </v-col> -->
                    <!-- <v-col v-for="item in itemsFilter" :key="item.id" :cols="mobile ? '6' : '2'"
                        class="d-flex px-2 py-2">
                        <v-card @click="addItemsPOS(item)" class="rounded-b-xl rounded-t-xl bg-white" width="100%"
                            variant="text">
                            <v-img :src="item.image_url" :height="100" aspect-ratio="1/1" cover class="">
                                <div class="text-center pt-4">
                                    <v-chip variant="elevated">
                                        <div class="font-weight-bold">
                                            S/. {{ item.sale_unit_price }}
                                        </div>
                                    </v-chip>
                                </div>
                            </v-img>
                            <div class="px-2 py-2">
                                <div class="font-weight-light font-italic text-body-2">
                                    {{ item.description }}
                                </div>
                            </div>
                        </v-card>
                    </v-col> -->
                </v-row>
            </v-container>
        </v-col>

        <v-col cols="12" md="5" lg="4" sm="5" xs="11" class="d-flex align-center justify-center  " height="100%"
            width="100%">
            <v-container fluid>
                <v-row no-gutters>


                    <v-card>
                        <v-card-title>
                            <v-btn-toggle borderless color="success" class="d-flex justify-center"
                                v-model="documentSelectedOnClick">
                                <v-btn value="80">
                                    <span>N. VENTA</span>
                                </v-btn>
                                <v-btn value="03">
                                    <span>BOLETA</span>
                                </v-btn>
                                <v-btn value="01">
                                    <span>FACTURA</span>
                                </v-btn>
                            </v-btn-toggle>
                        </v-card-title>
                        <v-card-text>
                            <v-row class="mb-2">
                                <v-col cols="12" :lg="false ? '6' : '12'" sm="6" class="pb-0">
                                    <v-row no-gutters>
                                        <v-col cols="3">
                                            <v-combobox class="inline select-box" v-model="serieDocumentSelected"
                                                :items="seriesFilterToDocumentType" item-title="number" item-value="id">
                                            </v-combobox></v-col>
                                        <v-col cols="8">
                                            <v-combobox class="inline select-box" v-model="customersSelected"
                                                :items="customers" variant="solo-filled" item-title="description"
                                                item-value="id">
                                            </v-combobox>
                                        </v-col>
                                        <v-col cols="1" class="py-2">
                                            <v-btn variant="flat" block icon="mdi-add" color="success">
                                            </v-btn>
                                        </v-col>
                                        <v-col cols="12" class="d-flex justify-center py-6">
                                            <v-sheet class="d-flex align-center flex-column">
                                                <v-sheet>Monto a Cobrar</v-sheet>
                                                <v-sheet class="text-h4 py-2">S/.{{ moneyDecimal(String(totalListPOS()))
                                                    }}</v-sheet>
                                                <v-sheet>Vuelto: {{ moneyDecimal(String(vuelto())) }}</v-sheet>
                                            </v-sheet>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field prepend-icon="mdi-cash" label="Ingrese monto"
                                                placeholder="0.00" v-model="mountPay">
                                            </v-text-field>
                                        </v-col>
                                        <v-row no-gutters justify="center">
                                            <v-col :cols="mobile ? '3' : '2'" class="d-flex justify-center py-1 px-1"
                                                v-for="(row, index) in typeMountPayments" :key="index">
                                                <v-chip color="success" size="large" @click="modifiedAmountPay(row)">
                                                    S/.{{
        row
    }}</v-chip>
                                            </v-col>
                                            <v-col :cols="mobile ? '4' : '3'" class=" py-1 px-1">
                                                <v-chip color="success" size="large"
                                                    @click="modifiedAmountPay(totalListPOS())">
                                                    Exacto</v-chip>
                                            </v-col>
                                            <v-col :cols="mobile ? '4' : '3'" class=" py-1">
                                                <v-chip color="default" size="large"> +Pagos</v-chip>
                                            </v-col>
                                        </v-row>
                                    </v-row>
                                    <v-col cols="12" class="d-flex justify-center pt-6 pb-0">
                                        <v-btn color="success" size="large" @click="onClickPagar()"
                                            :disabled="false ? true : false"> PAGAR </v-btn>
                                    </v-col>
                                </v-col>
                                <!-- <v-col cols=" 12" lg="6" sm="6" class="d-flex justify-center"
                                    v-if="saleNoteResponse?.success">
                                    <iframe :src="saleNoteResponse.data.print_ticket" type="application/pdf" width="90%"
                                        height="400px"></iframe>
                                </v-col> -->
                            </v-row>
                        </v-card-text>

                    </v-card>

                </v-row>
            </v-container>
        </v-col>
    </v-row>

</template>


<style lang="scss">
.v-combobox .v-combobox__selection-text {
    font-size: small;
}
</style>
