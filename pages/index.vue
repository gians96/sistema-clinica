
<script setup lang="ts">

const route = useRoute()
const email = ref("");
const password = ref("");
const SingUp = () => {
  navigateTo('/characters')
};
const { ruleEmail, rulePassLen, ruleRequired } = useFormRules();

const submit = async () => { 
  console.log("entra");
  
};

definePageMeta({
  layout: "auth",
});
</script>

<template>
  <VContainer fluid class="fill-height">
    <VRow no-gutters align="center" justify="center" class="fill-height">
      <VCol cols="12" md="6" lg="5" sm="6">
        <VRow no-gutters align="center" justify="center">
          <VCol cols="12" md="6">
            <div class=" d-flex align-center justify-center mb-4">
              <v-img src="https://cmecocasma.nt-suite.one/storage/uploads/logos/logo_20541751832.jpg" cover
                max-height="130" max-width="130">
              </v-img>
            </div>
            <h1>Iniciar sesión</h1>
            <p class="text-medium-emphasis">Ingresa tus datos</p>

            <!-- <UtilsTextanimate></UtilsTextanimate> -->

            <VForm @submit.prevent="submit" class="mt-7">
              <div class="mt-1">
                <label class="label text-grey-darken-2" for="email">Email</label>
                <VTextField :rules="[ruleRequired, ruleEmail]" v-model="email" prepend-inner-icon="fluent:mail-24-regular"
                  id="email" name="email" type="email" />
              </div>
              <div class="mt-1">
                <label class="label text-grey-darken-2" for="password">Contraseña</label>
                <VTextField :rules="[ruleRequired, rulePassLen]" v-model="password"
                  prepend-inner-icon="fluent:password-20-regular" id="password" name="password" type="password" />
              </div>
              <div class="mt-5">
                <!-- <VBtn type="submit" block min-height="44" class="gradient primary" to="/characters">Ingresar</VBtn> -->
                <v-btn type="submit" block min-height="44" class="gradient primary">Ingresar</v-btn>
              </div>
            </VForm>
            <!-- <p class="text-body-2 mt-10">
              <NuxtLink to="/reset-password" class="font-weight-bold text-primary">¿Has olvidado tu contraseña?</NuxtLink>
            </p>
            <p class="text-body-2 mt-4">
              <span>¿No tienes una cuenta?
                <NuxtLink to="/signup" class="font-weight-bold text-primary">Registrate</NuxtLink>
              </span>
            </p> -->
          </VCol>
        </VRow>
      </VCol>
      <VCol class="hidden-md-and-down fill-height" md="6" lg="7">
        <VImg src="https://wallpaper.dog/large/5557744.jpg" cover
          class="h-100 rounded-xl d-flex align-center justify-center">
          <div class="text-center w-50 text-white mx-auto align-center">

            <h2 class="mb-4">CENTRO MEDICO ECOCASMA E.I.R.L.</h2>
            <p>
              Software médico, ideal para clínicas y consultorios.
              Ahorra tiempo y mejora la salud de tus pacientes organizando,
              llevando tus historias clínicas y realizando videollamadas en una sola plataforma integrada.
            </p>
          </div>
        </VImg>
      </VCol>
    </VRow>

  </VContainer>
</template>
