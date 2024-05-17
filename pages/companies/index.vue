<script lang="ts" setup>

import type { Company, Series } from "~/interfaces/Company.interface.js";
import { companyStore } from '@/store/company'
const companyFetch = companyStore().$state
import { useSnackbarStore } from '@/store/index'
const snackbarStore = useSnackbarStore()
const editedItem = ref<Company>(companyFetch.companies)
const apiURL = useCookie("apiURL");
const save = async () => {
    try {
        const response = await fetch(
            `${apiURL.value}/company`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    // Authorization: `Bearer ${userCookie.value.token}`,
                },
                body: JSON.stringify(editedItem.value)
            }
        )
        if (response.ok) {
            const item = await response.json()
            editedItem.value = item
            snackbarStore.setStatus("success", "Guardado correctamente")
        } else {
            snackbarStore.setStatus("error", "Error", String(response))
        }
    } catch (error: any) {
        console.log(error);
    } finally {
    }
}
</script>
<template>
    <v-container fluid>
        <v-row>
            {{ editedItem }}
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
                                        <v-text-field disabled v-model="editedItem.number"
                                            label="Número(*)"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="8">
                                        <v-text-field v-model="editedItem.name" label="Razón Social(*)"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="8">
                                        <v-text-field v-model="editedItem.trade_name" label="Nombre(*)"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.logo" label="Logo"></v-text-field>
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
                                        <v-text-field v-model="editedItem.api_url" label="URL"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="6">
                                        <v-text-field v-model="editedItem.token" label="Token"></v-text-field>
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
                    <!-- TIPO DE SOAP: PRODUCCION, INTERNA, DEMO -->
                    <!-- <v-col cols="12">
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
                    </v-col> -->
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>