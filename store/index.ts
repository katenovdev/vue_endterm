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
  }),

  actions: {
    setResumes({ resumes, name }: { resumes: IResume[]; name: string }) {
      this.resumes = resumes;
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

    async init() {
      const vacanciesKey = "vacancies";
      const companiesKey = "companies";
      const resumesKey = "resumes";
      const usersKey = "users";

      const getData = async (key: string, file: string) => {
        let data = localStorage.getItem(key);
        if (!data) {
          const response = await fetch(file);
          data = await response.json();
          localStorage.setItem(key, JSON.stringify(data));
        }
        return JSON.parse(data);
      };

      this.vacancies = await getData(vacanciesKey, "../json/vacancies.json");
      this.companies = await getData(companiesKey, "../json/companies.json");
      this.resumes = await getData(resumesKey, "../json/resumes.json");
      this.users = await getData(usersKey, "../json/users.json");
    },
  },
});
