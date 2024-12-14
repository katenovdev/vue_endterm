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
  },
});
