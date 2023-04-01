import Container from '@/components/Container'
import Logo from '@/app/logo'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='font-sans flex py-3 text-sm gap-1 flex-row items-center justify-center border-t dark:border-t-gray-800 bg-[#fafafa] dark:bg-[#111]'>
      <Container className='flex flex-col items-start justify-between gap-2'>
        <Logo />
        <div className='flex flex-row items-center justify-between w-full gap-2 lg:flex-row'>

          <p className='flex flex-col text-[0.9em] text-center lg:text-left'>
            Copyright &copy; {new Date().getFullYear()} fransfp.dev. All rights
            reserved{' '}
            <span className='text-gray-600'>
              Disclaimer: The data collected from testing server.
            </span>
          </p>
        </div>
      </Container>
    </footer>
  )
}
