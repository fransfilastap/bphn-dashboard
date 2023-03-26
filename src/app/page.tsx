import Container from '@/components/Container'
import Link, { LinkProps } from 'next/link'
import { FunctionComponent, PropsWithChildren } from 'react'

export default function Home() {
  return (
      <Container>
        <Masthead/>
        <Topics/>
      </Container>
  )
}

const Masthead = () => {
  return (
    <section
      className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h1 className="mb-4 text-3xl font-[700] text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span
        className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Single Public Dashboard</span> BPHN.</h1>
      <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Stay up to date dengan data Penataan Peraturan Perundang-undangan, dan Program lainnya dari Badan Pembinaan Hukum Nasional.</p>
    </section>
  )
}

const Topics = ()=>{
  return (
    <section className={'flex flex-col gap-2 mt-10'}>
      <h5 className="text-xl font-bold dark:text-white">Topik Data</h5>
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
       className="block max-w-sm p-6 bg-white/30 border border-gray-200 rounded-lg hover:bg-green-100/30 backdrop-blur-2xl dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{children}</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{description}</p>
    </Link>
  )
}
