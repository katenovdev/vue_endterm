<template>
    <div class="main">
      <CompanyView/>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from "vue";
  import { useStore } from "~/store";
  

  definePageMeta({
  middleware: "auth",
    });
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