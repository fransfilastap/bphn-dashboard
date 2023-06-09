import LegislationTable from '@/app/(program)/legislasi/table'
import type { Metadata } from 'next'
import Breadcrumb from '@/app/breadcrumb'
import { programs, programTypes, tasks, TasksQueryParams } from '@/repositories/legislasirepo'
import Container from '@/components/Container'
import SearchBar from '@/app/(program)/legislasi/search-bar'
import { notFound } from 'next/navigation'
import { AxiosError } from 'axios'
import Pagination from '@/app/(program)/legislasi/pagination'
import { Suspense } from 'react'
import ProgramTypeSelect from '@/app/(program)/legislasi/program-type-select'
import YearSelect from '@/app/(program)/legislasi/year-select'
import ClearFilter from '@/app/clear-filter'


export const metadata:Metadata = {
  title: 'Dashboard Perencanaan Hukum Nasional',
  description: 'Data terkait Penyusunan Peraturan perundang-undangan, progres, dan kinerja K/L Pemrakarsa'
}

async function getData(params?:TasksQueryParams){

  try{
    const response = await tasks(params)
    return response
  }catch (e:unknown) {
    if(e instanceof AxiosError){
      if(e.status===404)
      {
        return undefined
      }
    }
  }
}

async function getPrograms(type?:number){

  try{
    const response = await programs(type)
    return response.data
  }catch (error) {
    if(error instanceof AxiosError){
      if(error.status===404)
      {
        return undefined
      }
    }
  }
}

async function getProgramTypes(){

  try{
    const response = await programTypes()
    return response.data
  }catch (error) {
    if(error instanceof AxiosError){
      if(error.status===404)
      {
        return undefined
      }
    }
  }
}

export default async function LegislationPage({
  searchParams,
}:{searchParams:TasksQueryParams}){

  const data = await getData(searchParams)
  const types = await getProgramTypes()
  if(!data){
    notFound()
  }

  return (
    <Container className={'flex flex-col gap-3'}>
      <Breadcrumb links={[{url:'/legislasi',label:'Perencanaan Hukum Nasional'}]}/>
      <div className={'flex flex-col lg:flex-row gap-2 justify-around bg-white/30 border border-gray-200 shadow backdrop-blur-sm rounded-md p-2 sticky top-[100px] z-10'}>
        <SearchBar />
        <ProgramTypeSelect types={types!.data}/>
        <YearSelect/>
      </div>
      <div className={'w-full'}>
        <ClearFilter/>
      </div>
      <Suspense fallback={<p>Updating...</p>}>
        <LegislationTable data={data.data}/>
        <Pagination data={data.data.meta} />
      </Suspense>
    </Container>
  )
}
