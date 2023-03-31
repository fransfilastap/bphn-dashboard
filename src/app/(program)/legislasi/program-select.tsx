'use client'

import { Program } from '@/schema'
import React, { useCallback } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function ProgramSelect ({programs}:{programs:Program[]}) {

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

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

  const programChangeHandler = (e:React.ChangeEvent<HTMLSelectElement>)=>{
    router.push(pathname+'?'+createQueryString(`filter[program_id]`,`${e.target.value}`))
  }

  return (
    <div className={'flex-nowrap'}>
      <select id="programs"
              onChange={programChangeHandler}
              className="bg-gray-50 border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option defaultValue={""}>Filter Program</option>
        {programs.map((e: Program, i: number) => (
          <option value={e.id}>{e.name}</option>
        ))}
      </select>
    </div>
  )
}
