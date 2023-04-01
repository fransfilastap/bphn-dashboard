'use client'



import useQueryString from '@/hooks/useQueryString'
import React, { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function YearSelect () {

  const [createQueryString,] = useQueryString()
  const params = useSearchParams()

  const yearChangeHandler = (e:React.ChangeEvent<HTMLSelectElement>)=>{
    createQueryString(`year`,`${e.target.value}`)
  }

  const years = useMemo(()=>{
    const startYear = 2021
    const currentYear = new Date().getFullYear()
    const diff = currentYear - startYear;
    return Array.from({length: diff+1}, (_, index) => startYear + index);
  },[])

  return (
    <div className={'flex-nowrap'}>
      <select id="year"
              value={params.get('year')??0}
              onChange={yearChangeHandler}
              className="bg-gray-50 border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option key={0} value={0}>Filter Tahun</option>
        {years.map((v,k)=>(<option key={v} value={v}>{v}</option>))}
      </select>
    </div>
  )
}
