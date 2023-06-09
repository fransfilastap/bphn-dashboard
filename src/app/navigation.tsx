import Logo from '@/app/logo'
import Container from '@/components/Container'
import Link, { LinkProps } from 'next/link'
import { FunctionComponent, PropsWithChildren } from 'react'
import clsxm from '@/lib/clsxm'

export default function Navigation() {
  return (
    <header className={'header'}>
      <Container className={'w-full flex flex-col px-6 py-3'}>
        <div className={'flex flex-row justify-between '}>
          <Logo/>
          <nav className={'header-nav hidden lg:block'}>
            <ul>
              <li><NavLink href={'/'}>Home</NavLink></li>
              <li><NavLink href={'/about'}>About Us</NavLink></li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  )
}


type NavLinkProps = LinkProps & PropsWithChildren
const NavLink:FunctionComponent<NavLinkProps> = (props)=>{
  const {children, href,...rest} = props
  return (
    <Link className={clsxm('text-sm font-[400] text-slate-700 p-2 hover:bg-gray-200 rounded-md')} href={href}>
      {children}
    </Link>
  )
}
