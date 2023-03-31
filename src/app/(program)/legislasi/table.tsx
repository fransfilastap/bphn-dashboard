

import React, { ComponentPropsWithoutRef, FunctionComponent } from 'react'
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
                  <Link href={`/legislasi/${e.id}`} className={clsxm('font-[600] hover:text-blue-500 text-sm leading-tight text-black break-words whitespace-normal cursor-pointer dark:text-white')}>{e.regulation.title}</Link>
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

    </>
  )
}

export default LegislationTable
