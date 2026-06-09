<script lang="ts" setup>

import type { Company } from "~/interfaces/Company.interface.js";
import { companyStore } from '@/store/company'
import { useSnackbarStore } from '@/store/index'
import { syncCompanyState, useCompanyLogoUrl } from '~/composables/useCompanyLogoPdf'

const companyFetch = companyStore().$state
const snackbarStore = useSnackbarStore()
const editedItem = ref<Company>(companyFetch.companies)
const apiURL = useCookie("apiURL");
const logoFile = ref<File[]>([])
const uploadingLogo = ref(false)
const localPreview = ref<string | null>(null)

watch(logoFile, (files) => {
    if (localPreview.value) {
        URL.revokeObjectURL(localPreview.value)
    }
    localPreview.value = files && files.length ? URL.createObjectURL(files[0]) : null
})

const savedLogoUrl = computed(() => useCompanyLogoUrl(editedItem.value.logo))
const previewSrc = computed(() => localPreview.value ?? savedLogoUrl.value)

const save = async () => {
    try {
        const response = await fetch(
            `${apiURL.value}/company`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(editedItem.value)
            }
        )
        if (response.ok) {
            const item = await response.json()
            editedItem.value = item
            syncCompanyState(item)
            snackbarStore.setStatus("success", "Guardado correctamente")
        } else {
            snackbarStore.setStatus("error", "Error", String(response))
        }
    } catch (error: any) {
        console.log(error);
    }
}

const uploadLogo = async () => {
    if (!logoFile.value.length) {
        snackbarStore.setStatus("error", "Seleccione una imagen")
        return
    }

    uploadingLogo.value = true
    try {
        const formData = new FormData()
        formData.append("id", String(editedItem.value.id))
        formData.append("number", editedItem.value.number)
        formData.append("logo", logoFile.value[0])

        const response = await fetch(`${apiURL.value}/company/logo`, {
            method: "POST",
            body: formData,
        })

        if (response.ok) {
            const item = await response.json()
            editedItem.value = item
            syncCompanyState(item)
            logoFile.value = []
            if (localPreview.value) {
                URL.revokeObjectURL(localPreview.value)
                localPreview.value = null
            }
            snackbarStore.setStatus("success", "Logo actualizado correctamente")
        } else {
            snackbarStore.setStatus("error", "Error al subir logo", String(response))
        }
    } catch (error: any) {
        console.log(error);
        snackbarStore.setStatus("error", "Error al subir logo")
    } finally {
        uploadingLogo.value = false
    }
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
                                        <v-text-field disabled v-model="editedItem.number"
                                            label="Número(*)"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="8">
                                        <v-text-field v-model="editedItem.name" label="Razón Social(*)"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="8">
                                        <v-text-field v-model="editedItem.trade_name" label="Nombre(*)"></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-row align="center">
                                            <v-col cols="12" sm="5" md="5">
                                                <div class="logo-box d-flex align-center justify-center">
                                                    <v-img
                                                        v-if="previewSrc"
                                                        :src="previewSrc"
                                                        max-height="140"
                                                        contain
                                                    />
                                                    <div v-else class="text-center text-medium-emphasis">
                                                        <v-icon size="48" icon="mdi-image-outline"></v-icon>
                                                        <div class="text-caption mt-1">Sin logo</div>
                                                    </div>
                                                </div>
                                            </v-col>
                                            <v-col cols="12" sm="7" md="7">
                                                <v-file-input
                                                    v-model="logoFile"
                                                    accept="image/jpeg,image/png,image/webp"
                                                    label="Logo de la empresa"
                                                    prepend-icon="mdi-camera"
                                                    variant="outlined"
                                                    density="comfortable"
                                                    show-size
                                                    clearable
                                                    hint="JPEG, PNG o WebP (máx. 2 MB)"
                                                    persistent-hint
                                                />
                                                <v-btn
                                                    color="primary"
                                                    variant="elevated"
                                                    class="mt-3"
                                                    prepend-icon="mdi-upload"
                                                    :loading="uploadingLogo"
                                                    :disabled="!logoFile.length"
                                                    @click="uploadLogo()"
                                                >
                                                    Subir logo
                                                </v-btn>
                                            </v-col>
                                        </v-row>
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
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<style scoped>
.logo-box {
    border: 1px dashed rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    min-height: 150px;
    padding: 8px;
    background-color: rgba(0, 0, 0, 0.02);
}
</style>
