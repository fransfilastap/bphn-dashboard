'use client'
import React, { useCallback } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Meta } from '@/schema'
import useQueryString from '@/hooks/useQueryString'

type PaginationProps = {
  data: Meta
}
export default function Pagination(props:PaginationProps){

  const {from,to,current_page,total} = props.data
  const [createQueryString] = useQueryString();

  const prevPageChangeHandler = (e:React.MouseEvent)=>{
    if(from === 1) return;
    createQueryString('page',`${current_page-1}`);
  }

  const nextPageChangeHandler =  (e:React.MouseEvent)=>{
    if(current_page === to) return;
    createQueryString('page',`${current_page+1}`);
  }

  return (
    <div className="flex flex-col items-center">
        <span className="text-sm text-gray-700 dark:text-gray-400">
      Showing <span className="font-semibold text-gray-900 dark:text-white">{from}</span> to <span
          className="font-semibold text-gray-900 dark:text-white">{to}</span> of <span
          className="font-semibold text-gray-900 dark:text-white">{total}</span> Entries
  </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          onClick={prevPageChangeHandler}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd"
                  d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"></path>
          </svg>
          Prev
        </button>
        <button
          onClick={nextPageChangeHandler}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          Next
          <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}
