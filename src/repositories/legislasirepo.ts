import Axios, { AxiosResponse } from 'axios'
import { LEGISLATION_API, LEGISLATION_API_TOKEN } from '@/config/env'
import { Response, Task } from '@/schema'

const axiosInstance = Axios.create({
  baseURL: `${LEGISLATION_API}`,
  headers: {
    Authorization: `Bearer ${LEGISLATION_API_TOKEN}`,
    'Content-Type': 'application/json',
  },
});


interface  TasksQueryParams{
  type?: number
  department?: number
  year?:number
  page?:number|undefined
}
export const tasks = async (params?:TasksQueryParams):Promise<AxiosResponse> => {
  return await axiosInstance.get<Response<Task[]>>(`tasks?page`,{
    params
  })
}

export const taskDetail = async (id:number) => {
  return await axiosInstance.get<Response<Task>>(`tasks/${id}`);
}
