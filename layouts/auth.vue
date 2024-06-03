<script setup lang="ts">
const config = useRuntimeConfig()
const apiURL = useCookie("apiURL");
const token_apiperu = useCookie("token_apiperu");
apiURL.value = config.public.apiURL
token_apiperu.value = config.public.token_apiperu
import { companyStore } from '@/store/company'
const companyStoreObj = companyStore()
await companyStoreObj.requestItems()
onMounted(async () => {
})
// company.value = CompaniesFetch.data 
</script>
<template>
	<div>
		<VApp>
			<VMain>
				<slot />
			</VMain>
		</VApp>
	</div>
</template>
