<script lang="ts" setup>
import { useDisplay } from 'vuetify'
const { mobile } = useDisplay()
import { useSnackbarStore } from '@/store/index';
const snackbarStore = useSnackbarStore()
import type { ModuleLevel, Module } from '@/interfaces/modules-levels.interface'
import type { User } from '@/interfaces/User'
const apiURL = useCookie("apiURL");
const { data: modulesFetch, refresh: modulesRefresh } = await useFetch<Module[]>(`${apiURL.value}/modules`, { method: 'GET' });
const { data: usersFetch, refresh: usersRefresh } = await useFetch<User[]>(`${apiURL.value}/users`, { method: 'GET' });
const headers = ref([
    // { align: 'start', key: 'name', sortable: true, title: 'Especialidad', },
    { key: 'n', title: 'N°' },
    { key: 'name', title: 'Nombres' },
    { key: 'email', title: 'Email' },
    // { key: 'api_token', title: 'API Token' },
    { key: 'actions', title: 'Acciones' },
])


const permissions = ref(modulesFetch.value?.map((modules) => {
    return {
        id: modules.id,
        icon: modules.icon,
        title: modules.title,
        value: modules.value,
        path: modules.path,
        checked: false,
        expanded: false,
        module_levels: modules.module_levels.map(level => {
            return {
                id: level.id,
                module_id: level.module_id,
                title: level.title,
                value: level.value,
                path: level.path,
                checked: false
            }
        })
    }
}))
const toggleChildren = (permission: Module) => {
    if (permission.module_levels) {
        permission.module_levels.forEach((child: any) => {
            child.checked = permission.checked;
        });
    }
}
const toggleParent = (permission: Module) => {
    if (!permission.module_levels) throw Error("No data in levels")

    if (permission.module_levels.every((child: any) => !child.checked)) {
        permission.checked = false
    } else {
        permission.checked = true
    }
}

const page = ref(1)
const itemsPerPage = ref(10)
const search = ref('')
const selected = ref([])
const dialog = ref(false)
const dialogDelete = ref(false)
const tab = ref("general")
let editedIndex = ref(-1)
let editPassword = ref(false)
const editedItem = ref<User>({
    id: 0,
    name: '',
    email: '',
    password: '',
    api_token: '',
    locked: false,
    photo_filename: '',
    date_of_birth: '',
    corporate_cell_phone: '',
    personal_cell_phone: '',
    identity_document_type_id: '',
    number: '',
    address: '',
    telephone: '',
    firt_name: '',
    last_name: '',
    module_user: null

})

const defaultItem = ref<User>({
    id: 0,
    name: '',
    email: '',
    password: '',
    api_token: '',
    locked: false,
    photo_filename: '',
    date_of_birth: '',
    corporate_cell_phone: '',
    personal_cell_phone: '',
    identity_document_type_id: '',
    number: '',
    address: '',
    telephone: '',
    firt_name: '',
    last_name: '',
    module_user: null
})

const pageCount = computed(() => {
    if (!usersFetch.value) return 1
    return Math.ceil(usersFetch.value.length / itemsPerPage.value)
})
const nameTitleDialog = ref("")
const openDialogNewItem = () => {
    dialog.value = true
    nameTitleDialog.value = "Nuevo Usuario"
    editedItem.value = JSON.parse(JSON.stringify(defaultItem.value))
}

const openDialogEditItem = (item: User) => {
    if (!usersFetch.value) return null
    dialog.value = true
    nameTitleDialog.value = "Editar Usuario"
    editedItem.value = JSON.parse(JSON.stringify(item))
    editedIndex.value = usersFetch.value.indexOf(item)
    if (!permissions.value) return null

    permissions.value.map(module => {
        // Verificar si el usuario tiene acceso a este módulo
        if (!editedItem.value.module_user) return
        const userModule = editedItem.value.module_user.find(mu => mu.module_id === module.id);

        if (userModule) {
            // Si el usuario tiene acceso a este módulo, marcarlo como checked
            module.checked = true;
            module.expanded = true;

            // Iterar sobre los niveles del módulo
            module.module_levels = module.module_levels.map(level => {
                // Verificar si el usuario tiene acceso a este nivel
                const userLevel = userModule.level_user.find(lu => lu.level_id === level.id);
                level.checked = !!userLevel;

                return level;
            });
        } else {
            module.checked = false;
            module.expanded = false;

            // Marcar todos los niveles del módulo como no checked
            module.module_levels = module.module_levels.map(level => {
                level.checked = false;
                return level;
            });
        }

        return module;
    });

}
const openDialogDeleteItem = (item: User) => {
    if (!usersFetch.value) return null
    dialogDelete.value = true
    nameTitleDialog.value = "Eliminar Usuario"
    // editedIndex.value = itemsFetch.value.indexOf(item)
    editedItem.value = item
}

