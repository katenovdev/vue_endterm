export interface IResume {
  firstName: string;
  lastName: string;
  phone: string;
  birthday: Date;
  gender: string;
  about: string;
  citizenship: string;
  position: string;
  salary: number;
  mainLanguage: string;
  skills: number[];
  userId: number;
}

export enum USER_ROLE {
  JOB_SEEKER = "JOB_SEEKER",
  JOB_PROVIDER = "JOB_PROVIDER",
}

export enum EMPLOYMENT_TYPE {
  PARTIAL = "PARTIAL",
  FULL = "FULL",
}

export enum EXPERIENCE_TYPE {
  WITHOUT = "WITHOUT",
  ONE_YEAR = "1_YEAR",
  ONE_TO_THREE_YEARS = "1_TO_3_YEAR",
  MORE_THAN_THREE_YEARS = "MORE_THAN_3_YEARS",
}

export interface ISkill {
  id: number;
  name: string;
}

export interface IVacancy {
  id: number;
  name: string;
  specializationName: string;
  cityName: string;
  description: string;
  employmentType: EMPLOYMENT_TYPE;
  salaryFrom: number;
  salaryTo: number;
  address: string;
  experienceType: EXPERIENCE_TYPE;
  skills: number[];
  companyId: number;
}

export interface ICompany {
  id: number;
  name: string;
  description: string;
  logo: string;
  address: string;
}
export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  role: USER_ROLE;
  сompanyId?: number | null;
  phone: string;
  email: string;
}

export interface IStore {
  isAuth: boolean;
  user: IUser | null;
  myResumes: IResume[];
  vacancies: IVacancy[];
  companies: ICompany[];
  users: IUser[];
  resumes: IResume[];
  myVacancies: IVacancy[];
  skills: ISkill[];
}