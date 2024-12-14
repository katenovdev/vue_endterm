<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import Resume from "~/components/cabinet/Resume.vue";

const store = useStore();
const resumes = computed(() => store.state.resumes);
const name = computed(() => store.state.name);

const getMyResumes = async () => {
  await store.dispatch("resume/getMyResumes");
};

onMounted(() => {
  getMyResumes();
});
</script>

<template>
  <main>
    <div class="container">
      <h2>Добрый день, {{ name }}</h2>
      <div class="flex flex-ai-c flex-jc-sb ptb7">
        <h1>Мои Резюме</h1>
        <router-link
          class="button button-secondary-bordered"
          to="/create-resume"
        >
          Создать резюме
        </router-link>
      </div>

      <div v-for="resume in resumes">
        <Resume :item="resume" />
      </div>
    </div>
  </main>
</template>

<style scoped>
.container {
  max-width: 1250px;
  width: 100%;
  padding: 0 20px;
  display: block;
  margin: 0 auto;
}
.flex {
  display: flex;
}

.flex-cl {
  flex-direction: column;
}
.flex-jc-c {
  justify-content: center;
}

.flex-jc-sb {
  justify-content: space-between;
}

.flex-ai-c {
  align-items: center;
}

.flex-ai-sb {
  align-items: space-between;
}

.p0 {
  padding: 0;
}

.p1 {
  padding: 5px;
}

.p2 {
  padding: 10px;
}

.p3 {
  padding: 15px;
}

.p4 {
  padding: 20px;
}

.p7 {
  padding: 40px;
}

.ptb7 {
  padding: 40px 0;
}

.m1 {
  margin: 5px;
}

.m2 {
  margin: 10px;
}

.m3 {
  margin: 15px;
}

.m4 {
  margin: 20px;
}

.m7 {
  margin: 40px;
}

.mtb2 {
  margin: 10px 0;
}

.mtb4 {
  margin: 20px 0;
}

.mtb7 {
  margin: 40px 0;
}

.mt2 {
  margin-top: 10px;
}

.mt7 {
  margin-top: 40px;
}

.mr4 {
  margin-right: 20px;
}
.ck-powered-by {
  display: none;
}

.card {
  border-radius: 4px;
  -webkit-box-shadow: 0px 3px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 3px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 3px 8px 0px rgba(34, 60, 80, 0.2);
  padding: 20px;
  position: relative;
}
.card {
  border-radius: 4px;
  -webkit-box-shadow: 0px 3px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 3px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 3px 8px 0px rgba(34, 60, 80, 0.2);
  padding: 20px;
  position: relative;
}
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.login-page .card {
  max-width: 400px;
  width: 100%;
  margin: 20px 0;
}

.login-page form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.login-page button {
  width: 100%;
}
.button {
  height: 40px;
  border-radius: 4px;
  padding: 0 20px;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
}

.button-primary {
  background-color: #1785e5;
  color: #fff;
}

.button-primary:hover {
  opacity: 0.9;
}

.button-primary-bordered {
  border: 1px solid #1785e5;
  color: #1785e5;
  background-color: transparent;
}

.button-primary-bordered:hover {
  opacity: 0.8;
}

.button-secondary-bordered {
  border: 1px solid #bcbebf;
  color: #303233;
  background-color: #fafafa;
}

.button-secondary-bordered:hover {
  opacity: 0.8;
}
.input {
  height: 40px;
  border-radius: 4px;
  padding: 0 20px;
  /* width: 100%; */
  border: 1px solid #ddd;
  outline: none;
}

.input:focus {
  border: 1px solid #1785e5;
}

.autocomplite {
  position: relative;
  display: flex;
  flex-direction: column;
}

.tags {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
}

.tag {
  padding: 5px;
  border-radius: 4px;
  background-color: #eceff0;
  display: inline-block;
  margin-left: auto;
}

.textarea {
  height: 200px;
  border-radius: 4px;
  padding: 0 20px;
  width: 100%;
  border: 1px solid #ddd;
  outline: none;
  resize: none;
  padding-top: 10px;
}

.lns {
  margin-bottom: 20px;
  position: relative;
}

.lns select:last-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-right: 1px solid #ddd;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.lns .remove {
  position: absolute;
  right: -10px;
  top: 10px;
  cursor: pointer;
}

.input-group {
  display: flex;
}

.input-group .input {
  border-left: none;
  border-radius: 0;
  display: flex;
  outline: #1785e5;
}

.input-group .input:focus {
  border-color: #ddd;
}

.input-group .input:first-child {
  border-left: 1px solid #ddd;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.input-group .input:last-child {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.card {
  border-radius: 4px;
  -webkit-box-shadow: 0px 3px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 3px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 3px 8px 0px rgba(34, 60, 80, 0.2);
  padding: 20px;
  position: relative;
}
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.login-page .card {
  max-width: 400px;
  width: 100%;
  margin: 20px 0;
}

.login-page form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.login-page button {
  width: 100%;
}
.button {
  height: 40px;
  border-radius: 4px;
  padding: 0 20px;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
}

.button-primary {
  background-color: #1785e5;
  color: #fff;
}

.button-primary:hover {
  opacity: 0.9;
}

.button-primary-bordered {
  border: 1px solid #1785e5;
  color: #1785e5;
  background-color: transparent;
}

.button-primary-bordered:hover {
  opacity: 0.8;
}

.button-secondary-bordered {
  border: 1px solid #bcbebf;
  color: #303233;
  background-color: #fafafa;
}

.button-secondary-bordered:hover {
  opacity: 0.8;
}
.input {
  height: 40px;
  border-radius: 4px;
  padding: 0 20px;
  /* width: 100%; */
  border: 1px solid #ddd;
  outline: none;
}

.input:focus {
  border: 1px solid #1785e5;
}

.autocomplite {
  position: relative;
  display: flex;
  flex-direction: column;
}

.tags {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
}

.tag {
  padding: 5px;
  border-radius: 4px;
  background-color: #eceff0;
  display: inline-block;
  margin-left: auto;
}

.textarea {
  height: 200px;
  border-radius: 4px;
  padding: 0 20px;
  width: 100%;
  border: 1px solid #ddd;
  outline: none;
  resize: none;
  padding-top: 10px;
}

.lns {
  margin-bottom: 20px;
  position: relative;
}

.lns select:last-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-right: 1px solid #ddd;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.lns .remove {
  position: absolute;
  right: -10px;
  top: 10px;
  cursor: pointer;
}

.input-group {
  display: flex;
}

.input-group .input {
  border-left: none;
  border-radius: 0;
  display: flex;
  outline: #1785e5;
}

.input-group .input:focus {
  border-color: #ddd;
}

.input-group .input:first-child {
  border-left: 1px solid #ddd;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.input-group .input:last-child {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
</style>
