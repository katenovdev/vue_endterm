<template>
  <div class="vacany-search">
    <h1>Поиск вакансий</h1>
    <SearchForm @search="handleSearch" />
    <SearchResults :results="results" />
  </div>
</template>

<script setup>
import { useStore } from "~/store";
const store = useStore();

onBeforeMount(() => {
  store.init();
});
import SearchForm from '@/components/SearchForm.vue';
import SearchResults from '@/components/SearchResults.vue';
const results = store.vacancies;

const handleSearch = () => {
  return results;
}
</script>

<style scoped>
.vacany-search{
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
}
</style>