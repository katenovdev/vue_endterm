import { defineStore } from "pinia";
import type { IResume, IStore } from "./interfaces";
import Swal from "sweetalert2";

export const useStore = defineStore("counter", {
  state: (): IStore => ({
    isAuth: false,
    user: null,
    myResumes: [],
    vacancies: [],
    companies: [],
    users: [],
    resumes: [],
    myVacancies: [],
    skills: [],
    favourites: [],
  }),

  actions: {
    setResumes({ resumes, name }: { resumes: IResume[]; name: string }) {
      this.resumes = resumes;
    },

    addToFavourites({
      id,
      type,
    }: {
      id: number;
      type: "resumes" | "vacancies";
    }) {
      if (type === "resumes") {
        const res = this.resumes.filter((resume) => resume.id === id);
        this.favourites = [...this.favourites, ...res];
      } else if (type === "vacancies") {
        const res = this.vacancies.filter((vacancy) => vacancy.id === id);
        this.favourites = [...this.favourites, ...res];
      }
    },

    // Получение избранных элементов
    getFavourites(type: "resumes" | "vacancies") {
      if (type === "resumes") {
        return this.resumes.filter((resume) => resume.isFavourite);
      } else if (type === "vacancies") {
        return this.vacancies.filter((vacancy) => vacancy.isFavourite);
      }
    },

    async logOut() {
      this.user = null;
      this.isAuth = false;
      this.myVacancies = [];
      this.myResumes = [];
    },

    async getData(key: string, file: string) {
      let data = localStorage.getItem(key);

      if (!data) {
        const response = await fetch(`/${file}`);
        if (!response.ok) {
          throw new Error(`Ошибка при загрузке файла ${file}`);
        }
        data = await response.json();
        localStorage.setItem(key, JSON.stringify(data));
      }

      return JSON.parse(data);
    },

    async login(email: string, password: string): Promise<boolean> {
      if (this.users.length === 0) {
        await this.init();
      }

      const user = this.users.find((user) => user.email === email);

      if (!user || password !== "1111") {
        Swal.fire({
          title: "Ошибка",
          text: "Неверный логин или пароль",
          icon: "error",
          confirmButtonText: "Попробовать снова",
        });
        return false;
      }

      this.user = user;
      this.isAuth = true;

      if (user.role === "JOB_SEEKER") {
        this.myResumes = this.resumes.filter(
          (resume) => resume.userId === user.id
        );
      } else if (user.role === "JOB_PROVIDER") {
        this.myVacancies = this.vacancies.filter(
          (vacancy) => vacancy.companyId === user.companyId
        );
      }

      return true;
    },

    async getSkills() {
      if (this.skills.length === 0) {
        this.skills = await this.getData("skills", "skills.json");
      }

      return this.skills;
    },

    async init() {
      const vacanciesKey = "vacancies";
      const companiesKey = "companies";
      const resumesKey = "resumes";
      const usersKey = "users";
      const skillsKey = "skills";

      const getData = async (key: string, file: string) => {
        let data = localStorage.getItem(key);

        if (!data) {
          const response = await fetch(`/${file}`);
          if (!response.ok) {
            throw new Error(`Ошибка при загрузке файла ${file}`);
          }
          data = await response.json();
          localStorage.setItem(key, JSON.stringify(data));
        }

        return JSON.parse(data);
      };

      // Загружаем данные для каждой сущности
      this.vacancies = await getData(vacanciesKey, "vacancies.json");
      this.companies = await getData(companiesKey, "companies.json");
      this.resumes = await getData(resumesKey, "resumes.json");
      this.users = await getData(usersKey, "users.json");
      this.skills = await getData(skillsKey, "skills.json");
    },
  },
});
