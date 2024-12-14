<script setup lang="ts">
import { ref, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import Logo from "@/assets/logo.svg";
import { useStore } from "~/store";

const email = ref("");
const password = ref("");
const router = useRouter();
const store = useStore();

onBeforeMount(() => {
  store.init();
});
// const error = computed(() => store.state.auth.error);

// onUnmounted(() => {
//   store.dispatch("auth/setError", null);
// });

const handleSignin = () => {
  store.login(email.value, password.value);
  router.push("/main");
};
</script>

<template>
  <main class="bg">
    <div class="container">
      <div class="auth-header">
        <img :src="Logo" />
        <p>
          Зарегистрируйтесь сейчас, чтобы купить доступ к базе резюме или
          публикацию вакансий по выгодным ценам — все акции уже ждут вас в
          разделе «Спецпредложения».
        </p>
        <p>Ответим на ваши вопросы</p>
        <a href="tel:77272321313">+7 727 232 13 13</a>
      </div>

      <section class="login-page">
        <div class="card">
          <h1>Вход для поиска сотрудников</h1>
          <form @submit.prevent="handleSignin">
            <input class="input" placeholder="Введите email" v-model="email" />
            <input
                class="input"
                type="password"
                placeholder="Введите пароль"
                v-model="password"
            />
            <button class="button button-primary" type="submit">Войти</button>
          </form>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
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

.card {
  border-radius: 4px;
  -webkit-box-shadow: 0px 3px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 3px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 3px 8px 0px rgba(34, 60, 80, 0.2);
  padding: 20px;
  position: relative;
}

.container {
  max-width: 1250px;
  width: 100%;
  padding: 0 20px;
  display: block;
  margin: 0 auto;
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

.bg {
  background-image: url("@/assets/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  /* min-height: 100vh; */
}

.auth-header {
  padding-top: 20px;
}

.auth-header p,
.auth-header a {
  max-width: 300px;
  color: #fff;
}

.login-page .card {
  background-color: #fff;
  padding-bottom: 40px;
}
</style>
