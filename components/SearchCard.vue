<template>
  <div class="search-card">
    <h3 class="card-title">{{ item.name }}</h3>
    <p v-if="item.specializationName" class="card-specialization">
      Специализация: {{ item.specializationName }}
    </p>
    <p v-if="item.cityName" class="card-city">
      Город: {{ item.cityName }}
    </p>
    <p v-if="item.description" class="card-description">
      {{ item.description }}
    </p>
    <p v-if="item.salaryFrom && item.salaryTo" class="card-salary">
      Зарплата: {{ item.salaryFrom }} - {{ item.salaryTo }} ₸
    </p>
    <p v-if="item.experienceType" class="card-experience">
      Опыт: {{ experienceLabel }}
    </p>
    <p v-if="item.address" class="card-address">
      Адрес: {{ item.address }}
    </p>
    <button v-if="item.link" @click="openLink" class="card-button">Подробнее</button>
  </div>
</template>

<script setup>
import { computed } from 'vue';

// Пропсы
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

// Вычисляемый опыт
const experienceLabel = computed(() => {
  const experienceTypes = {
    WITHOUT: 'Без опыта',
    PARTIAL: 'Частичный опыт',
    FULL: 'Полный опыт',
  };
  return experienceTypes[props.item.experienceType] || 'Не указано';
});

// Метод открытия ссылки
const openLink = () => {
  if (props.item.link) {
    window.open(props.item.link, '_blank');
  }
};
</script>

<style scoped>
.search-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
}

.card-specialization,
.card-city,
.card-description,
.card-salary,
.card-experience,
.card-address {
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
}

.card-button {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.card-button:hover {
  background-color: #0056b3;
}
</style>
