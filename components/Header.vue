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
        <!-- User dropdown -->
        <div class="user-menu">
          <button class="icon-button" @click="toggleMenu">{{ userName }}</button>
          <div v-if="isMenuVisible" class="dropdown">
            <button class="dropdown-item" @click="logout">Выйти</button>
          </div>
        </div>
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
import { computed, ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";

const store = useStore();
const { isAuth, user } = storeToRefs(store); // Access the user object
const router = useRouter();

// Dropdown menu visibility state
const isMenuVisible = ref(false);

// Computed property to display the user's first name or a fallback
const userName = computed(() => user.value?.firstName || "Пользователь");

// Logout function
const logout = async () => {
  await store.logOut(); // Call the Pinia logout method
  router.push("/auth"); // Redirect to the login page
};

// Toggle the dropdown menu
const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value;
};

// Handle closing the menu when clicking outside
const closeMenu = () => {
  isMenuVisible.value = false;
};

onBeforeMount(() => {
  store.init();
});

const goToSearchPage = () => {
  router.push("/search");
};

const goToResumePage = () => {
  router.push("/main");
};

const goToAuthPage = () => {
  router.push("/auth");
};


</script>



<style scoped>
.user-menu {
  position: relative;
}

.dropdown {
  position: absolute;
  top: 40px;
  right: 0;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  width: 150px;
}

.dropdown-item {
  padding: 10px;
  font-size: 14px;
  color: black;
  text-align: left;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
}

.dropdown-item:hover {
  background-color: #f0f0f0;
}

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
