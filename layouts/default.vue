<script setup lang="ts">
</script>
<template >
	<v-app>
		<SideBar></SideBar>
		<NavBar></NavBar>
		<VMain>
			<slot />
		</VMain>
	</v-app>
</template>
<style>
body {
	/* font-family: "Poppins", sans-serif; */
}
</style>