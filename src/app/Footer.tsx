import Container from '@/components/Container'
import Logo from '@/app/logo'

export default function Footer() {
  return (
    <footer className='font-sans flex py-3 text-sm gap-1 flex-row items-center justify-center border-t dark:border-t-gray-800 bg-[#fafafa] dark:bg-[#111]'>
      <Container className='flex flex-col items-start justify-between gap-2'>
        <Logo />
        <div className='flex flex-row items-center justify-between w-full gap-2 lg:flex-row'>

          <p className='flex flex-col text-[0.9em] text-center lg:text-left'>
            Copyright &copy; {new Date().getFullYear()} BPHN.go.id. All rights
            reserved{' '}
            <span className='text-gray-600'>
              Developed and Maintained by Sub Bagian Rumah Tangga
            </span>
          </p>
        </div>
      </Container>
    </footer>
  )
}