const closeDialogItem = async () => {
    dialog.value = false
    editPassword.value = false
    tab.value = "general"
    permissions.value = permissions.value?.map((modules) => {
        return {
            id: modules.id,
            icon: modules.icon,
            title: modules.title,
            value: modules.value,
            path: modules.path,
            checked: false,
            expanded: false,
            module_levels: modules.module_levels.map(level => {
                return {
                    id: level.id,
                    module_id: level.module_id,
                    title: level.title,
                    value: level.value,
                    path: level.path,
                    checked: false
                }
            })
        }
    })
    nextTick(() => {
        editedItem.value = JSON.parse(JSON.stringify(defaultItem.value))
        editedIndex.value = -1
    })
}
const closeDialogDeleteItem = () => {
    dialogDelete.value = false
    nextTick(() => {
        editedItem.value = JSON.parse(JSON.stringify(defaultItem.value))
        editedIndex.value = -1
    })
}

const save = () => {
    try {
        if (!usersFetch.value) return null
        if (editedIndex.value > -1) {
            updateItemFetch(editedItem.value)
        } else {
            registerItemFetch(editedItem.value)
        }
        closeDialogItem()
    } catch (error) {
        snackbarStore.setStatus("error", "Error", String(error))
    } finally {

        snackbarStore.setStatus("success", "Guardado correctamente")
    }
}

const deleteItemConfirm = () => {
    try {
        if (!usersFetch.value) return null
        deleteItemFetch(editedItem.value.id)
        // itemsFetch.value.splice(editedIndex.value, 1)
        closeDialogDeleteItem()
        nextTick(() => {
            editedItem.value = JSON.parse(JSON.stringify(defaultItem.value))
            editedIndex.value = -1
        })
    } catch (error: any) {
        snackbarStore.setStatus("error", "Error", error)
    } finally {
        snackbarStore.setStatus("success", "Eliminado correctamente")
    }
}
const sendUser = (item: User) => {
    return {
        id: item.id, // se pone el id para modificar
        name: item.name,
        email: item.email,
        password: item.password,
        identity_document_type_id: "1",
        permissions: permissions.value,
        photo_filename: null,
        date_of_birth: null,
        corporate_cell_phone: null,
        personal_cell_phone: null,
        number: null,
        address: null,
        telephone: null,
        firt_name: null,
        last_name: null,
    }
}
const registerItemFetch = async (item: User) => {
    const response = await fetch(
        `${apiURL.value}/users`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // Authorization: `Bearer ${userCookie.value.token}`,
            },
            body: JSON.stringify(sendUser(item))
        }
    )
    if (response.ok) {
        snackbarStore.setStatus("success", "Guardado correctamente")
        await usersRefresh()
    } else {
        snackbarStore.setStatus("error", "Error", String(response))
    }
}

const updateItemFetch = async (item: User) => {
    const response = await fetch(
        `${apiURL.value}/users`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                // Authorization: `Bearer ${userCookie.value.token}`,
            },
            body: JSON.stringify(sendUser(item))
        }
    )
    if (response.ok) {
        snackbarStore.setStatus("success", "Editado correctamente")
        await usersRefresh()
    } else {
        snackbarStore.setStatus("error", "Error", JSON.stringify(response))
    }
}

const changePasswordFetch = async () => {
    const response = await fetch(
        `${apiURL.value}/users/change-password`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                // Authorization: `Bearer ${userCookie.value.token}`,
            },
            body: JSON.stringify(sendUser(editedItem.value))
        }
    )
    if (response.ok) {
        snackbarStore.setStatus("success", "Contraseña cambiado")
        await usersRefresh()
    } else {
        snackbarStore.setStatus("error", "Error", String(response))
    }
}

