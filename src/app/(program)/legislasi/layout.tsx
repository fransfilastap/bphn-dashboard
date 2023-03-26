import { ReactNode } from 'react'
import Container from '@/components/Container'


export const dynamic = 'force-dynamic';

export default function Layout({children}:{children:ReactNode}){
  return (
    <div className={'flex flex-col gap-3'}>
      {children}
    </div>
  )
}
