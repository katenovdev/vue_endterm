<script setup lang="ts">
import { ICompany } from "~/store/interfaces";

const router = useRouter()
const props = defineProps<{
  company: ICompany;
}>();

function handleClick(){
    router.push(`/company/${props.company.id}`)
}
</script>

<template>
  <div class="company-card" @click="handleClick">
    <img :src="company.logo" alt="Company Logo" class="company-logo" />
    <div class="company-info">
      <h3 class="company-name">{{ company.name }}</h3>
      <p class="company-description">{{ company.description }}</p>
      <p class="company-address">
        <strong>Address:</strong> {{ company.address }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.company-card {
  display: flex;
  align-items: flex-start;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.company-logo {
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 16px;
}

.company-info {
  flex-grow: 1;
}

.company-name {
  font-size: 1.25rem;
  margin: 0;
}

.company-description {
  margin: 8px 0;
  color: #555;
}

.company-address {
  font-size: 0.875rem;
  color: #777;
}
</style>