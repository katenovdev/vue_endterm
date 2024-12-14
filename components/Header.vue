<template>
  <header class="header">
    <!-- Логотип -->
    <div class="logo">
      <span class="hh-logo">hh</span>
    </div>

    <!-- Блок для авторизованного пользователя -->
    <div v-if="isAuth" class="auth-section">
      <button class="resume-button">
        Мои резюме <span class="badge">38</span>
      </button>
      <button class="icon-button">Отклики</button>
      <button class="icon-button">Помощь</button>
      <button class="create-resume">Создать резюме</button>
    </div>

    <!-- Блок для неавторизованного пользователя -->
    <div v-else class="guest-section">
      <button class="icon-button">Поиск</button>
      <button class="create-resume">Создать резюме</button>
      <button class="login-button">Войти</button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useStore } from "@/store"; // Подключение Pinia Store
import { storeToRefs } from "pinia";
import { onBeforeMount } from "vue";

const store = useStore();
const { isAuth } = storeToRefs(store);

onBeforeMount(() => {
  store.init();
});
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: black;
  color: white;
  font-family: Arial, sans-serif;
  height: 50px;
}

.logo .hh-logo {
  background-color: red;
  border-radius: 50%;
  padding: 8px 12px;
  font-size: 18px;
  font-weight: bold;
}

.auth-section,
.guest-section {
  display: flex;
  align-items: center;
}

.auth-section button,
.guest-section button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  margin: 0 10px;
  font-size: 14px;
}

.resume-button .badge {
  background-color: white;
  color: black;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
  margin-left: 5px;
  font-weight: bold;
}

.create-resume {
  background-color: #2ecc71;
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
  font-weight: bold;
}

.icon-button,
.login-button {
  font-size: 14px;
  color: white;
}

.search {
  display: flex;
  align-items: center;
}

.search input {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  margin-right: 5px;
}

.search .location {
  color: #ccc;
  font-size: 14px;
  margin-left: 5px;
}
</style>