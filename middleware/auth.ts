import { useStore } from "~/stores";

export default defineNuxtRouteMiddleware((to, from) => {
    const userStore = useStore();
    const isAuthenticated = computed(() => userStore.user !== null);

    if (!isAuthenticated.value) {
        return navigateTo('/auth');
    }
});
