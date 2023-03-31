import Axios, { AxiosResponse } from 'axios'
import { LEGISLATION_API, LEGISLATION_API_TOKEN } from '@/config/env'
import { Program, Response, Task } from '@/schema'

const axiosInstance = Axios.create({
  baseURL: `${LEGISLATION_API}`,
  headers: {
    Authorization: `Bearer ${LEGISLATION_API_TOKEN}`,
    'Content-Type': 'application/json',
  },
});


const TasksQueryParamsMap:Record<string, string> = {
  'type' : 'programs.program_type_id',
  'department': 'department_id',
  'year': 'programs.year',
  'title': 'regulations.label',
}

export interface  TasksQueryParams{
  type?: number
  label?:string
  program?:number
  department?: number
  year?:number,
  page?:number
}
export const tasks = async (params?:TasksQueryParams):Promise<AxiosResponse> => {

  const urlSearchParams = new URLSearchParams();
  if(params?.year) urlSearchParams.set('filter[programs.year]',`${params.year}`);
  if(params?.page) urlSearchParams.set('page',`${params.page}`);
  if(params?.program) urlSearchParams.set(`filter[program_id]`,`${params.program}`);
  if(params?.type) urlSearchParams.set('filter[programs.program_type_id]',`${params.type}`);
  if(params?.department) urlSearchParams.set(`filter[department_id]`,`${params.department}`);
  if(params?.label) urlSearchParams.set(`filter[regulations.label]`,`${params.label}`);

  return await axiosInstance.get<Response<Task[]>>('tasks',{
    params: urlSearchParams
  });
}

export const programs = async ()=>{
  return await axiosInstance.get<Response<Program[]>>('programs')
}

export const taskDetail = async (id:number) => {
  return await axiosInstance.get<Response<Task>>(`tasks/${id}`);
}
