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
  department?: number
  year?:number,
  page?:number
}
export const tasks = async (params?:TasksQueryParams):Promise<AxiosResponse> => {
  return await axiosInstance.get<Response<Task[]>>('tasks',{
    params: params
  });
}

export const programs = async ()=>{
  return await axiosInstance.get<Response<Program[]>>('programs')
}

export const taskDetail = async (id:number) => {
  return await axiosInstance.get<Response<Task>>(`tasks/${id}`);
}
