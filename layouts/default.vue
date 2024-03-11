<script setup lang="ts">
const config = useRuntimeConfig()
const apiURL = useCookie("apiURL");
apiURL.value = config.public.apiURL
import CompaniesFetch from "@/api/companiesData"
import type { Company } from "~/interfaces/Company.interface";
const company = useCookie<Company>("company");

company.value = CompaniesFetch.data 
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