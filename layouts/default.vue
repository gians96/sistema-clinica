<script setup lang="ts">
const config = useRuntimeConfig()
const apiURL = useCookie("apiURL");
apiURL.value = config.public.apiURL
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