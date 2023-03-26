import LegislationTable from '@/app/(program)/legislasi/table'
import type { Metadata } from 'next'
import Breadcrumb from '@/app/breadcrumb'
import { tasks } from '@/repositories/legislasirepo'
import Container from '@/components/Container'


export const metadata:Metadata = {
  title: 'Dashboard Perencanaan Hukum Nasional',
  description: 'Data terkait Penyusunan Peraturan perundang-undangan, progres, dan kinerja K/L Pemrakarsa'
}

async function getData( props:{type?: number, department?: number, year?:number, page?:number|undefined}){
  return await tasks(props)
}

export default async function LegislationPage({
  searchParams,
}:{searchParams:{type?: number, department?: number, year?:number, page?:number|undefined}}){
  const {page,type,}= searchParams
  const data = await getData({page,type})

  return (
    <Container className={'flex flex-col gap-3'}>
      <Breadcrumb links={[{url:'/legislasi',label:'Perencanaan Hukum Nasional'}]}/>
      <LegislationTable data={data.data}/>
    </Container>
  )
}