const deleteItemFetch = async (id: number) => {
    const response = await fetch(
        `${apiURL.value}/users/${id}`, { method: "DELETE" }
    )
    if (response.ok) {
        snackbarStore.setStatus("success", "Eliminado correctamente")
        await usersRefresh()
    } else {
        snackbarStore.setStatus("error", "Error", String(response))
    }
}


</script>
<template>
    <v-container fluid v-if="usersFetch">
        <v-app-bar class="justify-center" flat append>
            <div class="justify-center mx-4">
                <v-icon class="me-1" icon="mdi-account"></v-icon>
                <span class="subheading">Usuarios</span>
            </div>
            <v-spacer></v-spacer>
            <v-btn append-icon="mdi-plus-circle" color="primary" variant="flat"
                @click="openDialogNewItem()">Nuevo</v-btn>
        </v-app-bar>
        <!-- {{ apiURL }}asds -->
        <!-- {{ usersFetch }} -->
        <v-card class="justify-self-end mx-4" elevation="0">
            <v-container fluid>
                <v-row dense>
                    <v-data-table v-model:page="page" v-model="selected" :headers="headers" :items="usersFetch"
                        :items-per-page="itemsPerPage" :search="search" class="elevation-1">
                        <template v-slot:item.n="{ index }">
                            {{ index + 1 + itemsPerPage * (page - 1) }}
                        </template>

                        <template v-slot:item.actions="{ item }">
                            <div class="justify-center ">
                                <v-btn class="me-2" rounded icon="mdi-pencil" color="yellow"
                                    @click="openDialogEditItem(item.raw)">
                                </v-btn>
                                <v-btn v-if="!item.raw.locked" color="red" rounded icon="mdi-delete"
                                    @click="openDialogDeleteItem(item.raw)">
                                </v-btn>
                            </div>
                        </template>

                        <template v-slot:bottom>
                            <div class="text-center pt-2">
                                <v-pagination v-model="page" :length="pageCount"></v-pagination>
                            </div>
                        </template>
                    </v-data-table>
                </v-row>
                <!-- CUADRO DIALOGO -->
                <v-dialog v-model="dialog" :max-width="mobile ? '100%' : '70%'" transition="dialog-bottom-transition"
                    persistent>
                    <v-card>
                        <v-toolbar floating>
                            <v-toolbar-title>{{ nameTitleDialog }} </v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-btn icon="mdi-close" @click="closeDialogItem()"></v-btn>
                        </v-toolbar>
                        <v-card-title class="px-0 py-0">
                            <v-tabs v-model="tab">
                                <v-tab value="general">General</v-tab>
                                <v-tab value="permissions">Permisos</v-tab>
                            </v-tabs>
                        </v-card-title>
                        <v-card-text>
                            <v-window v-model="tab">
                                <v-window-item value="general">
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.name"
                                                    label="Nombres (*)"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-if="editedIndex === -1" v-model="editedItem.password"
                                                    label="Contraseña"></v-text-field>
                                                <v-btn color="grey-darken-1" variant="elevated"
                                                    v-if="editedIndex !== -1 && !editPassword"
                                                    @click="editPassword = true">
                                                    Cambiar
                                                    contraseña</v-btn>
                                                <v-text-field type="password" v-if="editPassword"
                                                    label="Nueva contraseña" v-model="editedItem.password">
                                                    <template v-slot:append>
                                                        <v-btn icon variant="elevated" color="grey"
                                                            @click="changePasswordFetch()">
                                                            <v-icon> mdi-content-save </v-icon>
                                                        </v-btn>
                                                    </template>
                                                </v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-window-item>
                                <v-window-item value="permissions">
                                    <v-container>
                                        <p class="mb-2">Permisos Módulos</p>
                                        <div class="permission-group" v-for="(modules, index) in permissions"
                                            :key="index">
                                            <div class="permission-item">
                                                <input type="checkbox" v-model="modules.checked"
                                                    @change="toggleChildren(modules)" />
                                                <span class=" cursor" @click="modules.expanded = !modules.expanded"
                                                    :class="[{ 'rotated': modules.expanded }, modules.module_levels.length ? 'toggle-icon' : '']">
                                                    <label class="px-2 cursor">{{ modules.title
                                                        }}</label>
                                                    <i v-if="!modules.module_levels.length"
                                                        :class="{ 'arrow-right': !modules.expanded, 'arrow-down': modules.expanded }"></i>
                                                </span>
                                            </div>
                                            <transition name="expand">
                                                <div class="children" v-if="modules.expanded">
                                                    <div class="permission-item child px-2"
                                                        v-for="(child, childIndex) in modules.module_levels"
                                                        :key="childIndex">
                                                        <input type="checkbox" v-model="child.checked"
                                                            @change="toggleParent(modules)" />
                                                        <label @click="child.checked = !child.checked">{{ child.title
                                                            }}</label>
                                                    </div>
                                                </div>
                                            </transition>
                                        </div>
                                    </v-container>
                                </v-window-item>
                            </v-window>
                        </v-card-text>

                        <v-card-actions class="mb-2">
                            <v-spacer></v-spacer>
                            <v-btn color="blue-darken-1" variant="elevated" @click="save()">
                                Guardar
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <!-- DIALOG NEW , EDIT -->
                <!-- DIALGO DELETE -->
                <v-dialog v-model="dialogDelete" max-width="500px" persistent>
                    <v-card>
                        <v-card class="text-h5 px-4 py-4 text-center">¿Está seguro de que desea eliminar este
                            elemento?</v-card>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue-darken-1" variant="text" @click="closeDialogDeleteItem">Cancelar</v-btn>
                            <v-btn color="red-darken-1" variant="flat" @click="deleteItemConfirm">Eliminar</v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <!-- DIALOG -->
            </v-container>
        </v-card>
    </v-container>


