import Container from '@/components/Container'
import Link, { LinkProps } from 'next/link'
import { FunctionComponent, PropsWithChildren } from 'react'
import Image from 'next/image'
import BoxIcon from '@/components/Box2var.png'

export default function Home() {
  return (
    <>
      <Container>
        <Masthead/>
        <Topics/>
      </Container>
    </>

  )
}

const Masthead = () => {
  return (
    <section
      className="relative w-full p-4 text-center bg-white border border-gray-200 rounded-lg sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h1 className="mb-4 text-3xl font-[700] text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span
        className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Demo App using</span> NextJS 13 appDir.</h1>
    </section>
  )
}

const Topics = ()=>{
  return (
    <section className={'flex flex-col gap-2 mt-10'}>
      <h5 className="text-xl font-bold dark:text-white">Katalog Data</h5>
      <div className={'grid grid-cols-1 lg:grid-cols-4'}>
        <TopicItem href={'/legislasi'} description={'Data terkait Penyusunan Peraturan perundang-undangan, progres, dan kinerja K/L Pemrakarsa'}>
          Perencanaan Hukum Nasional
        </TopicItem>
      </div>
    </section>
  )
}

interface TopicItemProps extends LinkProps, PropsWithChildren{
  description:string
}
const TopicItem:FunctionComponent<TopicItemProps> = ({ children,href,description }:TopicItemProps)=>{
  return (
    <Link href={href}
       className="group flex flex-row gap-2 items-center max-w-sm p-6 bg-white border border-gray-200 rounded-xl hover:shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className={'max-w-max max-h-max'}>
        <Image src={BoxIcon} alt={'box icon'} width={200} height={200} className={'group-hover:-translate-y-4 transition-transform ease-out duration-200'}/>
      </div>
      <div className={'flex flex-col w-full'}>
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{children}</h5>
        <p className="font-normal text-xs text-gray-700 dark:text-gray-400">{description}</p>
      </div>
    </Link>
  )
}
