<script lang="ts" setup>
import CompaniesFetch from "@/api/companiesData"
import { Company } from "interfaces/Company.interface";
import { useSnackbarStore } from '@/store/index'
import { countries, departments, districts, provinces } from "@/api/locationData"

const snackbarStore = useSnackbarStore()
const item = ref<Company>(CompaniesFetch.data)
const editedItem = ref<Company>(Object.assign({}, item.value))

const save = () => {
    try {
        Object.assign(item.value, editedItem.value)
    } catch (error) {
        snackbarStore.setStatus("error", "Error", error)
    } finally {
        snackbarStore.setStatus("success", "Guardado correctamente")
    }
}
</script>
<template>
    <v-container fluid>
        <v-card>
            <v-toolbar color="primary" title="Datos de la Empresa">
            </v-toolbar>
            <v-card-text>
                <v-container>
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
                            <v-text-field v-model="editedItem.code" label="Código Domicilio Fiscal"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-combobox v-model="editedItem.idCountry" :items="countries.rows" item-title="description"
                                item-value="id" label="País">
                            </v-combobox>
                            <!-- <v-text-field v-model="editedItem.idCountry" label="País"></v-text-field> -->
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field v-model="editedItem.idDepartments" label="Departamento"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field v-model="editedItem.idProvinces" label="Provincia"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field v-model="editedItem.idDistricts" label="Distrito"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field v-model="editedItem.address" label="Dirección"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field v-model="editedItem.telephone" label="Teléfono"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="editedItem.email" label="Correo de contacto"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="editedItem.webAddress" label="Dirección web"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="editedItem.aditionalInformation"
                                label="Información adicional"></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions class="mb-2">
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="elevated" @click="save()">
                    Guardar
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container></template>