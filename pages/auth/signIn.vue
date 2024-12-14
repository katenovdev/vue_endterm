<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import {useStore} from "~/store/index";

const step = ref(1);
const email = ref("");
const code = ref("");
const time = ref(119);
const router = useRouter();
const store = useStore();

const count = computed(() => store.state.count);

const isAuth = ref(false);

const min = computed(() => Math.floor(time.value / 60));
const sec = computed(() => time.value % 60);

let timer: number | null = null;

onMounted(() => {
  if (isAuth.value) {
    router.push("/resumes");
  }

  timer = setInterval(() => {
    if (time.value > 0) {
      time.value--;
    } else {
      clearInterval(timer!);
    }
  }, 1000);
});

onUnmounted(() => {
  if (timer) {
    clearInterval(timer);
  }
});

const sendVerifyEmail = () => {
  step.value = 2;
};

const resumes = [
  {
    id: "1",
    position: "Frontend Developer",
    createdAt: "2024-10-10",
    show: 150,
    views: 100,
    applies: 10,
  },
  {
    id: "2",
    position: "Backend Developer",
    createdAt: "2024-09-25",
    show: 200,
    views: 120,
    applies: 15,
  },
  {
    id: "3",
    position: "UX/UI Designer",
    createdAt: "2024-08-30",
    show: 180,
    views: 110,
    applies: 20,
  },
  {
    id: "4",
    position: "Data Scientist",
    createdAt: "2024-10-05",
    show: 210,
    views: 150,
    applies: 25,
  },
  {
    id: "5",
    position: "Project Manager",
    createdAt: "2024-09-15",
    show: 170,
    views: 130,
    applies: 18,
  },
];

const verifyCodeFunc = () => {
  if (code.value == 1) {
    // логика для сохранения юзера в стор,
    store.commit("setResumes", { resumes: resumes, name: "Томас" });
    router.push("/personal-cabinet");
  }
};
</script>

<template>
  <section class="login-page">
    <div v-if="step === 1" class="card">
      <h1>Поиск работы в HH</h1>
      <form @submit.prevent="sendVerifyEmail">
        <input class="input" placeholder="Введите email" v-model="email" />
        <button class="button button-primary">Продолжить</button>
      </form>
    </div>

    <div v-if="step === 1" class="card">
      <h1>Поиск сотрудников</h1>
      <p>Размещение вакансий и доступ к базе резюме</p>
      <router-link class="button button-primary-bordered" to="/auth/emp">
        Я ищу сотрудников
      </router-link>
    </div>

    <div v-if="step === 2" class="card">
      <h1>Отправили код на ....</h1>
      <p>Напишите его что подтвердить что это вы, а не кто-то другой</p>
      <form @submit.prevent="verifyCodeFunc">
        <input class="input" placeholder="Введите код" v-model="code" />
        <p>
          Повторить можно через {{ min }}:{{ sec < 10 ? "0" : "" }}{{ sec }}
        </p>
        <button
          class="button button-primary"
          type="button"
          @click="verifyCodeFunc"
        >
          Продолжить
        </button>
        <button
          class="button button-primary-bordered"
          @click="step = 1"
          type="button"
        >
          Назад
        </button>
      </form>
    </div>
  </section>
</template>

<style scoped>
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
