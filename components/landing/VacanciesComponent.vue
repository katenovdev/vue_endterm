<script setup>
import {ref, computed} from 'vue';
import {useRouter} from 'vue-router'
//import vacanciesData from "../data.json"

const router = useRouter();

const initialVisibleCount = ref(12);
const showAll = ref(false);

const vacancies = ref([]);

const activeCategory = ref(null);

const categories = ref([
      {id: 1, title: 'Вакансия дня', salary: '180 000 – 799 900 ₸', count: 14,
        vacancies: [
          { id: 201, position: 'Data Analyst', company: 'Company A', salary: '600 000 ₸' },
          { id: 202, position: 'Product Manager', company: 'Company B', salary: '750 000 ₸' },
          { id: 203, position: 'Backend Developer', company: 'Company C', salary: '900 000 ₸' },
          { id: 204, position: 'Customer Support', company: 'Company D', salary: '300 000 ₸' },
          { id: 205, position: 'QA Engineer', company: 'Company E', salary: '550 000 ₸' }
        ]},
      {id: 2, title: 'Компания дня', salary: '', count: 281},
      {id: 3, title: 'Работа из дома', salary: '', count: 1449},
      {id: 4, title: 'Подработка', salary: '100 – 979 300 ₸', count: 1528},
      {id: 5, title: 'Курьер', salary: '4 900 – 869 900 ₸', count: 486},
      {id: 6, title: 'Водитель', salary: '4 900 – 1 003 300 ₸', count: 775},
      {id: 7, title: 'Продавец', salary: '100 – 666 700 ₸', count: 957},
      {id: 8, title: 'Кассир', salary: '5 900 – 500 900 ₸', count: 639},
      {id: 9, title: 'Администратор', salary: '100 – 666 600 ₸', count: 967},
      {id: 10, title: 'Оператор', salary: '200 – 866 700 ₸', count: 1062},
      {id: 11, title: 'Программист', salary: '9 900 – 1 433 300 ₸', count: 1199},
      {id: 12, title: 'Менеджер', salary: '100 – 1 500 000 ₸', count: 5782}
    ]
);

const colors = ref([
  '#ff6347', '#ffa500', '#f08080', '#f4a460', '#32cd32',
  '#4682b4', '#dda0dd', '#9370db', '#ff69b4', '#ff4500',
  '#db7093'
]);

const companies = ref([
  {name: 'Детский мир Казахстан', count: 42},
  {name: 'Международная беттинг компания Parimatch', count: 3}
  // ... другие компании
]);

const rowSize = 4;
// function handleCategoryClick(index){
//   activeCategory.value = activeCategory.value === index ? null : index;
// }
const visibleVacancies = computed(() => {
  return showAll.value ? categories.value : categories.value.slice(0, initialVisibleCount.value);
});

const rows = computed(()=>{
  return chunkArray(visibleVacancies.value, rowSize);
})

const remainingVacancies = computed(() => {
  return categories.value.length - initialVisibleCount.value;
});

const showMore = () => {
  showAll.value = true;
};

const activeRow = ref(null);

function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}
function handleCategoryClick(index) {
  const rowIndex = Math.floor(index / rowSize);
  if (activeCategory.value === index) {
    // Если кликнули на ту же карточку, скрываем блок
    activeCategory.value = null;
    activeRow.value = null;
  } else {
    // Иначе, активируем карточку и ряд
    activeCategory.value = index;
    activeRow.value = rowIndex;
  }
}

console.log(rows);
</script>

<template>
  <div class="categories-container">
    <div class="categories-grid">
      <!-- Рендерим карточки по рядам -->
      <div v-for="(row, rowIndex) in rows" :key="rowIndex">
        <div class="row-grid">
          <div class="category-card"
               v-for="(vacancy, index) in row"
               :key="index"
               :class="'color-' + (rowIndex * rowSize + index) % colors.length"
               @click="handleCategoryClick(rowIndex * rowSize + index)">
            <div class="card-stripe"></div>
            <div class="card-content">
              <h3 class="card-title">{{ vacancy.title }}</h3>
              <p class="card-salary">{{ vacancy.salary }}</p>
              <p class="card-count">{{ vacancy.count }} вакансий</p>
            </div>
          </div>
        </div>
        <transition name="fade-slide">
          <div v-if="activeCategory !== null && activeRow === rowIndex" class="vacancies-block">
            <h4>Вакансии для {{ categories[activeCategory].title }}</h4>
            <ul class="vacancies-list">
              <li v-for="vacancy in categories[activeCategory].vacancies" :key="vacancy.id" class="vacancy-item">
                <div class="vacancy-position">{{ vacancy.position }}</div>
                <div class="vacancy-salary">{{ vacancy.salary }}</div>
                <div class="vacancy-company">{{ vacancy.company }} вакансий</div>
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </div>

    <a class="more-link" v-if="remainingVacancies > 0" @click="showMore">
      Ещё {{ remainingVacancies }} профессии
    </a>

    <!-- Другие блоки: Работа в Алматы и Вакансии дня -->
    <div class="two-blocks">
      <div class="left-block">
        <div class="block-title">Работа в Алматы</div>
        <div class="block-spacing"></div>
        <div class="multiple-column-list-item" v-for="company in companies" :key="company.name">
          <span class="list-item-text">{{ company.name }}</span>
          <span class="list-item-count">{{ company.count }}</span>
        </div>
      </div>
      <div class="main-block">
        <div class="block-title">Вакансии дня в Алматы</div>
        <div class="block-spacing"></div>
        <div class="vacancies-container">
          <div class="vacancy" v-for="vacancy in vacancies" :key="vacancy.id">
            <h3 class="vacancy-title" @click="router.push(`/vacancy/${vacancy.id}`)">
              {{ vacancy.position }}
            </h3>
            <p>{{ vacancy.salary }}</p>
            <p>{{ vacancy.company }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.fade-slide-enter-active, .fade-slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.fade-slide-enter, .fade-slide-leave-to /* .fade-slide-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: translateY(-10px);
}

.row-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Оставляем 4 колонки */
  gap: 20px;
  width: 100%;
}

.vacancies-block {
  padding: 20px;
  background-color: #fff;
  margin-top: 20px;
  grid-column: 1 / -1; /* Растягиваем блок на всю ширину */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Тень блока */
}

.vacancies-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Количество колонок зависит от ширины экрана */
  gap: 15px; /* Промежуток между элементами */
  list-style: none; /* Убираем стандартные маркеры списка */
  padding: 0; /* Убираем отступы */
  margin: 0; /* Убираем внешние отступы */
}

.vacancy-item {
  padding: 15px; /* Внутренние отступы */
  border-radius: 6px; /* Скругление углов */
  transition: transform 0.2s; /* Плавный эффект при наведении */
}


.vacancy-position,
.vacancy-salary,
.vacancy-company {
  margin-bottom: 5px; /* Отступы между строками информации */
}
.vacancy-position{
  color: blue
}
.vacancy-company{
  color: grey
}

.categories-container {
  font-family: 'Arial', sans-serif;
  padding: 20px;
}

.categories-grid {
  display: grid;
  gap: 20px;
  grid-auto-flow: dense;
}

.category-card {
  position: relative;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  background-color: white;
  transition: box-shadow 0.3s ease;
  cursor: pointer;
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