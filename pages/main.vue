<script setup lang="ts">
import { ref, computed, onBeforeMount } from "vue";
import SearchForm from "~/components/SearchForm.vue";
import { useStore } from "~/store";
import SearchResults from "~/components/SearchResults.vue";
import { USER_ROLE } from "~/store/interfaces";

const store = useStore();

onBeforeMount(() => {
  store.init();
});

definePageMeta({
  middleware: "auth",
});

// Извлекаем пользователя и его роль
const user = computed(() => store.$state.user);

// results зависит от роли пользователя
const results = computed(() => {
  if (user.value?.role === USER_ROLE.JOB_PROVIDER) {
    return store.$state.myVacancies; // Вакансии для JOB_PROVIDER
  }
  return store.$state.myResumes; // Резюме для JOB_SEEKER
});

const type = computed(() =>
  user.value?.role === USER_ROLE.JOB_PROVIDER ? "vacancy" : "resume"
);

const handleSearch = (query: string) => {
  return [];
};
</script>

<template>
  <div class="main">
    <h1>Мои Резюме</h1>
    <SearchForm @search="handleSearch" />
    <SearchResults :results="results" :type="type" />
  </div>
</template>

<style scoped>
.main {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
}
</style>
