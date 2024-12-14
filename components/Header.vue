<template>
  <header class="header">
    <div class="logo">
      <span class="hh-logo">hh</span>
    </div>

    <!-- Authenticated Header -->
    <div v-if="store.isAuth" class="auth-section">
      <button class="resume-button">
        Мои резюме <span class="badge">38</span>
      </button>
      <button>Отклики</button>
      <button>Помощь</button>
      <button class="create-resume">Создать резюме</button>
    </div>

    <!-- Non-Authenticated Header -->
    <div v-else class="guest-section">
      <button>Помощь</button>
      <button class="create-resume">Создать резюме</button>
      <button>Войти</button>
    </div>

    <div class="search">
      <input placeholder="Поиск" />
      <span>Алматы</span>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useStore } from "@/store"; // Import your Pinia store
import { storeToRefs } from "pinia";

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
  padding: 10px;
  background-color: black;
  color: white;
}

.logo .hh-logo {
  background-color: red;
  border-radius: 50%;
  padding: 8px;
  font-weight: bold;
  color: white;
}

.auth-section button,
.guest-section button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  margin: 0 5px;
  font-size: 14px;
}

.resume-button .badge {
  background-color: white;
  color: black;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
  margin-left: 5px;
}

.create-resume {
  background-color: #2ecc71;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
}

.search input {
  padding: 5px;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
}

.search span {
  margin-left: 5px;
  color: gray;
}
</style>
