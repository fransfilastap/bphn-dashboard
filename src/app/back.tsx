'use client'

import { useRouter } from 'next/navigation'

export default function Back(){
  const router = useRouter();
  const clickHandler = (e:React.MouseEvent)=>{
    router.back()
  }
  return (
    <button onClick={clickHandler} className={'max-w-max  inline-flex items-center group gap-2'}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="transition-all ease-in-out duration-200  w-6 h-6 group-hover:-translate-x-1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
      </svg>
      <span className={'group-hover:text-blue-500 text-sm font-[400]'}>Kembali</span>
    </button>
  )
}
