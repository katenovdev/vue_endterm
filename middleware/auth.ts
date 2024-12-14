import { useStore } from "~/store";

export default defineNuxtRouteMiddleware((to, from) => {
    const userStore = useStore();

    // Проверяем, есть ли пользователь
    const isAuthenticated = userStore.user !== null;

    // Если пользователь не авторизован, перенаправляем на страницу авторизации
    if (!isAuthenticated) {
        return navigateTo('/auth');
    }
});
