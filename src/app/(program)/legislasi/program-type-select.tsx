'use client'


import {  ProgramType } from '@/schema'
import useQueryString from '@/hooks/useQueryString'
import React, { useEffect } from 'react'
import { programTypes } from '@/repositories/legislasirepo'
import { useSearchParams } from 'next/navigation'

export default function ProgramTypeSelect ({types}:{types:ProgramType[]}) {

  const [createQueryString,] = useQueryString()
  const params = useSearchParams()

  const programTypeChangeHandler = (e:React.ChangeEvent<HTMLSelectElement>)=>{
    createQueryString(`type`,`${e.target.value}`)
  }

  return (
    <div className={'flex-nowrap'}>
      <select id="program-types"
              value={params.get('type')??0}
              onChange={programTypeChangeHandler}
              className="bg-gray-50 border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option key={0} value={0}>Filter Jenis</option>
        {types.map((e: ProgramType, i: number) => (
          <option key={e.id} value={`${e.id}`}>{e.desc}</option>
        ))}
      </select>
    </div>
  )
}