</template>

<style>
*,
*:before,
*:after {
    box-sizing: border-box;
}

body {
    margin: 0;
}

form {
    display: grid;
    place-content: center;
    min-height: 100vh;
}

.form-control {
    font-family: system-ui, sans-serif;
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.1;
    display: grid;
    grid-template-columns: 1em auto;
    gap: 0.5em;
}

.form-control+.form-control {
    margin-top: 1em;
}

.form-control--disabled {
    color: var(--form-control-disabled);
    cursor: not-allowed;
}

input[type="checkbox"] {
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    /* Remove most all native input styles */
    appearance: none;
    /* For iOS < 15 */
    background-color: var(--form-background);
    /* Not removed via appearance */
    margin: 0;

    font: inherit;
    color: currentColor;
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid currentColor;
    border-radius: 0.15em;
    transform: translateY(-0.075em);

    display: grid;
    place-content: center;
}

input[type="checkbox"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 100ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--form-control-color);
    /* Windows High Contrast Mode */
    background-color: CanvasText;
}

input[type="checkbox"]:checked::before {
    transform: scale(1);
}

input[type="checkbox"]:focus {
    outline: max(2px, 0.15em) solid currentColor;
    outline-offset: max(2px, 0.15em);
}

input[type="checkbox"]:disabled {
    --form-control-color: var(--form-control-disabled);

    color: var(--form-control-disabled);
    cursor: not-allowed;
}

.container {
    margin: 20px;
    font-family: Arial, sans-serif;
}

.permission-group {
    margin-bottom: 10px;
}

.permission-item {
    display: flex;
    align-items: center;
}

.permission-item input {
    margin-right: 10px;
}

.children {
    margin-left: 20px;
    overflow: hidden;
}

.child {
    margin-top: 5px;
}

.cursor {
    cursor: pointer;
}

.toggle-icon::before {
    content: '▼';
    display: inline-block;
    transition: transform 0.3s ease;
    /* Transición suave */
}

.toggle-icon.rotated::before {
    transform: rotate(-90deg);
    /* Rotación de 90 grados */
}

.expand-enter-active,
.expand-leave-active {
    transition: max-height 0.3s ease, opacity 0.3s ease;
}

.expand-enter-from,
.expand-leave-to {
    max-height: 0;
    opacity: 0;
}

.expand-enter-to,
.expand-leave-from {
    max-height: 500px;
    opacity: 1;
}
</style>