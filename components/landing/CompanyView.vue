<script setup lang="ts">
import {useRoute} from 'vue-router'
import {ref, onBeforeMount} from "vue"
import companies from "../data.json"
const  route = useRoute();

const {id} = route.params;
const company = ref(null)

onBeforeMount(() => {
  company.value = companies.find(e => e.id === parseInt(id));
});
</script>

<template>
  <div class="landing">
    <h1>Company</h1>
    <p>Name: {{company.name}}</p>
    <p>Salary: {{company.salary}}</p>
    <p>Detail: {{company.company}}</p>
  </div>
</template>

<style scoped>

</style>