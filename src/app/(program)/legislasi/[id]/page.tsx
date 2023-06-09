import Breadcrumb from '@/app/breadcrumb'
import type { Metadata } from 'next'
import { tasks,taskDetail } from '@/repositories/legislasirepo'
import Container from '@/components/Container'
import Detail from '@/app/(program)/legislasi/[id]/detail'
import { notFound } from 'next/navigation'
import { AxiosError } from 'axios'
import Back from '@/app/back'
import { Suspense } from 'react'
import History, { LoadingSkeleton } from '@/app/(program)/legislasi/[id]/history'


export async function generateMetadata({
  params,
}:{params:{id:number}}): Promise<Metadata | undefined> {
  try{
    const task = await taskDetail(params.id);
    const {
      id,
      regulation,
    } = task.data.data;

    return {
      title: regulation.title,
      description: regulation.title,
      openGraph: {
        title: regulation.title,
        description: regulation.title,
        type: 'article',
        url: `http://localhost/legislasi/${id}`,
      },
      twitter: {
        card: 'summary_large_image',
        title: regulation.title,
        description: regulation.title,
      },
    };
  }
  catch (e) {
    return undefined;
  }
}

async function getData(id:number){
  try {
    const res =  await taskDetail(id);
    return res.data;
  }catch (e:unknown) {
    if(e instanceof AxiosError){
      if(e.status===404)
      {
        return undefined
      }
    }
  }
}

export default async function DetailPage({params}:{params:{id:number}}) {
  const {id} = params
  const task = await getData(params.id)

  if(!task) {
    notFound()
  }

  const {
    program,
    regulation,
    department,
    stage,
    performance_appearance
  } = task!.data

  const links = [{url:'/legislasi',label:'Perencanaan Hukum Nasional'},{url:`/legislasi/${id}`,label:task!.data.regulation.title}]

  return (
    <div>
        <Container>
          <Breadcrumb links={links}/>
        </Container>
        <section className={'bg-white border-t border-b border-b-gray-200 border-t-gray-200 p-2 lg:p-5'}>
          <Container className={'flex flex-col gap-2'}>
            <Back/>
              <p className={'py-2 px-3 max-w-max text-slate-800 font-[500] text-sm'}>{program.name}</p>
              <h3 className="text-xl lg:text-3xl font-[600] dark:text-white mb-10">{regulation.title}</h3>
              <div className={'grid grid-cols-1 lg:grid-cols-2 gap-2'}>
                <Detail department={department} regulation={regulation} program={program} stage={stage} performaceColor={performance_appearance}/>
                <Suspense fallback={<LoadingSkeleton/>}>
                  {/* @ts-expect-error Server Component */}
                  <History id={id}/>
                </Suspense>
              </div>
          </Container>
        </section>
    </div>
  )
}
