<script setup lang="ts">
import {useRoute} from 'vue-router'
import {ref, onBeforeMount} from "vue"
import vacancies from "../data.json"
import companies from "../company.json"


const route = useRoute();

const {id} = route.params;
const vacancy = ref(null)
const company = ref(null)

onBeforeMount(() => {
  vacancy.value = vacancies.find(e => e.id === parseInt(id));
  vacancy.value.views++;
  company.value = companies.find(e => e.id === parseInt(vacancy.value.company_id));

});
const isClickedReply = ref(false);
const isClickedHeart = ref(false);

function handleMouseDownReply() {
  isClickedReply.value = true; // Активируем анимацию при зажатии
}

function handleMouseUpReply() {
  isClickedReply.value = false; // Останавливаем анимацию при отпускании
}

function handleMouseDownHeart() {
  isClickedHeart.value = true;
}

function handleMouseUpHeart() {
  isClickedHeart.value = false;
}
</script>

<template>
  <div class="landing">
    <div class="main-block">
      <div class="vacancy-card">
        <h1><span>{{ vacancy.position }}</span></h1>
        <p>Уровень дохода не указан</p>
        <p>Требуемый опыт работы: не требуется<br>Полная занятость, полный день</p>
        <p>Сейчас эту вакансию смотрят <span class="status">5 человек</span></p>
        <div class="vacancy-buttons">
          <button
              :class="['reply', { clicked: isClickedReply }]"
              @mousedown="handleMouseDownReply"
              @mouseup="handleMouseUpReply"
              @mouseleave="handleMouseUpReply"> <!-- Убрать эффект при уходе мыши -->
            Откликнуться
          </button>
          <button
              :class="['heart', { clicked: isClickedHeart }]"
              @mousedown="handleMouseDownHeart"
              @mouseup="handleMouseUpHeart"
              @mouseleave="handleMouseUpHeart">
            ❤️
          </button>
        </div>

      </div>
      <div class="vacancy-description">
        <div v-html="vacancy.description"></div>
      </div>
    </div>
    <div class="right-block">
      <div class="company-info">
        <img :src="company.logoUrl"/>
        <h1>{{company.name}}</h1>
        <p>{{company.city}}</p>
      </div>
      <div class="related-vacancies">
        <h2>Похожие вакансии</h2>
        <ul>
          <li>Java-разработчик – <a href="#">з/п не указана, AO «Freedom Bank Kazakhstan», Алматы</a></li>
          <li>Java Developer в OMNI CRM – <a href="#">з/п не указана, Kcell, Алматы</a></li>
        </ul>
        <a href="#">299 похожих вакансий</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.landing {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.main-block {
  width: 65%;
  background-color: #fff;
}

.main-block h1 {
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
}

.main-block p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 10px;
}

.vacancy-card {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.vacancy-card h1 {
  font-size: 24px;
  color: #333;
}

.highlight {
  background-color: yellow;
  font-weight: bold;
}

.status {
  color: red;
  font-weight: bold;
}

.vacancy-buttons {
  display: flex;
  gap: 10px; /* Отступ между кнопками */
  width: 50%; /* Ограничиваем ширину кнопок до половины ширины контейнера */
  justify-content: space-between; /* Распределяем кнопки с равным отступом */
}

.vacancy-buttons .reply {
  flex: 1; /* Кнопка "Откликнуться" занимает оставшееся пространство */
  padding: 10px;
  border-radius: 5px;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  width: 100px;
}

.vacancy-buttons .heart {
  width: 50px; /* Квадратная кнопка с фиксированной шириной */
  height: 50px; /* Высота равна ширине для квадратной формы */
  background-color: transparent;
  color: #28a745;
  border: 1px solid #28a745;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center; /* Выравнивание сердечка по центру */
}

.vacancy-buttons .reply:hover {
  background-color: #218838; /* Изменение цвета кнопки при наведении */
}

.vacancy-buttons .heart:hover {
  background-color: #28a745; /* Изменение цвета сердечка при наведении */
  color: white;
}

.vacancy-buttons .reply, .vacancy-buttons .heart {
  transition: transform 0.2s ease-in-out; /* Анимация движения */
}

.vacancy-buttons .reply.clicked, .vacancy-buttons .heart.clicked {
  transform: translateY(-3px); /* Движение кнопки вверх на 5px */
}

.vacancy-buttons .heart.clicked {
  transform: translateY(-3px); /* Поворот сердца на 20 градусов при клике */
}

.vacancy-description {
  font-size: 16px;
  color: #333;
  margin-top: 20px;
}

.right-block {
  width: 30%;
}

.company-info {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.company-info h1 {
  font-size: 24px;
  color: #333;
}
.company-info img {
  height: 60px;
}

.related-vacancies {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.related-vacancies h2 {
  font-size: 18px;
  margin-bottom: 10px;
}

.related-vacancies ul {
  list-style: none;
  padding: 0;
}

.related-vacancies li {
  margin-bottom: 10px;
}

.related-vacancies a {
  color: #007bff;
  text-decoration: none;
}

.related-vacancies a:hover {
  text-decoration: underline;
}

</style>