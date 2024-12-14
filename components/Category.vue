<script setup lang="ts">

</script>

<template>
  <div class="main">
    <h1>Поиск</h1>
    <p>Выберите категорию для поиска:</p>
    <nav>
      <nuxt-link class="button" to="/search/vacancy">Вакансии</nuxt-link>
      <nuxt-link class="button" to="/search/resume">Резюме</nuxt-link>
      <nuxt-link class="button" to="/search/company">Компании</nuxt-link>
    </nav>
  </div>
</template>


<style scoped>

.button {
  display: inline-block;
  padding: 10px 20px;
  margin: 10px 5px;
  color: #fff;
  background-color: #000;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #333;
}
</style>