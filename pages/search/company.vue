<template>
    <div class="main">
      <div v-for="(company, index) in results" :key="index" class="result-item">
        <CompanyCard :company="company" />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from "vue";
  import { useStore } from "~/store";
  
  const store = useStore();
  
  const results = computed(() => store.$state.companies || []);
  </script>
  
  <style scoped>
  .main {
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  
  .result-item {
    width: 100%;
  }
  </style>