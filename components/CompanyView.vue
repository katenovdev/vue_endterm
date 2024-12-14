<script setup>
import {useRoute} from 'vue-router'
import {ref, onBeforeMount} from "vue"
import { useStore } from "~/store";
//import companies from "../data.json"
const  route = useRoute();
const store = useStore();

onBeforeMount(() => {
  store.init();
});

const {id} = route.params;
const company = ref(null);
const companies = computed(()=> store.$state.companies);

onBeforeMount(() => {
  company.value = companies.value.find(e => e.id === parseInt(id));
});
</script>

<template>
  <div class="company-container">
    <div class="company-sidebar">
      <img :src="company.logo" alt="12 месяцев логотип" class="company-logo" />
      <p>Астана</p>
      <a href="http://www.12mv.kz" target="_blank">www.12mv.kz</a>
      <p><strong>Вакансии:</strong> 5 активных вакансий</p>
      <p><strong>Сфера деятельности:</strong> Товары народного потребления (непищевые)</p>
    </div>
    <div class="company-main">
      <h1>{{company.name}} <span class="verified">✔</span></h1>
      <p>
        {{company.description}}
      </p>
      <div class="vacancies">
        <h2>Вакансии компании</h2>
        <p>Вакансии в текущем регионе: <a href="#">Казахстан</a> <strong>5</strong></p>
        <ul class="vacancy-list">
          <li>
            <a href="#">Грузчик</a>
            <span class="salary">от 280 000 до 290 000 ₸</span>
            <span class="location">Астана</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>


.company-container {
  display: flex;
  width: 80%;
  margin: 30px auto;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.company-sidebar {
  width: 25%;
  padding: 20px;
  border-right: 1px solid #ddd;
  text-align: center;
}

.company-logo {
  width: 100px;
  height: auto;
  margin-bottom: 20px;
}

.company-sidebar p {
  margin: 10px 0;
  font-size: 14px;
}

.company-sidebar a {
  display: block;
  color: #007bff;
  text-decoration: none;
  margin: 10px 0;
  font-weight: bold;
}

.company-main {
  width: 75%;
  padding: 20px;
}

.company-main h1 {
  display: flex;
  align-items: center;
  font-size: 24px;
  margin: 0 0 10px;
}

.company-main h1 .verified {
  color: #007bff;
  font-size: 18px;
  margin-left: 10px;
}

.company-main p {
  line-height: 1.5;
  margin: 10px 0;
}

.vacancies h2 {
  margin-top: 20px;
}

.vacancy-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.vacancy-list li {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}

.vacancy-list a {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
}

.salary {
  color: #28a745;
  font-weight: bold;
}

.location {
  color: #6c757d;
}


</style>