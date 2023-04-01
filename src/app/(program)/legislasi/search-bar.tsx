'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { debounce } from 'lodash'
import React, { useEffect, useRef, useState } from 'react'
import useQueryString from '@/hooks/useQueryString'

export default function SearchBar() {

  const params = useSearchParams()

  const [createQueryString,] = useQueryString({
    paginationReset: {
      query: 'page'
    }
  })
  const searchRef = useRef<HTMLFormElement|null>(null)

  const debounceSearch =  debounce(async (criteria:string) => {
    const cleanedCriteria = criteria.trim()
    createQueryString('label',cleanedCriteria)
  }, 300);

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    debounceSearch(e.target.value)
  }


  useEffect(()=>{
    if(!params.has('label')){
      searchRef.current?.reset()
    }
  },[params])


  return (
    <form ref={searchRef} className="flex flex-1 items-center">
      <label htmlFor="search" className="sr-only">Pencarian</label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
               viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"></path>
          </svg>
        </div>
        <input onChange={handleChange} type="text" id="search"
               className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Cari judul rancangan peraturan..." required/>
      </div>
    </form>
  )
}
