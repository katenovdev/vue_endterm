<script setup>
import { ref, computed } from 'vue';
import {useRouter} from 'vue-router'
//import vacanciesData from "../data.json"

const router = useRouter();

const initialVisibleCount = ref(12);
const showAll = ref(false);

const vacancies = ref([]);

const categories = ref([
  { title: 'Вакансия дня', salary: '180 000 – 799 900 ₸', count: 14 },
  { title: 'Компания дня', salary: '', count: 281 },
  { title: 'Работа из дома', salary: '', count: 1449 },
  { title: 'Подработка', salary: '100 – 979 300 ₸', count: 1528 },
  { title: 'Курьер', salary: '4 900 – 869 900 ₸', count: 486 },
  { title: 'Водитель', salary: '4 900 – 1003 300 ₸', count: 775 },
  { title: 'Продавец', salary: '100 – 666 700 ₸', count: 957 },
  { title: 'Кассир', salary: '5 900 – 500 900 ₸', count: 639 },
  { title: 'Администратор', salary: '100 – 666 600 ₸', count: 967 },
  { title: 'Оператор', salary: '200 – 866 700 ₸', count: 1062 },
  { title: 'Программист', salary: '9 900 – 1 433 300 ₸', count: 1199 },
  { title: 'Менеджер', salary: '100 – 1 500 000 ₸', count: 5782 }
]);

const colors = ref([
  '#ff6347', '#ffa500', '#f08080', '#f4a460', '#32cd32',
  '#4682b4', '#dda0dd', '#9370db', '#ff69b4', '#ff4500',
  '#db7093'
]);

const companies = ref([
  { name: 'Детский мир Казахстан', count: 42 },
  { name: 'Международная беттинг компания Parimatch', count: 3 }
  // ... другие компании
]);

const visibleVacancies = computed(() => {
  return showAll.value ? categories.value : categories.value.slice(0, initialVisibleCount.value);
});

const remainingVacancies = computed(() => {
  return categories.value.length - initialVisibleCount.value;
});

const showMore = () => {
  showAll.value = true;
};
</script>

<template>
  <div class="categories-container">
    <div class="categories-grid">
      <div class="category-card"
           v-for="(vacancy, index) in visibleVacancies"
           :key="index"
           :class="'color-' + (index % colors.length)">
        <div class="card-stripe"></div> <!-- Цветная полоска -->
        <div class="card-content">
          <h3 class="card-title">{{ vacancy.title }}</h3>
          <p class="card-salary">{{ vacancy.salary }}</p>
          <p class="card-count">{{ vacancy.count }} вакансий</p>
        </div>
      </div>
    </div>
    <a class="more-link"
       v-on:click="showMore()"
       v-if="remainingVacancies > 0">
      Ещё {{ remainingVacancies }} профессии
    </a>
    <div class="two-blocks">
      <div class="left-block">
        <div class="block-title">Работа в Алматы</div>
        <div class="block-spacing"></div>
        <div class="multiple-column-list-item"
             v-for="company in companies"
             :key="company.name">
          <span class="list-item-text">{{ company.name }}</span>
          <span class="list-item-count">{{ company.count }}</span>
        </div>
      </div>
      <div class="main-block">
        <div class="block-title">Вакансии дня в Алматы</div>
        <div class="block-spacing"></div>
        <div class="vacancies-container">
          <div class="vacancy" v-for="vacancy in vacancies" :key="vacancy.id">
            <h3 class="vacancy-title"
            @click="router.push(`/vacancy/${vacancy.id}`)">{{ vacancy.position }}</h3>
            <p>{{ vacancy.salary }}</p>
            <p>{{ vacancy.company }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.categories-container {
  font-family: 'Arial', sans-serif;
  padding: 20px;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 колонки */
  gap: 20px;
}

.category-card {
  position: relative;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  background-color: white;
  transition: box-shadow 0.3s ease;
}

.category-card:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Цветные полоски слева */
.card-stripe {
  width: 5px;
  border-radius: 8px 0 0 8px;
  margin-right: 10px;
}

.color-0 .card-stripe {
  background-color: #ff6347; /* Красный */
}

.color-1 .card-stripe {
  background-color: #ffa500; /* Оранжевый */
}

.color-2 .card-stripe {
  background-color: #f08080; /* Светло-красный */
}

.color-3 .card-stripe {
  background-color: #f4a460; /* SandyBrown */
}

.color-4 .card-stripe {
  background-color: #32cd32; /* Зеленый */
}

.color-5 .card-stripe {
  background-color: #4682b4; /* Стальной синий */
}

.color-6 .card-stripe {
  background-color: #dda0dd; /* Фиолетовый */
}

.color-7 .card-stripe {
  background-color: #9370db; /* Лавандовый */
}

.color-8 .card-stripe {
  background-color: #ff69b4; /* Розовый */
}

.color-9 .card-stripe {
  background-color: #ff4500; /* Оранжево-красный */
}

.color-10 .card-stripe {
  background-color: #db7093; /* Бледно-фиолетовый */
}

.card-content {
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-salary {
  font-size: 14px;
  color: #666;
}

.card-count {
  font-size: 14px;
  color: #999;
}

.more-link {
  display: block;
  margin-top: 20px;
  font-size: 14px;
  color: #007bff;
  text-decoration: none;
}

.more-link:hover {
  text-decoration: underline;
}

.two-blocks {
  display: flex;
  grid-template-columns: 1fr 3fr; /* Левая колонка (1 часть) и правая колонка (3 части) */
  gap: 20px;
  margin-top: 30px;
}

.left-block {
  width: 20%;
  padding: 10px;
}

.block-title {
  font-size: 24px;
  font-weight: 700;
}

.block-spacing {
  margin: 10px;
}

.main-block {
  flex: 1;
  padding: 10px;
}

.multiple-column-list-item {
  display: flex; /* Используем flex для выравнивания */
  justify-content: space-between; /* Распределяем элементы по краям */
  margin-bottom: 10px;
}

.list-item-text {
  display: inline-table;
  font-size: 16px;
  color: #333;
  width: 300px;
}

.list-item-count {
  font-size: 16px;
  color: #666;
}

.vacancy {
  width: 300px;
  display: inline-table;
  padding: 10px;
  margin-bottom: 10px;
}

.vacancies-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  width: fit-content;
}

.vacancy-title {
  cursor: pointer;
}
</style>