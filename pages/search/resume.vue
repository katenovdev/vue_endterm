<template>
  <div class="vacany-search">
    <Category></Category>
    <h1>Поиск резюме</h1>
    <SearchForm @search="handleSearch" />
    <SearchResults :results="results" :props="'resume'"/>
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
const results = computed(() => store.$state.resumes);

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