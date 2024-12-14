<script setup lang="ts">
import { ref } from "vue";
import { defineProps, defineEmits } from "vue";
import { useStore } from "~/store";
const store = useStore();

onBeforeMount(() => {
  store.init();
});


interface Resume {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  birthday: string;
  gender: string;
  about: string;
  citizenship: string;
  position: string;
  salary: number;
  mainLanguage: string;
  skills: number[];
  userId: number;
}

// Ожидаем данные через пропсы
const props = defineProps<{ resume: Resume }>();

// Эмитим событие, если нужно уведомить родительский компонент
const emit = defineEmits(["addToFavorites"]);

// Форматирование даты рождения
const formatBirthday = (date: string): string => {
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("ru-RU", options);
};

// Локальный стейт для избранного
const isFavorite = ref(false);

// Метод для добавления в избранное
const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
  store.addToFavourites({ id: props.resume.id, type: "resumes" });

};
</script>

<template>
  <div class="resume-card">
    <h2 class="resume-title">{{ resume.firstName }} {{ resume.lastName }}</h2>
    <p><strong>Позиция:</strong> {{ resume.position }}</p>
    <p><strong>О себе:</strong> {{ resume.about }}</p>
    <p><strong>Гражданство:</strong> {{ resume.citizenship }}</p>
    <p><strong>Телефон:</strong> {{ resume.phone }}</p>
    <p><strong>Дата рождения:</strong> {{ formatBirthday(resume.birthday) }}</p>
    <p><strong>Пол:</strong> {{ resume.gender }}</p>
    <p><strong>Зарплата:</strong> {{ resume.salary }} ₸</p>
    <p><strong>Основной язык:</strong> {{ resume.mainLanguage }}</p>
    <p><strong>Навыки:</strong> {{ resume.skills.join(", ") }}</p>
    <button @click="toggleFavorite" class="favorite-button">
      {{ isFavorite ? "Удалить из избранного" : "Добавить в избранное" }}
    </button>
  </div>
</template>

<style scoped>
.resume-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.resume-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
}

p {
  font-size: 14px;
  margin-bottom: 8px;
  color: #333;
}

strong {
  font-weight: bold;
  color: #000;
}

.favorite-button {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.favorite-button:hover {
  background-color: #0056b3;
}
</style>
