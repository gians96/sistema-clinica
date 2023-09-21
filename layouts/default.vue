<script setup lang="ts">
</script>
<template >
	<v-app>
		<v-layout>
			<SideBar></SideBar>
			<NavBar></NavBar>
			<VMain>
				<slot />
			</VMain>
		</v-layout>
		<!-- <NuxtLink to="/"> Back to home </NuxtLink> -->
	</v-app>
</template>
<style>
body {
	/* font-family: "Poppins", sans-serif; */
}
</style>