<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "~/store"; // Импорт вашего store
import ResumeCard from "@/components/ResumeCard.vue"; // Импорт компонента ResumeCard

// Доступ к store
const store = useStore();

// Вычисляемое свойство для избранных вакансий
const favouriteVacancies = computed(() => store.$state.favourites);
</script>

<template>
  <section class="vacancy">
    <h2>Избранные вакансии</h2>

    <!-- Отображение избранных вакансий -->
    <div v-if="favouriteVacancies.length">
      <ResumeCard
        v-for="vacancy in favouriteVacancies"
        :key="vacancy.id"
        :resume="vacancy"
      />
    </div>
    <p v-else>Нет избранных вакансий</p>
  </section>
</template>

<style scoped>
.vacancy {
  padding: 16px;
}

h2 {
  font-size: 24px;
  margin-bottom: 12px;
}

p {
  font-size: 16px;
  color: #666;
}
</style>
