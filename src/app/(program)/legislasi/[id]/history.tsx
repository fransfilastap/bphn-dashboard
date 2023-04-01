import { RegulationHistory,Response } from '@/schema'
import axiosInstance from '@/repositories/legislasirepo'
import { AxiosError } from 'axios'
import moment from 'moment/moment'

async function getHistory (id:number) {
  try {
    const histories = await axiosInstance.get<Response<RegulationHistory[]>>(`tasks/${id}/history`);
    return histories.data;
  }catch (e:unknown) {
    if(e instanceof AxiosError){
      return undefined
    }
  }
}

export default async function History({id}:{id:number}){

  const histories = await getHistory(id);

  return (
    <div className={'border border-dashed border-gray-300 rounded-md p-6 flex flex-col gap-2 bg-gray-50'}>
      <h5 className="text-xl font-bold dark:text-white">Rekam Jejak</h5>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {histories!.data.map((e,i)=>(
          <li className="mb-10 ml-6" key={e.id}>
        <span
          className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor"
                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd"
                                                                              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                                              clipRule="evenodd"></path></svg>
        </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{e.stage.name} <span
                className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">Latest</span>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Diperbarui pada
              {` `+moment(e.updated_at).fromNow()}
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {e.program_name}
            </p>
          </li>
        ))}
      </ol>
    </div>
  )
}


export function LoadingSkeleton () {
  return (
    <div className={'border animate-pulse border-dashed border-gray-300 rounded-md p-6 flex flex-col gap-2 bg-gray-300'}>
      <h5 className="text-xl font-bold dark:text-white">Rekam Jejak</h5>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-6">
        <span
          className="absolute flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">

        </span>
            <div className="flex items-center mb-1 bg-gray-300"> <span
              className="rounded block bg-gray-300 w-9 h-4"></span>
            </div>
            <div className="rounded block bg-gray-100 w-12 h-4"></div>
            <div className="mb-4 rounded block bg-gray-300 w-9 h-4"></div>
          </li>
      </ol>
    </div>
  )
}
