<script setup lang="ts">
import SearchForm from "~/components/SearchForm.vue";
import { useStore } from "~/store";
const store = useStore();

onBeforeMount(() => {
  store.init();
});

definePageMeta({
  middleware: 'auth',
});
const results = ref(store?.vacancies);
import SearchResults from "~/components/SearchResults.vue";
const handleSearch = () => {
  return [];
}
</script>

<template>
  <div class="main">
  <SearchForm @search="handleSearch" />
  <SearchResults :results="results" />
  </div>
</template>

<style scoped>
.main{
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
}
</style>