<script lang="ts" setup>
import CompaniesFetch from "@/api/companiesData"
import type { Company } from "@/interfaces/Company.interface";
import { useSnackbarStore } from '@/store/index'
import { countries, departments, districts, provinces } from "@/api/locationData"
import type { Country, Department, Province, District } from "@/interfaces/Location.interface";

const snackbarStore = useSnackbarStore()
const item = ref<Company>(CompaniesFetch.data)
const editedItem = ref<Company>(Object.assign({}, item.value))

const countriesData = ref<Country[]>([...countries])
const departmentsData = ref<Department[]>([...departments])
const provincesData = ref<Province[]>([...provinces])
const districtsData = ref<District[]>([...districts])

const provincesFilter = ref(provincesData.value.filter(data => editedItem.value.department ? data.department_id === editedItem.value.department?.id : null))
const districtsFilter = ref(districtsData.value.filter(data => editedItem.value.province ? data.province_id === editedItem.value.province?.id : null))

const save = () => {
    try {
        Object.assign(item.value, editedItem.value)
    } catch (error: any) {
        snackbarStore.setStatus("error", "Error", error)
    } finally {
        snackbarStore.setStatus("success", "Guardado correctamente")
    }
}
const filterProvinces = () => {
    editedItem.value.province = null
    editedItem.value.district = null
    provincesFilter.value = provincesData.value.filter(data => editedItem.value.department ? data.department_id === editedItem.value.department?.id : null)
}
const filterDistrits = () => {
    editedItem.value.district = null
    districtsFilter.value = districtsData.value.filter(data => editedItem.value.province ? data.province_id === editedItem.value.province?.id : null)
}
</script>
<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12" sm="6" md="6">
                <v-row>
                    <!-- DATOS DE LA EMPRESA-->
                    <v-col cols="12">
                        <v-card>
                            <v-toolbar color="primary" title="Datos de la Empresa">
                            </v-toolbar>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.number" label="Número(*)"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="8">
                                        <v-text-field v-model="editedItem.name" label="Razón Social(*)"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="8">
                                        <v-text-field v-model="editedItem.tradeName" label="Nombre(*)"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.logo" label="Logo"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="3">
                                        <v-text-field v-model="editedItem.code"
                                            label="Código Domicilio Fiscal"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="3">
                                        <v-combobox v-model="editedItem.country" :items="countriesData"
                                            item-title="description" item-value="id" label="País">
                                        </v-combobox>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="3">
                                        <v-combobox v-model="editedItem.department" :items="departmentsData"
                                            @update:modelValue="filterProvinces" item-title="description"
                                            item-value="id" label="Departamento">
                                        </v-combobox>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="3">
                                        <v-combobox v-model="editedItem.province" :items="provincesFilter"
                                            @update:modelValue="filterDistrits" item-title="description" item-value="id"
                                            label="Provincia">
                                        </v-combobox>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="3">
                                        <v-combobox v-model="editedItem.district" :items="districtsFilter"
                                            item-title="description" item-value="id" label="Distrito">
                                        </v-combobox>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="6">
                                        <v-text-field v-model="editedItem.address" label="Dirección"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="3">
                                        <v-text-field v-model="editedItem.telephone" label="Teléfono"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.email"
                                            label="Correo de contacto"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.webAddress"
                                            label="Dirección web"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.aditionalInformation"
                                            label="Información adicional"></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                            <v-card-actions class="mb-2">
                                <v-spacer></v-spacer>
                                <v-btn color="blue-darken-1" variant="elevated" @click="save()">
                                    Guardar
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" sm="6" md="6">
                <v-row>
                    <!-- API FACTURACION -->
                    <v-col cols="12">
                        <v-card>
                            <v-toolbar color="primary" title="API facturación">
                            </v-toolbar>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="12" sm="6" md="6">
                                        <v-text-field v-model="editedItem.api_facturacion.url"
                                            label="URL"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="6">
                                        <v-text-field v-model="editedItem.api_facturacion.token"
                                            label="Token"></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                            <v-card-actions class="mb-2">
                                <v-spacer></v-spacer>
                                <v-btn color="blue-darken-1" variant="elevated" @click="save()">
                                    Guardar
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <!-- API CONSULTA RUC / DNI -->
                    <v-col cols="12">
                        <v-card>
                            <v-toolbar color="primary" title="API consulta RUC/DNI">
                            </v-toolbar>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="12" sm="6" md="6">
                                        <v-text-field v-model="editedItem.api_search_ruc_dni.url"
                                            label="URL"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="6">
                                        <v-text-field v-model="editedItem.api_search_ruc_dni.token"
                                            label="Token"></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                            <v-card-actions class="mb-2">
                                <v-spacer></v-spacer>
                                <v-btn color="blue-darken-1" variant="elevated" @click="save()">
                                    Guardar
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>


            </v-col>

        </v-row>

    </v-container>
</template>