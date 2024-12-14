<template>
  <form @submit.prevent="submitSearch" class="search-form">
    <input
        type="text"
        v-model="searchQuery"
        placeholder="Введите запрос..."
        class="search-input"
    />
    <button type="submit" class="search-button">Поиск</button>
  </form>
</template>

<script>
export default {
  props: {
    query: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      searchQuery: this.query,
    };
  },
  methods: {
    submitSearch() {
      this.$emit('search', this.searchQuery);
    },
  },
};
</script>

<style scoped>
.search-form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.search-input {
  flex: 1;
  padding: 10px;
  font-size: 16px;
}

.search-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

.search-button:hover {
  background-color: #0056b3;
}
</style>
