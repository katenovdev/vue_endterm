<template>
  <header class="header">
    <!-- Левый блок -->
    <div class="left-section">
      <div class="logo">
        <span class="hh-logo">hh</span>
      </div>
      <button v-if="isAuth" class="resume-button" @click="goToResumePage">
        Мои резюме
      </button>
    </div>

    <!-- Правый блок -->
    <div class="right-section">
      <button class="icon-button" @click="goToSearchPage">Поиск</button>
      <template v-if="isAuth">
        <button class="icon-button" @click="goToResumePage">Избранное</button>
        <button class="icon-button">{{ userName }}</button>
      </template>
      <template v-else>
        <button class="login-button" @click="goToAuthPage">Войти</button>
      </template>
    </div>
  </header>
</template>


<script setup lang="ts">
import { useStore } from "@/store"; // Pinia Store
import { storeToRefs } from "pinia";
import { computed, onBeforeMount } from "vue";
import { useRouter } from 'vue-router';

const store = useStore();
const { isAuth, user } = storeToRefs(store); // Access the user object
const router = useRouter();

onBeforeMount(() => {
  store.init();
});

// Computed property to display the user's name or a fallback
const userName = computed(() => (user.value?.firstName || "Пользователь"));

const goToSearchPage = () => {
  router.push('/search'); // Navigate to the search page
};

const goToResumePage = () => {
  router.push('/main'); // Navigate to the resume page
};

const goToAuthPage = () => {
  router.push('/auth'); // Navigate to the auth page
};
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

  /* Sticky positioning */
  position: sticky;
  top: 0;
  z-index: 1000; /* Ensure it stays on top of other elements */
}

.left-section,
.right-section {
  display: flex;
  align-items: center;
}

.logo .hh-logo {
  background-color: red;
  border-radius: 50%;
  padding: 8px 12px;
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
}

.resume-button,
.icon-button,
.login-button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 14px;
  margin-left: 15px;
}

.login-button {
  border: 1px solid white;
  border-radius: 20px;
  padding: 5px 15px;
  font-weight: bold;
}
</style>
