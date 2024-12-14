<template>
  <div>
    <GetJobComponent />
    <VacanciesComponent />
    <About />
  </div>
</template>

<script setup lang="ts">
import { useStore } from "~/store";

import About from '~/components/landing/About.vue'

const store = useStore();
const router = useRouter();
onBeforeMount(() => {
  store.init();
  if(store.user){
    router.push('/main')
  }
});

import GetJobComponent from "~/components/landing/GetJobComponent.vue";
import VacanciesComponent from "~/components/landing/VacanciesComponent.vue";

onBeforeMount(() => {
  store.init();
});
</script>