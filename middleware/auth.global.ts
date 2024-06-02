import type { Login } from "~/interfaces/Login.Interface";
export default defineNuxtRouteMiddleware(async (to, from) => {
    const userLogin = useCookie<Login>("user");
    const apiURL = useCookie("apiURL");

    if (to.path === "/" || to.path === "/buscar") return

    if (!userLogin.value || !userLogin.value.token || !userLogin.value.modules) return navigateTo('/')

    const { data: resRefreshToken } = await useFetch<Login>(`${apiURL.value}/auth/refresh-token`,
        {
            method: "POST",
            body: {
                token: userLogin.value.token
            }
        }
    );
    if (!resRefreshToken.value) return

    userLogin.value = resRefreshToken.value

    for (const module of userLogin.value.modules) {
        if (to.path === module.path) return
        for (const level of module.module_levels) {
            if (to.path === level.path) return
        }
    }

    for (const module of userLogin.value.modules) {
        if (module.path !== "#") return navigateTo(module.path)
        for (const level of module.module_levels) {
            if (level.path !== "#") return navigateTo(level.path)
        }
    }
})