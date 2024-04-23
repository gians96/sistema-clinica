<script lang="ts" setup>
import { useSnackbarStore } from '@/store/index';
import type { Item, Product, paymentMethodTypes, paymentPOS } from "@/interfaces/Item.interface";
const apiURL = useCookie("apiURL");
import { useDisplay } from "vuetify";
const { mobile } = useDisplay();
const snackbarStore = useSnackbarStore()
const typeMountPayments = [10, 20, 50, 100]
// const typeMountPayments = [10, 20, 50, 100, 200]
import { series, customers, items, payment_method_types } from "./data.ts"
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
        dataFilter = dataFilter.filter((data: any) =>
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
        // const quantity = (item.net_weight ?? 0) * (item.quantity_chicken ?? 0) * item.sale_unit_price;

        let ProductTemp: Product = {
            id: item.id,
            name: item.description,
            note: "",
            price: item.sale_unit_price,
            type_item_id: item.type_item_id,
            type_item: item.type_item,
            net_weight: 0, //peso neto
            quantity_chicken: 0,
            tare: 6.8,
            quantity_box: 1,
            // imageUrl: item.image_url,
            tare_weight: 0,
            // itemCode: item.item_code,
            quantity: 0,
            status: 0,
            isDiscount: false,
            discount: item.type_item_id === 1 ? 0.5 : 0,
            categoryId: item.category_id,
            internalId: item.internal_id,
            unitTypeId: item.unit_type_id,
            total: 0
            // currencyTypeSymbol: item.currency_type_symbol,
            // sale_affectation_igv_type_id: item.sale_affectation_igv_type_id,
        };
        listItemsPOS.value.push(ProductTemp);
    } else {
        const index = listItemsPOS.value.findIndex((data) => data.id === item.id);
        incrementQuantityItemPOS(index);
    }
};
watch(listItemsPOS.value, async (newQuestion, oldQuestion) => {
    try {
        for (let index = 0; index < listItemsPOS.value.length; index++) {
            if (listItemsPOS.value[index].type_item_id === 1) {
                listItemsPOS.value[index].quantity = listItemsPOS.value[index].quantity_chicken * (listItemsPOS.value[index].average_weight ?? 0)
            }
            if (listItemsPOS.value[index].type_item_id === 2) {
                listItemsPOS.value[index].quantity = listItemsPOS.value[index].gross_weight ?
                    (listItemsPOS.value[index].gross_weight ?? 0) - ((listItemsPOS.value[index].tare ?? 0) * (listItemsPOS.value[index].quantity_box ?? 0)) :
                    0

                listItemsPOS.value[index].tare_weight = (listItemsPOS.value[index].tare ?? 0) * (listItemsPOS.value[index].quantity_box ?? 0)
                listItemsPOS.value[index].tare_weight = String(listItemsPOS.value[index].tare_weight) + " kg"
            }
            listItemsPOS.value[index].quantity = Number(moneyDecimal(String(listItemsPOS.value[index].quantity)))
            listItemsPOS.value[index].total = listItemsPOS.value[index].quantity * listItemsPOS.value[index].price -
                (listItemsPOS.value[index].isDiscount ?
                    (listItemsPOS.value[index].type_item_id === 1 ?
                        listItemsPOS.value[index].discount * listItemsPOS.value[index].quantity_chicken : 0)
                    : 0)
        }
    } catch (error) {
        console.log(error);
    } finally {
        // loading.value = false
    }
})



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
    return listItemsPOS.value.reduce((acumulador, data) => {
        return acumulador + data.total
        // return acumulador +
        //     (data.price * data.quantity -
        //         (data.isDiscount ? (data.type_item_id === 1 ? data.discount * data.quantity_chicken : 0) : 0)
        //     )
    }, 0)
}
const isShowModalComprobante = ref(false)
const mountPay = ref<number>(0)
const accountsReceivable = () => {
    if (totalListPOS() <= mountPay.value) return 0
    return totalListPOS() - mountPay.value
}
const moneyDecimal = (x: string) => {
    return Number.parseFloat(x).toFixed(2);
}
const cleanDataForm = () => {
    listItemsPOS.value = []
    isShowModalComprobante.value = false
    // saleNoteResponse.value = null
    mountPay.value = 0
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

const dialogConfirmSale = ref(false)
const dialogCustomer = ref(false)
const tabDialogCustomer = ref(null)
const onClickCloseDialogCustomer = ref()
const concatString = (s1: String, s2: String | number | null) => {
    return (s1 + "|  " + moneyDecimal(String(s2)))
}

const paymentsMethodTypes = ref<paymentPOS[]>([])
const onClickAddPaymentMethods = () => {
    paymentsMethodTypes.value.push(
        {
            payment_method_type: {
                "id": "01",
                "description": "Efectivo",
                "has_card": false,
                "charge": 0,
                "number_days": 0,
                "is_credit": false,
                "is_cash": true
            },
            mount: 0
        }
    )
}

const onClickDeletePaymentMethods = (id: number) => {
    paymentsMethodTypes.value.splice(id, 1);
}

onMounted(async () => {
    await onClickAddPaymentMethods()
})
watch(paymentsMethodTypes.value, async (newQuestion, oldQuestion) => {
    try {
        mountPay.value = paymentsMethodTypes.value.reduce((acumulador, data) => {
            return acumulador + Number(data.mount)
        }, 0)

    } catch (error) {
        console.log(error);
    } finally {
        // loading.value = false
    }
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
                    <v-col cols="12" v-if="listItemsPOS.length !== 0">
                        <v-row no-gutters v-for="(item, index) in  listItemsPOS " :key="index" class="py-0">
                            <v-col cols="12" md="12" lg="10" sm="12" xs="12">
                                <v-row no-gutters class="pt-4">
                                    <v-col cols="12" class="pb-4"
                                        :class="mobile ? 'd-flex justify-center' : 'd-flex justify-left'">
                                        <div class="text-left font-weight-bold">{{ item.name }} - {{ item.unitTypeId }}
                                        </div>
                                    </v-col>
                                    <v-col cols="4" xs="4" sm="4" md="2" lg="2" class="pr-1" v-if="item.type_item_id">
                                        <v-text-field type="number" density="compact" variant="solo"
                                            v-model="item.quantity_chicken" label="# Pollos"></v-text-field>
                                    </v-col>
                                    <v-col cols="4" xs="4" sm="4" md="2" lg="2" v-if="item.type_item?.id === 2"
                                        class="pr-1">
                                        <v-text-field type="number" density="compact" variant="solo"
                                            v-model="item.quantity_box" label="#Jaba"></v-text-field>
                                    </v-col>
                                    <v-col cols="4" xs="4" sm="4" md="2" lg="2" v-if="item.type_item?.id === 2"
                                        class="pr-1">
                                        <v-text-field type="number" density="compact" variant="solo"
                                            v-model="item.gross_weight" label="Peso Bruto (kg)"></v-text-field>
                                    </v-col>
                                    <v-col cols="4" xs="4" sm="4" md="2" lg="2" v-if="item.type_item?.id === 2"
                                        class="pr-1">
                                        <v-text-field density="compact" variant="solo" v-model="item.tare"
                                            :label="concatString('Tara(kg)', item.tare_weight ?? '')"
                                            suffix=""></v-text-field>
                                    </v-col>
                                    <v-col cols="4" xs="4" sm="4" md="2" lg="2" v-if="item.type_item?.id === 1"
                                        class="pr-1">
                                        <v-text-field type="number" density="compact" variant="solo"
                                            v-model="item.average_weight" label="Peso Promedio (kg)"></v-text-field>
                                    </v-col>
                                    <v-col cols="4" xs="4" sm="4" md="2" lg="2" class="pr-1">
                                        <v-text-field type="number" density="compact" variant="solo"
                                            v-model="item.quantity"
                                            :label="item.type_item_id ? 'Peso neto (kg)' : 'Cantidad'" color="white"
                                            bg-color="success"></v-text-field>
                                    </v-col>
                                    <v-col cols="4" xs="4" sm="4" md="2" lg="2" class="pr-1">
                                        <v-text-field type="number" density="compact" variant="solo"
                                            v-model="item.price" label="Precio" color="white"
                                            bg-color="success"></v-text-field>
                                    </v-col>
                                    <v-col cols="6" xs="4" sm="4" md="3" lg="3" v-if="item.type_item?.id === 1"
                                        class="pr-1 d-flex">
                                        <v-checkbox v-model="item.isDiscount"
                                            :label="!item.isDiscount ? 'Descuento' : ''" class="pr-6"></v-checkbox>
                                        <v-text-field v-if="item.isDiscount" type="number" density="compact"
                                            variant="solo" v-model="item.discount" label="Descuento"></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="12" md="12" lg="2" sm="12" xs="12"
                                class="d-flex align-center justify-center pb-4">
                                <v-row no-gutters class="d-flex align-center justify-center">
                                    <v-col :cols='mobile ? "10" : "9"' class="d-flex align-center flex-column">
                                        <div class="text-h5 py-2 ">
                                            S/.{{ moneyDecimal(String(item.price * item.quantity - (item.isDiscount ?
        item.discount * item.quantity_chicken : 0))) }}
                                        </div>
                                        <div v-if="item.isDiscount">
                                            <div class="text-decoration-line-through text-center"
                                                v-if="item.type_item_id === 1">
                                                Sub T: {{ moneyDecimal(String(item.quantity * item.price)) }}
                                            </div>
                                            <div v-if="item.type_item_id === 1" class="text-center">
                                                Desc: {{ moneyDecimal(String(item.discount * item.quantity_chicken)) }}
                                            </div>
                                        </div>
                                    </v-col>
                                    <v-col :cols='mobile ? "2" : "3"' class="d-flex align-center "
                                        :class='mobile ? "justify-center" : "justify-end"'>
                                        <v-btn @click="deleteItemPOS(index)" icon="mdi-delete-forever"
                                            color="red"></v-btn>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-spacer></v-spacer>
                            <v-divider :class="listItemsPOS.length == index + 1 ? 'pb-7' : ''"></v-divider>
                        </v-row>
                    </v-col>
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
                                <v-col cols="12" :lg="false ? '6' : '12'" sm="12" class="pb-0">
                                    <v-row no-gutters class="pb-4">
                                        <v-col cols="3">
                                            <v-combobox class="inline select-box" v-model="serieDocumentSelected"
                                                :items="seriesFilterToDocumentType" item-title="number" item-value="id">
                                            </v-combobox>
                                        </v-col>
                                        <v-col cols="8">
                                            <v-combobox class="inline select-box" v-model="customersSelected"
                                                :items="customers" variant="solo-filled" item-title="description"
                                                item-value="id">
                                            </v-combobox>
                                        </v-col>
                                        <v-col cols="1" class="py-2">
                                            <v-btn variant="flat" block icon="mdi-add" color="success"
                                                @click="dialogCustomer = true">
                                            </v-btn>
                                        </v-col>
                                        <v-divider></v-divider>
                                        <v-col cols="12" class="d-flex justify-center py-3">
                                            <v-sheet class="d-flex align-center flex-column">
                                                <v-sheet>Monto a Cobrar</v-sheet>
                                                <v-sheet class="text-h4 py-2">
                                                    S/.{{ moneyDecimal(String(totalListPOS())) }}
                                                </v-sheet>
                                                <v-sheet>Vuelto: {{ moneyDecimal(String(vuelto())) }}</v-sheet>
                                                <v-sheet class="text-red">Por cobrar: {{
        moneyDecimal(String(accountsReceivable())) }}</v-sheet>
                                            </v-sheet>
                                        </v-col>
                                        <v-divider class=""></v-divider>


                                    </v-row>
                                    <v-row no-gutters justify="center" class="py-3">
                                        <v-col cols="12" xs="12" md="12" lg="12" class="d-flex align-center">
                                            <div class="pr-6">Pagos Agregados:</div>
                                            <v-btn variant="flat" icon="mdi-add" color="success"
                                                @click="onClickAddPaymentMethods()">
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                    <v-row no-gutters justify="center" v-if="paymentsMethodTypes.length !== 0"
                                        v-for="(payment, index) in paymentsMethodTypes" :key="index">
                                        <v-col cols="7" class="pr-1">
                                            <v-combobox class="inline select-box" :items="payment_method_types"
                                                v-model="payment.payment_method_type" variant="outlined"
                                                item-title="description" item-value="id">
                                            </v-combobox>
                                        </v-col>
                                        <v-col cols="4" class="d-flex justify-center pr-1">
                                            <v-text-field label="Ingrese monto" placeholder="0.00"
                                                v-model="payment.mount">
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="1" class="py-2">
                                            <v-btn @click="onClickDeletePaymentMethods(index)" variant="flat" block
                                                icon="mdi-delete" color="red">
                                            </v-btn>
                                        </v-col>
                                        <!-- <v-col :cols="mobile ? '4' : '3'" class="d-flex justify-center py-1 px-1"
                                            v-for="( row, index ) in  typeMountPayments " :key="index">
                                            <v-btn color="success" size="large" @click="modifiedAmountPay(row)">
                                                S/.{{ row }}</v-btn>
                                        </v-col> -->
                                    </v-row>
                                    <v-divider class="pt-3"></v-divider>

                                    <v-col cols="12" class="d-flex justify-center  pb-0">
                                        <v-btn color="success" block size="large" @click="dialogConfirmSale = true"
                                            :disabled="false ? true : false"> PAGAR </v-btn>
                                    </v-col>
                                </v-col>

                            </v-row>
                        </v-card-text>

                    </v-card>

                </v-row>
            </v-container>
        </v-col>
        <!--  -->
        <!-- DIALOGS -->
        <!-- DIALGO CONFIRMAR VENTA -->
        <v-dialog v-model="dialogConfirmSale" max-width="500px" persistent>
            <v-card>
                <v-card class="text-h5  py-4 text-center">¿Estas seguro de realizar la venta?</v-card>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="dialogConfirmSale = false">Cancelar</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="success" size="large" variant="flat" @click="onClickPagar()">Pagar</v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <!-- DIALOG -->


        <!-- CUADRO DIALOGO -->
        <v-dialog v-model="dialogCustomer" :max-width="mobile ? '100%' : '70%'" transition="dialog-bottom-transition"
            persistent>
            <v-card>
                <v-toolbar color="primary" title="Nuevo Cliente"> </v-toolbar>
                <v-card-title class="px-0 py-0">
                    <v-tabs v-model="tabDialogCustomer" bg-color="primary">
                        <v-tab value="data">Datos de cliente</v-tab>
                        <v-tab value="direction">Dirección</v-tab>
                        <v-tab value="others">Otros datos</v-tab>
                    </v-tabs>
                </v-card-title>
                <v-card-text>
                    <v-window v-model="tabDialogCustomer">
                        <v-window-item value="data">
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
                                        <v-select :items="['NIU']" label="Unidad*" v-model="editedItem.unit_type_id"
                                            required></v-select>
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
                                        <v-select v-model="editedItem.warehouses" required :items="warehousesFetch"
                                            :item-title="'description'" item-value="id" label="Área">
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
                        <v-window-item value="direction">
                            <v-card-title class="d-flex">
                                Lotes
                                <v-spacer></v-spacer>
                                <v-btn color="success" @click="newLotsOnClick">
                                    <v-icon icon="mdi-plus-circle"></v-icon>
                                    <div v-if="!mobile"> Nuevo</div>
                                </v-btn>
                            </v-card-title>
                            <div v-for="( lot, index  ) in   editedItem.item_lots_group " :key="index"
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
                        </v-window-item>
                        <v-window-item value="others">
                            <v-card-title class="d-flex">
                                Lotes
                                <v-spacer></v-spacer>
                                <v-btn color="success" @click="newLotsOnClick">
                                    <v-icon icon="mdi-plus-circle"></v-icon>
                                    <div v-if="!mobile"> Nuevo</div>
                                </v-btn>
                            </v-card-title>
                            <div v-for="( lot, index  ) in   editedItem.item_lots_group " :key="index"
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
                        </v-window-item>
                    </v-window>
                </v-card-text>

                <v-card-actions class="mb-2">
                    <v-spacer></v-spacer>
                    <v-btn class="mx-2" color="blue-darken-1" variant="text" @click="dialogCustomer = false">
                        Cancelar
                    </v-btn>
                    <v-btn color="blue-darken-1" variant="elevated" @click="save()">
                        Guardar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <!-- DIALOG NEW , EDIT -->


    </v-row>

</template>


<style lang="scss">
.v-combobox .v-combobox__selection-text {
    font-size: small;
}
</style>
