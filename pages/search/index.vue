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
.main{
  width: 80%;
  margin: 0 auto;
}
button{

}
</style>