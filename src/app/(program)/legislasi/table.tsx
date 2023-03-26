import { ComponentPropsWithoutRef, FunctionComponent } from 'react'
import { Response,Task } from '@/schema'
import clsxm from '@/lib/clsxm'
import Indicator from '@/app/(program)/legislasi/indicator'
import Link from 'next/link'

export interface LegislationTableProps extends ComponentPropsWithoutRef<"table">{
  data: Response<Task[]>
}

const LegislationTable:FunctionComponent<LegislationTableProps> = ({ data, ...rest }:LegislationTableProps)=>{

  return (
    <>
      <div className="relative overflow-x-auto border border-gray-200 dark:border-slate-700 sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed">
          <caption className="p-5 text-2xl font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Daftar Penyusunan
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Lihat daftar progres dan rincian lain pada penyusunan peraturan perundang-undangan di Indonesia </p>
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 tracking-normal w-2/6">
              Judul Rancangan Peraturan
            </th>
            <th scope="col" className="px-6 py-3 tracking-normal w-1/6">
              Inisiatif
            </th>
            <th scope="col" className="px-6 py-3 tracking-normal w-1/6">
              Instansi Pemrakarsa
            </th>
            <th scope="col" className="px-6 py-3 tracking-normal w-1/6">
              Progres
            </th>
            <th scope="col" className="px-6 py-3 tracking-normal w-1/6">
              Penilaian Kinerja
            </th>
          </tr>
          </thead>
          <tbody>
          {data.data.map((e,i)=>(
            <tr key={e.id} className="group bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4">
                <div className={'flex flex-col gap-2'}>
                <span
                  className="bg-gray-100 max-w-max text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                {e.type}
              </span>
                  <Link href={`/legislasi/${e.id}`} className={clsxm('font-[500] hover:text-blue-500 text-sm leading-tight text-gray-900 break-words whitespace-normal cursor-pointer dark:text-white')}>{e.regulation.title}</Link>
                </div>
              </td>
              <td className="px-6 py-4">
                <span
                  className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">{e.regulation.initiative}</span>
              </td>
              <td className={'px-6 py-4'}>
                <p className={'text-sm font-[400]'}>{e.department.name}</p>
              </td>
              <td className="px-6 py-4">
                <p className={'text-xs font-[400]'}>{e.stage.name}</p>
              </td>
              <td className="px-6 py-4">
                <Indicator label={e.performance_statement} color={e.performance_appearance}/>
              </td>
            </tr>
          ))}

          </tbody>
        </table>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-sm text-gray-700 dark:text-gray-400">
      Showing <span className="font-semibold text-gray-900 dark:text-white">{data.meta.from}</span> to <span
          className="font-semibold text-gray-900 dark:text-white">{data.meta.to}</span> of <span
          className="font-semibold text-gray-900 dark:text-white">{data.meta.total}</span> Entries
  </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <Link
            href={ data.links.prev ? `/legislasi?page=${data.meta.current_page-1}` :`/legislasi?page=${data.meta.current_page}` }
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clipRule="evenodd"></path>
            </svg>
            Prev
          </Link>
          <Link
            href={data.links.next ? `/legislasi?page=${data.meta.current_page+1}` : `/legislasi?page=${data.meta.current_page}`}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            Next
            <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"></path>
            </svg>
          </Link>
        </div>
      </div>

    </>
  )
}

export default LegislationTable
