import { defineStore } from "pinia";
import type { IResume, IStore } from "./interfaces";

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
    
    async init() {
      const vacanciesKey = 'vacancies';
      const companiesKey = 'companies';
      const resumesKey = 'resumes';
      const usersKey = 'users';

      const getData = async (key: string, file: string) => {
        let data = localStorage.getItem(key);
        if (!data) {
          const response = await fetch(file);
          data = await response.json();
          localStorage.setItem(key, JSON.stringify(data));
        }
        return JSON.parse(data);
      };

      this.vacancies = await getData(vacanciesKey, '..json/vacancies.json');
      this.companies = await getData(companiesKey, '..json/companies.json');
      this.resumes = await getData(resumesKey, '..json/resumes.json');
      this.users = await getData(usersKey, '..json/users.json');
    },
  },
});
