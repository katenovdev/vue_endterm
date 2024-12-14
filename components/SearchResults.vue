<template>
  <div class="search-results">
    <div v-if="results.length" class="results-list">
      <h2>Результаты:</h2>
      <div v-for="(item, index) in results" :key="index" class="result-item">
        <SearchCard v-if="props.type=='vacancy'" :item="item" />
        <ResumeCard v-else :resume="item" />
      </div>
    </div>
    <p v-else class="no-results">Нет результатов</p>
  </div>
</template>

<script setup>
import SearchCard from '@/components/SearchCard.vue';
// Пример данных
const props = defineProps({
  results: {
    type: Array,
    default: () => [],
  },
  type: {
    type: String,
  }
});

// Реактивная переменная для проверки наличия результатов
const hasResults = computed(() => props.results.length > 0);
</script>

<style scoped>
.search-results {
  margin-top: 20px;
}

.results-list {
  display: flex;
  flex-direction: column;
}

.result-item {
  margin-bottom: 12px;
}

.no-results {
  color: #888;
  font-size: 16px;
}
</style>
