'use client'

import useQueryString from '@/hooks/useQueryString'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

export default function ClearFilter() {

  const router = useRouter()
  const pathname = usePathname()
  const params = useSearchParams()

  return (
    <button onClick={()=>router.push(pathname)} className={`${params.toString().length > 0 ? 'inline-flex':'hidden'} bg-red-300 rounded-full px-2 py-1 max-w-max gap-2 items-center`}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
      <span className={'text-xs font-[600]'}>Clear filter</span>
    </button>
  )
}
