<template>
  <VContainer fluid class="fill-height">
    <VRow no-gutters align="center" justify="center" class="fill-height">
      <VCol cols="12" md="6" lg="5" sm="6">
        <VRow no-gutters align="center" justify="center">
          <VCol cols="12" md="6">
            <h1>Reset password</h1>
            <p class="text-medium-emphasis">Add your email to get instructions</p>

            <VForm @submit.prevent="submit" class="mt-7">
              <div class="mt-1">
                <label class="label text-grey-darken-2" for="email">Email</label>
                <VTextField
                  :rules="[ruleRequired, ruleEmail]"
                  v-model="email"
                  prepend-inner-icon="fluent:mail-24-regular"
                  id="email"
                  name="email"
                  type="email"
                />
              </div>
              <div class="mt-5">
                <VBtn type="submit" block min-height="44" class="gradient primary"
                  >Send instructions</VBtn
                >
              </div>
            </VForm>
            <p class="text-body-2 mt-10">
              <span
                >Don't have an account?
                <NuxtLink to="/signup" class="font-weight-bold text-primary"
                  >Sign Up</NuxtLink
                ></span
              >
            </p>
          </VCol>
        </VRow>
      </VCol>
      <VCol class="hidden-md-and-down fill-height" md="6" lg="7">
        <VImg
          src="https://wallpaper.dog/large/5557744.jpg"
          cover
          class="h-100 rounded-xl d-flex align-center justify-center"
        >
          <div class="text-center w-50 text-white mx-auto">
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

<script setup>

definePageMeta({
  layout: "auth"
});
const email = ref("");
const password = ref("");

const { ruleEmail, rulePassLen, ruleRequired } = useFormRules();

const submit = async () => {};
</script>
