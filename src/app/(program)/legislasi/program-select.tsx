'use client'

import { Program } from '@/schema'
import React from 'react'
import useQueryString from '@/hooks/useQueryString'

export default function ProgramSelect ({programs}:{programs:Program[]}) {

  const [createQueryString] = useQueryString()

  const programChangeHandler = (e:React.ChangeEvent<HTMLSelectElement>)=>{
   createQueryString(`program`,`${e.target.value}`)
  }

  return (
    <div className={'flex-nowrap'}>
      <select id="programs"
              onChange={programChangeHandler}
              className="bg-gray-50 border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option defaultValue={0}>Filter Program</option>
        {programs.map((e: Program, i: number) => (
          <option key={e.id} value={e.id}>{e.name}</option>
        ))}
      </select>
    </div>
  )
}
