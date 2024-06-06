<script setup lang="ts">
const config = useRuntimeConfig()
const apiURL = useCookie("apiURL");
const token_apiperu = useCookie("token_apiperu");
apiURL.value = config.public.apiURL
token_apiperu.value = config.public.token_apiperu
import { companyStore } from '@/store/company'
import type { Company } from '~/interfaces/Company.interface';
const companyStoreObj = companyStore()
await companyStoreObj.requestItems()
const company = useCookie<Company>("company")
company.value = companyStoreObj.$state.companies
onMounted(async () => {
})
// company.value = CompaniesFetch.data 
</script>
<template>
	<v-app>
		<SideBar></SideBar>
		<NavBar></NavBar>
		<VMain>
			<slot />
		</VMain>
		<SnackBar></SnackBar>
	</v-app>
</template>
<style>
body {
	/* font-family: "Poppins", sans-serif; */
}
</style>