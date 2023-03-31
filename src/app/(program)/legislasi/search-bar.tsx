'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { debounce } from 'lodash'
import React, { useCallback, useEffect, useRef, useState } from 'react'

export default function SearchBar() {

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;
  const searchRef = useRef<HTMLInputElement|null>(null)


  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      if(params.has('page') && params.get('page') !== '1'){
        params.set('page','1');
      }

      return params.toString();
    },
    [searchParams],
  );


  const debounceSearch =  debounce(async (criteria:string) => {
    router.push(pathname+'?'+createQueryString('label',criteria))
  }, 300);

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    debounceSearch(e.target.value)
  }

  return (
    <div className="flex flex-1 items-center">
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
        <input onChange={handleChange} ref={searchRef} type="text" id="search"
               className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Cari judul rancangan peraturan..." required/>
      </div>
    </div>
  )
}
